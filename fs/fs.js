let fs = require('fs');

// 1.写入文件(路径，写入内容，回调函数)
fs.writeFile('./demo.txt', 'add content', (error) => {
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