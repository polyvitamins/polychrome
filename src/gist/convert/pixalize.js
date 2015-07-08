define(function() {
	/* 
	Возвращает величину в пикселях, получая число % или px 
	@param value число
	@param quantity контекстная величина в пикселях
	*/
	return function(value, quantity) {
		if ("string" == typeof value) {
			if (value.substr(-1)==='%') {
				return ((quantity/100)* (value.substring(0, value.length-1)));
			} else {
				return parseInt(value.split('px').join(''));
			}
		} else {
			return value;
		}
		
		return parseInt(value);
	};
});