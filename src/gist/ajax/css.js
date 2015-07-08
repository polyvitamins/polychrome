define(function() {
	var is_safari = navigator.userAgent.indexOf("Safari") > -1;
	/*
	
	*/
	var loadCss = function(url, callback) {
		var that = this;
		if (is_safari) {
			/* 
			Safari отказывается слушать событие onload link эелемента, поэтому мы его обманем
			Это решение от ZACH LEATHERMAN (http://www.zachleat.com/web/load-css-dynamically/)
			*/
			var id = 'dynamicCss' + (new Date).getTime();
			var s = document.createElement("STYLE");
			s.setAttribute("type","text/css");
			s.setAttribute("id",id);
			s.innerHTML = '@import url(' + url + ')';
			s = function() {
				return document.documentElement || document.getElementsByTagName("HEAD")[0]
			}().appendChild(s);
			var poll,poll = function() {
			    try {
			        var sheets = document.styleSheets;
			        for(var j=0, k=sheets.length; j<k; j++) {
			            if(sheets[j].ownerNode.id == id) {
			                sheets[j].cssRules;
			            }
			        }
			        callback();
			    } catch(e) {
			        window.setTimeout(poll, 50);
			    }
			};
			window.setTimeout(poll, 50);
		} else {
			var d = document.createElement("LINK");

			d.onload = function(e) { 
				callback();			
			};
			var d = function() {
				return document.documentElement || document.getElementsByTagName("HEAD")[0]
			}().appendChild(d);
			d.setAttribute("rel", "stylesheet");
			d.href = url;
		}
	}
	return function(url, callback) {
		if (!(url instanceof Array))  url = [url];
		var loadings=url.length;
		
		for (var i = 0;i<url.length;i++) {
			loadCss(url, function(){
				loadings--;
				if (loadings===0) callback();
			});
		}
		
	}
});