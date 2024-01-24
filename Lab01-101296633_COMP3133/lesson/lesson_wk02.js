/*
 __          __       _     ___ ___  
 \ \        / /      | |   / _ \__ \ 
  \ \  /\  / /__  ___| | _| | | | ) |
   \ \/  \/ / _ \/ _ \ |/ / | | |/ / 
    \  /\  /  __/  __/   <| |_| / /_ 
     \/  \/ \___|\___|_|\_\\___/____|

*/
console.log('Week02 - FS and Streams Examples');
const fs = require('fs');
const path = require('path');

//Reading a File (async so no idea what gets outputted first)
fs.readFile('lesson/test.txt', 'utf8', (err, data) => {
    if (err) throw err;

    console.log(data);
})
console.log('** End of readFile **');

//Read a file Synchronously = AKA When actions are queued and are completed one after another
const data = fs.readFileSync('lesson/test.txt', 'utf8');
console.log(data);
console.log('** End of ReadFileSync **');

//Write File (async)
const filePath = path.join(__dirname, 'test2.txt');
const test2_data = 'Harry Potter Chapter 3 TBC';
fs.writeFile(filePath, test2_data, (err) => {
    if (err) throw err;
    console.log('File written successfully');
})
console.log('** After writeFile');

//Write File (synchronously)
const test3_data = 'Harry Potter Chapter 4 TBC';
const filePath2 = path.join(__dirname, 'test3.txt');

fs.writeFileSync(filePath2, test3_data, 'utf8');
console.log('** End of writeFileSync');





