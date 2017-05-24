/**
 *用户注册
 */
module.exports = function (router) {
    router.post('/account/register',function (req, res) {
        var account = req.body.account;
        var password = req.body.password;
        if (account == 'hefoni' && password == 'hefoni') return res.json({
            status: 200,
            data: {
                user: {
                    message: '注册成功',
                    isOk: '1'
                }
            }
        });

        res.json({
            status: 201,
            message: '注册失败'
        })
    })
};