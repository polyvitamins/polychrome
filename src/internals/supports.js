define(['./../../suit.js', './../../gist/common/mixin'], function(core, mixin) {
	/*
	Регистрирует в системе новый класс на основе шаблона дефолтного абстрактного класса
	*/
	var supports = function(test) {
		if (core.supports[test] && "function"===typeof core.supports[test]) core.supports[test] = core.supports[test]();
		if (core.supports[test]) return core.supports[test]; else return false;
	}
	supports.extend = function(data) {
		mixin(this, data);
		return this;
	}
	core.extend({
		supports: supports
	});

	return supports;
});