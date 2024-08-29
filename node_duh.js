// console.log('this is synchronus')
// setTimeout(function erm(){
//     console.log('this is synchronus')
// }, 2000)
// console.log('End of script')

// console.log('interval started')
// const intervalID = setInterval(() => {
//     console.log('Repeating Message...')
// }, 3000)
// setTimeout(() => {
//     clearInterval(intervalID)
//     console.log('interval ended')
// }, 10000)

// const { readFileSync } = require('fs');
// const path = require('path');

// const data = readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
// console.log(data);

// const fs = require('fs');
// const data = fs.readFileSync('data.txt', 'utf8');
// console.log('Synchronous file content:', data);
// setTimeout(() => {
//     console.log('Starting async operation...');
//         fs.readFile('asyncData.txt', 'utf8', (asyncData) => {
//         console.log('Asynchronous file content:', asyncData);
//     });
// }, 2000);
// console.log('Script complete');

console.log("Countdown initiated...");
const delayStart = (ms) => {
    const start = Date.now();
    while (Date.now() - start < ms) {
    }
};
delayStart(3000);
let count = 10;
const intervalId = setInterval(() => {
    console.log(count);
    count--;
    if (count < 0) {
        clearInterval(intervalId);
        setTimeout(() => {
            console.log("Liftoff!");
        }, 0);
    }
}, 1000);

