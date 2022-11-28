const fs = require("fs");

function getAnalysis(sequence) {
  const countWords = new Map();
  sequence.forEach((element) => {
    if (countWords.has(element)) {
      const count = countWords.get(element);
      countWords.set(element, count + 1);
    } else {
      countWords.set(element, 1);
    }
  });

  let result = "";
  [...countWords.entries()]
    .sort(([valueA, countA], [valueB, countB]) => {
      if (countA > countB) {
        return -1;
      }
      if (countA < countB) {
        return 1;
      }
      if (countA === countB) {
        if (valueA > valueB) {
          return 1;
        }
        if (valueA < valueB) {
          return -1;
        }
      }

      return 0;
    })
    .forEach(([value]) => {
      result += `${value}\n`;
    });
  return result;
}

let fileContent = fs.readFileSync("input.txt", "utf8");

const sequence = fileContent.toString().trim().split(/\s+/);

const result = getAnalysis(sequence);

fs.writeFileSync("output.txt", result.toString());
