/* SunRiseSet Support Site - i18n strings
   Usage: I18N[lang][key]. Use dotted keys like "hero.title".
   Falls back to zh if key is missing in the active language. */
(function () {
  "use strict";

  const I18N = {
    zh: {
      meta: {
        title: "SunRiseSet · 日出日落 - 技术支持",
        description:
          "SunRiseSet 是一款基于天文学算法的日出日落 App。支持全球地图、晨昏线、曙暮光、白天时长图表与多地点标记。",
        privacy:
          "SunRiseSet 隐私政策。本应用的数据收集与处理说明。",
        terms:
          "SunRiseSet 服务条款。使用本应用前请阅读以下条款。",
        skip: "跳到主要内容",
      },
      "brand.tagline": "日出日落 · 天象伴侣",
      "nav.features": "功能特性",
      "nav.screenshots": "应用截图",
      "nav.accuracy": "数据精度",
      "nav.faq": "常见问题",
      "nav.contact": "联系我们",
      "nav.download": "下载 App",
      "hero.eyebrow": "基于标准天文学算法 · 全球地理坐标",
      "hero.title": "精确到秒的<br />日出日落伴侣",
      "hero.lead":
        "SunRiseSet 是一款专注于日出、日落与晨昏线的天象 App。全球任意位置,实时显示太阳与月亮直射点、三种曙暮光线、全年日照时长曲线。",
      "hero.ctaPrimary": "立即下载",
      "hero.ctaSecondary": "了解更多",
      "hero.meta1": "日出日落 ±1–2 分钟",
      "hero.meta2": "全球任意位置",
      "hero.meta3": "中英双语",
      "hero.card1.label": "距下次日出",
      "hero.card1.sub": "北京时间 · 北京",
      "hero.card2.label": "白天时长",
      "hero.card2.sub": "夏至 · 北半球",
      "features.eyebrow": "核心功能",
      "features.title": "为天文爱好者与户外玩家打造",
      "features.lead": "从极地到赤道,从摄影黄金时刻到航海曙暮光,一切尽在掌握。",
      "features.f1.title": "实时太阳与月亮直射点",
      "features.f1.desc":
        "地图上实时显示太阳和月亮的地理直射点,直观感受昼夜在地球上的分布。",
      "features.f2.title": "三种曙暮光线",
      "features.f2.desc":
        "民用、航海、天文三种曙暮光线一图全览,精准判断拍摄与观星窗口。",
      "features.f3.title": "全年日出日落曲线",
      "features.f3.desc":
        "按月展示日出、日落与白天时长变化趋势,提前规划全年摄影计划。",
      "features.f4.title": "多地点标记收藏",
      "features.f4.desc": "自定义收藏多座城市与野外坐标,一键查看任意位置的天象数据。",
      "features.f5.title": "月相详情(Premium)",
      "features.f5.desc": "解锁完整月相信息,包含月出月落、月亮直射点与天文事件提醒。",
      "features.f6.title": "中英双语 · 离线可用",
      "features.f6.desc": "完整中文与英文界面,所有数据本地计算,无网络也能查看。",
      "screenshots.eyebrow": "应用截图",
      "screenshots.title": "一图看懂昼夜",
      "screenshots.lead": "滑动浏览地图模式、图表模式与标记点管理。",
      "screenshots.caption1": "世界地图 · 晨昏线",
      "screenshots.caption2": "全年日出日落曲线",
      "screenshots.caption3": "多地点标记管理",
      "accuracy.eyebrow": "数据精度",
      "accuracy.title": "基于标准天文学算法",
      "accuracy.lead":
        "所有日出日落与曙暮光数据均依据标准天文学公式计算,并结合实时地理坐标生成。典型误差范围如下:",
      "accuracy.row1.tag": "日出日落",
      "accuracy.row2.tag": "民用曙暮光",
      "accuracy.row3.tag": "航海/天文曙暮光",
      "accuracy.minute": "分钟",
      "accuracy.note":
        "本算法未考虑实时云层、雨雾、沙尘、空气污染等天气条件。用于摄影、航海、飞行等关键用途时,请结合专业气象数据。",
      "accuracy.cardTitle": "影响最终视觉的因素",
      "accuracy.factor1": "局部地形与海拔(高山、峡谷、建筑物遮挡)",
      "accuracy.factor2": "大气折射随季节、气温、气压变化",
      "accuracy.factor3": "极高海拔地区存在算法误差",
      "accuracy.factor4": "云层、雨雾、沙尘暴等天气",
      "faq.eyebrow": "常见问题",
      "faq.title": "你需要知道的",
      "faq.q1": "SunRiseSet 是否需要联网?",
      "faq.a1":
        "不需要。所有天象数据均使用本地天文学算法实时计算,完全离线可用。仅在使用定位功能搜索当前城市时需要联网获取地理信息。",
      "faq.q2": "支持哪些平台?",
      "faq.a2":
        "目前已上架 iOS 与 Android 平台,在 iPhone、iPad 以及主流 Android 设备上均可使用。",
      "faq.q3": "Premium 订阅包含哪些功能?",
      "faq.a3":
        "解锁无限地图标记点、查看完整月相详情、月出月落时间,以及无广告体验。订阅周期包括月卡、年卡与终身买断,价格透明、无隐藏费用。",
      "faq.q4": "如何恢复已购买的订阅?",
      "faq.a4":
        "在 App 的「我的」页面点击「恢复购买」即可。iOS 通过 App Store 账号恢复,Android 通过 Google Play 账号恢复。",
      "faq.q5": "如何删除账户数据?",
      "faq.a5":
        "前往「我的 → 设置 → 清除数据」即可一键清除本地全部标记点与偏好设置,或直接卸载 App 即可彻底移除所有本地数据。",
      "faq.q6": "发现 Bug 或希望增加功能?",
      "faq.a6":
        "非常欢迎!请通过页面下方的邮箱联系我们,或直接发送邮件至 support@sunriseset.app。你的反馈会直接进入下一版本的开发任务。",
      "contact.eyebrow": "联系我们",
      "contact.title": "问题、建议、合作",
      "contact.lead":
        "我们重视每一位用户的反馈。无论是 Bug 报告、功能建议,还是天文摄影作品分享,都欢迎随时联系。",
      "contact.emailLabel": "技术支持",
      "contact.privacyLabel": "隐私相关",
      "contact.businessLabel": "商务合作",
      "contact.cardTitle": "下载 SunRiseSet",
      "contact.cardDesc": "免费使用基础功能,随时升级解锁全部特性。",
      "contact.appstoreSmall": "下载于",
      "contact.playSmall": "立即下载",
      "contact.version": "当前版本",
      "contact.platforms": "支持平台",
      "footer.tagline": "日出日落 · 你的天象伴侣",
      "footer.productTitle": "产品",
      "footer.supportTitle": "支持",
      "footer.legalTitle": "法律",
      "footer.privacy": "隐私政策",
      "footer.terms": "服务条款",
      "footer.sitemap": "站点地图",
      "footer.copyright": "© 2026 SunRiseSet. 基于标准天文学算法,数据仅供参考。",
    },

    en: {
      meta: {
        title: "SunRiseSet · Sunrise & Sunset - Support",
        description:
          "SunRiseSet is an astronomy-driven sunrise and sunset app. Global map, terminator lines, twilight bands, day-length charts and multi-location markers.",
        privacy:
          "SunRiseSet Privacy Policy. Data collection and processing explained.",
        terms:
          "SunRiseSet Terms of Service. Please read before using the app.",
        skip: "Skip to main content",
      },
      "brand.tagline": "Sunrise & Sunset · Your Sky Companion",
      "nav.features": "Features",
      "nav.screenshots": "Screenshots",
      "nav.accuracy": "Accuracy",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "nav.download": "Download",
      "hero.eyebrow": "Standard astronomy algorithms · global geo-coordinates",
      "hero.title": "Your Sunrise<br />Companion,<br />Down to the Second",
      "hero.lead":
        "SunRiseSet focuses on sunrise, sunset and the terminator line. Real-time solar & lunar subpoints, three twilight bands and year-long day-length curves, anywhere on Earth.",
      "hero.ctaPrimary": "Download Now",
      "hero.ctaSecondary": "Learn More",
      "hero.meta1": "Sunrise/sunset ±1–2 min",
      "hero.meta2": "Anywhere on Earth",
      "hero.meta3": "Bilingual EN / ZH",
      "hero.card1.label": "Next Sunrise In",
      "hero.card1.sub": "Beijing Time · Beijing",
      "hero.card2.label": "Day Length",
      "hero.card2.sub": "Summer Solstice · N. Hemisphere",
      "features.eyebrow": "Core Features",
      "features.title": "Built for sky-watchers and outdoor explorers",
      "features.lead":
        "From polar regions to the equator, from golden hour to nautical twilight — it's all at your fingertips.",
      "features.f1.title": "Live Solar & Lunar Subpoint",
      "features.f1.desc":
        "Real-time geographic subpoints of the Sun and Moon plotted on the world map, so day and night distribution becomes intuitive.",
      "features.f2.title": "Three Twilight Bands",
      "features.f2.desc":
        "Civil, nautical and astronomical twilight in one view — pinpoint the perfect window for shooting or stargazing.",
      "features.f3.title": "Year-long Sunrise Curve",
      "features.f3.desc":
        "Monthly sunrise, sunset and day-length trends help you plan shoots across the entire year.",
      "features.f4.title": "Multi-location Markers",
      "features.f4.desc":
        "Save any city or remote coordinate and check its sky data with a single tap.",
      "features.f5.title": "Moon Phase Details (Premium)",
      "features.f5.desc":
        "Unlock full lunar data: moonrise, moonset, lunar subpoint and astronomical event reminders.",
      "features.f6.title": "Bilingual · Works Offline",
      "features.f6.desc":
        "Full English & Chinese UI. All data computed locally — no network required.",
      "screenshots.eyebrow": "Screenshots",
      "screenshots.title": "See day and night at a glance",
      "screenshots.lead": "Glance through the map view, the chart view and the marker manager.",
      "screenshots.caption1": "World Map · Terminator",
      "screenshots.caption2": "Yearly Sunrise Curve",
      "screenshots.caption3": "Multi-location Markers",
      "accuracy.eyebrow": "Accuracy",
      "accuracy.title": "Standard astronomy algorithms",
      "accuracy.lead":
        "All sunrise, sunset and twilight values are computed from standard astronomical formulas combined with your live coordinates. Typical error margins:",
      "accuracy.row1.tag": "Sunrise & Sunset",
      "accuracy.row2.tag": "Civil Twilight",
      "accuracy.row3.tag": "Nautical / Astronomical Twilight",
      "accuracy.minute": "min",
      "accuracy.note":
        "Real-time cloud cover, rain, fog, dust and air pollution are not modeled. For mission-critical photography, navigation or flight use, combine with professional meteorological data.",
      "accuracy.cardTitle": "Factors that affect the visual result",
      "accuracy.factor1": "Local terrain and elevation (mountains, valleys, building occlusion)",
      "accuracy.factor2": "Atmospheric refraction varying with season, temperature, pressure",
      "accuracy.factor3": "Algorithm drift at extreme altitudes",
      "accuracy.factor4": "Weather conditions: clouds, rain, fog, dust storms",
      "faq.eyebrow": "FAQ",
      "faq.title": "What you may want to know",
      "faq.q1": "Does SunRiseSet require an internet connection?",
      "faq.a1":
        "No. All astronomical data is computed locally using standard algorithms, so the app works fully offline. Only the geocoding used for locating your current city needs a network connection.",
      "faq.q2": "Which platforms are supported?",
      "faq.a2":
        "SunRiseSet is available on iOS and Android, and runs smoothly on iPhone, iPad and mainstream Android devices.",
      "faq.q3": "What does the Premium subscription include?",
      "faq.a3":
        "Premium unlocks unlimited map markers, full moon-phase detail including moonrise and moonset, and an ad-free experience. Plans include monthly, yearly and lifetime options — transparent pricing, no hidden fees.",
      "faq.q4": "How do I restore a previous purchase?",
      "faq.a4":
        "Open the app and tap 'Restore Purchases' on the 'Me' page. iOS restores via your App Store account; Android restores via your Google Play account.",
      "faq.q5": "How can I delete my data?",
      "faq.a5":
        "Go to 'Me → Settings → Clear Data' to wipe all local markers and preferences, or simply uninstall the app to remove everything.",
      "faq.q6": "Found a bug or have a feature request?",
      "faq.a6":
        "We'd love to hear it! Use the email below or write to support@sunriseset.app. Your feedback goes straight into the next release.",
      "contact.eyebrow": "Get in Touch",
      "contact.title": "Questions, feedback, partnerships",
      "contact.lead":
        "We read every message. Bug reports, feature ideas, astrophotography tips — all welcome.",
      "contact.emailLabel": "Technical Support",
      "contact.privacyLabel": "Privacy",
      "contact.businessLabel": "Business",
      "contact.cardTitle": "Download SunRiseSet",
      "contact.cardDesc":
        "Start free, upgrade anytime to unlock the full feature set.",
      "contact.appstoreSmall": "Download on the",
      "contact.playSmall": "Get it on",
      "contact.version": "Current version",
      "contact.platforms": "Supported platforms",
      "footer.tagline": "Sunrise & Sunset · Your Sky Companion",
      "footer.productTitle": "Product",
      "footer.supportTitle": "Support",
      "footer.legalTitle": "Legal",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Service",
      "footer.sitemap": "Sitemap",
      "footer.copyright":
        "© 2026 SunRiseSet. Standard astronomy algorithms; data is for reference only.",
    },
  };

  // Resolve a dotted key, falling back to zh.
  // Supports both flat dot keys ("meta.description") and nested objects
  // ("meta": { "description": "..." }) — whichever style the data uses.
  function resolve(lang, key) {
    const set = I18N[lang] || I18N.zh;
    if (set && Object.prototype.hasOwnProperty.call(set, key)) {
      return set[key];
    }
    // Walk dotted path: "meta.description" -> set.meta.description
    const parts = key.split(".");
    let cur = set;
    for (let i = 0; i < parts.length; i++) {
      if (cur && typeof cur === "object" && parts[i] in cur) {
        cur = cur[parts[i]];
      } else {
        cur = undefined;
        break;
      }
    }
    if (typeof cur === "string") return cur;
    // Fallback to zh
    if (lang !== "zh") return resolve("zh", key);
    return key;
  }

  window.I18N_STRINGS = I18N;
  window.i18nResolve = resolve;
})();
