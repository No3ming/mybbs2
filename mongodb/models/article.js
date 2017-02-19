/**
 * Created by jk on 2017/2/19.
 */
let mongodb = require("./index");

/*
 * 用户注册
 * */

let Schema = mongodb.mongoose.Schema;

let articleSchema = new Schema({
    username: String,
    email: String,
    password: String,
    creat_date: String,
    update_date: String,
    is_delete: Number,
    timestamp: Number
});

let articleModel = mongodb.mongoose.model("article", articleSchema);

exports.articleList = articleModel;