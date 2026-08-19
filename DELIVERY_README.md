# Tugu Khatulistiwa 网站交付包

本交付包包含网站完整源代码、锁定的依赖配置、Cloudflare Workers 静态资源配置、当前生产构建产物，以及本项目收集和生成的全部图片资源。压缩包排除了 `node_modules`、日志及编辑器缓存；运行 `pnpm install --frozen-lockfile` 后即可恢复依赖。

## 本地运行与构建

使用 Node.js `22.13.0` 与 pnpm `10.4.1`。在 `website/` 目录运行 `pnpm install --frozen-lockfile`、`pnpm dev` 即可启动开发服务器；运行 `pnpm check` 和 `pnpm build` 可执行静态检查和生产构建。`site.config.mjs` 是唯一的正式站点域名配置位置。

## 图片与远程服务

`assets/` 包含当前网站的真实纪念碑摄影文件以及全部为该项目制作的标志和科学插画。生产页面为保持图片许可可追溯，默认引用 Wikimedia Commons 的原始文件入口；若需完全离线运行，可将 `assets/pontianak-equator-monument-sundawn.jpg` 放入托管静态资源目录，并将 `src/pages/index.astro` 的 `monumentPhoto` 常量改为相应本地路径。

Google Maps iframe、Google Fonts 和在用户同意后才加载的 Google Analytics 属于第三方服务，因此不包含在压缩包中。网站本身的源代码、favicon、样式、脚本、页面和可部署构建产物均已包含。
