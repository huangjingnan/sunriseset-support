/* SunRiseSet Support Site - main behaviors
   - Theme toggle (with system preference + localStorage)
   - Language toggle (zh / en) with URL sync + localStorage
   - Mobile menu
   - Smooth-scroll active link highlight
   - Header shadow on scroll
   No external dependencies. */
(function () {
  "use strict";

  const root = document.documentElement;
  const STORAGE_THEME = "srs-theme";
  const STORAGE_LANG = "srs-lang";
  const SUPPORTED_LANGS = ["zh", "en"];

  /* ----------------- Theme ----------------- */
  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function systemPrefersDark() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  function initTheme() {
    let saved = null;
    try {
      saved = localStorage.getItem(STORAGE_THEME);
    } catch (_) {}
    if (saved === "light" || saved === "dark") {
      applyTheme(saved);
    } else {
      applyTheme(systemPrefersDark() ? "dark" : "light");
    }
  }

  function toggleTheme() {
    const current = root.getAttribute("data-theme") ||
      (systemPrefersDark() ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_THEME, next);
    } catch (_) {}
  }

  /* ----------------- i18n ----------------- */
  function getQueryLang() {
    const params = new URLSearchParams(window.location.search);
    const q = (params.get("lang") || "").toLowerCase();
    return SUPPORTED_LANGS.indexOf(q) >= 0 ? q : null;
  }

  function detectInitialLang() {
    const fromQuery = getQueryLang();
    if (fromQuery) return fromQuery;
    let saved = null;
    try {
      saved = localStorage.getItem(STORAGE_LANG);
    } catch (_) {}
    if (saved && SUPPORTED_LANGS.indexOf(saved) >= 0) return saved;
    const navLang = (navigator.language || "zh").toLowerCase();
    return navLang.startsWith("zh") ? "zh" : "en";
  }

  function syncLangToggle(lang) {
    const btn = document.getElementById("langToggle");
    if (!btn) return;
    const cur = btn.querySelector(".lang-current");
    const alt = btn.querySelector(".lang-alt");
    if (lang === "zh") {
      if (cur) cur.textContent = "ZH";
      if (alt) alt.textContent = "EN";
      btn.setAttribute("aria-label", "Switch to English");
    } else {
      if (cur) cur.textContent = "EN";
      if (alt) alt.textContent = "ZH";
      btn.setAttribute("aria-label", "切换到中文");
    }
  }

  function applyLang(lang) {
    if (SUPPORTED_LANGS.indexOf(lang) < 0) lang = "zh";
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    document.title = window.i18nResolve(lang, "meta.title");
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        window.i18nResolve(lang, "meta.description")
      );
    }

    // Text nodes
    const nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const value = window.i18nResolve(lang, key);
      if (typeof value === "string") {
        el.innerHTML = value;
      }
    });

    // Attribute translations (e.g., data-i18n-attr="description").
    // We resolve to the right meta string depending on the current page.
    const attrNodes = document.querySelectorAll("[data-i18n-attr]");
    const page = root.getAttribute("data-page") || "home";
    const metaKeyForPage = {
      home: "meta.description",
      privacy: "meta.privacy",
      terms: "meta.terms",
    };
    attrNodes.forEach(function (el) {
      const attr = el.getAttribute("data-i18n-attr");
      const requestedKey = metaKeyForPage[page] || "meta." + attr;
      const value = window.i18nResolve(lang, requestedKey);
      if (typeof value === "string") {
        el.setAttribute(attr, value);
      }
    });

    syncLangToggle(lang);

    try {
      localStorage.setItem(STORAGE_LANG, lang);
    } catch (_) {}
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());
  }

  function toggleLang() {
    const cur = root.getAttribute("data-lang") || "zh";
    applyLang(cur === "zh" ? "en" : "zh");
  }

  /* ----------------- Mobile menu ----------------- */
  function initMobileMenu() {
    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("mobileNav");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      const open = menu.classList.toggle("is-open");
      menu.hidden = !open;
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("is-open");
        menu.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ----------------- Header shadow on scroll ----------------- */
  function initScrollHeader() {
    const header = document.getElementById("siteHeader");
    if (!header) return;
    const onScroll = function () {
      if (window.scrollY > 4) {
        header.style.boxShadow =
          "0 1px 0 var(--border), 0 8px 24px -16px rgba(15,23,42,0.12)";
      } else {
        header.style.boxShadow = "";
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ----------------- Smooth scroll for in-page links ----------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        const id = a.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const headerH = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-h"
          ),
          10
        ) || 64;
        const y =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          headerH -
          8;
        window.scrollTo({ top: y, behavior: "smooth" });
      });
    });
  }

  /* ----------------- Countdown tick (decorative) ----------------- */
  function tickCountdown() {
    const el = document.querySelector(".info-card .info-card-value");
    if (!el) return;
    let total = 4 * 3600 + 21 * 60 + 38;
    const fmt = function (s) {
      const h = Math.floor(s / 3600);
      const m = Math.floor((s % 3600) / 60);
      const sec = s % 60;
      const pad = function (n) {
        return n.toString().padStart(2, "0");
      };
      return (
        (h > 0 ? h + ":" : "") +
        pad(h > 0 ? m : Math.floor(s / 60)) +
        ":" +
        pad(sec)
      );
    };
    const step = function () {
      el.textContent = fmt(total);
      total = total <= 0 ? 4 * 3600 + 21 * 60 + 38 : total - 1;
    };
    step();
    setInterval(step, 1000);
  }

  /* ----------------- Wire up ----------------- */
  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    applyLang(detectInitialLang());

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

    const langBtn = document.getElementById("langToggle");
    if (langBtn) langBtn.addEventListener("click", toggleLang);

    // React to system theme change if user hasn't picked explicitly.
    if (window.matchMedia) {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const listener = function (e) {
        let saved = null;
        try {
          saved = localStorage.getItem(STORAGE_THEME);
        } catch (_) {}
        if (saved !== "light" && saved !== "dark") {
          applyTheme(e.matches ? "dark" : "light");
        }
      };
      if (mq.addEventListener) mq.addEventListener("change", listener);
      else if (mq.addListener) mq.addListener(listener);
    }

    initMobileMenu();
    initScrollHeader();
    initSmoothScroll();
    tickCountdown();
  });
})();
