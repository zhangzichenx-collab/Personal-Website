import React, { useState } from 'react';
import { Mail, Menu, X, Globe, Sparkles, Download } from 'lucide-react';
import { TabType, Language } from '../types';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { key: TabType; labelEn: string; labelZh: string }[] = [
    { key: 'home', labelEn: 'Home', labelZh: '首页' },
    { key: 'about', labelEn: 'About', labelZh: '关于我' },
    { key: 'articles', labelEn: 'Articles', labelZh: '文章' },
    { key: 'videos', labelEn: 'Videos', labelZh: '视频' },
    { key: 'products', labelEn: 'Products', labelZh: '产品' },
    { key: 'study-china', labelEn: 'Study in China', labelZh: '留学中国' },
  ];

  const handleTabClick = (key: TabType) => {
    setActiveTab(key);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-4 z-40 w-full px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
      {/* Floating Pill Nav */}
      <nav
        id="main-navigation"
        className="bg-white border-[2.5px] border-black rounded-full px-4 sm:px-6 py-2.5 shadow-[4px_4px_0px_#000000] flex items-center justify-between transition-all"
      >
        {/* Brand / Logo */}
        <button
          onClick={() => handleTabClick('home')}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          title="John Carter Portfolio"
        >
          {/* Circular Bold Ring Icon matching screenshot */}
          <div className="w-8 h-8 rounded-full border-[3px] border-black flex items-center justify-center bg-white group-hover:scale-105 transition-transform">
            <div className="w-2.5 h-2.5 rounded-full bg-black group-hover:bg-[#FF5C67] transition-colors" />
          </div>
          <span className="font-extrabold text-lg tracking-tight hidden sm:inline-block">
            Paperfolio
          </span>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => handleTabClick(item.key)}
                className={`relative px-3 py-1 text-sm transition-all cursor-pointer ${
                  isActive
                    ? 'border-2 border-black rounded-lg font-black bg-white shadow-[2px_2px_0px_#000000] text-black'
                    : 'text-black font-bold hover:bg-gray-100 rounded-lg'
                }`}
              >
                <span>{lang === 'zh' ? item.labelZh : item.labelEn}</span>
                {isActive && (
                  <span className="sr-only">(current)</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Actions: Lang Switcher & Contact Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-full border-[1.5px] border-black bg-gray-50 hover:bg-[#FFC01E] transition-colors cursor-pointer"
            title="Switch Language / 切换语言"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? 'EN' : '中文'}</span>
          </button>

          {/* Contact Pill / Button */}
          <button
            id="nav-contact-button"
            onClick={onOpenContact}
            className="w-9 h-9 rounded-xl sm:rounded-2xl bg-black text-white flex items-center justify-center border-[2px] border-black hover:bg-[#FF5C67] hover:text-white transition-all cursor-pointer shadow-[2px_2px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5"
            title={lang === 'zh' ? '联系我' : 'Get in touch'}
          >
            <Mail className="w-4 h-4" />
          </button>

          {/* Direct Download ZIP Button */}
          <a
            id="download-zip-button"
            href="/simon-portfolio.zip"
            download="simon-portfolio.zip"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#22C55E] text-black font-black text-xs border-[2px] border-black shadow-[2px_2px_0px_#000000] hover:bg-black hover:text-white hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
            title={lang === 'zh' ? '下载整站代码压缩包 (ZIP)' : 'Download Source Code (ZIP)'}
          >
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{lang === 'zh' ? '下载源码' : 'Download ZIP'}</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg border-2 border-black hover:bg-gray-100 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                    ? 'bg-black text-white shadow-[2px_2px_0px_#000000]'
                    : 'text-black hover:bg-gray-100'
                }`}
              >
                {lang === 'zh' ? item.labelZh : item.labelEn}
              </button>
            );
          })}
          <div className="pt-2 border-t border-gray-200 flex flex-col gap-2">
            <a
              href="/simon-portfolio.zip"
              download="simon-portfolio.zip"
              className="w-full py-2 bg-[#22C55E] text-black font-black rounded-xl border-2 border-black shadow-[2px_2px_0px_#000000] text-center flex items-center justify-center gap-2 text-sm"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>{lang === 'zh' ? '下载源码压缩包 (ZIP)' : 'Download Source ZIP'}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2 bg-[#FF5C67] text-white font-bold rounded-xl border-2 border-black shadow-[2px_2px_0px_#000000] text-center flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>{lang === 'zh' ? '立即联系' : 'Get in Touch'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
