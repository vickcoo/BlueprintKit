# __PROJECT_NAME__ - Electron App

Cross-platform desktop app with Electron, React, and TypeScript.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## ✨ Features

- ✅ Electron (cross-platform desktop)
- ✅ React UI
- ✅ TypeScript
- ✅ Auto-update ready
- ✅ Native menus
- ✅ IPC communication

## 📦 Build

```bash
npm run build
```

Creates installers in `release/` for:
- Windows (.exe)
- macOS (.dmg)
- Linux (.AppImage)

## 🚀 Distribute

**Windows**: Code sign `.exe`
**macOS**: Notarize `.dmg`
**Linux**: Publish to Snap Store

Auto-update: Use `electron-updater`
