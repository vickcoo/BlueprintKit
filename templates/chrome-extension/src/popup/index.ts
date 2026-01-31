/**
 * Popup Script
 * Handles popup UI interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  const actionBtn = document.getElementById('actionBtn');
  const statusValue = document.getElementById('status');

  // Load current status from storage
  chrome.storage.sync.get(['enabled'], (result) => {
    if (statusValue) {
      statusValue.textContent = result.enabled ? 'Active' : 'Inactive';
      statusValue.style.color = result.enabled ? '#10b981' : '#ef4444';
    }
  });

  // Handle button click
  actionBtn?.addEventListener('click', async () => {
    try {
      // Get current active tab
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

      if (!tab.id) {
        console.error('No active tab found');
        return;
      }

      // Send message to content script
      chrome.tabs.sendMessage(
        tab.id,
        { action: 'ping' },
        (response) => {
          if (chrome.runtime.lastError) {
            console.error('Error:', chrome.runtime.lastError.message);
            alert('Please refresh the page to activate the extension');
            return;
          }

          console.log('Response from content script:', response);
          alert('Action performed successfully!');
        }
      );

      // Or send message to background script
      chrome.runtime.sendMessage(
        { action: 'getData' },
        (response) => {
          console.log('Data from background:', response);
        }
      );
    } catch (error) {
      console.error('Error performing action:', error);
      alert('An error occurred. Please try again.');
    }
  });
});

export {};
