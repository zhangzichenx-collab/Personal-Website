import { Language } from "./types";

const STORAGE_KEY = "simon-portfolio-lang";

/** 读取上次选择的语言，未选择时默认中文 */
export function getInitialLang(): Language {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "zh" || saved === "en" || saved === "ru") return saved;
  } catch {
    // localStorage 不可用时静默回退
  }
  return "zh";
}

/** 持久化用户选择的语言 */
export function persistLang(lang: Language): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // 忽略写入失败
  }
}

/**
 * 按当前语言取文案：zh 中文 / en 英文 / ru 俄文。
 * 俄文缺省时回退到英文。
 */
export function pick<T>(lang: Language, zh: T, en: T, ru?: T): T {
  if (lang === "zh") return zh;
  if (lang === "ru") return ru ?? en;
  return en;
}

/** 播放量等数字的本地化：中文「万」→ 英文 K / 俄文 тыс. */
export function formatCount(lang: Language, value: string): string {
  if (lang === "zh" || !value.includes("万")) return value;
  const num = parseFloat(value) * 10; // 15.2万 → 152
  const rounded = Number.isInteger(num) ? String(num) : String(Math.round(num));
  return lang === "ru" ? `${rounded} тыс.` : `${rounded}K`;
}

/** 视频时长「图文」（图文帖）的本地化，具体时长原样返回 */
export function formatDuration(lang: Language, duration: string): string {
  if (duration !== "图文") return duration;
  return pick(lang, "图文", "Post", "Пост");
}

/** 阅读时长：英文数据形如「7 min read」，中文显示「7 分钟阅读」，俄文优先取 ruValue */
export function formatReadTime(
  lang: Language,
  value: string,
  ruValue?: string,
): string {
  const match = value.match(/(\d+)/);
  const n = match ? match[1] : "";
  if (lang === "zh") return n ? `${n} 分钟阅读` : value;
  if (lang === "ru") return ruValue ?? (n ? `${n} мин чтения` : value);
  return value;
}
