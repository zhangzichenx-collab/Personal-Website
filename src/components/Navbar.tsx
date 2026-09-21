import React, { useState, useRef, useEffect } from "react";
import { Mail, Menu, X, Languages } from "lucide-react";
import { TabType, Language } from "../types";
import { pick } from "../i18n";

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenContact: () => void;
}

const LANG_OPTIONS: { code: Language; label: string; fullLabel: string }[] = [
  { code: "zh", label: "中", fullLabel: "中文" },
  { code: "en", label: "EN", fullLabel: "English" },
  { code: "ru", label: "RU", fullLabel: "Русский" },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(e.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navItems: {
    key: TabType;
    labelEn: string;
    labelZh: string;
    labelRu: string;
  }[] = [
    { key: "home", labelEn: "Home", labelZh: "首页", labelRu: "Главная" },
    { key: "about", labelEn: "About", labelZh: "关于我", labelRu: "Обо мне" },
    {
      key: "articles",
      labelEn: "Articles",
      labelZh: "文章",
      labelRu: "Статьи",
    },
    { key: "videos", labelEn: "Videos", labelZh: "视频", labelRu: "Видео" },
    {
      key: "products",
      labelEn: "Products",
      labelZh: "产品",
      labelRu: "Продукты",
    },
    {
      key: "study-china",
      labelEn: "Study in China",
      labelZh: "留学中国",
      labelRu: "Учёба в Китае",
    },
  ];

  const handleTabClick = (key: TabType) => {
    setActiveTab(key);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-40 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
      {/* Floating Pill Nav */}
      <nav
        id="main-navigation"
        className="bg-white border-[2.5px] border-black rounded-full px-4 sm:px-6 py-2.5 shadow-[4px_4px_0px_#000000] flex items-center justify-end gap-2 sm:gap-3 transition-all relative"
      >
        {/* Mobile Menu Toggle (absolute inside pill left) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-lg border-2 border-black hover:bg-gray-100 cursor-pointer absolute left-2 sm:left-3"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-2 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => {
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => handleTabClick(item.key)}
                className={`relative px-3 py-1 text-sm whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "border-2 border-black rounded-lg font-black bg-white shadow-[2px_2px_0px_#000000] text-black"
                    : "text-black font-bold hover:bg-gray-100 rounded-lg"
                }`}
              >
                <span>
                  {pick(lang, item.labelZh, item.labelEn, item.labelRu)}
                </span>
                {isActive && <span className="sr-only">(current)</span>}
              </button>
            );
          })}
        </div>

        {/* Right Actions: Lang Switcher & Contact Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Dropdown Switcher */}
          <div ref={langDropdownRef} className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1 px-2.5 py-1 bg-gray-100 border-2 border-black rounded-full text-[11px] sm:text-xs font-black shadow-[2px_2px_0px_#000000] hover:bg-gray-200 transition-all cursor-pointer"
              aria-label="Language switcher"
              aria-haspopup="true"
              aria-expanded={langDropdownOpen}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{LANG_OPTIONS.find((o) => o.code === lang)?.label}</span>
            </button>
            {langDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000] overflow-hidden z-50 min-w-[120px]">
                {LANG_OPTIONS.map((option) => (
                  <button
                    key={option.code}
                    onClick={() => {
                      setLang(option.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`flex items-center gap-2 px-3 py-2 text-xs font-bold w-full text-left transition-colors cursor-pointer ${
                      lang === option.code
                        ? "bg-black text-white"
                        : "text-black hover:bg-gray-100"
                    }`}
                  >
                    <span className="font-black w-5">{option.label}</span>
                    <span>{option.fullLabel}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contact Pill / Button */}
          <button
            id="nav-contact-button"
            onClick={onOpenContact}
            className="w-9 h-9 rounded-xl sm:rounded-2xl bg-black text-white flex items-center justify-center border-[2px] border-black hover:bg-[#FF5C67] hover:text-white transition-all cursor-pointer shadow-[2px_2px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5"
            title={pick(lang, "联系我", "Get in touch", "Связаться")}
          >
            <Mail className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white border-2 border-black rounded-2xl p-4 shadow-[4px_4px_0px_#000000] flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => handleTabClick(item.key)}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-base transition-colors ${
                  isActive
                    ? "bg-black text-white shadow-[2px_2px_0px_#000000]"
                    : "text-black hover:bg-gray-100"
                }`}
              >
                {pick(lang, item.labelZh, item.labelEn, item.labelRu)}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
