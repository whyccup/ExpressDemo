/**
 *获得礼物
 */
module.exports = function (router) {
    router.get('/gift/get', function (req, res) {
        var giftItem = req.query.giftItem;
        var giftPwd = req.query.giftPwd;
        if (giftItem == 1 && giftPwd == 'whyccup') return res.json({
            status: 200,
            data: {
                gift: {
                    name: 'MAC高光',
                    price: '360元',
                    buyUrl: 'https://www.maccosmetics.com.cn/account/signin.tmpl'
                }
            }
        });

        res.json({
            status: 201,
            message: '服务器不接受这样的参数'
        })
    })
};