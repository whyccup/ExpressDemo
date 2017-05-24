/**
 *添加礼物
 */
module.exports = function (router) {
    router.post('/gift/add', function (req,res) {
        var token = req.body.token;
        var name = req.body.name;
        var price = req.body.price;
        var buyUrl = req.body.buyUrl;
        var preview = req.body.preview;
        var message = req.body.message;
        if (token == 'whyccup') return res.json({
            status: 200,
            data: {
                gift: {
                    message: '礼物添加成功',
                    isOk: '1'
                }
            }
        })

        res.json({
            status: 201,
            message: '礼物添加失败'
        })
    })
}