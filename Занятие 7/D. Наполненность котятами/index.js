'use strict';

const fs = require('fs');

function binSearch(arr, n) {
    let l = 0,
        r = arr.length - 1;
    while (r > l) {
        const m = Math.floor((l + r) / 2);
        const num = arr[m];
        if (num >= n) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return l;
}

function getCats(sequence) {
    const data = sequence.split('\n');
    const [info, catsStr, ...lines] = data;

    const cats = catsStr.split(' ').map((n) => parseInt(n));

    cats.sort((a, b) => a - b);

    const result = lines.map((line) => {
        const [l, r] = line.split(' ').map((n) => parseInt(n));
        let lIndex = binSearch(cats, l);
        lIndex =
            lIndex === cats.length - 1 && cats[lIndex] < r
                ? lIndex + 1
                : lIndex;
        let rIndex = binSearch(cats, r + 1);
        rIndex =
            rIndex === cats.length - 1 && cats[rIndex] <= r
                ? rIndex + 1
                : rIndex;
        const res = rIndex - lIndex;
        return res;
    });

    return result.join(' ');
}

let fileContent = fs.readFileSync('input.txt', 'utf8');
const sequence = fileContent.toString().trim();
const result = getCats(sequence);
fs.writeFileSync('output.txt', result.toString());
