define(['$//gist/convert/pixalize'], function(pixalize) {
	/*
	Возвращает расстояние margin в пикселях, даже если оно существует в процентах
	*/
	var pixelizeMargin = function(subject, direction) {
		direction=direction.toLowerCase();

		var ml = window.getComputedStyle(subject)['margin'+String(direction.charAt(0)).toUpperCase()+direction.substr(1)];
		if (ml==='auto') ml = 0;
		
		return pixalize(ml, (direction==='left'||direction==='right')?subject.parentNode.clientWidth:subject.parentNode.clientHeight);
	}

	return pixelizeMargin;
});