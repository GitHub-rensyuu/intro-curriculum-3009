'use strict';
const fs = require('fs');
const fileName = './test.txt';

function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}
async function main() {
  for (let count = 0; count < 500; count++) {
    await appendFilePromise(fileName, 'おはようございます\n');
    await appendFilePromise(fileName, 'こんにちは\n');
    await appendFilePromise(fileName, 'こんばんは\n');

  }
}

main();

// Promise を使った例
// function appendFilePromise(fileName, str) {
//   return new Promise((resolve) => {
//     fs.appendFile(fileName, str, 'utf8', () => resolve());
//   });
// }

// for (let count = 0; count < 30; count++) {
//   appendFilePromise(fileName, 'おはようございます\n')
//     .then(() => {
//       return appendFilePromise(fileName, 'こんにちは\n');
//     })
//     .then(() => {
//       return appendFilePromise(fileName, 'こんばんは\n');
//     });

// appendFileSync を使った例
// fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
// fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
// fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
// }


