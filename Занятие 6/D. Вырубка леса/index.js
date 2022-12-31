'use strict';

const fs = require('fs');

function getDays(l, r, check, parmas) {
    while (r > l) {
        const mid = (BigInt(r) + BigInt(l)) / BigInt(2);

        if (check(mid, parmas)) {
            r = mid;
        } else {
            l = mid + BigInt(1);
        }
    }

    return l;
}

function checkDays(y, parmas) {
    const [a, k, b, m, x] = parmas;
    const amount = y * (a + b) - a * (y / k) - b * (y / m);
    return amount >= x;
}

function getDaysAmount(sequence) {
    const parmas = sequence.split(' ').map((num) => BigInt(num));
    const min = 0;
    const max = 10 ** 18;
    const result = getDays(min, max, checkDays, parmas);
    return result;
}

let fileContent = fs.readFileSync('input.txt', 'utf8');
const sequence = fileContent.toString().trim();
const result = getDaysAmount(sequence);
fs.writeFileSync('output.txt', result.toString());

// const parmas = '1 1000000000000000000 2 1000000000000000000 999999999999999999'
//     .split(' ')
//     .map((num) => BigInt(num));
// console.log('🚀 ~ file: index.js:40 ~ parmas', parmas);

// const y = BigInt(333333333333333400);
// console.log(checkDays(y, parmas));
