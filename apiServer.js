// 引用express框架作路由&服务器
var fs = require("fs");
var DB_CLIENT = require('./db_connect_component.js');
var bodyParser = require('body-parser');
var ObjectId = require('mongodb').ObjectId;


// 提供接口服务
function apiServer (app) {

 
 // 添加 body-parser 中间件（post请求中body中的参数使用bodyParser中间件可读取）
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(bodyParser.json());

 // 接口：获取front_end/picturesLibrary/img目录下的图片资源
 app.get('/api/getPictureLibrary', (req, res) => {
  var result = {code: '200', data: null, msg: null};
  var host = req.hostname;
  fs.readdir('./front_end/picturesLibrary/img', (err, files) => {
   if (err) {
    result.code = 400;
    result.msg = err;
   } else {
    var data = []
    for (var i = 0; i < files.length; i++) {
     // 最新数据放到最前面
     data.push({
      url: 'http://' + host + '/picturesLibrary/img/' + files[i]
     })
    }
    result.data = data;
    result.msg = 'success';
   }
   res.json(result);
  })
 });

 // 把./front_end/picturesLibrary/img目录下的文件录入到picturesLibrary表中
 // app.get('/api/insertPict', (req, res) => {
 //  fs.readdir('./front_end/picturesLibrary/img', (err, files) => {
 //   var data = []
 //   var host = req.hostname
 //   for (var i = 0; i < files.length; i++) {
 //    data.unshift({
 //     good: 0,
 //     url: 'http://' + host + '/picturesLibrary/img/' + files[i]
 //    })
 //    // 最新数据放到最前面
 //   }
 //   DB_CLIENT((db, callback) => {
 //    // console.log('准备查询数据');
 //    var collection = db.collection('picturesLibrary');
 //    collection.insert(data, (err, result) => {
 //     if (err) console.log(err);
 //     res.json(result)
 //     callback();
 //    })
 //   })
 //  })
 // })

 // 删除多个特定图片
 app.post('/api/deletePict', (req, res) => {
  var result = {code: '200', data: null, msg: '删除成功'};
  if (!req.body.ids.length) {
    return res.json({code: '400', data: req.body.ids, msg: '没传参数'})
  }
  var ids = req.body.ids.map(item => {return {'_id': ObjectId(item)}});
  DB_CLIENT((db, callback) => {
   // console.log('准备查询数据');
   var collection = db.collection('picturesLibrary');

   collection.remove( {'$or': ids}, function (err, data) {
    if (err) {
      result.msg = err;
    }
    res.json(result);
    callback(result);
   });
  })
 })

 // 接口：获取users表用户信息
 app.get('/api/queryUsers', (req, res) => {
  var result = {code: '200', data: null, msg: null};
  DB_CLIENT((db, callback) => {
   // console.log('准备查询数据');
   var collection = db.collection('users');
   collection.find().toArray((err, data) => {
    // console.log('查询数据回调');
    if (err) {
     result.code = '666';
     result.msg = err;
    } else {
     result.data = data;
     result.msg = 'success';
    }
    res.json(result);
    callback(result);
   })
  })
 })

 // 接口：获取picturesLibrary表中的图片信息数据
 app.post('/api/queryPicturesLibrary', (req, res) => {
  var result = {code: '200', data: {}, msg: null};
  console.log('调用接口/api/queryPicturesLibrary')
  DB_CLIENT((db, callback) => {
   var collection = db.collection('picturesLibrary');

   // 获取总数
   collection.find({}).toArray((err, data) => {
    result.data.total = data.length
   })

   collection.find({}, {limit: req.body.pageSize || 9999, skip: req.body.pageSize * (req.body.pageNo - 1)} || 0).sort({createTime:-1}).toArray((err, data) => {
    // if (data.length === 0) {
    // 	// 数据为空时，执行一次图片录入表操作
    //  fs.readdir('./front_end/picturesLibrary/img', (err, files) => {
    //   var data = []
    //   var host = req.hostname
    //   for (var i = 0; i < files.length; i++) {
    //    data.push({
    //     good: 0,
    //     createTime: new Date().getTime() + i,
    //     url: 'http://' + host + '/picturesLibrary/img/' + files[i]
    //    })
    //    // 最新数据放到最前面
    //   }

    //   DB_CLIENT((db, callback) => {
    //    // console.log('准备查询数据');
    //    var collection = db.collection('picturesLibrary');
    //    collection.insert(data, (err, resdata) => {
    //     if (err) console.log(err);
    //     var dataReverse = [];
		  //    	for (var i = 0; i < resdata.ops.length; i++) {
		  //    		dataReverse.unshift(resdata.ops[i]);
		  //    	}
    //     result.data.data = data;
    //     result.msg = 'success';
    //     res.json(result);
    //     callback();
    //    })
    //   })
    //  })
    //  // 数据为空时，执行一次图片录入表操作
    // } else {
     if (err) {
      result.code = '666';
      result.msg = err;
     } else {
      result.data.data = data;
      result.msg = 'success';
     }
     res.json(result);
     callback(result);
    // }
   })
  })
 })
}

module.exports = apiServer