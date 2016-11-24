'use strict';

var readline = require('readline');


exports.input = function (title) {
	return function(done){
		/*process interface*/
		var rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
			terminal: false
		});
		/*question*/
		rl.question(title || '', (answer) => {
	  		done(void 0, answer);
		});
	}
}
