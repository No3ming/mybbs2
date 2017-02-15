/**
 * Created by lidm on 17-1-16.
 */
const md5 = require('md5')
const md5Pre = require('../../config').md5Pre
const moment = require('moment')
const userMethod = require("../../utils/userDAO").userMethod;
const message = require("../../utils/message")
/* register */
exports.register = (req, res) =>  {
  let nameRxg = new RegExp('^[a-zA-Z][a-zA-Z0-9]{5,19}$')
  if (!req.body.password || !req.body.username) {
    return res.send({
      code: -1,
      data: message.genSuccessMsg('账号或密码不能为空')
    });
  }
  if (!nameRxg.test(req.body.username)) {
    return res.send({
      code: -1,
      data: message.genSuccessMsg('用户名格式不正确')
    });
  }
  if (!nameRxg.test(req.body.password)) {
    return res.send({
      code: -1,
      data: message.genSuccessMsg('密码格式不正确')
    });
  }
  userMethod.findByName(req.body.username, function (err, doc){
    if(!err){
      if(!doc){
        let newUser = {
          username: req.body.username,
          password: md5(req.body.password + md5Pre),
          creat_date: moment().format('YYYY-MM-DD HH:MM:SS'),
          update_date: moment().format('YYYY-MM-DD HH:MM:SS'),
          is_delete: 0,
          timestamp: moment().format('X')
        }
        userMethod.save(newUser, function (err){
          if(!err){
            res.send({
              code: 0,
              data: message.genSuccessMsg('注册成功')
            });
          }
        });
      }else{
        res.send({
          code: 3,
          data: message.genFailedMsg('此用户名已被占用！')
        });
      }
    } else {
      res.status = 500
      res.send({
        code: 3,
        seccuss: false,
        msg: err
      });
    }
  });
};

/* login */
exports.login = (req, res, next) => {
  let nameRxg = new RegExp('^[a-zA-Z][a-zA-Z0-9]{5,19}$')
  if (!req.body.password || !req.body.username) {
    return res.send({
      code: -1,
      data: message.genSuccessMsg('账号或密码不能为空')
    });
  }
  if (!nameRxg.test(req.body.username)) {
    return res.send({
      code: -1,
      data: message.genSuccessMsg('用户名格式不正确')
    });
  }
  if (!nameRxg.test(req.body.password)) {
    return res.send({
      code: -1,
      data: message.genSuccessMsg('密码格式不正确')
    });
  }
  userMethod.findByName(req.body.username, function (err, doc){
    if(!err){
      if(doc){
        if (md5(req.body.password + md5Pre) === doc.password) {
          req.session.sign = true;
          req.session.name = req.body.username;
          res.status = 200;
          res.send({
            code: 0,
            data: message.genSuccessMsg('注册成功')
          });
        } else {
          res.send({
            code: 1,
            data: message.genSuccessMsg('账号或密码错误')
          });
        }
      }else{
        res.status = 200;
        res.send({
          code: 2,
          data: message.genSuccessMsg('账号不存在')
        });
      }
    } else  {
      res.status = 500;
      res.send({
        code: 3,
        seccuss: false,
        msg: err
      });
    }
  });
}


/* update */
exports.upDataUser = function (req, res, next) {
  return { title: 'login' }
}

/* logout */
exports.logout = function (req, res, next) {
  // console.log(req.session.name)
  req.session.sign = false
  res.redirect('/welcome.html')
}