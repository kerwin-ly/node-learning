let express = require('express');
let bodyParser = require('body-parser');
let artTemplate = require('express-art-template');
let fs = require('fs');

let app = express();

// 配置express-art-template
app.engine('html', artTemplate);

// 配置body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 逻辑处理
app.get('/', (req, res) => {
  fs.readFile('./db.json', (error, data) => {
    if (error) {
      res.redirect('/404'); // 重定向到404页面
      // return res.status(500).send('Server Error');
    } else {
      res.render('index.html', {
        students: JSON.parse(data).students
      });
    }
  })
})

app.get('/404', (req, res) => {
  res.render('404.html');
})

app.listen(3000, () => {
  console.log('start server...');
})