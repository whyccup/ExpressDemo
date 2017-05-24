/**
 * 路由索引
 */

//引入express和路由
const express = require('express');
const router = express.Router();

//获取礼物
require('./get_gift')(router);
//添加礼物
require('./add_gift')(router);

// 导出对象用module.exports
// 导出多个方法和变量用exports
module.exports = router;
