let mysql = require('mysql');

let connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'crud'
});

// 连接数据库
connection.connect();

// 执行数据库操作(SELECT, INSERT...)
connection.query('SELECT * FROM `users`', (error, results, fields) => {
  if (error) throw error;
  console.log(results[0].solution)
});

// 关闭数据库
connection.end();
