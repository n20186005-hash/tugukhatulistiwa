# Tugu Khatulistiwa 网站交付包

本交付包包含网站完整源代码、锁定的依赖配置、Cloudflare Workers 静态资源配置、当前生产构建产物，以及本项目收集和生成的全部图片资源。压缩包排除了 `node_modules`、日志及编辑器缓存；运行 `pnpm install --frozen-lockfile` 后即可恢复依赖。

## 本地运行与构建

使用 Node.js `22.13.0` 与 pnpm `10.4.1`。在 `website/` 目录运行 `pnpm install --frozen-lockfile`、`pnpm dev` 即可启动开发服务器；运行 `pnpm check` 和 `pnpm build` 可执行静态检查和生产构建。`site.config.mjs` 是唯一的正式站点域名配置位置。

## 图片与远程服务

`assets/` 保留已有摄影与项目视觉原文件。站点实际使用本地 `public/images/hero.jpg`；Wikimedia Commons 链接用于图片来源致谢，不是页面图片热链。保留SunDawn/CC BY-SA 4.0署名。
Google Maps iframe、Google Fonts 和在用户同意后才加载的 Google Analytics 属于第三方服务，因此不包含在压缩包中。网站本身的源代码、favicon、样式、脚本、页面和可部署构建产物均已包含。

## 本轮部署约定

域名在site.config.mjs固定为https://tugukhatulistiwa.com。使用根wrangler.jsonc，实际项目名由Cloudflare官方GitHub check映射为tugukhatulistiwa。build不再向公共dist输出wrangler.json；部署命令应使用根配置。Worker负责HTTP/www规范跳转和ASSETS真实404；新增及既有ID/EN产物均纳入提交。
