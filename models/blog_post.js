//引入mongoose
const mongoose = require('mongoose');

//mongoose中所有对象都时在schema中
var Schema = mongoose.Schema;

//新建一个模型原型
var BlogPost = new Schema({
    //表内项目
    //项目名称：数据类型
    title: String,
    body: String,
    //时间：{type类型：Number数字，default默认内容：当前时间戳}
    date: {type: Number, default: Date.now()}
});

// 将BlogPost模型原型导入mongoose.model(),利于接下来使用(必须操作)
// 第一个参数是模型名称，第二个是模型原型
mongoose.model('blog_post', BlogPost);