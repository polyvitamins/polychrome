define(function() {
	/*
	Определяет еденицу измерения величины.
	Если передан number или определить не удалось, возвращает defaults
	*/
	var units = [
		'px', // Pixels
		'rat', // Ratio
		'%', // Percent
		'em', // Em
		'rem', // Rem
		'deg', // deg
		'mm', // Millimeters
		'cm', // Santimeters
		'pt', // Pt
		'pc', // Pc
		'ex', // Size of x
		'ch', // Size of 0
		'vw', // 1% of screen width
		'vh', // 1% of screen height
		['vmin','vm'], // Min of vw, vh
		'vmax', // max of vw, vh
		's', // senconds
		'ms', // milliseconds
		'm', // minutes
		'h' // hourse
	];

	
	return function(value, defaults) {
		defaults=defaults||'unit';
		if ("number"===typeof value) return defaults;

		value=value.toLowerCase();
		for (var u = 0;u<units.length;u++) {
			if (units[u] instanceof Array) {
				for (var su = 0;su<units[u].length;su++) {
					if (value.substr(units[u][su].length*-1)===units[u][su]) return units[u][0];
				}
			} else {
				if (value.substr(units[u].length*-1)===units[u]) return units[u];
			}
		}
		return defaults;
	}
});