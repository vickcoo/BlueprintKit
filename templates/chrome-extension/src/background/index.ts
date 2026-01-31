/**
 * Background Service Worker
 * Runs in the background and handles extension events
 */

// Extension installed or updated
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Extension installed');
    // Set default storage values
    chrome.storage.sync.set({
      enabled: true,
      theme: 'dark',
    });
  } else if (details.reason === 'update') {
    console.log('Extension updated');
  }
});

// Handle messages from content scripts or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Message received:', request);

  if (request.action === 'getData') {
    // Example: fetch data and send response
    chrome.storage.sync.get(['enabled', 'theme'], (result) => {
      sendResponse({ success: true, data: result });
    });
    return true; // Keep message channel open for async response
  }

  if (request.action === 'saveData') {
    // Example: save data
    chrome.storage.sync.set(request.data, () => {
      sendResponse({ success: true });
    });
    return true;
  }
});

// Handle tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    console.log('Tab loaded:', tab.url);
  }
});

export {};
