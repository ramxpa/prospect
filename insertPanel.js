/*
 * Insert the panel when the page action icon is clicked
 */

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = chrome.extension.getURL('display.js');
document.body.appendChild(script);