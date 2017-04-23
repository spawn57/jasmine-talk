var testString

beforeEach(function () {
	testString = 'the quick brown fox jumped over the lazy dog';
});

describe('test find_longest_word', function () {
	it('longest word works as expected', function () {
		var result = find_longest_word('hi hello hey');
		
		expect(result).toBe('hello');
	});
	
	it('use the test string', function () {
		var result = find_longest_word(testString);
		
		expect(result).toBe('jumped');
	});
	
	it('don\'t fail when passed an empty string', function () {
		
		var setup = function () {
			find_longest_word('');
		}
		
		expect(setup).toThrow(Error('must not be an empty string'));
	});
});

describe('testing a promise', function () {
	fit('testing', function (done) {
		
		var promise = simplePromise();
		
		promise.then(
			function (result) {
				expect(result).toBe('success');
				done();
			},
			function () {
				done.fail();
			}
		);
	});
});
