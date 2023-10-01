/* This script is used to inject the content script intoo the webpage */
/* eslint-disable no-undef */
// Chrome
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
    chrome.scripting
      .executeScript({
        target: { tabId },
        files: ['./content.js'],
      })
      .then(() => {
        console.log('Injected');
      })
      .cache((err) => console.log(err, 'error in back'));
  }
});
