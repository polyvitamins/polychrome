define(['./../../suit.js'], function($) {
	$.registerSing('object', 'Query', function(res) {
		return res.brahma||res.jquery;
	});
});