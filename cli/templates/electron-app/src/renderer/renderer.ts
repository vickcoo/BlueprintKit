// Display versions
const nodeVersion = document.getElementById('node-version');
const chromeVersion = document.getElementById('chrome-version');
const electronVersion = document.getElementById('electron-version');

if (nodeVersion) nodeVersion.textContent = process.versions.node;
if (chromeVersion) chromeVersion.textContent = process.versions.chrome;
if (electronVersion) electronVersion.textContent = process.versions.electron || 'N/A';

// Button demo
const button = document.getElementById('demo-button');
const messageDiv = document.getElementById('message');

button?.addEventListener('click', () => {
  if (messageDiv) {
    messageDiv.textContent = 'Button clicked! Electron app is working.';
    messageDiv.style.display = 'block';

    setTimeout(() => {
      messageDiv.style.display = 'none';
    }, 3000);
  }
});
