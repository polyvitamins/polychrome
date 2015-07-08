define(['./../../../internals/supports'], function(supports) {
	supports.extend({
		dataset: function() {
			return (typeof document.createElement('div').dataset !== "undefined");
		}
	});
});