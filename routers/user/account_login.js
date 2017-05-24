/**
 * 用户登录(路由和返回值)
 */

module.exports = function (router) {
    router.post('/account/login', function (req, res) {
        var account = req.body.account;
        var password = req.body.password;

        if (account == 'hefoni' && password == 'hefoni') return res.json({
            status: 200,
            data: {
                user: {
                    name: '黑弗尼',
                    age: 2
                }
            }
        });

        res.json({
            status: 201,
            message: '账户密码错误'
        })

    })

};
