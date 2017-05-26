//这个文件是利用模型进行查找
//以下都是对于数据库的操作
//引入models文件下的index.js中已经注册好的模型
const BlogPost = require('../models').BlogPost;

//在数据库中以模型进行全部查找
BlogPost.find({}, function (err, docs) {
    console.log(docs);
});