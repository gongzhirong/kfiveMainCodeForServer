var express = require('express');
var router = express.Router();

// 定义网站的路由
router.get('/picturesLibrary/index.html', (req, res) => {
  res.sendFile(__dirname + '/front_end/picturesLibrary/index.html');
});

router.get('/fourA/index.html', (req, res) => {
  res.sendFile(__dirname + '/front_end/fourA/index.html');
});

router.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/front_end/index.html');
});
module.exports = router;