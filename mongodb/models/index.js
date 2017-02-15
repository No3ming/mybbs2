/**
 * Created by Administrator on 2017/2/14.
 */
let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mybbs");

mongoose.connection.on('open', function () {
  console.log('-----------数据库连接成功！------------');
});

exports.mongoose = mongoose;