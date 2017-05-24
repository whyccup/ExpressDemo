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
                    buyUrl: 'https://www.maccosmetics.com.cn/account/signin.tmpl',
                    preview: '这里是图片',
                    message: '这里是备注信息'
                }
            }
        });

        res.json({
            status: 201,
            message: '服务器不接受这样的请求'
        })
    })
};