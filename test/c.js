const addGift = require('../models').addGift;

addGift.create({
    name: 'MAC高光',
    price: '360元',
    buyUrl: 'https://www.maccosmetics.com.cn/account/signin.tmpl',
    preview: '这里是图片',
    message: '蛤'
},function (err, doc) {
    //err参数使用
    if(err) console.error(err);
    //回调文档
    console.dir(doc);
})