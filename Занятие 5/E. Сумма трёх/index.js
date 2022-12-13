'use strict';
const fs = require('fs');

function getMapData(str) {
    const nums = new Map();
    const [_, ...rest] = str.split(' ');

    rest.forEach((val, i) => {
        if (nums.has(val)) {
            return;
        }
        nums.set(val, i);
    });
    return nums;
}

function getSumOfThree(brackets) {
    const [s, ...rest] = brackets;
    const sum = parseInt(s);
    const [a, b, c] = rest.map(getMapData);

    for (const [key, i] of a) {
        const number = parseInt(key);
        for (const [val, j] of b) {
            const num = parseInt(val);
            const remains = sum - number - num;
            if (c.has(`${remains}`)) {
                const k = c.get(`${remains}`);
                return `${i} ${j} ${k}`;
            }
        }
    }
    return -1;
}

let fileContent = fs.readFileSync('threesum.in', 'utf8');

const sequence = fileContent.toString().trim().split('\n');

const result = getSumOfThree(sequence);

fs.writeFileSync('threesum.out', result.toString());
