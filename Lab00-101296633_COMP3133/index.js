/*
 __          __       _     ___  __ 
 \ \        / /      | |   / _ \/_ |
  \ \  /\  / /__  ___| | _| | | || |
   \ \/  \/ / _ \/ _ \ |/ / | | || |
    \  /\  /  __/  __/   <| |_| || |
     \/  \/ \___|\___|_|\_\\___/ |_|
*/

console.log('Week01 - Node.js Buffers, interation, TypedArrays, and character encodings');

//Useful to confirm directory structure, file names & path
console.log(__dirname);
console.log(__filename);
console.log(process.cwd());

//Displays all enviromental variables in our directory
//console.log(process.env);
//console.log(process)

//Creating the buffer 10 bytes 
var buf = new Buffer(10)          //Technique 1
// var buf = Buffer.alloc(10)     //Technique 2

console.log(buf)
buf = Buffer.from("Hello World")
console.log(buf)
console.log(buf.toString())
console.log(buf[0])
console.log(buf[1])
console.log(buf[7])
buf[7] = 0x66
console.log(buf.length)

const str = '💀😈';
var buf1 = Buffer.from(str)
console.log(buf1.length)
console.log(buf1[0])
console.log(buf1[1])
console.log(buf1.toString())
console.log(buf1.toString('hex'))
console.log(buf1.toJSON())

var buf2 = Buffer.alloc(5, 10)
console.log(buf2)