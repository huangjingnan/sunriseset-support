/* SunRiseSet Support Site - legal page translations */
(function () {
  "use strict";

  const LEGAL = {
    zh: {
      "legal.privacy": "隐私政策",
      "legal.terms": "服务条款",
      "legal.lastUpdated": "最后更新",

      "privacy.eyebrow": "Privacy",
      "privacy.title": "隐私政策",
      "privacy.s1.title": "概述",
      "privacy.s1.body":
        "SunRiseSet(以下简称「本应用」)非常重视你的隐私,本政策说明本应用在何种范围内收集、使用和存储信息,以及你可以如何行使相关权利。本应用坚持「数据最小化」原则,所有天象数据均在本地计算,无需联网即可使用。",
      "privacy.s2.title": "我们收集的信息",
      "privacy.s2.intro": "根据你使用的功能,我们可能收集以下信息:",
      "privacy.s2.l1":
        "<strong>位置信息</strong>:仅在你主动点击「使用当前位置」时获取,用于计算该位置的日出日落数据。位置不会上传服务器。",
      "privacy.s2.l2":
        "<strong>标记点</strong>:你手动添加的城市或自定义经纬度,存储在设备本地数据库中。",
      "privacy.s2.l3":
        "<strong>订阅凭证</strong>:通过 App Store / Google Play 验证订阅状态,订阅信息由 Apple / Google 处理,本应用不接触你的支付凭证。",
      "privacy.s2.l4":
        "<strong>崩溃与诊断</strong>(可选):如果你在系统中开启了崩溃报告,我们可能收到去标识化的崩溃日志用于问题定位。",
      "privacy.s3.title": "我们如何使用信息",
      "privacy.s3.l1": "用于在你所在位置实时计算并展示日出日落、曙暮光数据。",
      "privacy.s3.l2": "用于保存和管理你的标记点、收藏城市。",
      "privacy.s3.l3": "用于在你订阅或恢复订阅时验证身份与权限。",
      "privacy.s3.l4": "用于诊断与改进产品质量(基于去标识化或聚合数据)。",
      "privacy.s4.title": "第三方服务",
      "privacy.s4.body":
        "为了提供订阅功能,本应用使用 Apple StoreKit / Google Play Billing 与 RevenueCat 作为订阅管理服务。这些服务由其各自隐私政策约束,涉及交易凭证、订阅状态、地区标识等信息。我们建议你同时阅读:",
      "privacy.s5.title": "数据存储与安全",
      "privacy.s5.body":
        "所有本地数据(标记点、设置、最近搜索)均存储在你的设备本地,使用 SQLite 加密能力进行保护。我们采用合理的技术与组织措施,防止未经授权的访问、篡改或泄露。",
      "privacy.s6.title": "你的权利",
      "privacy.s6.l1": "访问、更正、删除你在本应用中保存的标记点与设置。",
      "privacy.s6.l2": "随时撤回位置权限授权(系统设置 → 应用权限)。",
      "privacy.s6.l3": "请求我们删除我们持有的、与你相关的任何数据。",
      "privacy.s6.l4":
        "通过 <a href=\"mailto:350560713@qq.com\">350560713@qq.com</a> 行使上述权利,我们将在 30 天内回复。",
      "privacy.s7.title": "儿童隐私",
      "privacy.s7.body":
        "我们不会有意收集 13 岁以下儿童的个人信息。如发现相关情况,请联系我们,我们将立即删除相关信息。",
      "privacy.s8.title": "政策变更",
      "privacy.s8.body":
        "我们可能根据产品发展或法规变化更新本政策。重大变更将通过应用内通知或本页顶部日期体现。继续使用本应用即视为你接受更新后的政策。",
      "privacy.s9.title": "联系我们",
      "privacy.s9.body": "如有隐私相关问题,请通过以下邮箱联系我们:",

      "terms.eyebrow": "Terms",
      "terms.title": "服务条款",
      "terms.s1.title": "协议接受",
      "terms.s1.body":
        "下载、安装或使用 SunRiseSet(以下简称「本应用」)即表示你已阅读、理解并同意本服务条款的全部内容。如你不接受任何条款,请立即停止使用并卸载本应用。",
      "terms.s2.title": "服务说明",
      "terms.s2.body":
        "本应用基于标准天文学算法为用户提供日出、日落、曙暮光等天象信息查询服务。所有计算结果仅供参考,不构成任何专业建议(包括但不限于天文摄影、航海、飞行、医疗、宗教仪式等)。对于因依赖本应用数据而产生的任何直接或间接损失,开发者不承担责任。",
      "terms.s3.title": "订阅与付费",
      "terms.s3.l1":
        "本应用提供免费基础功能与可选的 Premium 订阅。月卡、年卡或终身买断的具体价格以应用内展示为准。",
      "terms.s3.l2":
        "订阅费用在你确认购买时由相应商店(App Store / Google Play)收取,本应用不直接处理支付。",
      "terms.s3.l3":
        "订阅会自动续期,除非你在当期结束至少 24 小时前关闭自动续费。",
      "terms.s3.l4":
        "如需取消订阅,请通过设备的 Apple ID / Google Play 订阅管理进行操作。",
      "terms.s3.l5":
        "已支付的订阅期内费用原则上不予退款,具体以相应商店的退款政策为准。",
      "terms.s4.title": "用户行为",
      "terms.s4.body": "你承诺在使用本应用时:",
      "terms.s4.l1": "遵守所在国家或地区的法律法规;",
      "terms.s4.l2":
        "不进行反向工程、反编译或试图提取本应用的源代码,除非适用法律明确允许;",
      "terms.s4.l3": "不利用本应用从事任何违法违规活动;",
      "terms.s4.l4": "不干扰本应用的正常运行或服务器安全。",
      "terms.s5.title": "知识产权",
      "terms.s5.body":
        "本应用的所有内容(包括但不限于图标、配色、文案、图表组件、源代码)均由开发者独立创作或依法取得授权,受到著作权法及国际公约保护。未经许可,不得复制、修改、传播或用于商业用途。",
      "terms.s6.title": "服务变更与终止",
      "terms.s6.body":
        "我们保留随时修改、暂停或终止本应用全部或部分服务的权利。如发生重大变更,我们将提前通过应用内通知或其他合理方式告知。如你不同意变更,可停止使用并卸载本应用。",
      "terms.s7.title": "免责声明",
      "terms.s7.body":
        "本应用按「现状」提供。在适用法律允许的最大范围内,我们不对服务的及时性、准确性、可靠性、完整性或适用性作任何明示或暗示的担保。因不可抗力(包括但不限于自然灾害、网络中断、第三方服务异常)导致的服务中断,我们不承担责任。",
      "terms.s8.title": "责任限制",
      "terms.s8.body":
        "在适用法律允许的最大范围内,无论基于何种法律理论,开发者就你使用本应用所遭受的任何间接的、偶然的、特殊的、惩罚性的或衍生性的损失不承担责任。",
      "terms.s9.title": "争议解决",
      "terms.s9.body":
        "本条款的解释、效力及争议解决均适用中华人民共和国法律。如发生争议,双方应首先友好协商;协商不成的,任一方可向开发者所在地有管辖权的人民法院提起诉讼。",
      "terms.s10.title": "联系我们",
      "terms.s10.body": "如对本条款有任何疑问,请通过以下邮箱联系我们:",
    },

    en: {
      "legal.privacy": "Privacy Policy",
      "legal.terms": "Terms of Service",
      "legal.lastUpdated": "Last updated",

      "privacy.eyebrow": "Privacy",
      "privacy.title": "Privacy Policy",
      "privacy.s1.title": "Overview",
      "privacy.s1.body":
        "SunRiseSet (the 'App') respects your privacy. This policy explains what data we collect, how we use it and how you can exercise your rights. The App follows the principle of data minimization — all astronomical data is computed locally, and the App works fully offline.",
      "privacy.s2.title": "Information We Collect",
      "privacy.s2.intro":
        "Depending on the features you use, we may collect:",
      "privacy.s2.l1":
        "<strong>Location</strong>: retrieved only when you explicitly tap 'Use Current Location', used to compute sunrise/sunset for that spot. Location data is never uploaded.",
      "privacy.s2.l2":
        "<strong>Markers</strong>: cities or custom coordinates you add are stored in the device's local database.",
      "privacy.s2.l3":
        "<strong>Subscription credentials</strong>: subscription status is validated via App Store / Google Play. We never see your payment credentials.",
      "privacy.s2.l4":
        "<strong>Crash & diagnostics</strong> (optional): if you enable system crash reporting, we may receive de-identified logs to help diagnose issues.",
      "privacy.s3.title": "How We Use Information",
      "privacy.s3.l1":
        "To compute and display sunrise, sunset, lunar and twilight data for your location in real time.",
      "privacy.s3.l2": "To save and manage your markers and saved cities.",
      "privacy.s3.l3":
        "To verify identity and entitlements when you subscribe or restore a purchase.",
      "privacy.s3.l4":
        "To diagnose and improve product quality based on de-identified or aggregated data.",
      "privacy.s4.title": "Third-Party Services",
      "privacy.s4.body":
        "To power subscriptions, the App uses Apple StoreKit / Google Play Billing and RevenueCat. These services are governed by their own privacy policies and may process transaction tokens, subscription status and locale identifiers. We recommend reading:",
      "privacy.s5.title": "Storage & Security",
      "privacy.s5.body":
        "All on-device data (markers, settings, recent searches) is stored locally and protected with SQLite-level encryption. We apply reasonable technical and organizational safeguards to prevent unauthorized access, alteration or disclosure.",
      "privacy.s6.title": "Your Rights",
      "privacy.s6.l1":
        "Access, correct or delete the markers and preferences saved on your device.",
      "privacy.s6.l2":
        "Withdraw location permission at any time via System Settings → App Permissions.",
      "privacy.s6.l3": "Request deletion of any data we hold about you.",
      "privacy.s6.l4":
        "Exercise any of the above by emailing <a href=\"mailto:350560713@qq.com\">350560713@qq.com</a>. We respond within 30 days.",
      "privacy.s7.title": "Children's Privacy",
      "privacy.s7.body":
        "We do not knowingly collect personal information from children under 13. If you believe we have, please contact us and we will promptly delete it.",
      "privacy.s8.title": "Changes to This Policy",
      "privacy.s8.body":
        "We may update this policy as the product or regulations evolve. Material changes will be reflected by an in-app notice or by updating the date at the top of this page. Continued use of the App indicates acceptance of the updated policy.",
      "privacy.s9.title": "Contact Us",
      "privacy.s9.body":
        "For any privacy-related questions, please email us at:",

      "terms.eyebrow": "Terms",
      "terms.title": "Terms of Service",
      "terms.s1.title": "Acceptance",
      "terms.s1.body":
        "By downloading, installing or using SunRiseSet (the 'App') you confirm that you have read, understood and agreed to these Terms in full. If you do not accept any provision, please stop using and uninstall the App immediately.",
      "terms.s2.title": "Description of Service",
      "terms.s2.body":
        "The App uses standard astronomical algorithms to provide sunrise, sunset, lunar and twilight information. All results are for reference only and do not constitute professional advice (including but not limited to astrophotography, navigation, flight, medical or religious uses). The developer assumes no liability for any direct or indirect loss arising from reliance on the App's data.",
      "terms.s3.title": "Subscriptions & Payment",
      "terms.s3.l1":
        "The App offers free core functionality and an optional Premium subscription. Monthly, yearly and lifetime pricing is displayed in-app.",
      "terms.s3.l2":
        "Charges are processed by the relevant storefront (App Store / Google Play) at the time you confirm the purchase. The App does not handle payment directly.",
      "terms.s3.l3":
        "Subscriptions renew automatically unless auto-renew is disabled at least 24 hours before the end of the current period.",
      "terms.s3.l4":
        "To cancel, manage auto-renew through your device's Apple ID / Google Play subscription settings.",
      "terms.s3.l5":
        "Paid fees within the active period are generally non-refundable; refer to the storefront's refund policy for specifics.",
      "terms.s4.title": "User Conduct",
      "terms.s4.body": "When using the App you agree to:",
      "terms.s4.l1":
        "Comply with the laws and regulations of your country or region;",
      "terms.s4.l2":
        "Not reverse-engineer, decompile or otherwise attempt to extract source code, except to the extent explicitly permitted by applicable law;",
      "terms.s4.l3":
        "Not use the App for any illegal or unauthorized purpose;",
      "terms.s4.l4":
        "Not interfere with the App's normal operation or its backend services.",
      "terms.s5.title": "Intellectual Property",
      "terms.s5.body":
        "All App content (including but not limited to icons, color schemes, copy, chart components and source code) is independently created by the developer or properly licensed and protected by copyright law and international treaties. Reproduction, modification, distribution or commercial use without permission is prohibited.",
      "terms.s6.title": "Modification & Termination",
      "terms.s6.body":
        "We reserve the right to modify, suspend or terminate all or part of the App at any time. For material changes we will provide reasonable prior notice via in-app message or similar means. If you disagree, you may stop using and uninstall the App.",
      "terms.s7.title": "Disclaimer",
      "terms.s7.body":
        "The App is provided 'as is'. To the maximum extent permitted by law, we disclaim all warranties of any kind, express or implied, including but not limited to warranties of timeliness, accuracy, reliability, completeness or fitness for a particular purpose. We are not liable for service interruption caused by force majeure (including but not limited to natural disasters, network outages or third-party service failures).",
      "terms.s8.title": "Limitation of Liability",
      "terms.s8.body":
        "To the maximum extent permitted by law, in no event shall the developer be liable for any indirect, incidental, special, consequential or punitive damages arising from your use of the App, regardless of the legal theory.",
      "terms.s9.title": "Dispute Resolution",
      "terms.s9.body":
        "These Terms are governed by the laws of the People's Republic of China. The parties shall first attempt amicable negotiation; failing that, either party may bring action before a court with jurisdiction over the developer's location.",
      "terms.s10.title": "Contact Us",
      "terms.s10.body":
        "If you have any questions about these Terms, please contact us at:",
    },
  };

  // Merge into the global I18N_STRINGS object loaded from i18n.js.
  // This file is intended to load AFTER i18n.js and BEFORE main.js.
  function mergeLegalStrings() {
    if (
      window.I18N_STRINGS &&
      typeof window.i18nResolve === "function"
    ) {
      ["zh", "en"].forEach(function (lang) {
        const target = window.I18N_STRINGS[lang] ||
          (window.I18N_STRINGS[lang] = {});
        Object.assign(target, LEGAL[lang]);
      });
    }
  }

  // Run immediately if document is already ready; otherwise wait for it.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mergeLegalStrings);
  } else {
    mergeLegalStrings();
  }
})();
