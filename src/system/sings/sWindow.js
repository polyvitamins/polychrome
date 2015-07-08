define(['./../../suit.js'], function($) {
	$.registerSing('object', 'Window', function(res) {
		return res===window;
	});
});