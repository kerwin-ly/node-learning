let fs = require("fs");
let path = require("path");
let readline = require("readline");

// 1.写入文件(路径，写入内容，回调函数)
// fs.writeFile(path.join(__dirname, "./txt/demo1.txt"), "add content", error => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("success");
//   }
// });

// // 2.读取文件（路径，回调）
// fs.readFile("./txt/demo1.txt", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data.toString());
//   }
// });

// // 3.读取文件夹
// fs.readdir("./txt/", (error, data) => {
//   console.log(data); // 返回文件和文件夹的数组
// });

// 4.逐行读取文件
const fRead = fs.createReadStream("./txt/demo1.txt");
const fWrite = fs.createWriteStream("./txt/readline.txt");
enableWriteIndex = true;
const rl = readline.createInterface({
  input: fRead,
  output: fWrite, // 如果设置为null || undefined,则不写入文件
  terminal: true // 设置该参数，读取流中的数据
});

fRead.on("end", () => {
  console.log("end");
  enableWriteIndex = false;
});

rl.on("line", line => {
  if (enableWriteIndex) {
    console.log(line);
    fWrite.write(""); // 这里的写入，默认是写如读取的流中的数据
  }
});

rl.on("close", function() {
  console.log("readline close");
});
