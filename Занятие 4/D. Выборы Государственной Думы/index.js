const fs = require("fs");

function separateFractionalPart(num) {
  const [integer, fractional] = `${num}`.split(".");
  return [parseInt(integer), parseInt(fractional)];
}

function getStructure(sequence) {
  const votes = 450;
  const boxes = new Map();
  let sum = 0;
  sequence.forEach((str) => {
    const idx = str.lastIndexOf(" ");
    const name = str.slice(0, idx);
    const num = parseInt(str.slice(idx, str.length));
    sum += num;
    if (boxes.has(name)) {
      const prev = boxes.get(name);
      boxes.set(name, num + prev);
    } else {
      boxes.set(name, num);
    }
  });

  let result = "";
  const firstElectoralPrivate = sum / 450;
  let all = 0;
  boxes.forEach((num, name) => {
    const places = Math.floor(num / firstElectoralPrivate);
    console.log("🚀 ~ file: index.js ~ line 30 ~ boxes.forEach ~ places", places)
    all += places;
    result += `${name} ${places}\n`;
  });

  if (all < votes) {
    result = "";
    const dif = votes - all;
    const sorted = [...boxes.entries()].sort((a, b) => {
      const [integerA, fractionalA] = separateFractionalPart(
        (a[1] / firstElectoralPrivate).toFixed(1)
      );
      const [integerB, fractionalB] = separateFractionalPart(
        (b[1] / firstElectoralPrivate).toFixed(1)
      );
      if (fractionalA === fractionalB) {
        return integerB - integerA;
      }
      return fractionalB - fractionalA;
    });
    sorted.forEach(([name], index) => {
      const num = boxes.get(name);
      let places = Math.floor(num / firstElectoralPrivate);
      if (index < dif) {
        places += 1;
      }
      boxes.set(name, places);
    });
    boxes.forEach((num, name) => {
      result += `${name} ${num}\n`;
    });
  }
  return result;
}

let fileContent = fs.readFileSync("input.txt", "utf8");

const sequence = fileContent.toString().trim().split("\n");

const result = getStructure(sequence);

fs.writeFileSync("output.txt", result.toString());
