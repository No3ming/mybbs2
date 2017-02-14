var mongodb = require("./index");

/*
 * 用户注册
 * */

var Schema = mongodb.mongoose.Schema;

var registerSchema = new Schema({
  username: {type: String},
  password: {type: String},
  createTime: {type: Date, default: Date.new}
});

var userModel = mongodb.mongoose.model("bbsUser", registerSchema);

exports.userList = userModel;