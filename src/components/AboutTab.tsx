import React, { useState } from 'react';
import {
  BookOpen,
  Tv,
  Wrench,
  GraduationCap,
  BarChart3,
  Rocket,
  ShoppingBag,
  TrendingDown,
  Code,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Heart,
  ChevronUp,
} from 'lucide-react';
import { Language, TabType } from '../types';
import { XimenIdCard } from './XimenIdCard';

interface AboutTabProps {
  onNavigate: (tab: TabType) => void;
  lang: Language;
  onOpenContact: () => void;
}

export const AboutTab: React.FC<AboutTabProps> = ({ onNavigate, lang, onOpenContact }) => {
  const [activeUpdateModal, setActiveUpdateModal] = useState<string | null>(null);

  return (
    <div className="space-y-16 sm:space-y-24 py-4 sm:py-8">
      {/* =========================================================================
          SECTION 1: HERO & ID CARD (Matches Screenshot 1: 截屏2026-09-07 20.35.00.png)
      ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Bio Column */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          {/* Main Big Title */}
          <div>
            <span className="block text-4xl sm:text-6xl lg:text-7xl font-black text-black tracking-tight leading-none mb-3 sm:mb-4">
              Welcome to
            </span>
            <div className="inline-block bg-[#3884FF] text-white px-5 sm:px-7 py-2 sm:py-3 rounded-2xl border-[3px] border-black shadow-[5px_5px_0px_#000000]">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                {lang === 'zh' ? '西门的世界！' : "Ximen's World!"}
              </h1>
            </div>
          </div>

          {/* Bio Paragraphs */}
          <div className="space-y-5 text-base sm:text-lg font-medium text-gray-800 leading-relaxed max-w-xl">
            <p>
              {lang === 'zh'
                ? '我出生于 2000 年 5 月，在浙江的一个小村镇长大。'
                : 'Born in May 2000, grew up in a small town in Zhejiang, China.'}
              <br />
              {lang === 'zh'
                ? '家庭环境比较自由，家人都不会对我的选择做过多干涉。'
                : 'Raised in an open and supportive family where my choices were always respected.'}
              <br />
              {lang === 'zh'
                ? '这导致我在肆意生长的过程中，拥有了很多复杂的成分。'
                : 'This allowed me to branch out freely and cultivate a beautifully multifaceted persona.'}
              <br />
              <span className="font-extrabold text-black">
                {lang === 'zh' ? 'Anyway，欢迎来到西门的世界！' : "Anyway, welcome to Ximen's world!"}
              </span>
            </p>

            <div className="pt-1">
              <p className="font-black text-black text-lg sm:text-xl flex items-center gap-2">
                <span>{lang === 'zh' ? '我是一只' : "I'm a"}</span>
                <span className="px-2.5 py-0.5 bg-[#FEF08A] text-black border-2 border-black rounded-lg shadow-[2px_2px_0px_#000000]">
                  {lang === 'zh' ? '高精力死宅' : 'High-Energy Homebody'}
                </span>
              </p>
              <p className="mt-1">
                {lang === 'zh'
                  ? '对出去游山玩水无感，但精力异常旺盛，脑子里idea疯狂溢出。'
                  : 'Not much of an outdoors traveler, yet endlessly energetic with ideas constantly bubbling over.'}
                <br />
                {lang === 'zh'
                  ? '现实中轻微社恐，但在网络上结交了一群素未谋面的电子好友！'
                  : 'Slightly socially anxious offline, yet blessed with wonderful online comrades across the web!'}
              </p>
            </div>

            <div className="pt-1 space-y-1.5 border-l-4 border-black pl-4">
              <p>
                {lang === 'zh'
                  ? '目前在一家 995 的 tob 软件公司做产品经理'
                  : 'Currently a Product Manager at a fast-paced toB enterprise software company'}
              </p>
              <p>
                {lang === 'zh'
                  ? '同时也是一名 B站小 up 主'
                  : 'Also a creator and video maker on Bilibili'}
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                {lang === 'zh'
                  ? '还佛系经营了一家女生情趣用品小店（尽管我观念还是比较传统，咳咳）'
                  : 'And casually running a female wellness / intimate toy shop (even though I am quite traditional at heart, haha)'}
              </p>
            </div>
          </div>
        </div>

        {/* Right ID Card Column */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <XimenIdCard />
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: STATEMENT & RECENT UPDATES (Matches Screenshot 2: 截屏2026-09-07 20.33.26.png)
      ========================================================================= */}
      <section className="space-y-12 sm:space-y-16">
        {/* Big Yellow Statement Box */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#FFD43F] border-[3px] border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000]">
            {/* Statement Top Tag */}
            <div className="absolute -top-3.5 left-6 bg-white border-[2px] border-black px-2.5 py-0.5 rounded-md shadow-[2px_2px_0px_#000000]">
              <span className="text-[10px] font-black tracking-widest uppercase text-black">
                STATEMENT
              </span>
            </div>

            {/* Statement Text */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight text-center leading-snug">
              {lang === 'zh' ? '每一个别人看起来非' : 'Every path that seems untraditional'}
            </h2>
          </div>

          {/* Under-statement subtitle */}
          <div className="text-center mt-6 space-y-2">
            <p className="text-lg sm:text-xl font-black text-black">
              {lang === 'zh'
                ? '我正在朝着自己喜欢的方向前进！'
                : 'I am marching resolutely toward the path I truly love!'}
            </p>
            <p className="text-sm sm:text-base font-bold text-gray-700">
              {lang === 'zh'
                ? '不知道 3年 5年 10年后的我会成为什么样的人，过上什么样的生活呢？'
                : 'Wondering who I will become and what kind of life I will lead in 3, 5, or 10 years?'}
            </p>
          </div>
        </div>

        {/* RECENT UPDATES CONTAINER */}
        <div className="space-y-8">
          {/* Section Pink Slanted Header */}
          <div className="flex items-center gap-4">
            <div className="inline-block bg-[#FF70A6] text-black px-5 sm:px-6 py-2 rounded-xl border-[2.5px] border-black shadow-[4px_4px_0px_#000000] rotate-[-2deg]">
              <h3 className="text-lg sm:text-2xl font-black tracking-tight">
                {lang === 'zh' ? '近日生活 | RECENT UPDATES' : 'Recent Life | RECENT UPDATES'}
              </h3>
            </div>
            {/* Cute decorative doodles */}
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-black font-black">★</span>
              <span className="w-2 h-2 rounded-full bg-[#FFC01E] border border-black inline-block"></span>
              <span className="w-2 h-2 rounded-full bg-[#FF5C67] border border-black inline-block"></span>
            </div>
          </div>

          {/* 3 Life Cards matching screenshot 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* Card 1: 最近在读 */}
            <div
              onClick={() => setActiveUpdateModal('reading')}
              className="bg-white border-[2.5px] border-black rounded-3xl p-6 shadow-[5px_5px_0px_#000000] hover:shadow-[7px_7px_0px_#000000] hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden group"
            >
              {/* Top Row: Icon + Label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#3884FF] border-2 border-black flex items-center justify-center text-white shadow-[2px_2px_0px_#000000]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-base font-black text-black">
                  {lang === 'zh' ? '最近在读' : 'Currently Reading'}
                </span>
              </div>

              {/* Title & Underline */}
              <div className="text-center py-4">
                <span className="text-xl font-black text-black tracking-tight inline-block relative group-hover:text-[#3884FF] transition-colors">
                  {lang === 'zh' ? '《纳瓦尔宝典》' : '《The Almanack of Naval Ravikant》'}
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3884FF] rounded-full"></span>
                </span>
              </div>

              {/* Card Bottom Color Stripe Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#3884FF]"></div>
            </div>

            {/* Card 2: 最近狂刷 */}
            <div
              onClick={() => setActiveUpdateModal('watching')}
              className="bg-white border-[2.5px] border-black rounded-3xl p-6 shadow-[5px_5px_0px_#000000] hover:shadow-[7px_7px_0px_#000000] hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden group"
            >
              {/* Top Row: Icon + Label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FF70A6] border-2 border-black flex items-center justify-center text-white shadow-[2px_2px_0px_#000000]">
                  <Tv className="w-5 h-5" />
                </div>
                <span className="text-base font-black text-black">
                  {lang === 'zh' ? '最近狂刷' : 'Currently Bingeing'}
                </span>
              </div>

              {/* Title & Underline */}
              <div className="text-center py-4">
                <span className="text-xl font-black text-black tracking-tight inline-block relative group-hover:text-[#FF70A6] transition-colors">
                  {lang === 'zh' ? '整太线失事视频' : 'Aviation Disaster Documentaries'}
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-[#FF70A6] rounded-full"></span>
                </span>
              </div>

              {/* Card Bottom Color Stripe Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#FF70A6]"></div>
            </div>

            {/* Card 3: 最近感兴趣 */}
            <div
              onClick={() => setActiveUpdateModal('interest')}
              className="bg-white border-[2.5px] border-black rounded-3xl p-6 shadow-[5px_5px_0px_#000000] hover:shadow-[7px_7px_0px_#000000] hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden group"
            >
              {/* Top Row: Icon + Label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#22C55E] border-2 border-black flex items-center justify-center text-white shadow-[2px_2px_0px_#000000]">
                  <Wrench className="w-5 h-5" />
                </div>
                <span className="text-base font-black text-black">
                  {lang === 'zh' ? '最近感兴趣' : 'Recent Obsession'}
                </span>
              </div>

              {/* Title & Underline */}
              <div className="text-center py-4">
                <span className="text-xl font-black text-black tracking-tight inline-block relative group-hover:text-[#22C55E] transition-colors">
                  {lang === 'zh' ? 'AI 编程' : 'AI & Vibe Coding'}
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-[#22C55E] rounded-full"></span>
                </span>
              </div>

              {/* Card Bottom Color Stripe Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#22C55E]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: EARTH ONLINE GAME PROGRESS (Matches Screenshots 3 & 4: 截屏2026-09-07 20.33.40.png & 20.33.49.png)
      ========================================================================= */}
      <section className="space-y-8">
        {/* Title */}
        <div className="flex items-center gap-3">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black">
            地球Online
          </h2>
          <div className="inline-block bg-[#FF70A6] text-black px-4 sm:px-5 py-1.5 rounded-xl border-[2.5px] border-black shadow-[3px_3px_0px_#000000] rotate-[-1deg]">
            <span className="text-2xl sm:text-4xl font-black">
              {lang === 'zh' ? '开放游戏进度' : 'Game Progress'}
            </span>
          </div>
        </div>

        {/* Blueprint Grid Paper Container */}
        <div
          className="relative bg-white border-[3px] border-black rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_#000000] overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(to right, #F1F5F9 1px, transparent 1px),
              linear-gradient(to bottom, #F1F5F9 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        >
          {/* Main Quest vs Side Quest Headers */}
          <div className="grid grid-cols-2 gap-6 sm:gap-12 mb-10 sm:mb-14">
            {/* Left: 主线任务 */}
            <div className="flex justify-center sm:justify-start">
              <div className="bg-white border-[2.5px] border-black rounded-xl px-5 sm:px-8 py-2.5 shadow-[4px_4px_0px_#FF70A6]">
                <h3 className="text-xl sm:text-2xl font-black text-black">
                  {lang === 'zh' ? '主线任务' : 'Main Quests'}
                </h3>
              </div>
            </div>

            {/* Right: 支线任务 */}
            <div className="flex justify-center sm:justify-end">
              <div className="bg-white border-[2.5px] border-black rounded-xl px-5 sm:px-8 py-2.5 shadow-[4px_4px_0px_#22C55E]">
                <h3 className="text-xl sm:text-2xl font-black text-black">
                  {lang === 'zh' ? '支线任务' : 'Side Quests'}
                </h3>
              </div>
            </div>
          </div>

          {/* Timeline Dual Track Structure */}
          <div className="relative">
            {/* Central Vertical Dashed Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-6 w-0 border-r-[3px] border-dashed border-black hidden sm:block"></div>

            {/* Central Top Arrow Header */}
            <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 -top-8 w-8 h-8 rounded-lg bg-white border-[2.5px] border-black items-center justify-center shadow-[2px_2px_0px_#000000] z-10">
              <ChevronUp className="w-5 h-5 text-black stroke-[3]" />
            </div>

            {/* Chronological Quest Items (Rendered in order of Screenshots 3 & 4) */}
            <div className="space-y-8 sm:space-y-12">
              {/* ITEM 1 (Right - Side Quest): 2026.01 AI 编程 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 items-center">
                <div className="hidden sm:block"></div>
                <div className="relative sm:pl-8">
                  {/* Timeline Node Circle */}
                  <div className="hidden sm:flex absolute -left-[17px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-[3px] border-black items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                  </div>

                  {/* Card Content */}
                  <div className="bg-white border-[2.5px] border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_#FF70A6] flex items-center justify-between gap-4 group hover:-translate-y-0.5 transition-transform">
                    <div className="space-y-1 text-right sm:text-left flex-1">
                      <div className="flex items-center gap-2 justify-end sm:justify-start">
                        <span className="font-mono text-base font-black text-black">2026.01</span>
                        <span className="px-1.5 py-0.5 bg-black text-white text-[10px] font-black rounded">
                          【支线】
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-extrabold text-black">
                        {lang === 'zh'
                          ? '激动地开始 AI 编程，上线了我的个人网站'
                          : 'Excitedly started AI vibe coding and launched my personal website'}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-[#FF70A6] border-2 border-black flex items-center justify-center text-black flex-shrink-0 shadow-[2px_2px_0px_#000000]">
                      <Code className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ITEM 2 (Right - Side Quest): 2025.04 股票账户韭菜 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 items-center">
                <div className="hidden sm:block"></div>
                <div className="relative sm:pl-8">
                  <div className="hidden sm:flex absolute -left-[17px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-[3px] border-black items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                  </div>

                  <div className="bg-white border-[2.5px] border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_#FEF08A] flex items-center justify-between gap-4 group hover:-translate-y-0.5 transition-transform">
                    <div className="space-y-1 text-right sm:text-left flex-1">
                      <div className="flex items-center gap-2 justify-end sm:justify-start">
                        <span className="font-mono text-base font-black text-black">2025.04</span>
                        <span className="px-1.5 py-0.5 bg-black text-white text-[10px] font-black rounded">
                          【支线】
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-extrabold text-black">
                        {lang === 'zh'
                          ? '开通股票账户，一根绿油油的小韭菜诞生！'
                          : 'Opened a stock trading account; a fresh green retail investor was born!'}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-[#FEF08A] border-2 border-black flex items-center justify-center text-black flex-shrink-0 shadow-[2px_2px_0px_#000000]">
                      <TrendingDown className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ITEM 3 (Left - Main Quest): 2025.09 toB 产品经理 RPA + AI */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 items-center">
                <div className="relative sm:pr-8">
                  <div className="hidden sm:flex absolute -right-[17px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-[3px] border-black items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                  </div>

                  <div className="bg-white border-[2.5px] border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_#3884FF] flex items-center gap-4 group hover:-translate-y-0.5 transition-transform">
                    <div className="w-10 h-10 rounded-xl bg-[#3884FF] border-2 border-black flex items-center justify-center text-white flex-shrink-0 shadow-[2px_2px_0px_#000000]">
                      <Rocket className="w-5 h-5 stroke-[2.5]" />
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 bg-black text-white text-[10px] font-black rounded">
                          【主线】
                        </span>
                        <span className="font-mono text-base font-black text-black">2025.09</span>
                      </div>
                      <p className="text-sm sm:text-base font-extrabold text-black">
                        {lang === 'zh'
                          ? 'toB 软件产品经理，RPA + AI 方向'
                          : 'toB Enterprise Product Manager, RPA + AI Direction'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block"></div>
              </div>

              {/* ITEM 4 (Right - Side Quest): 2024.11 发布第一条抽象视频 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 items-center">
                <div className="hidden sm:block"></div>
                <div className="relative sm:pl-8">
                  <div className="hidden sm:flex absolute -left-[17px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-[3px] border-black items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                  </div>

                  <div className="bg-white border-[2.5px] border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_#FF70A6] flex items-center justify-between gap-4 group hover:-translate-y-0.5 transition-transform">
                    <div className="space-y-1 text-right sm:text-left flex-1">
                      <div className="flex items-center gap-2 justify-end sm:justify-start">
                        <span className="font-mono text-base font-black text-black">2024.11</span>
                        <span className="px-1.5 py-0.5 bg-black text-white text-[10px] font-black rounded">
                          【支线】
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-extrabold text-black">
                        {lang === 'zh'
                          ? '发布第一条抽象视频，成为 B 站 up 主'
                          : 'Posted my first surreal video and became a Bilibili creator'}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-[#FF70A6] border-2 border-black flex items-center justify-center text-white flex-shrink-0 shadow-[2px_2px_0px_#000000]">
                      <Tv className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ITEM 5 (Right - Side Quest): 2024.02 开了女生情趣玩具店 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 items-center">
                <div className="hidden sm:block"></div>
                <div className="relative sm:pl-8">
                  <div className="hidden sm:flex absolute -left-[17px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-[3px] border-black items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                  </div>

                  <div className="bg-white border-[2.5px] border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_#3884FF] flex items-center justify-between gap-4 group hover:-translate-y-0.5 transition-transform">
                    <div className="space-y-1 text-right sm:text-left flex-1">
                      <div className="flex items-center gap-2 justify-end sm:justify-start">
                        <span className="font-mono text-base font-black text-black">2024.02</span>
                        <span className="px-1.5 py-0.5 bg-black text-white text-[10px] font-black rounded">
                          【支线】
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-extrabold text-black">
                        {lang === 'zh'
                          ? '开了一家女生情趣玩具店'
                          : 'Launched an indie female intimate toy store'}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-[#3884FF] border-2 border-black flex items-center justify-center text-white flex-shrink-0 shadow-[2px_2px_0px_#000000]">
                      <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ITEM 6 (Left - Main Quest): 2023.07 toB 软件产品经理 BI 方向 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 items-center">
                <div className="relative sm:pr-8">
                  <div className="hidden sm:flex absolute -right-[17px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-[3px] border-black items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                  </div>

                  <div className="bg-white border-[2.5px] border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_#FF70A6] flex items-center gap-4 group hover:-translate-y-0.5 transition-transform">
                    <div className="w-10 h-10 rounded-xl bg-[#FF70A6] border-2 border-black flex items-center justify-center text-black flex-shrink-0 shadow-[2px_2px_0px_#000000]">
                      <BarChart3 className="w-5 h-5 stroke-[2.5]" />
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 bg-black text-white text-[10px] font-black rounded">
                          【主线】
                        </span>
                        <span className="font-mono text-base font-black text-black">2023.07</span>
                      </div>
                      <p className="text-sm sm:text-base font-extrabold text-black">
                        {lang === 'zh'
                          ? 'toB 软件产品经理，BI 方向'
                          : 'toB Enterprise Product Manager, BI Analytics'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block"></div>
              </div>

              {/* ITEM 7 (Left - Main Quest): 2023.06 本科毕业于上海脚痛大学 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 items-center">
                <div className="relative sm:pr-8">
                  <div className="hidden sm:flex absolute -right-[17px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-[3px] border-black items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                  </div>

                  <div className="bg-white border-[2.5px] border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_#22C55E] flex items-center gap-4 group hover:-translate-y-0.5 transition-transform">
                    <div className="w-10 h-10 rounded-xl bg-[#22C55E] border-2 border-black flex items-center justify-center text-white flex-shrink-0 shadow-[2px_2px_0px_#000000]">
                      <GraduationCap className="w-5 h-5 stroke-[2.5]" />
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 bg-black text-white text-[10px] font-black rounded">
                          【主线】
                        </span>
                        <span className="font-mono text-base font-black text-black">2023.06</span>
                      </div>
                      <p className="text-sm sm:text-base font-extrabold text-black">
                        {lang === 'zh'
                          ? '本科毕业于上海脚痛大学，电气工程，和老学长同一个专业'
                          : 'Graduated with a Bachelor from SJTU in Electrical Engineering (same major as the senior!)'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE MODAL: For Recent Updates Reading / Watching / Interest details
      ========================================================================= */}
      {activeUpdateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white border-[3px] border-black rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-[8px_8px_0px_#000000] space-y-4 animate-in fade-in zoom-in-95 duration-150">
            {activeUpdateModal === 'reading' && (
              <>
                <div className="w-12 h-12 rounded-2xl bg-[#3884FF] border-2 border-black flex items-center justify-center text-white shadow-[2px_2px_0px_#000000]">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-black">《纳瓦尔宝典》</h4>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                  {lang === 'zh'
                    ? '“依靠专长，而不是依靠努力；获得杠杆，而不是靠出卖时间。” 这本书里对认知、财富和幸福感的见解常读常新，是西门近期桌面常备读物！'
                    : 'A must-read handbook on specific knowledge, productized leverage, and peace of mind.'}
                </p>
              </>
            )}

            {activeUpdateModal === 'watching' && (
              <>
                <div className="w-12 h-12 rounded-2xl bg-[#FF70A6] border-2 border-black flex items-center justify-center text-white shadow-[2px_2px_0px_#000000]">
                  <Tv className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-black">整太线失事视频 & 航空安全调查</h4>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                  {lang === 'zh'
                    ? '重度空难调查纪录片爱好者！看似枯燥的黑匣子数据与工程失误复盘，背后是极其严谨的系统可靠性哲学。'
                    : 'Deeply obsessed with air crash investigations, black box telemetry, and complex system reliability engineering.'}
                </p>
              </>
            )}

            {activeUpdateModal === 'interest' && (
              <>
                <div className="w-12 h-12 rounded-2xl bg-[#22C55E] border-2 border-black flex items-center justify-center text-white shadow-[2px_2px_0px_#000000]">
                  <Wrench className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-black">AI 编程 & Vibe Coding</h4>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                  {lang === 'zh'
                    ? '不需要深陷环境配置，深夜一边听歌一边敲击 prompt，几小时内就能把脑子里的无厘头 idea 具象化为真实网站，极其上头！'
                    : 'Late-night coding sessions powered by LLMs. Idea to interactive web app in hours!'}
                </p>
              </>
            )}

            <button
              onClick={() => setActiveUpdateModal(null)}
              className="w-full py-3 bg-black text-white font-black rounded-xl border-2 border-black shadow-[3px_3px_0px_#FFC01E] hover:bg-[#FF70A6] hover:text-black transition-colors cursor-pointer text-sm mt-4"
            >
              {lang === 'zh' ? '关 闭' : 'Close'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
