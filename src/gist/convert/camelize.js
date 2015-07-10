define(function() {
	return function(text) {
		return text.replace(/-([\da-z])/gi, function( all, letter ) {
			return letter.toUpperCase();
		});
	}
});