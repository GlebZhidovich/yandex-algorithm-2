'use strict';

const fs = require('fs');

function getIndex(nums, num) {
    let l = 0;
    let r = nums.length - 1;

    while (r > l) {
        const mid = Math.floor((r + l) / 2);
        const curNum = parseInt(nums[mid]);
        if (num > curNum) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return l;
}

function quiсkSearch(sequence) {
    const [n, nums, k, ...ranges] = sequence;
    const sorted = nums.split(' ').sort((a, b) => a - b);
    fs.writeFileSync('nums.txt', sorted.join(' '));
    const l = parseInt(sorted[0]);
    const r = parseInt(sorted[sorted.length - 1]);
    const result = [];
    ranges.forEach((range) => {
        const ran = range.split(' ');
        const s = parseInt(ran[0]);
        const e = parseInt(ran[1]);
        let lIndex = 0;
        let rIndex = sorted.length - 1;
        ''.toLowerCase
        if (l >= s && r <= e) {
            result.push(sorted.length);
            return;
        }

        if (!(l >= s)) {
            lIndex = getIndex(sorted, s);
        }
        if (!(r <= e)) {
            rIndex = getIndex(sorted, e + 1);
        }

        const num = parseInt(sorted[rIndex]);

        if (rIndex == lIndex) {
            result.push(num === s ? 1 : 0);
        } else {
            const endNum = num <= e ? 1 : 0;
            result.push(rIndex - lIndex + endNum);
        }
    });
    return result;
}

let fileContent = fs.readFileSync('input.txt', 'utf8');
const sequence = fileContent.toString().trim().split('\n');
const result = quiсkSearch(sequence);
fs.writeFileSync('output.txt', result.join(' ').toString());

// const nums = '10 1 10 3 4 12'.split(' ').sort((a, b) => a - b);
// console.log('🚀 ~ file: index.js:43 ~ nums', nums);
// const start = 3;
// const end = 4;
// const startIndex = getIndex(nums, start);
// const endIndex = getIndex(nums, end + 1);
// console.log('🚀 ~ file: index.js:76 ~ startIndex', startIndex);
// console.log('🚀 ~ file: index.js:78 ~ endIndex', endIndex);
// console.log('result: ', endIndex - startIndex);
