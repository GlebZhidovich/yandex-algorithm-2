const fs = require("fs");

function getForumResult(sequence) {
  const m = parseInt(sequence[0]);
  const reply = new Array(m).fill(0);
  const topics = new Array(m).fill("");
  let mesIdx = 0;
  for (let index = 1; index < sequence.length; ) {
    const num = parseInt(sequence[index]);
    if (num == 0) {
      reply[mesIdx] = mesIdx;
      topics[mesIdx] = sequence[index + 1];
      index += 3;
    } else {
      reply[mesIdx] = reply[num - 1];
      index += 2;
    }
    mesIdx += 1;
  }
  const count = {};

  reply.forEach((index) => {
    const topic = topics[index];
    if (count[topic]) {
      count[topic] += 1;
    } else {
      count[topic] = 1;
    }
  });

  const res = Object.keys(count).reduce((acc, topic) => {
    if (count[acc] < count[topic]) {
      acc = topic;
    }
    return acc;
  });
  return res;
}

let fileContent = fs.readFileSync("input.txt", "utf8");

const sequence = fileContent.toString().trim().split("\n");

const result = getForumResult(sequence);

fs.writeFileSync("output.txt", result.toString());
