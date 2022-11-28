'use strict';

const fs = require('fs');

function countMaxSum(nums) {
    let ans = nums[0],
        sum = 0;
    for (let index = 0; index < nums.length; index++) {
        const num = parseInt(nums[index]);
        sum += num;
        ans = Math.max(ans, sum);
        sum = Math.max(sum, 0);
    }

    return ans;
}

function getPrefixSum(sequence) {
    const nums = sequence[1].split(' ');
    const pSumMax = countMaxSum(nums);

    return pSumMax;
}

let fileContent = fs.readFileSync('input.txt', 'utf8');

const sequence = fileContent.toString().trim().split('\n');

const result = getPrefixSum(sequence);

fs.writeFileSync('output.txt', result.toString());
