var EventEmitter = require('events').EventEmitter;

var eventEmitter = new EventEmitter();
// eventEmitter.setMaxListeners(0);

eventEmitter.on('test', function(){
	console.log('test!!!')
});
eventEmitter.emit('test');