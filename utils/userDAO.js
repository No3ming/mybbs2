/**
 * Created by Administrator on 2017/2/14.
 */
let userModel = require("../mongodb/models/user").userList;

let userDAO = function (){};

userDAO.prototype = {
  //增
  save: function (json, callBack){
    let newUser = new userModel(json);

    newUser.save(function (err){
      callBack(err);
    });
  },
  //删
  remove: function (json, callBack){
    userModel.remove(json, function (err){
      callBack(err);
    });
  },
  //改
  update: function (json, condition, callBack){
    userModel.update(json, condition, function (err){
      callBack(err);
    });
  },
  //查
  findByName: function (name, callBack){
    userModel.findOne({username: name}, function (err, doc){
      callBack(err, doc);
    });
  }
};

exports.userMethod = new userDAO();