//这个文件用于把具体内容写入模型中
//以下都是对于数据库的操作
//引入models文件下的index.js中已经注册好的模型
const BlogPost = require('../models').BlogPost;

//创建基于模型的实例，并保存在数据库
BlogPost.create({
    title: '我是一个文字',
    body: '我是内容'
}, function (err, doc) {
    //err参数使用
    if(err) console.error(err);
    //回调文档
    console.dir(doc);
});