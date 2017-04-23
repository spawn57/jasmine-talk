var misc = require('../misc');


describe('misc', function() {
	it('test hello world', function () {
		var result = misc.helloWorld();
		
		expect(result).toEqual('Hello World!');
	});
	
	it('test hello world again', function () {
		var result = misc.helloWorld();
		
		expect(result).toEqual('Hello World!');
	});
});

