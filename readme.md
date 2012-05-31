#Prospect

Prospect is a browser extension (currently for chrome and safari) that displays the testing, product recommendation and analytics tools used by a website. It also shows the linkedin contacts, jigsaw contacts and traffic information from compete.com

This extension is implemented as a page action in Chrome and a toolbar button in Safari.

Prospect.js (modeled after chrome sniffer) is the content script that runs on all http/s pages.
It looks at the script tags and window objects of the current site, performs a match with a pre-defined list of analytics and testing tools and returns a json object with the result. The display.js script renders a panel (modeled after the stylebot panel) on top of the page with the information.

###INSTALLATION:

Download the prospect.crx file (click 'view raw')and follow the on-screen instructions.

The extension requires permission on all tabs since it has to match the source attribute of the script tags on all pages.

###TODO:

1. Remove static html and use mustache template
2. Fix multiple display panel insertions. (Using message passing in chrome instead of executing the display script is a better solution here).
3. Add scroll bar and fixed footer to the panel so that it fits the screen in any resolution/browser size

