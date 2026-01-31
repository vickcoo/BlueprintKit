/**
 * Content Script
 * Runs on web pages specified in manifest.json
 */

console.log('__PROJECT_NAME__ content script loaded');

// Example: Add a badge to the page
function addBadge() {
  const badge = document.createElement('div');
  badge.id = 'ext-badge';
  badge.textContent = '__PROJECT_NAME__';
  badge.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #4F46E5;
    color: white;
    padding: 10px 15px;
    border-radius: 8px;
    font-family: system-ui;
    font-size: 14px;
    z-index: 999999;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    cursor: pointer;
  `;

  badge.addEventListener('click', () => {
    // Send message to background script
    chrome.runtime.sendMessage(
      { action: 'getData' },
      (response) => {
        console.log('Response from background:', response);
        alert(`Extension is ${response.data.enabled ? 'enabled' : 'disabled'}`);
      }
    );
  });

  document.body.appendChild(badge);
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addBadge);
} else {
  addBadge();
}

// Listen for messages from popup or background
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'ping') {
    sendResponse({ status: 'pong' });
  }
});

export {};
