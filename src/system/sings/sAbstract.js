define(['./../../suit.js'], function($) {
	$.registerSing('object', 'Abstract', function(res) {
		return ("undefined"!==typeof res.__abstract__);
	});
});