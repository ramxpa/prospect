Prospect is a browser extension (currently for chrome) that displays the testing and analytics tools used by a website. It also shows the linkedin contacts, jigsaw contacts and traffic information from compete.com

This extension is implemented as a page action and uses minimal chrome api's so that it is easy to port to other browser. 

Prospect.js (inspired by chrome sniffer) is the content script that runs on all http/s pages. It looks at the script tags and window objects of the current site, performs a match with a pre-defined list of analytics and testing tools and returns a json object with the result. The display.js script renders a panel on top of the page with the information. 

INSTALLATION:

Download the prospect.crx file and follow the on-screen instructions.

TODO:

1. Remove static html and use mustache template
2. Port to safari
3. Fix multiple display panel insertions. 
4. Add scroll bar and fixed footer to the panel so that it fits the screen in any resolution/browser size
5. Check if a css reset is needed.
6. Minify and re-pack extensions
