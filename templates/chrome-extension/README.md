# __PROJECT_NAME__ - Chrome Extension

A modern Chrome extension built with TypeScript and Webpack.

## 🚀 Tech Stack

- **TypeScript** - Type-safe JavaScript
- **Webpack** - Module bundler
- **Manifest V3** - Latest Chrome extension format
- **Chrome Extension API** - Full Chrome API support

## ✨ Features

- ✅ TypeScript for type safety
- ✅ Webpack for bundling and hot reload
- ✅ Manifest V3 (latest standard)
- ✅ Background service worker
- ✅ Content script
- ✅ Popup UI
- ✅ Options page
- ✅ Chrome Storage API integration

## 📁 Project Structure

```
chrome-extension/
├── src/
│   ├── background/       # Background service worker
│   │   └── index.ts
│   ├── content/          # Content script
│   │   └── index.ts
│   ├── popup/            # Popup UI
│   │   ├── index.ts
│   │   └── popup.html
│   ├── options/          # Options page
│   │   ├── index.ts
│   │   └── options.html
│   └── types/            # TypeScript types
│       └── index.ts
├── public/
│   └── icons/            # Extension icons
├── manifest.json         # Extension manifest
├── webpack.config.js     # Webpack configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies
└── README.md            # This file
```

## 🏁 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Development

```bash
# Build in development mode with watch
npm run dev
```

This will create a `dist/` folder with your extension files.

### 3. Load Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions`
2. Enable "Developer mode" (toggle in top-right)
3. Click "Load unpacked"
4. Select the `dist/` folder

### 4. Production Build

```bash
# Build for production
npm run build
```

## 🛠 Development

### Background Service Worker

Edit `src/background/index.ts`:

```typescript
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});
```

### Content Script

Edit `src/content/index.ts`:

```typescript
// Runs on web pages
console.log('Content script loaded');
document.body.style.border = '5px solid red';
```

### Popup

Edit `src/popup/index.ts` and `src/popup/popup.html`:

```typescript
document.getElementById('myButton')?.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    console.log('Current tab:', tabs[0]);
  });
});
```

### Options Page

Edit `src/options/index.ts` and `src/options/options.html` for settings.

## 📦 Chrome APIs Used

- **chrome.storage** - Store user data
- **chrome.tabs** - Interact with browser tabs
- **chrome.runtime** - Extension lifecycle
- **chrome.action** - Extension icon and popup

## 🎨 Icons

Place your icons in `public/icons/`:
- `icon16.png` - 16x16 (toolbar)
- `icon48.png` - 48x48 (extension management)
- `icon128.png` - 128x128 (Chrome Web Store)

Generate icons at [favicon.io](https://favicon.io/)

## 🧪 Testing

```bash
# Load extension in Chrome
1. npm run dev
2. Open chrome://extensions
3. Load unpacked -> select dist/
4. Test your extension
```

## 🚀 Publishing

### 1. Prepare for Publish

```bash
# Production build
npm run build

# Zip the dist folder
cd dist && zip -r ../extension.zip . && cd ..
```

### 2. Upload to Chrome Web Store

1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. Pay one-time $5 developer fee
3. Upload `extension.zip`
4. Fill in store listing details
5. Submit for review

### Review Process

- Usually takes 1-3 business days
- May require clarifications
- Follow [Chrome Web Store policies](https://developer.chrome.com/docs/webstore/program-policies/)

## 🔐 Permissions

Current permissions in `manifest.json`:
- `storage` - Save user preferences
- `activeTab` - Access current tab

Add more as needed from [Chrome permissions list](https://developer.chrome.com/docs/extensions/reference/permissions/).

## 📚 Resources

- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Migration](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Chrome API Reference](https://developer.chrome.com/docs/extensions/reference/)
- [Sample Extensions](https://github.com/GoogleChrome/chrome-extensions-samples)

## 🐛 Debugging

1. **Popup**: Right-click popup → "Inspect"
2. **Background**: chrome://extensions → "Inspect views: background page"
3. **Content Script**: Open DevTools on the web page
4. **Console**: Check all console logs in respective contexts

## 📝 Common Issues

**Extension not loading?**
- Check for syntax errors in manifest.json
- Ensure all file paths are correct
- Check webpack build output for errors

**Changes not reflecting?**
- Click "Reload" button in chrome://extensions
- For content scripts, refresh the web page too
- For background, may need to reload extension

## 📄 License

MIT License
