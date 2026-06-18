# SunRiseSet · 技术支持官网

这是一个为 [SunRiseSet 日出日落 App](https://github.com/huangjingnan/sun-expo) 配套的技术支持与产品官网。
**纯静态站点**,零构建、零依赖,可直接托管在 GitHub Pages。

## 站点结构

```
sunriseset-support/
├── index.html              # 首页(产品介绍 + FAQ + 下载)
├── privacy.html            # 隐私政策
├── terms.html              # 服务条款
├── sitemap.xml             # 站点地图
├── robots.txt              # 搜索引擎指令
├── .nojekyll               # 禁用 Jekyll 处理(原样发布)
├── raise-icon.png          # App 图标(favicon)
├── sun.svg / moon.svg      # 装饰用太阳/月亮图标
├── README.md
└── assets/
    ├── css/
    │   ├── style.css       # 主样式
    │   └── legal.css       # 法律页样式
    └── js/
        ├── i18n.js         # 中英文字符串
        ├── i18n-legal.js   # 法律页多语言字符串
        └── main.js         # 主题切换 / 语言切换 / 菜单
```

## 功能特性

- **中英双语切换**(基于 `?lang=zh|en` 与 `localStorage`)
- **深浅主题**(跟随系统,支持手动覆盖)
- **响应式**(桌面 / 平板 / 手机)
- **SEO 友好**:`sitemap.xml`、`robots.txt`、`<meta>` 完整
- **无障碍**:语义化标签、键盘可达、`prefers-reduced-motion` 适配
- **零依赖**:不引入任何第三方库或字体,纯 HTML/CSS/JS

## 本地预览

任意 HTTP 静态服务器即可,例如:

```bash
# Python 3
python3 -m http.server 8080

# Node.js
npx http-server -p 8080
```

然后访问 <http://localhost:8080>。

## 部署到 GitHub Pages

1. 在 GitHub 上创建仓库 `sunriseset-support`(此仓库)。
2. 推送代码到 `main` 分支。
3. 进入仓库 → **Settings → Pages**,将 **Source** 设为 `Deploy from a branch`。
4. 选择 `main` 分支与根目录 `/`,保存后等待约 1 分钟即可访问:
   `https://huangjingnan.github.io/sunriseset-support/`

> 仓库内的 `.nojekyll` 文件会告诉 GitHub Pages 跳过 Jekyll 处理,直接原样发布。

## 自定义

- 修改品牌色:编辑 `assets/css/style.css` 中 `:root` 下的 `--color-sun-*`、`--accent` 等变量。
- 修改文案:编辑 `assets/js/i18n.js` 与 `assets/js/i18n-legal.js` 中的 `zh` / `en` 对象。
- 接入真实下载链接:将 `index.html` 中 `<a class="store-btn">` 的 `href="#"` 替换为 App Store / Google Play 的真实 URL。

## License

MIT — App 数据基于标准天文学算法(suncalc),仅供参考。
