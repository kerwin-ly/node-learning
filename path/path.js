let path = require('path');

console.log(path.basename('/usr/index.js')); // 返回index.html
console.log(path.basename('/usr/index.js', '.js')); // 返回index
console.log(path.dirname('/usr/local/index.js')); // 返回/usr/local
console.log(path.extname('/usr/local/index.js')); // 返回.js
console.log(path.join('/usr/local/', 'index.js')) // 返回/usr/local/index.js