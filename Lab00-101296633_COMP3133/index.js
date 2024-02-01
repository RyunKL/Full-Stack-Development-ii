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

console.log("So What exactly is a Buffer?")
/*
Simply put, a Buffer is a way to store and manipulate binary data in Node.js. 
Binary data refers to data that consists of binary values, as opposed to text data, which consists of characters and symbols. Examples of binary data include images, audio and video files, and raw data from a network.
*/

//Creating the buffer 10 bytes 
var buf = new Buffer(10)          //Technique 1
// var buf = Buffer.alloc(10)     //Technique 2

console.log(buf)
buf = Buffer.from("A Hello")   // Note this is output "hello world in an array of bytes"
console.log(buf)
console.log(buf.toString())
console.log(buf[0])
console.log(buf[1])
console.log(buf[6])
console.log(buf[7]) // Undefined due to the index only being from 0 - 6 for "A Hello"
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

for(a of buf1.entries()) {
     console.log(a)
}

var buf2 = Buffer.alloc(5, 10)
console.log(buf2)

buf2 = Buffer.alloc(5, 'B', 'ascii')
console.log(buf2.toString())
buf2[1] = 65
console.log(buf2.toString())

var buf3 = Buffer.alloc(10)
buf3.write('Hello World')
console.log(buf3.toString())
console.log(buf3.length)

var a = Buffer.from('abc')
var b = Buffer.from('abc')
var c = Buffer.compare(a,b)   //ascii comparison for similar string = 0
console.log(c)

//Check if a buffer contains a value
var d = concateBuffer.includes('ab')
console.log(d)

//Copy a value
var a = Buffer.from('abcdef')
var b = Buffer.from('ttt')
a.copy(b)                     //Note the copied values from var a will only be 3 char long due to size of var b
console.log(a.toString())
console.log(b.toString())
