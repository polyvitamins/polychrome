define(['./../../suit.js'], function($) {
	$.registerSing('object', 'Null', function(res) {
				if (res===null)  return true; return false;
	});
});