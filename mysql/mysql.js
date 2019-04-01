let mysql = require('mysql');

let connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '5881332',
  database: 'crud'
});

// 连接数据库
connection.connect();

// 添加学生
connection.query(`INSERT INTO students (name, age) VALUES ('kk', 22);`, (error, results, fields) => {
  if (error) throw error;
  console.log('success to add student kk');
})

// 编辑学生
connection.query(`UPDATE students SET name='tt', age=99 WHERE id=2`, (error, results, fields) => {
  if (error) throw error;
  console.log('success to update student name');
})

// 删除学生
connection.query(`DELETE FROM students WHERE name='kk'`, (error, results, fields) => {
  if (error) throw error;
  console.log('success to delete student kk');
})

// 查看所有学生
connection.query(`SELECT * FROM students;`, (error, results, fields) => {
  if (error) throw error;
  console.log(results)
});

// 关闭数据库
connection.end();
