let express = require('express');
let fs = require('fs');
let api = require('./api');

// 声明路由容器
let router = express.Router();

// 挂载路由
router.get('/', (req, res) => {
  api.getStudents((data) => {
    res.render('index.html', {
      students: data
    });
  }, () => {
    res.redirect('/404'); // 重定向到404页面
  });
})

router.get('/students/add', (req, res) => {
  res.render('addStudent.html');
})

router.post('/students/add', (req, res) => {
  api.addStudent(req.body, (data) => {
    // console.log(data);
    res.redirect('/');
  }, (error) => {
    console.log(error);
  });
})

router.get('/404', (req, res) => {
  res.render('404.html');
})

module.exports = router;
