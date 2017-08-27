var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String }
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username.toLowerCase()};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, realPassword, callback){
  if(candidatePassword === realPassword) isMatch = true;
  else isMatch = false;
    	callback(null, isMatch);
}