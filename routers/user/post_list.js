/**
 * 文章查询
 */

//为了根据模型进行查找，必须先引入models文件下的index.js中已经注册好的模型
const BlogPost = require('../../models').BlogPost;

//根据路由，输出一个只能在设定好的路由才使用的方法
//router是获取到的请求来源
module.exports = function (router) {
    //相当于判断请求是否是来自规定的地址，是就进行这里的代码
    router.get('/post/list', function (req, res) {
        //根据模型进行全部查找（对数据库的操作）
        BlogPost.find({}, function (err, docs) {
            //响应请求返回数据
            res.json({
                status: 200,
                data: {
                    post: docs
                }
            })

        });

    })

};
