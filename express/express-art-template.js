
// express + art-template模板引擎
let express = require('express');
let app = express();

let persons = [{
  name: 'Kerwin',
  age: 24
}, {
  name: 'Bob',
  age: 23
}]

// 凡是以(art/html)结尾的文件，使用express-art-template将其整合到express中
app.engine('html', require('express-art-template'));

// render方法会默认在目录中的views文件夹进行查找
app.get('/404', (req, res) => {
  res.render('404.html', {
    title: '404'
  });
})

app.get('/', (req, res) => {
  res.render('index.html', {
    title: 'comments',
    persons
  })
})

// 如果希望修改默认路径为public
// app.set('views', '../public')

app.listen(3000, () => {
  console.log('running...')
})