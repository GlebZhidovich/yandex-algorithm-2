"use strict";

const fs = require("fs");

function makePrefixSum(nums) {
  const sum = new Array(nums.length + 1).fill(0);

  for (let index = 1; index < sum.length; index++) {
    sum[index] = sum[index - 1] + parseInt(nums[index - 1]);
  }

  return sum;
}

function rsq(pSum, l, r) {
  return pSum[r] - pSum[l];
}

function getPrefixSum(sequence) {
  const result = [];
  const nums = sequence[1].split(" ");
  const pSum = makePrefixSum(nums);

  for (let index = 2; index < sequence.length; index++) {
    const [l, r] = sequence[index].split(" ");
    const left = parseInt(l);
    const right = parseInt(r);
    if (left == right) {
      result.push(nums[left - 1]);
    } else {
      const res = rsq(pSum, left - 1, right);
      result.push(res);
    }
  }
  return result.join("\n");
}

let fileContent = fs.readFileSync("input.txt", "utf8");

const sequence = fileContent.toString().trim().split("\n");

const result = getPrefixSum(sequence);

fs.writeFileSync("output.txt", result.toString());
