function find_longest_word(str)
{
	if (typeof a !== 'String' && str === '') {
		throw new Error('must not be an empty string');
	}
	
	var array1 = str.match(/\w[a-z]{0,}/gi);
	var result = array1[0];

	for(var x = 1 ; x < array1.length ; x++) {
		if(result.length < array1[x].length) {
			result = array1[x];
		} 
	}
	
	return result;
}

var simplePromise = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {             
            resolve('success');
        }, 250);
    });
};
