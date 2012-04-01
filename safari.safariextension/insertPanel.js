/*
 * Insert the panel when the page action icon is clicked
 */

if (window.top === window) { // inject only once!
    safari.self.addEventListener("message", handleGextText, false);
}

function handleGextText(event) {

    var messageName = event.name;
    var messageData = event.message;
    if (messageName === "msg") {
        if (messageData === "insert-panel") {

			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = safari.extension.baseURI + "display.js"
			document.body.appendChild(script);

        }
     }
}