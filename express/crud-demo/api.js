
let fs = require('fs');

exports.getStudents = (successCallBack, errorCallBack) => {
  fs.readFile('./db.json', (error, data) => {
    if (error) {
      errorCallBack('读取文件失败');
    } else {
      successCallBack(JSON.parse(data));
    }
  })
}

exports.addStudent = (student, successCallBack, errorCallBack) => {
  fs.readFile('./db.json', (error, data) => {
    if (error) {
      errorCallBack('读取文件失败');
    } else {
      let students = JSON.parse(data);
      students.push({
        uid: students.length + 1,
        ...student
      });
      
      fs.writeFile('./db.json', JSON.stringify(students), (error) => {
        if (error) {
          errorCallBack('写入文件失败');
        } else {
          successCallBack('写入成功');
        }
      })
    }
  })
}