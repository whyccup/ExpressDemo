/**
 * 路由索引
 */

//引入express和路由
const express = require('express');
const router = express.Router();

// 用户登录
require('./account_login')(router);
// 用户注册
require('./account_register')(router);

// 导出对象用module.exports
// 导出多个方法和变量用exports
module.exports = router;