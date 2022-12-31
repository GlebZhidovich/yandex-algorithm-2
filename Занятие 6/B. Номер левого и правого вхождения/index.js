'use strict';

const fs = require('fs');

function getIndex(nums, num) {
    let l = 0;
    let r = nums.length - 1;

    while (r > l) {
        const mid = Math.floor((r + l) / 2);
        const curNum = parseInt(nums[mid]);
        if (parseInt(num) > curNum) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return l;
}

function quiсkSearch(sequence) {
    const [n, numbers, k, searchNums] = sequence;
    const nums = numbers.split(' ');
    const result = [];
    searchNums.split(' ').forEach((n) => {
        const num = parseInt(n);
        const startIndex = getIndex(nums, num);
        const endIndex = getIndex(nums, num + 1);
        if (startIndex === endIndex && nums[startIndex] != num) {
            result.push(`${0} ${0}`);
        } else {
            const end = nums[endIndex] == num ? endIndex + 1 : endIndex;
            result.push(`${startIndex + 1} ${end}`);
        }
    });
    return result;
}

let fileContent = fs.readFileSync('input.txt', 'utf8');
const sequence = fileContent.toString().trim().split('\n');
const result = quiсkSearch(sequence);
fs.writeFileSync('output.txt', result.join('\n').toString());
