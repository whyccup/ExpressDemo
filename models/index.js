//model首先读取的文件，链接数据库，第一次运行的时候创建数据库
//引入
const mongoose = require('mongoose');
//链接手段
mongoose.connect('mongodb://localhost/myD');

//引入模型文档
require('./blog_post');
require('./add_gift_post');
//输出（注册）模型，为了后面创建基于模型的实例
exports.BlogPost = mongoose.model('blog_post');
exports.addGift = mongoose.model('add_gift_post');