//npm init
//npm i express -s
//引入express
const express = require('express');
const app = express();


//引入cors中间件，为了解决跨域；
const cors = require('cors');
//使用cors
app.use(cors());
// 这是用来开启Pre-Flight
// app.options('*', cors());


//npm i body-parser -s
//引入参数解析器
const bodyParser = require('body-parser');
// 使用参数解析器----目的：解析请求头（只用一个）
// 解析application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// 解析application/json
// app.use(bodyParser.json());
// app.use(bodyParser.json({limit: '10000kb'}));

//express下node服务搭建
//app.use使用中间件
//app.use();

// 使用路由，使用的是index.js中导出的router, 同时使用了cors
// 用户登录注册
app.use(require('./routers/user'));
// 礼物相关
app.use(require('./routers/gift'));
// 抽奖相关
app.use(require('./routers/luck'));


//监听的端口
app.listen(3000, function () {
    console.log('监听在' + 3000);
});