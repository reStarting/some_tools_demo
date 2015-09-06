var mongoose = require('mongoose');
mongoose.connect("mongodb://test:test@192.168.0.143/test");

var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	age: Number,
	isAlive: Boolean
});

var User = mongoose.model('User', userSchema);

var root = new User({
	name: 'root',
	age: 88,
	isAlive: true
});


root.save(function(err, data){
	if(err)
	{
		console.log(err);
	}
	else
	{
		console.log('Save: ', data);
	}
});