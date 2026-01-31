/**
 * Options Page Script
 * Handles extension settings
 */

const enabledCheckbox = document.getElementById('enabled') as HTMLInputElement;
const saveBtn = document.getElementById('saveBtn');
const statusDiv = document.getElementById('status');

// Load saved settings
chrome.storage.sync.get(['enabled'], (result) => {
  if (enabledCheckbox) {
    enabledCheckbox.checked = result.enabled !== false;
  }
});

// Save settings
saveBtn?.addEventListener('click', () => {
  const settings = {
    enabled: enabledCheckbox?.checked ?? true,
  };

  chrome.storage.sync.set(settings, () => {
    if (statusDiv) {
      statusDiv.textContent = 'Settings saved!';
      setTimeout(() => {
        statusDiv.textContent = '';
      }, 2000);
    }
  });
});

export {};
