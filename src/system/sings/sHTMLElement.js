define(['./../../suit.js'], function($) {
	$.registerSing('object', 'HTMLElement', function(res) {
		/*
		В IE documnet не явлесят HTML элементом, поэтому мы должны произвести прямое сравнение
		*/
		if (res===document || Object.prototype.toString.call(res).substr(0,12)==="[object HTML") return true; return false;
	});
});