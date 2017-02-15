let mongodb = require("./index");

/*
 * 用户注册
 * */

let Schema = mongodb.mongoose.Schema;

let registerSchema = new Schema({
  username: String,
  email: String,
  password: String,
  creat_date: String,
  update_date: String,
  is_delete: Number,
  timestamp: Number
});

let userModel = mongodb.mongoose.model("users", registerSchema);

exports.userList = userModel;