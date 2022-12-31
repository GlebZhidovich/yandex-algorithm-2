'use strict';

const fs = require('fs');

function bynarySearch(l, r, check, ...parmas) {
    while (r > l) {
        const mid = Math.floor((r + l) / 2);

        if (check(mid, ...parmas)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l;
}

function getCoverAmount(l, nums) {
    let cnt = 0;
    let maxRight = nums[0] - 1;
    for (const num of nums) {
        if (num > maxRight) {
            cnt++;
            maxRight = num + l;
        }
    }

    return cnt;
}

function checkAmount(l, nums, k) {
    const amount = getCoverAmount(l, nums);
    return amount <= k;
}

function coverSegments(params) {
    const [first, second] = params;
    const [_, k] = first.split(' ');
    const nums = second
        .split(' ')
        .map((n) => parseInt(n))
        .sort((a, b) => a - b);
    const l = 0;
    const f = nums[0];
    const last = nums[nums.length - 1];
    const r = last - f;

    const amount = bynarySearch(l, r, checkAmount, nums, parseInt(k));
    return amount;
}

let fileContent = fs.readFileSync('input.txt', 'utf8');
const sequence = fileContent.toString().trim().split('\n');
const result = coverSegments(sequence);
fs.writeFileSync('output.txt', result.toString());
