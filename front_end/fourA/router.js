var express = require('express');
var router = express.Router();

// 定义网站的路由
router.get('/picturesLibrary/index.html', (req, res) => {
  res.sendFile(__dirname + '/front_end/picturesLibrary/index.html');
});

module.exports = router;