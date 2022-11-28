'use strict';

const fs = require('fs');

function checkBrackets(brackets) {
    if (brackets.length % 2 !== 0) {
        return 'NO';
    }
    const left = '(';
    const stack = [];
    for (let index = 0; index < brackets.length; index++) {
        const bracket = brackets[index];
        if (bracket === left) {
            stack.push(bracket);
        } else {
            if (stack.length === 0) {
                return 'NO';
            } else {
                stack.pop();
            }
        }
    }

    return stack.length ? 'NO' : 'YES';
}

let fileContent = fs.readFileSync('input.txt', 'utf8');

const sequence = fileContent.toString().trim().split('');

const result = checkBrackets(sequence);

fs.writeFileSync('output.txt', result.toString());

function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
        return false;
    }

    const openBrackets = [];
    const closeBrackets = [];
    const stuck = [];

    bracketsConfig.forEach((brackets) => {
        openBrackets.push(brackets[0]);
        closeBrackets.push(brackets[1]);
    });
    for (let i = 0; i < str.length; i++) {
        const bracket = str[i];
        const isClose = closeBrackets.includes(bracket);
        if (isClose) {
            if (stuck.length === 0) {
                return false;
            }
        } else {
            stuck.push(str[i]);
        }
    }

    return stuck.length === 0;
}
