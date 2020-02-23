const httpStatus = require('http-status');

exports.notFound = function(req, res) {
  // 设置状态码为404
  res.status(404);
  // 发送错误提示
  res.send(httpStatus.NOT_FOUND);
};
