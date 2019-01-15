let express = require('express');
let fs = require('fs');
let api = require('./api');

// 声明路由容器
let router = express.Router();

// 挂载路由
router.get('/', (req, res) => {
  fs.readFile('./db.json', (error, data) => {
    if (error) {
      res.redirect('/404'); // 重定向到404页面
      // return res.status(500).send('Server Error');
    } else {
      res.render('index.html', {
        students: JSON.parse(data)
      });
    }
  })
})

router.get('/students/add', (req, res) => {
  res.render('addStudent.html');
})

router.post('/students/add', (req, res) => {
  api.addStudent(req.body, (data) => {
    console.log(data);
  }, (error) => {
    console.log(error);
  });
})

router.get('/404', (req, res) => {
  res.render('404.html');
})

module.exports = router;