(function(){
	var head = document.getElementsByTagName('head')[0];

	if (head) {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = chrome.extension.getURL('prospect.js');

		head.appendChild(script);
	}
})();