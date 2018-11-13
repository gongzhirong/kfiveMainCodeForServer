// 封装一个链接数据库的方法，后续调接口直接回调进行
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://127.0.0.1:27017/runoob';

module.exports = (apiActionForDB) => {
	// console.log('准备链接数据库')
 MongoClient.connect(DB_CONN_STR, (err, db) => {
 	if (err) return console.log(err);
 	// console.log('链接数据库成功')
  apiActionForDB(db, (result) => {
    // console.log(result);
    db.close();
  })
 })
}