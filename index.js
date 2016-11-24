'use strict';

var readline = require('readline');
var rl       = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});


exports.input = function (title) {
	return function(done){
		rl.question(title || '', (answer) => {
	  		done(void 0, answer);
		});
	}
}

exports.close = function(){
	rl.close();
}