/**
 *添加礼物
 */
const addGift = require('../../models').addGift;

module.exports = function (router) {
    router.post('/gift/add', function (req,res) {
        var token = req.body.token;
        var name = req.body.name;
        var price = req.body.price;
        var buyUrl = req.body.buyUrl;
        var preview = req.body.preview;
        var message = req.body.message;
        if (token === 'whyccup') {
            addGift.create({
                name: name,
                price: price,
                buyUrl: buyUrl,
                preview: preview,
                message: message
            },function (err, doc) {
                //err参数使用
                if(err) console.error(err);
                //回调文档
                // console.log(doc);
            });
            res.json({
                status: 200,
                message: '礼物添加成功',
                isOk: '1'
            })
        } else {
            res.json({
                status: 201,
                message: '礼物添加失败'
            })
        }
    })
};