define(['./../../suit.js'], function($) {
	$.registerSing('object', 'Date', function(res) {
		
		return (res instanceof Date); 
	});
});