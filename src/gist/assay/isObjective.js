define(function() {
	/*
	Функция возвращает объект, если он объект и false, если нет.
	*/
	return function(subject) {
		/*
		В IE document не является HTML элементом, поэтому мы должны произвести строгий тест на не соответствие
		*/
		if ( ("object"===typeof subject && subject!==document && (subject.toString().substr(0,12)!=="[object HTML")) || "function"===typeof subject) return subject;
		return false;
	}
});