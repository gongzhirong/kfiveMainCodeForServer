// 引用express框架作路由&服务器
var express = require('express');
var apiServer = require('./apiServer.js');
var fs = require("fs");

// 创建express实例
var app = express()

/* 路由部分 */
app.use(express.static('front_end'));
apiServer(app);

app.get('/', (req, res) => { // 如不输入路径只输入域名，则跳入默认页面
    var url = req.originalUrl;
   	return res.redirect("/index.html");
});

/* 路由部分 */

/* 开启服务 */
var server = app.listen(80, function () {
  var host = server.address().address
  var port = server.address().port
  console.log(host, "address")
  console.log(port, "port")
})
/* 开启服务 */
