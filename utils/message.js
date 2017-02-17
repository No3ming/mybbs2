exports.genMsg = (code, success, msg, data = [], meta = {}) => {
  let message = {
    code: code,
    success: success,
    msg: msg,
    data: data,
    meta: meta
  }
  return message;
}
exports.genSuccessMsg = (code, msg, data, meta) => {
  return this.genMsg(code, true, msg, data, meta)
}
exports.genFailedMsg = (code, msg, data, meta) => {
  return this.genMsg(code, false, msg, data, meta)
}
