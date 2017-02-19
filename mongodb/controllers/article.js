/**
 * Created by jk on 2017/2/19.
 */
const md5 = require('md5')
const md5Pre = require('../../config').md5Pre
const moment = require('moment')
const userMethod = require("../../utils/userDAO").userMethod
const message = require("../../utils/message")

exports.add = (req, file, res) => {
    console.log(req.body)
}

exports.thumbnail = (req, res) => {
    // console.log(req.file)
    res.send({
        code: 0
    })
}