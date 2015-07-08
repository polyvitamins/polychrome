define([
	'./../../suit.js',
	'./../../gist/common/mixin.js',
	'./../../common/extend.js',
	'./../../classes/Inherit/inherit',
	'./../../classes/Inherit/construct',
	'./../../classes/Inherit/proto',
	'./../../internals/charge',
	'./../../classes/Eacher/each',
	'./../../classes/Widget',
	'./../../classes/Events',
	], 
	function($, mixin, extend) {

	var moduleMaker = function(moduleName, constructor) {

		var abstractClass = $($.charge(constructor||function() {}, 'Widget')).inherit(function() {});
		
		
		abstractClass.properties = {};
		var constructProperties = function() {

			if (this!==window&&"object"===typeof this.constructor.properties) {
				var constr = this;
				
				$(this.constructor.properties).each(function(value, key) {
					constr[key] = value;
				});
			}
		}
		abstractClass = abstractClass.inherit(constructProperties);
		
		/*
		Расширить этот класс другим классом
		*/
		abstractClass.charge = function(aClass) {
			return $.charge(abstractClass, aClass);
		}
		/*
		Расширение самого себя. Не смотря на название функции в действительности функции миксуются с прототипом,
		переменные записываются в properties.
		*/
		abstractClass.extend = function(data) {

			var methods=[],properties=[];
			
			$(data).each(function(value, key) {
				if ("function"===typeof value) methods[key]=value;
				else properties[key]=value;
			});

			abstractClass.prototype = mixin(abstractClass.prototype||{},methods);
			extend(abstractClass.properties, properties);

			return abstractClass;
		}
		/*
		Интерфейс для создания саб-модулей
		*/
		abstractClass.modules = {};
		abstractClass.module = function(name) {
			var 
			name=name||'default',
			initial=("function"===typeof arguments[2]) ? arguments[2] : ("function"===typeof arguments[1] ? arguments[1] : false),
			data=("object"===typeof arguments[1]) ? arguments[1] : ("object"===typeof arguments[2] ? arguments[2] : false);

			if ("undefined"===typeof abstractClass.modules[name]) {

				abstractClass.modules[name] = moduleMaker(name, initial||function() {}).extend(data||{});
			} else {
				if (initial) abstractClass.modules[name].charge(initial);
				if (data) abstractClass.modules[name].extend(data);
			}

			return abstractClass.modules[name];
		}

		/*
		Собственное имя класса
		*/
		abstractClass.moduleName = moduleName;

		return abstractClass;
	}

	return moduleMaker;
});