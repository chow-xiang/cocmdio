'use strict';

var co = require('co');
var cmdio = require('../index.js');

co(function* (){
	debugger;
	var hello = yield cmdio.input('Hello:');
	var world = yield cmdio.input('world:');
	console.log(hello + world);
});