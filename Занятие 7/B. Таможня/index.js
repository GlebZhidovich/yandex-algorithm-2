'use strict';

const fs = require('fs');

function getNumberOfDevices(sequence) {
    const [n, ...times] = sequence.split('\n');
    let amount = 0;
    let available = 0;
    const busy = [];
    const sortedTimes = times
        .map((l) => l.split(' ').map((n) => parseInt(n)))
        .sort((a, b) => {
            return a[0] - b[0];
        });
    // bin search
    for (let index = 0; index < parseInt(n); index++) {
        const [time, hours] = sortedTimes[index];

        
    }


    return amount;
}

let fileContent = fs.readFileSync('input.txt', 'utf8');
const sequence = fileContent.toString().trim();
const result = getNumberOfDevices(sequence);
fs.writeFileSync('output.txt', result.toString());
