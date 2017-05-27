/**
 * 路由索引
 */

//引入express和路由
const express = require('express');
//这个router参数是用来获取路由来源 www.a.com/.....(router)
const router = express.Router();

// 用户登录
require('./account_login')(router);
// 用户注册
require('./account_register')(router);
// 测试(测试代码)
require('./post_list')(router);

// 导出对象用module.exports
// 导出多个方法和变量用exports
module.exports = router;