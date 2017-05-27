const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var addGift = new Schema({
    name: String,
    price: String,
    buyUrl: String,
    preview: String,
    message: String,
    token: String,
    date: {type: Number, default: Date.now()}
});


mongoose.model('add_gift_post', addGift);