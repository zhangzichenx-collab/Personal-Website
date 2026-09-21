import React from "react";
import { Github, Tv } from "lucide-react";
import { TabType, Language } from "../types";
import { pick } from "../i18n";

interface FooterProps {
  onNavigate: (tab: TabType) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const navItems: { key: TabType; labelZh: string; labelEn: string; labelRu: string }[] = [
    { key: "home", labelZh: "首页", labelEn: "Home", labelRu: "Главная" },
    { key: "about", labelZh: "关于我", labelEn: "About", labelRu: "Обо мне" },
    { key: "articles", labelZh: "文章", labelEn: "Articles", labelRu: "Статьи" },
    { key: "videos", labelZh: "视频", labelEn: "Videos", labelRu: "Видео" },
    { key: "products", labelZh: "产品", labelEn: "Products", labelRu: "Продукты" },
    { key: "study-china", labelZh: "留学中国", labelEn: "Study in China", labelRu: "Учёба в Китае" },
  ];

  return (
    <footer className="w-full bg-[#070707] text-white pt-16 pb-12 mt-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <span className="text-3xl sm:text-4xl font-black tracking-tight">
              {pick(
                lang,
                "让我们一起创造",
                "Let's build something",
                "Давайте создадим что-то",
              )}
              <br />
              {pick(
                lang,
                "一些不平凡的东西。",
                "extraordinary together.",
                "необыкновенное вместе.",
              )}
            </span>
            <p className="text-gray-400 text-base mt-8">
              {pick(
                lang,
                "一定会成为一个合格的商人！",
                "Bound to become a qualified businessman!",
                "Я обязательно стану настоящим предпринимателем!",
              )}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">
              <span className="relative inline-block">
                {pick(lang, "探索", "Explore", "Навигация")}
                <span className="absolute left-0 -bottom-1.5 h-[3px] w-full bg-[#FF5C67] rounded-full"></span>
              </span>
            </h4>
            <ul className="space-y-4 text-base text-gray-300">
              {navItems.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => {
                      onNavigate(item.key);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="hover:text-[#FFC01E] transition-colors cursor-pointer"
                  >
                    {pick(lang, item.labelZh, item.labelEn, item.labelRu)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect: Social Badges */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">
              <span className="relative inline-block">
                {pick(lang, "联系", "Connect", "Контакты")}
                <span className="absolute left-0 -bottom-1.5 h-[3px] w-full bg-[#3884FF] rounded-full"></span>
              </span>
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="#github"
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl bg-white text-black flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#bilibili"
                aria-label="Bilibili"
                className="w-11 h-11 rounded-xl bg-white text-black flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer"
              >
                <Tv className="w-5 h-5" />
              </a>
              <a
                href="#red"
                aria-label="Xiaohongshu RED"
                className="w-11 h-11 rounded-xl bg-white text-black flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer text-sm font-black tracking-tight"
              >
                RED
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center space-y-4">
          <p className="text-sm sm:text-base text-gray-400">
            © 2026 一晨. {pick(lang, "保留所有权利。", "All rights reserved.", "Все права защищены.")}
          </p>
          <div className="flex items-center justify-center gap-8 text-xs sm:text-sm text-gray-500">
            <span className="hover:text-gray-300 cursor-pointer transition-colors">
              {pick(lang, "隐私政策", "Privacy Policy", "Политика конфиденциальности")}
            </span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors">
              {pick(lang, "服务条款", "Terms of Service", "Условия использования")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
