/**
 *获得礼物
 */
const addGift = require('../../models').addGift;

module.exports = function (router) {
    router.get('/gift/get', function (req, res) {
        var giftPwd = req.query.giftPwd;
        if (giftPwd === 'whyccup') return addGift.find({}, function (err, docs) {
            if(err) console.error(err);
            res.json({
                status: 200,
                data: {
                    gift: docs
                }
            });
        });
        res.json({
            status: 201,
            message: '服务器不接受这样的请求'
        })
    })
};