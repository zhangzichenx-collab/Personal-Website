import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, CheckCircle2, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { TabType, Language } from '../types';
import { NewsletterEnvelopeVector } from './Illustrations';

interface FooterProps {
  onNavigate: (tab: TabType) => void;
  lang: Language;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang, onOpenContact }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="w-full bg-[#070707] text-white pt-16 pb-12 mt-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Floating Banner */}
        <div className="relative mb-20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Blue Circle Icon */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 -mb-6 md:mb-0 z-10">
              <NewsletterEnvelopeVector className="w-full h-full" />
            </div>

            {/* White Pill Banner Card */}
            <div className="flex-1 w-full bg-white text-black border-[2.5px] border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#FFC01E] flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {lang === 'zh' ? '订阅我的设计周刊' : 'Subscribe to my newsletter'}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {lang === 'zh'
                    ? '每周日发送最新设计思考、实战 Figma 技巧与优质工具推荐。'
                    : 'Get weekly design essays, Figma tricks, and curations directly to your inbox.'}
                </p>
              </div>

              {/* Input & Button Pill */}
              <form
                onSubmit={handleSubscribe}
                className="w-full md:w-auto flex-1 max-w-md"
              >
                {subscribed ? (
                  <div className="flex items-center gap-2 bg-[#ECFDF5] border-2 border-[#10B981] text-[#065F46] font-bold px-5 py-3 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                    <span>{lang === 'zh' ? '订阅成功！感谢你的支持 🎉' : 'Subscribed! Check your inbox soon 🎉'}</span>
                  </div>
                ) : (
                  <div className="flex items-center bg-white border-[2.5px] border-black rounded-full p-1.5 shadow-[3px_3px_0px_#000000]">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={lang === 'zh' ? '输入你的邮箱地址...' : 'Enter your email address'}
                      className="flex-1 px-4 py-2 bg-transparent text-sm text-black placeholder-gray-400 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-black text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#FF5C67] transition-all cursor-pointer shadow-[2px_2px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5"
                    >
                      {lang === 'zh' ? '立即订阅' : 'Subscribe'}
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#FFC01E] flex items-center justify-center text-black font-extrabold text-lg">
                JC
              </div>
              <span className="text-2xl font-black tracking-tight">Paperfolio X</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
              {lang === 'zh'
                ? '专注于打造兼具视觉辨识度与极简易用性的数字体验。致力于用新野兽派与插画美学赋予界面鲜活生命力。'
                : 'Crafting expressive, functional, and visually impactful digital products with playful neo-brutalist craftsmanship.'}
            </p>

            {/* Social Circle Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center border-2 border-black hover:-translate-y-1 transition-transform shadow-[2px_2px_0px_#FFFFFF]"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center border-2 border-black hover:-translate-y-1 transition-transform shadow-[2px_2px_0px_#FFFFFF]"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#FF5C67] text-white flex items-center justify-center border-2 border-black hover:-translate-y-1 transition-transform shadow-[2px_2px_0px_#FFFFFF]"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center border-2 border-black hover:-translate-y-1 transition-transform shadow-[2px_2px_0px_#FFFFFF]"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center border-2 border-black hover:-translate-y-1 transition-transform shadow-[2px_2px_0px_#FFFFFF]"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold text-white text-base mb-4 tracking-wide">
              {lang === 'zh' ? '页面导航' : 'Pages'}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FFC01E] transition-colors cursor-pointer"
                >
                  {lang === 'zh' ? '首页 Home' : 'Home'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FFC01E] transition-colors cursor-pointer"
                >
                  {lang === 'zh' ? '关于我 About' : 'About'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('articles');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FFC01E] transition-colors cursor-pointer"
                >
                  {lang === 'zh' ? '我的文章 Articles' : 'Articles'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('videos');
                  }}
                  className="hover:text-[#FFC01E] transition-colors cursor-pointer"
                >
                  {lang === 'zh' ? '精选视频 Videos' : 'Videos'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('products');
                  }}
                  className="hover:text-[#FFC01E] transition-colors cursor-pointer"
                >
                  {lang === 'zh' ? 'Vibe Coding 产品' : 'Vibe Products'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('study-china');
                  }}
                  className="hover:text-[#FFC01E] transition-colors cursor-pointer"
                >
                  {lang === 'zh' ? '留学中国录取展厅' : 'Study in China'}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-[#FFC01E] transition-colors cursor-pointer"
                >
                  {lang === 'zh' ? '联系我 Contact' : 'Contact'}
                </button>
              </li>
            </ul>
          </div>

          {/* Utility Pages */}
          <div>
            <h4 className="font-bold text-white text-base mb-4 tracking-wide">
              {lang === 'zh' ? '快捷指南' : 'Utility Pages'}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <span className="hover:text-gray-200 cursor-pointer">
                  {lang === 'zh' ? '设计规范 (Style Guide)' : 'Style Guide'}
                </span>
              </li>
              <li>
                <span className="hover:text-gray-200 cursor-pointer">
                  {lang === 'zh' ? '新手入门 (Start Here)' : 'Start Here'}
                </span>
              </li>
              <li>
                <span className="hover:text-gray-200 cursor-pointer">
                  {lang === 'zh' ? '404 页面 (404 Page)' : '404 Not Found'}
                </span>
              </li>
              <li>
                <span className="hover:text-gray-200 cursor-pointer">
                  {lang === 'zh' ? '授权许可 (Licenses)' : 'Licenses'}
                </span>
              </li>
              <li>
                <span className="hover:text-gray-200 cursor-pointer">
                  {lang === 'zh' ? '更新日志 (Changelog)' : 'Changelog'}
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-white text-base mb-4 tracking-wide">
              {lang === 'zh' ? '联系方式' : 'Contact us'}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#FF5C67]" />
                <a href="mailto:john@carterdesign.com">nikhil@helpinggeeks.com</a>
              </li>
              <li className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#3884FF]" />
                <a href="tel:+919000057810">+91-9000057810</a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="px-4 py-2 bg-white text-black font-extrabold rounded-xl border-2 border-white hover:bg-[#FFC01E] hover:border-[#FFC01E] transition-all shadow-[2px_2px_0px_#FFFFFF] text-xs cursor-pointer"
                >
                  {lang === 'zh' ? '发起项目咨询 🚀' : 'Start a Project 🚀'}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            {lang === 'zh'
              ? '由 John Carter 设计与开发 · 灵感源自 Paperfolio X'
              : 'Made with craft by John Carter · Powered by Paperfolio X'}
          </p>
          <div className="flex items-center gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
