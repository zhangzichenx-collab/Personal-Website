import React, { useState } from "react";
import { motion } from "motion/react";
import {
  BookOpen,
  Tv,
  Wrench,
  GraduationCap,
  Bot,
  Video,
  Sprout,
  Laptop,
  Code,
  Heart,
  ChevronUp,
} from "lucide-react";
import { Language } from "../types";
import { XimenIdCard } from "./XimenIdCard";
import { pick } from "../i18n";

interface AboutTabProps {
  lang: Language;
}

export const AboutTab: React.FC<AboutTabProps> = ({ lang }) => {
  const [activeUpdateModal, setActiveUpdateModal] = useState<string | null>(
    null,
  );

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
              {pick(lang, "欢迎来到", "Welcome to", "Добро пожаловать в")}
            </span>
            <div className="inline-block bg-[#3884FF] text-white px-5 sm:px-7 py-2 sm:py-3 rounded-2xl border-[3px] border-black shadow-[5px_5px_0px_#000000]">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                {pick(lang, "一晨的世界！", "Yichen's World!", "Мир Ичена!")}
              </h1>
            </div>
          </div>

          {/* Bio Paragraphs */}
          <div className="space-y-5 text-base sm:text-lg font-medium text-gray-800 leading-relaxed max-w-xl">
            <p>
              {pick(
                lang,
                "我出生于2003年，在河北邯郸长大。",
                "Born in 2003, grew up in Handan, Hebei, China.",
                "Я родился в 2003 году и вырос в Хандане, провинция Хэбэй.",
              )}
              <br />
              {pick(
                lang,
                "家庭氛围松弛，家人尊重大部分我的个人选择，不会强行把人生轨道强加于我。",
                "Raised in a relaxed family where most of my personal choices were respected, never forced onto a preset life track.",
                "Семья давала много свободы: мой выбор уважали и не навязывали заранее заданный путь.",
              )}
              <br />
              {pick(
                lang,
                "也正因如此，我在自我摸索的路上野蛮生长，身上混杂很多矛盾又复杂的特质。",
                "Because of this, I grew up wild and free on my own path, a mix of contradictory and complex traits.",
                "Поэтому я рос, нащупывая путь сам, — во мне смешано много противоречивых и сложных черт.",
              )}
              <br />
              <span className="font-extrabold text-black">
                {pick(
                  lang,
                  "Anyway，欢迎来到我的小世界！",
                  "Anyway, welcome to my little world!",
                  "Как бы то ни было, добро пожаловать в мой маленький мир!",
                )}
              </span>
            </p>

            <div className="pt-1">
              <p className="font-black text-black text-lg sm:text-xl flex items-center gap-2">
                <span>{pick(lang, "我是一只", "I'm a", "Я")}</span>
                <span className="px-2.5 py-0.5 bg-[#FEF08A] text-black border-2 border-black rounded-lg shadow-[2px_2px_0px_#000000]">
                  {pick(
                    lang,
                    "放电的脑洞兽",
                    "High-Voltage Idea Beast",
                    "высоковольтный зверь идей",
                  )}
                </span>
              </p>
              <p className="mt-1">
                {pick(
                  lang,
                  "对出去游山玩水无感，但精力异常旺盛，脑子里idea疯狂溢出。",
                  "Not much of an outdoors traveler, yet endlessly energetic with ideas constantly bubbling over.",
                  "Равнодушен к путешествиям и видам, но энергия бьёт ключом, а идеи переполняют голову.",
                )}
                <br />
                {pick(
                  lang,
                  "现实中轻微社恐，但在网络上结交了一群素未谋面的电子好友！",
                  "Slightly socially anxious offline, yet blessed with wonderful online comrades across the web!",
                  "В жизни слегка социофоб, зато в сети нашёл кучу электронных друзей, которых никогда не видел!",
                )}
              </p>
            </div>

            <div className="pt-1 space-y-1.5 border-l-4 border-black pl-4">
              <p>
                {pick(
                  lang,
                  "目前做留学中国项目营收10w+",
                  "Currently running a Study-in-China service with 100k+ RMB revenue",
                  "Сейчас веду проект «Учёба в Китае» с выручкой 100k+",
                )}
              </p>
              <p>
                {pick(
                  lang,
                  "同时也是一名小up主",
                  "Also a small video creator on Douyin",
                  "А ещё я небольшой видеоблогер",
                )}
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                {pick(
                  lang,
                  "还经营GPT代充、蓝V开通、VPN安装等项目",
                  "Also running side services: GPT top-up, Blue V verification, and VPN setup",
                  "Попутно делаю: пополнение GPT, верификация Blue V, настройка VPN",
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Right ID Card Column */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <XimenIdCard lang={lang} />
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: STATEMENT & RECENT UPDATES (Matches Screenshot 2: 截屏2026-09-07 20.33.26.png)
      ========================================================================= */}
      <section className="space-y-12 sm:space-y-16">
        {/* Big Yellow Statement Box */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 48, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -0.5 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            whileHover={{ rotate: 0.5, scale: 1.015 }}
            className="relative bg-[#FFD43F] border-[3px] border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] hover:shadow-[9px_9px_0px_#000000] transition-shadow overflow-hidden"
          >
            {/* Animated shimmer highlight */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.55) 50%, transparent 60%)",
                backgroundSize: "250% 100%",
              }}
              animate={{ backgroundPositionX: ["120%", "-20%"] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                repeatDelay: 2.8,
                ease: "easeInOut",
              }}
            />

            {/* Statement Top Tag */}
            <motion.div
              initial={{ opacity: 0, y: -18, rotate: 6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 12,
                delay: 0.25,
              }}
              className="absolute -top-3.5 left-6 bg-white border-[2px] border-black px-2.5 py-0.5 rounded-md shadow-[2px_2px_0px_#000000]"
            >
              <motion.span
                className="text-[10px] font-black tracking-widest uppercase text-black inline-block"
                animate={{ rotate: [0, -4, 4, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  repeatDelay: 1.6,
                  ease: "easeInOut",
                }}
              >
                STATEMENT
              </motion.span>
            </motion.div>

            {/* Statement Text — per-character stagger reveal */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight text-center leading-snug">
              {pick(
                lang,
                "每一个大多数人看起来离经叛道的选择都让我很兴奋",
                "Every choice that looks unorthodox to most people thrills me",
                "Меня восхищает каждый выбор, который большинству кажется безрассудным",
              )
                .split("")
                .map((ch, i) => (
                  <motion.span
                    key={`${lang}-${i}`}
                    className="inline-block"
                    initial={{ opacity: 0, y: 22, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 18,
                      delay: 0.15 + i * 0.05,
                    }}
                  >
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                ))}
            </h2>
          </motion.div>

          {/* Under-statement subtitle */}
          <div className="text-center mt-6 space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.55,
                type: "spring",
                stiffness: 140,
                damping: 16,
              }}
              className="text-lg sm:text-xl font-black text-black"
            >
              {pick(
                lang,
                "我正在朝着自己喜欢的方向前进！",
                "I am marching resolutely toward the path I truly love!",
                "Я уверенно иду к тому, что мне по-настоящему нравится!",
              )}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.7,
                type: "spring",
                stiffness: 140,
                damping: 16,
              }}
              className="text-sm sm:text-base font-bold text-gray-700"
            >
              {pick(
                lang,
                "不知道 3年 5年 10年后的我会成为什么样的人，过上什么样的生活呢？",
                "Wondering who I will become and what kind of life I will lead in 3, 5, or 10 years?",
                "Интересно, кем я стану и как буду жить через 3, 5, 10 лет?",
              )}
            </motion.p>
          </div>
        </div>

        {/* RECENT UPDATES CONTAINER */}
        <div className="space-y-8">
          {/* Section Pink Slanted Header */}
          <div className="flex items-center gap-4">
            <div className="inline-block bg-[#FF70A6] text-black px-5 sm:px-6 py-2 rounded-xl border-[2.5px] border-black shadow-[4px_4px_0px_#000000] rotate-[-2deg]">
              <h3 className="text-lg sm:text-2xl font-black tracking-tight">
                {pick(
                  lang,
                  "近日生活 | RECENT UPDATES",
                  "Recent Life | RECENT UPDATES",
                  "Недавнее | ОБНОВЛЕНИЯ",
                )}
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
              onClick={() => setActiveUpdateModal("reading")}
              className="bg-white border-[2.5px] border-black rounded-3xl p-6 shadow-[5px_5px_0px_#000000] hover:shadow-[7px_7px_0px_#000000] hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden group"
            >
              {/* Top Row: Icon + Label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#3884FF] border-2 border-black flex items-center justify-center text-white shadow-[2px_2px_0px_#000000]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-base font-black text-black">
                  {pick(lang, "最近在读", "Currently Reading", "Сейчас читаю")}
                </span>
              </div>

              {/* Title & Underline */}
              <div className="text-center py-4">
                <span className="text-xl font-black text-black tracking-tight inline-block relative group-hover:text-[#3884FF] transition-colors">
                  {pick(
                    lang,
                    "《控糖革命》",
                    "《Glucose Revolution》",
                    "«Глюкозная революция»",
                  )}
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3884FF] rounded-full"></span>
                </span>
              </div>

              {/* Card Bottom Color Stripe Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#3884FF]"></div>
            </div>

            {/* Card 2: 最近狂刷 */}
            <div
              onClick={() => setActiveUpdateModal("watching")}
              className="bg-white border-[2.5px] border-black rounded-3xl p-6 shadow-[5px_5px_0px_#000000] hover:shadow-[7px_7px_0px_#000000] hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden group"
            >
              {/* Top Row: Icon + Label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FF70A6] border-2 border-black flex items-center justify-center text-white shadow-[2px_2px_0px_#000000]">
                  <Tv className="w-5 h-5" />
                </div>
                <span className="text-base font-black text-black">
                  {pick(
                    lang,
                    "最近狂刷",
                    "Currently Bingeing",
                    "Сейчас смотрю",
                  )}
                </span>
              </div>

              {/* Title & Underline */}
              <div className="text-center py-4">
                <span className="text-xl font-black text-black tracking-tight inline-block relative group-hover:text-[#FF70A6] transition-colors">
                  {pick(
                    lang,
                    "汉堡节",
                    "French Pastry Videos",
                    "Видео о французских десертах",
                  )}
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-[#FF70A6] rounded-full"></span>
                </span>
              </div>

              {/* Card Bottom Color Stripe Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#FF70A6]"></div>
            </div>

            {/* Card 3: 最近感兴趣 */}
            <div
              onClick={() => setActiveUpdateModal("interest")}
              className="bg-white border-[2.5px] border-black rounded-3xl p-6 shadow-[5px_5px_0px_#000000] hover:shadow-[7px_7px_0px_#000000] hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden group"
            >
              {/* Top Row: Icon + Label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#22C55E] border-2 border-black flex items-center justify-center text-white shadow-[2px_2px_0px_#000000]">
                  <Wrench className="w-5 h-5" />
                </div>
                <span className="text-base font-black text-black">
                  {pick(
                    lang,
                    "最近感兴趣",
                    "Recent Obsession",
                    "Недавнее увлечение",
                  )}
                </span>
              </div>

              {/* Title & Underline */}
              <div className="text-center py-4">
                <span className="text-xl font-black text-black tracking-tight inline-block relative group-hover:text-[#22C55E] transition-colors">
                  {pick(
                    lang,
                    "AI 编程",
                    "AI & Vibe Coding",
                    "ИИ-кодинг и Vibe Coding",
                  )}
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
            {pick(lang, "地球Online", "Earth Online", "Земля Online")}
          </h2>
          <div className="inline-block bg-[#FF70A6] text-black px-4 sm:px-5 py-1.5 rounded-xl border-[2.5px] border-black shadow-[3px_3px_0px_#000000] rotate-[-1deg]">
            <span className="text-2xl sm:text-4xl font-black">
              {pick(lang, "开放游戏进度", "Game Progress", "Прогресс в игре")}
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
            backgroundSize: "24px 24px",
          }}
        >
          {/* Main Quest vs Side Quest Headers */}
          <div className="grid grid-cols-2 gap-6 sm:gap-12 mb-10 sm:mb-14">
            {/* Left: 主线任务 */}
            <div className="flex justify-center sm:justify-start">
              <div className="bg-white border-[2.5px] border-black rounded-xl px-5 sm:px-8 py-2.5 shadow-[4px_4px_0px_#FF70A6]">
                <h3 className="text-xl sm:text-2xl font-black text-black">
                  {pick(lang, "主线任务", "Main Quests", "Основные квесты")}
                </h3>
              </div>
            </div>

            {/* Right: 支线任务 */}
            <div className="flex justify-center sm:justify-end">
              <div className="bg-white border-[2.5px] border-black rounded-xl px-5 sm:px-8 py-2.5 shadow-[4px_4px_0px_#22C55E]">
                <h3 className="text-xl sm:text-2xl font-black text-black">
                  {pick(lang, "支线任务", "Side Quests", "Побочные квесты")}
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
                        <span className="font-mono text-base font-black text-black">
                          2026.09
                        </span>
                        <span className="px-1.5 py-0.5 bg-black text-white text-[10px] font-black rounded">
                          {pick(lang, "【支线】", "[Side]", "[Побочный]")}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-extrabold text-black">
                        {pick(
                          lang,
                          "激动地开始 AI 编程，上线了我的个人网站",
                          "Excitedly started AI vibe coding and launched my personal website",
                          "В восторге начал ИИ-кодить и запустил личный сайт",
                        )}
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
                        <span className="font-mono text-base font-black text-black">
                          2026.08
                        </span>
                        <span className="px-1.5 py-0.5 bg-black text-white text-[10px] font-black rounded">
                          {pick(lang, "【支线】", "[Side]", "[Побочный]")}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-extrabold text-black">
                        {pick(
                          lang,
                          "GPT代充、蓝V开通、VPN安装服务",
                          "GPT top-up, Blue V verification and VPN setup services",
                          "Пополнение GPT, верификация Blue V и настройка VPN",
                        )}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-[#FEF08A] border-2 border-black flex items-center justify-center text-black flex-shrink-0 shadow-[2px_2px_0px_#000000]">
                      <Sprout className="w-5 h-5 stroke-[2.5]" />
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
                      <Bot className="w-5 h-5 stroke-[2.5]" />
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 bg-black text-white text-[10px] font-black rounded">
                          {pick(lang, "【主线】", "[Main]", "[Основной]")}
                        </span>
                        <span className="font-mono text-base font-black text-black">
                          2026.08
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-extrabold text-black">
                        {pick(
                          lang,
                          "抖音认知博主、公众号、视频号",
                          "Mindset creator on Douyin, WeChat Official Account and Video Account",
                          "Блогер о мышлении в Дуине, официальный аккаунт WeChat и видеоаккаунт",
                        )}
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
                        <span className="font-mono text-base font-black text-black">
                          2026.05
                        </span>
                        <span className="px-1.5 py-0.5 bg-black text-white text-[10px] font-black rounded">
                          {pick(lang, "【支线】", "[Side]", "[Побочный]")}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-extrabold text-black">
                        {pick(
                          lang,
                          "开始留学中国项目",
                          "Started the Study in China project",
                          "Запустил проект «Учёба в Китае»",
                        )}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-[#FF70A6] border-2 border-black flex items-center justify-center text-white flex-shrink-0 shadow-[2px_2px_0px_#000000]">
                      <Video className="w-5 h-5 stroke-[2.5]" />
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
                        <span className="font-mono text-base font-black text-black">
                          2025.12
                        </span>
                        <span className="px-1.5 py-0.5 bg-black text-white text-[10px] font-black rounded">
                          {pick(lang, "【支线】", "[Side]", "[Побочный]")}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-extrabold text-black">
                        {pick(
                          lang,
                          "在美乐城做日式料理合伙人",
                          "Became a partner at a Japanese restaurant in Meilecheng Mall",
                          "Стал партнёром японского ресторана в ТЦ Meilecheng",
                        )}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-[#3884FF] border-2 border-black flex items-center justify-center text-white flex-shrink-0 shadow-[2px_2px_0px_#000000]">
                      <Heart className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ITEM 6 (Left - Main Quest): 2025.06 本科毕业于珠海柯基学院 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 items-center">
                <div className="relative sm:pr-8">
                  <div className="hidden sm:flex absolute -right-[17px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-[3px] border-black items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                  </div>

                  <div className="bg-white border-[2.5px] border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_#FF70A6] flex items-center gap-4 group hover:-translate-y-0.5 transition-transform">
                    <div className="w-10 h-10 rounded-xl bg-[#FF70A6] border-2 border-black flex items-center justify-center text-black flex-shrink-0 shadow-[2px_2px_0px_#000000]">
                      <GraduationCap className="w-5 h-5 stroke-[2.5]" />
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 bg-black text-white text-[10px] font-black rounded">
                          {pick(lang, "【主线】", "[Main]", "[Основной]")}
                        </span>
                        <span className="font-mono text-base font-black text-black">
                          2025.06
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-extrabold text-black">
                        {pick(
                          lang,
                          "本科毕业于珠海柯基学院，计算机CS",
                          "Graduated with a Bachelor in CS from Zhuhai Corgi College — Zhuhai is way too humid!",
                          "Бакалавр компьютерных наук (CS), колледж «Корги» в Чжухае",
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block"></div>
              </div>

              {/* ITEM 7 (Left - Main Quest): 2024.12 联想总部实习 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 items-center">
                <div className="relative sm:pr-8">
                  <div className="hidden sm:flex absolute -right-[17px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-[3px] border-black items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                  </div>

                  <div className="bg-white border-[2.5px] border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_#22C55E] flex items-center gap-4 group hover:-translate-y-0.5 transition-transform">
                    <div className="w-10 h-10 rounded-xl bg-[#22C55E] border-2 border-black flex items-center justify-center text-white flex-shrink-0 shadow-[2px_2px_0px_#000000]">
                      <Laptop className="w-5 h-5 stroke-[2.5]" />
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 bg-black text-white text-[10px] font-black rounded">
                          {pick(lang, "【主线】", "[Main]", "[Основной]")}
                        </span>
                        <span className="font-mono text-base font-black text-black">
                          2024.12
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-extrabold text-black">
                        {pick(
                          lang,
                          "联想总部实习，前端开发工程师，和老学姐同一个方向",
                          "Interned at Lenovo HQ as a Frontend Engineer (same direction as the senior!)",
                          "Стажировка в штаб-квартире Lenovo, фронтенд-инженер — то же направление, что и у старшей",
                        )}
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
            {activeUpdateModal === "reading" && (
              <>
                <div className="w-12 h-12 rounded-2xl bg-[#3884FF] border-2 border-black flex items-center justify-center text-white shadow-[2px_2px_0px_#000000]">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-black">
                  {pick(
                    lang,
                    "《控糖革命》",
                    "《Glucose Revolution》",
                    "«Глюкозная революция»",
                  )}
                </h4>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                  {pick(
                    lang,
                    "“血糖过山车，才是疲惫、嘴馋和情绪差的元凶。” 原来吃饭顺序比吃什么更讲究：先吃菜、再吃肉、最后吃主食，餐后再散步十分钟。读完只想立刻调整一日三餐，是一晨近期反复翻的生活科学书！",
                    '"The glucose roller coaster is what makes you tired, hungry and moody." A practical science-of-everyday-life book that changed how I order my meals — veggies first, carbs last, then a ten-minute walk.',
                    "«Американские горки сахара в крови — причина усталости, тяги к сладкому и плохого настроения». Порядок блюд важнее состава: сначала овощи, потом белок, затем углеводы, а после — десять минут ходьбы. Прикладная книга о науке повседневной жизни, которую я сейчас перечитываю.",
                  )}
                </p>
              </>
            )}

            {activeUpdateModal === "watching" && (
              <>
                <div className="w-12 h-12 rounded-2xl bg-[#FF70A6] border-2 border-black flex items-center justify-center text-white shadow-[2px_2px_0px_#000000]">
                  <Tv className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-black">
                  {pick(
                    lang,
                    "法式甜点视频",
                    "French Pastry Videos",
                    "Видео о французских десертах",
                  )}
                </h4>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                  {pick(
                    lang,
                    "沉迷法式甜点制作视频！从马卡龙到歌剧院蛋糕，看甜品师把黄油、糖和蛋液玩成精密化学实验，治愈又下饭。",
                    "Deeply obsessed with French pastry videos — from macarons to opera cakes, watching pâtissiers turn butter, sugar and eggs into precise chemistry. Pure therapy.",
                    "Подсел на видео про французские десерты: от макарон до торта «Опера». Кондитеры превращают масло, сахар и яйца в точный химический эксперимент — залипательно и аппетитно.",
                  )}
                </p>
              </>
            )}

            {activeUpdateModal === "interest" && (
              <>
                <div className="w-12 h-12 rounded-2xl bg-[#22C55E] border-2 border-black flex items-center justify-center text-white shadow-[2px_2px_0px_#000000]">
                  <Wrench className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-black">
                  {pick(
                    lang,
                    "AI 编程 & Vibe Coding",
                    "AI Coding & Vibe Coding",
                    "ИИ-программирование и Vibe Coding",
                  )}
                </h4>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                  {pick(
                    lang,
                    "不需要深陷环境配置，深夜一边听歌一边敲击 prompt，几小时内就能把脑子里的无厘头 idea 具象化为真实网站，极其上头！",
                    "Late-night coding sessions powered by LLMs. Idea to interactive web app in hours!",
                    "Не нужно возиться с настройкой окружения: ночью под музыку пишешь промпты — и за пару часов безумная идея из головы превращается в настоящий сайт. Полное залипалово!",
                  )}
                </p>
              </>
            )}

            <button
              onClick={() => setActiveUpdateModal(null)}
              className="w-full py-3 bg-black text-white font-black rounded-xl border-2 border-black shadow-[3px_3px_0px_#FFC01E] hover:bg-[#FF70A6] hover:text-black transition-colors cursor-pointer text-sm mt-4"
            >
              {pick(lang, "关 闭", "Close", "Закрыть")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
