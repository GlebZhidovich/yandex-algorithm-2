'use strict';

const fs = require('fs');

function binSearch(arr, check, params) {
    let l = 0,
        r = arr.length - 1;

    while (l < r) {
        const m = Math.floor((l + r) / 2);

        if (check(arr[m], params)) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return l;
}

function checkTime(m, s) {
    return s >= m;
}

function addOperatingTime(times, time) {
    const f = times[0];
    const l = times[times.length - 1];
    if (f < time) {
        times.unshift(time);
    } else if (l > time) {
        times.push(time);
    } else {
        const index = binSearch(times, checkTime, time);
        times.splice(index, 0, time);
    }
}

function getNumberOfDevices(sequence) {
    const [n, ...times] = sequence.split('\n');
    let amount = 0;
    let busy = [];
    const sortedTimes = times
        .map((l) => l.split(' ').map((n) => parseInt(n)))
        .sort((a, b) => {
            return a[0] - b[0];
        });
    for (let index = 0; index < parseInt(n); index++) {
        const [time, hours] = sortedTimes[index];
        const nextTime = time + hours;

        if (busy.length) {
            const t = busy[busy.length - 1];
            if (t <= time) {
                busy.pop();
                addOperatingTime(busy, nextTime);
            } else {
                amount += 1;
                addOperatingTime(busy, nextTime);
            }
        } else {
            amount += 1;
            busy.push(nextTime);
        }
    }

    return amount;
}

let fileContent = fs.readFileSync('input.txt', 'utf8');
const sequence = fileContent.toString().trim();
const result = getNumberOfDevices(sequence);
fs.writeFileSync('output.txt', result.toString());

// let busy = [10, 8, 5, 2];

// [11, 1, 3, 4, 7].forEach((n) => addOperatingTime(busy, n));
// // 4, 7
// console.log('🚀 ~ file: index.js:71 ~ busy', busy);
