let fs = require('fs');
let path = require('path');

// 1.写入文件(路径，写入内容，回调函数)
fs.writeFile(path.join(__dirname, './demo.txt'), 'add content', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('success');
  }
})

// 2.读取文件（路径，回调）
fs.readFile('./demo.txt', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data.toString());
  }
})

// 3.读取文件夹
fs.readdir('./demo/', (error, data) => {
  console.log(data); // 返回文件和文件夹的数组
})