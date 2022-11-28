const fs = require("fs");

function getStructure(sequence) {
  const boxes = new Map();
  for (let index = 1; index < sequence.length; index++) {
    const element = sequence[index];
    const [d, a] = element.split(" ");
    const cur = BigInt(a);
    if (boxes.has(d)) {
      const prev = boxes.get(d);
      boxes.set(d, cur + prev);
    } else {
      boxes.set(d, cur);
    }
  }

  let result = "";

  [...boxes.entries()]
    .sort(([a], [b]) => a - b)
    .forEach((arr) => {
      result += `${arr.join(" ")}\n`;
    });
  return result;
}

let fileContent = fs.readFileSync("input.txt", "utf8");

const sequence = fileContent.toString().trim().split("\n");

const result = getStructure(sequence);

fs.writeFileSync("output.txt", result.toString());
