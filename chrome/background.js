// Listen for any changes to the URL of any tab.

chrome.tabs.onUpdated.addListener(checkForValidUrl);

function checkForValidUrl(tabId, changeInfo, tab) {
  // show only for http/s pages.
  if (tab.url.indexOf('http') > -1) {
    chrome.pageAction.show(tabId);
  }
};


chrome.pageAction.onClicked.addListener(onPageActionClick);

function onPageActionClick(tab, toolsUsed) {
	chrome.tabs.executeScript(tab.id, {
			file : "insertPanel.js"
		}
	);
};
