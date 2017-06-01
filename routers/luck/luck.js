/**
 * 判断用户是否获奖
 */
module.exports = function (router) {
    router.post('/luck/get',function (req, res) {
        var password = req.body.password;
        if (password === 'whyccup') {
            var lucknum = parseInt(100 * Math.random())
            if (lucknum <= 5) {
                res.json({
                    status: 200,
                    data: {
                        message: '你中奖了',
                        luck: 'true'
                    }
                })
            } else {
                res.json({
                    status: 200,
                    data: {
                            message: '哈哈哈哈你没有中奖',
                            luck: 'false'
                    }
                })
            }

        } else {
            res.json({
                status: 201,
                message: '服务器出差了'
            })
        }
    })
};