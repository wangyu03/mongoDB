var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://192.168.104.30:27017/test';

//增
var insertData = function(db, cb) {
	//连接到集合 students;
	var collection = db.collection('students');
	var data = [{"name":"wangyu"}, {"name":"jingwei"}];
	collection.insert(data, function(err, result) {
		if (err) {
			console.log('Error:' + err);
			return;
		}
		cb && cb(result);
	});
}

//查
var selectData = function(db, cb) {
	var collection = db.collection('students');
	var whereStr = {"name":"zihao"};
	collection.find(whereStr).toArray(function(err, result) {
		if (err) {
			console.log('Error:' + err);
			return;
		}
		cb && cb(result);
	})
}

//改
var updateData = function(db, cb) {
	var collection = db.collection('students');
	var whereStr = {"name": "xiaoquanquan"};
	var updateStr = {$set: {"age": 20}};
	collection.update(whereStr, updateStr, function(err, result) {
		if (err) {
			console.log('Error:' + err);
			return;
		}
		cb && cb(result);
	})
}

//删
var removeData = function(db, cb) {
	var collection = db.collection('students');
	var whereStr = {"name": "xiaoquanquan"};
	collection.remove(whereStr, function(err, result) {
		if (err) {
			console.log('Error:' + err);
			return;
		}
		cb && cb(result);
	})
}
MongoClient.connect(DB_CONN_STR, function(err, db) {
	console.log("连接成功");
	
    //添加数据
	insertData(db, function(result) {
		console.log(result);
	});
    //修改数据
    updateData(db, function(result) {
    	console.log(result);
    });
    //查询数据
	selectData(db, function(result){
        console.log(result);
    });
    //删除数据
    removeData(db, function(result){
        console.log(result);
    });
});
