(function(){
	var head = document.getElementsByTagName('head')[0];

	if (head) {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = safari.extension.baseURI + "prospect.js";

		head.appendChild(script);
	}
})();