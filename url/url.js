let url = require('url');

// 将路径转换为一个对象，第二个参数为true，表示将query转换为一个对象
let parseObj = url.parse('/get/suppliers?data=supplier&&page=1', true);

// 获取纯路径，不包含后面的参数
let pathName = parseObj.pathname;

// 获取参数对象 
let query = parseObj.query;
console.log(parseObj, query, pathName)