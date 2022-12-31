'use strict';

const fs = require('fs');
const afterDot = 1000000;

function lBinSearch(l, r, check, params) {
    const [a, b, c, d] = params;
    const isGrow = a * afterDot ** 3 + b * afterDot ** 2 + c * afterDot + d > 0;

    while (l < r) {
        const m = Math.floor((l + r) / 2);

        if (check(m, params, isGrow)) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return l;
}

function checkCubicEquationRoot(num, nums, isGrow) {
    const x = num / afterDot;
    const [a, b, c, d] = nums;
    const result = a * x ** 3 + b * x ** 2 + c * x + d;
    return isGrow ? result >= 0 : result <= 0;
}

function quiсkSearch(sequence) {
    const r = 5000 * afterDot;
    const l = -r;
    const nums = sequence.split(' ').map((num) => parseInt(num));
    const result = lBinSearch(l, r, checkCubicEquationRoot, nums);

    return (result / afterDot).toFixed(6);
}

let fileContent = fs.readFileSync('cubroot.in', 'utf8');
const sequence = fileContent.toString().trim();
const result = quiсkSearch(sequence);
fs.writeFileSync('cubroot.out', result);
