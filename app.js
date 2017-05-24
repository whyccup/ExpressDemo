//npm init
//npm i express -s
//引入express
const express = require('express');
const app = express();

//npm i body-parser -s
//引入参数解析器
const bodyParser = require('body-parser');

// 使用参数解析器----目的：解析请求头（只用一个）
// 解析application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// 解析application/json
// app.use(bodyParser.json());

//express下node服务搭建
//获取与返回
//'/'这就是一个简单路由
// app.use使用中间件
//app.use();

// 使用路由
// 用户登录注册
app.use(require('./routers/user'));
// 礼物相关
app.use(require('./routers/gift'));


//监听的端口
app.listen(3000, function () {
    console.log('监听在' + 3000);
});