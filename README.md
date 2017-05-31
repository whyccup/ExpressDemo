# ExpressDemo
study node.js + Express + body-parser + cors + Mongodb + Mongoose

# Node Web应用程序
> MEVN
> Mongoose Express Vue Node
- Express web框架
    - bodyParser 参数解析器
    - session 会话
    - cors 跨域
    - multer 文件解析
    - morgan 请求日志
- Mongoose `Node.js` 的 `Mongodb` 数据库中间件
- Vue


# 一个接口是如何诞生的

> 路由与执行代码
 - 创建路由 如/routers/user/index.js
 - 创建路由的执行代码 如/routers/user/account_login.js

> 链接数据库
 - 创建数据库链接 如/models/index.js
 - 创建模型 如/models/blog_post.js

> 给数据库添加内容与检索
 - 基于模型给数据库添加内容 如/test/a.js
 - 基于模型给数据库检索内容 如/test/b.js

> 将路由和数据库联系起来
 - 在数据中创建好数据 如/test/a.js
 - 在路由的执行代码中写入对于数据库的查询，并res返回doc 如/routers/user/post_list.js

> 非常简单的get接口就可以使用了


