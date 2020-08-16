var db = require('./db');

module.exports ={

	get: function(id, callback){
		var sql = "select * from users where id=?";
		db.getResults(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},

	getAll: function(callback){
		var sql = "select * from users";
		db.getResults(sql,null, function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},
	
		students: function(callback){
		var sql = "select * from users where type='student'";
		db.getResults(sql, null, function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},
			teachers: function(callback){
		var sql = "select * from users where type='teacher'";
		db.getResults(sql, null, function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},   
	        tp: function(callback){
		var sql = "select * from users where type='tp'";
		db.getResults(sql, null, function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},
	
	
	
	


getByUname: function(username, callback){
		var sql = "select * from users where name=?";
		db.getResults(sql, [username], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	

	validate: function(user, callback){
		var sql = "select * from users where name=? and password=? and type='admin'";
		db.getResults(sql, [user.uname, user.password], function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	insert: function(user, callback){
	var sql = "insert into users values(?, ?, ?, ?, ?, ?, ?, ?)";

	db.execute(sql, ['', user.uname, user.password, user.email, user.gender, user.education, user.type, user.block], function(status){
			if(status){
				callback(true);
				console.log('Registration successful');
			}else{
				callback(false);
			}
		});
	},

		update: function(user, callback){
         var sql = "update users set name=?, password=?, email=?, gender=?, education=?, type=? where id=?";
				
		db.execute(sql, [user.username, user.password, user.email, user.gender, user.education, user.type, user.id], function(status){
			if(status){
				console.log(sql);
				callback(true);
			}else{
				callback(false);
			}
		});
	
	},
	

	delete: function(id, callback){
		var sql = "delete from users where id=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}