"use strict";

const fs = require("fs");

function getLicense(sequence) {
  const m = parseInt(sequence[0]);
  const wits = [];
  let index = 1;
  for (; index <= m; index++) {
    wits.push(new Set(sequence[index]));
  }
  index += 1;
  const nums = [];
  let maxWitCout = 0;
  for (; index < sequence.length; index++) {
    const num = sequence[index];
    const numSet = new Set(num);
    let witCnt = 0;
    for (const wit of wits) {
      const isFit = [...wit].every((sign) => numSet.has(sign));
      if (isFit) {
        witCnt += 1;
      }
    }
    nums.push([num, witCnt]);
    maxWitCout = Math.max(maxWitCout, witCnt);
  }

  const result = [];
  nums.forEach((arr) => {
    const [num, witCnt] = arr;
    if (witCnt === maxWitCout) {
      result.push(num);
    }
  });
  return result.join("\n");
}

let fileContent = fs.readFileSync("input.txt", "utf8");

const sequence = fileContent.toString().trim().split("\n");

const result = getLicense(sequence);

fs.writeFileSync("output.txt", result.toString());
