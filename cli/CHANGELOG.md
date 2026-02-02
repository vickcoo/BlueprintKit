# Changelog

All notable changes to this project will be documented in this file.

## [0.2.0] - 2026-02-02

### 🔧 Fixed

#### 模板變量替換增強
- 遞歸處理所有文本文件，不再僅限於 package.json, README, LICENSE
- 同時支持 `{{VAR}}` 和 `__VAR__` 兩種格式
- 添加 .mod 文件支持（修復 Golang 項目）
- 排除 node_modules, .git, dist 等目錄

#### TypeScript 類型錯誤修復
- **NestJS**: 添加 RequestWithUser 接口，修復 @Request() 參數類型
- **Vue**: 簡化 useFetch 類型推斷，避免複雜的 Ref 類型問題
- **Vue**: 添加 vite-env.d.ts 定義 ImportMeta 接口

#### 依賴版本修復
- **Astro**: 降級 @astrojs/rss 從 ^5.0.1 到 ^4.0.9
- **Astro**: 降級 @astrojs/sitemap 從 ^4.0.3 到 ^3.2.2
- **Astro**: 降級 @astrojs/tailwind 從 ^6.1.1 到 ^5.1.3

### ✨ Added

#### SvelteKit App 模板（完全重建）
- 創建完整的 SvelteKit 項目結構
- 添加 svelte.config.js, vite.config.ts, tsconfig.json
- 創建 src/routes 路由系統
- 添加 +page.svelte, +layout.svelte, app.css, app.html

#### Django REST 模板（完全重建）
- 創建完整的 Django 項目結構
- 添加 config/ 配置目錄（settings.py, urls.py, wsgi.py）
- 創建 apps/api 應用（models, views, serializers, admin）
- 包含 REST Framework 和 CORS 配置
- 示例 Item 模型和 ViewSet

#### Electron App 模板（完全重建）
- 創建完整的 Electron 項目結構
- 主進程: src/main/main.ts
- 預加載腳本: src/preload/preload.ts
- 渲染進程: src/renderer/ (HTML, CSS, TypeScript)
- 配置 TypeScript 和 electron-builder

### ✅ Tested

所有 15 個模板經過完整測試（生成 + 安裝 + 構建）：
- nextjs-tailwind ✅
- vue-vite ✅
- sveltekit-app ✅
- express-typescript ✅
- nestjs-api ✅
- fastapi-python ✅
- flask-api ✅
- django-rest ✅
- golang-fiber ✅
- react-native-expo ✅
- chrome-extension ✅
- discord-bot ✅
- telegram-bot ✅
- astro-blog ✅
- electron-app ✅

---

## [0.1.1] - 2026-01-31

### Added
- Initial release with 15 templates
- Chrome extension support
- Discord and Telegram bot templates

### Fixed
- Chrome extension CSP issues
- Template variable replacement

---

## [0.1.0] - 2026-01-31

### Added
- Initial release
- Core CLI functionality
- 12 production-ready templates
