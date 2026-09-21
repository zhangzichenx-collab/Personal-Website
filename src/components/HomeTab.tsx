import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Eye,
  Heart,
  Calendar,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import { ProductCard } from "./ProductCard";
import { OfferCard } from "./OfferCard";
import {
  TabType,
  Language,
  ArticleItem,
  VideoItem,
  VibeProductItem,
  StudyInChinaOffer,
} from "../types";
import {
  JohnCarterAvatar,
  ArticleNetFriendsCover,
  ArticleSJTUCover,
  ArticleGouqiIslandCover,
  VideoCrawfishCover,
  VideoDietCover,
  VideoNewYearCover,
} from "./Illustrations";
import {
  vibeProductsData,
  videosData,
  articlesData,
  studyInChinaOffersData,
} from "../data/portfolioData";
import { pick, formatCount, formatDuration, formatReadTime } from "../i18n";

interface HomeTabProps {
  onNavigate: (tab: TabType) => void;
  lang: Language;
  onOpenContact: () => void;
  onOpenArticle: (article: ArticleItem) => void;
  onOpenVideo: (video: VideoItem) => void;
  onOpenFoodModal: () => void;
  onOpenAdmissionOffer: (offer: StudyInChinaOffer) => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({
  onNavigate,
  lang,
  onOpenContact,
  onOpenArticle,
  onOpenVideo,
  onOpenFoodModal,
  onOpenAdmissionOffer,
}) => {
  // Study in China filter state
  const filteredOffers = studyInChinaOffersData;

  // Top 3 articles matching screenshot 2
  const topArticles = articlesData.slice(0, 3);
  // Top 3 videos matching screenshot 3
  const topVideos = videosData.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 0. HERO SECTION (Matches User Uploaded Screenshot: 截屏2026-09-07 16.34.38.png) */}
      <section
        className="pt-[clamp(0.75rem,3vw,3.5rem)] pb-[clamp(0.25rem,1.5vw,2rem)]"
        id="hero-section"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(1rem,3vw,3.5rem)] items-center">
          {/* Left Column: Heading, Paragraph, CTA Buttons */}
          <div className="lg:col-span-7 space-y-[clamp(1rem,2.2vw,2.25rem)]">
            <h1 className="text-[clamp(1.75rem,5.5vw,4.75rem)] font-black tracking-tight leading-[1.1] text-black">
              {lang === "zh" ? (
                <>
                  我是{" "}
                  <motion.span
                    className="inline-block bg-[#FF5C67] text-white px-[clamp(0.75rem,1.5vw,1.5rem)] py-[clamp(0.15rem,0.4vw,0.5rem)] rounded-sm border-2 border-black shadow-[2px_2px_0px_#000000] cursor-default"
                    style={{ rotate: 6 }}
                    whileHover={{ scale: 1.1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    一晨
                  </motion.span>
                  {" ，"}
                  <br />
                  <span className="whitespace-nowrap">A Product Manager，</span>
                  <br />
                  练习时长{" "}
                  <motion.span
                    className="inline-block bg-[#3884FF] text-white px-[clamp(0.75rem,1.5vw,1.5rem)] py-[clamp(0.15rem,0.4vw,0.5rem)] rounded-sm border-2 border-black shadow-[2px_2px_0px_#000000] cursor-default"
                    style={{ rotate: -7 }}
                    whileHover={{ scale: 1.1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    两年半
                  </motion.span>{" "}
                </>
              ) : lang === "en" ? (
                <>
                  I'm{" "}
                  <span className="inline-block bg-[#FF5C67] text-white px-[clamp(0.75rem,1.5vw,1.5rem)] py-[clamp(0.15rem,0.4vw,0.5rem)] rounded-sm border-2 border-black shadow-[2px_2px_0px_#000000]">
                    John Carter
                  </span>
                  {" ,"}
                  <br />
                  a Web Designer
                  <br />
                  from{" "}
                  <span className="inline-block bg-[#3884FF] text-white px-[clamp(0.75rem,1.5vw,1.5rem)] py-[clamp(0.15rem,0.4vw,0.5rem)] rounded-sm border-2 border-black shadow-[2px_2px_0px_#000000]">
                    New York
                  </span>
                </>
              ) : (
                <>
                  Я{" "}
                  <span className="inline-block bg-[#FF5C67] text-white px-[clamp(0.75rem,1.5vw,1.5rem)] py-[clamp(0.15rem,0.4vw,0.5rem)] rounded-sm border-2 border-black shadow-[2px_2px_0px_#000000]">
                    Джон Картер
                  </span>
                  {", "}
                  <br />
                  продакт-менеджер,
                  <br />
                  опыт{" "}
                  <span className="inline-block bg-[#3884FF] text-white px-[clamp(0.75rem,1.5vw,1.5rem)] py-[clamp(0.15rem,0.4vw,0.5rem)] rounded-sm border-2 border-black shadow-[2px_2px_0px_#000000]">
                    2,5 года
                  </span>
                </>
              )}
            </h1>

            <div className="text-[clamp(1rem,1.6vw,1.25rem)] text-gray-700 max-w-xl font-normal leading-relaxed space-y-1">
              <p>
                {pick(
                  lang,
                  <>
                    <strong>内容创作者</strong> | <strong>数字写作者</strong> |{" "}
                    <strong>职业过度思考者</strong>
                  </>,
                  <>
                    <strong>Content Creator</strong> |{" "}
                    <strong>Digital Writer</strong> |{" "}
                    <strong>Professional Overthinker</strong>
                  </>,
                  <>
                    <strong>Создатель контента</strong> |{" "}
                    <strong>цифровой писатель</strong> |{" "}
                    <strong>профессиональный переживатель</strong>
                  </>,
                )}
              </p>
              <p>
                <strong>
                  {pick(
                    lang,
                    "白天搭建生意，晚上质疑一切。",
                    "Building businesses by day, questioning everything by night.",
                    "Днём создаю бизнесы, ночью подвергаю всё сомнению.",
                  )}
                </strong>
              </p>
              <p>
                <strong>
                  {pick(
                    lang,
                    "AI。商业。生活。循环往复。",
                    "AI. Business. Life. Repeat.",
                    "ИИ. Бизнес. Жизнь. На повтор.",
                  )}
                </strong>
              </p>
              <p>
                <strong>
                  {pick(
                    lang,
                    "一个闲不住的傻子！！！",
                    "A RESTLESS FOOOOOL !!!",
                    "НЕУГОМОННЫЙ ЧУДАК !!!",
                  )}
                </strong>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-[clamp(0.75rem,1.5vw,1.5rem)] pt-1">
              <button
                id="hero-more-about"
                onClick={() => onNavigate("about")}
                className="px-[clamp(1.25rem,3.5vw,3rem)] py-[clamp(0.75rem,1.8vw,1.5rem)] bg-[#0A0A0A] text-white font-bold text-[clamp(0.9rem,1.4vw,1.25rem)] rounded-2xl border-[2.5px] border-black flex items-center gap-2.5 shadow-[3px_3px_0px_#000000] hover:bg-[#FF5C67] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
                <span>
                  {pick(lang, "更多关于我", "More about me", "Ещё обо мне")}
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Cartoon Avatar inside Yellow Rounded Card matching screenshot */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[clamp(15rem,30vw,24rem)]">
              <JohnCarterAvatar className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* 1. VIBE CODING CREATIONS SECTION (Exact match to Screenshot 1) */}
      <section className="pt-4 sm:pt-6" id="vibe-products-section">
        {/* Section Title with slanted pink pill */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-black flex flex-wrap items-center gap-3">
            <span>{pick(lang, "我的一些", "Some of My", "Мои")}</span>
            <span className="inline-block bg-[#FF5C67] text-white px-4 py-1 sm:py-1.5 rounded-2xl border-[2.5px] border-black shadow-[3px_3px_0px_#000000] rotate-[-2deg]">
              {pick(
                lang,
                "Vibe 编程作品",
                "Vibe-coded Creations",
                "vibe-код проекты",
              )}
            </span>
          </h2>
          <div className="mt-4 space-y-1 text-sm sm:text-base font-bold text-gray-700 max-w-2xl">
            <p>
              {pick(
                lang,
                "深夜 Vibe Coding 时产出的代码副产品。",
                "Code byproducts generated during late-night vibe coding sessions.",
                "Побочные продукты кода из ночных vibe-код сессий.",
              )}
            </p>
            <p className="text-gray-500 font-medium">
              {pick(
                lang,
                "不完美、能用，而且总有点意思。",
                "Imperfect, functional, and always interesting.",
                "Несовершенные, рабочие и неизменно интересные.",
              )}
            </p>
          </div>
        </div>

        {/* Product Cards Grid - synced with ProductsTab via shared ProductCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {vibeProductsData.slice(0, 1).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              lang={lang}
              onOpen={onOpenFoodModal}
            />
          ))}

          {/* More creations coming soon card */}
          <div
            onClick={() =>
              alert(
                pick(
                  lang,
                  "更多有趣的脑洞 Web 玩具正在深夜连夜敲代码中，很快就会上线！",
                  "More vibe coding toys are actively being developed late at night!",
                  "Ещё больше весёлых веб-игрушек куётся глубокой ночью — скоро запуск!",
                ),
              )
            }
            className="group bg-white border-[2.5px] border-dashed border-black rounded-3xl p-6 sm:p-7 shadow-[6px_6px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] hover:-translate-y-1 transition-all cursor-pointer flex flex-col items-center justify-center min-h-[260px] text-center space-y-3 relative"
          >
            <div className="w-14 h-14 rounded-2xl bg-gray-100 border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000]">
              <Sparkles className="w-6 h-6 text-gray-400 group-hover:text-[#FFC01E] transition-colors" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-gray-400 group-hover:text-black transition-colors">
              {pick(
                lang,
                "更多作品开发中...",
                "More creations in progress...",
                "Новые работы в разработке...",
              )}
            </h3>
            <span className="px-4 py-1.5 bg-gray-200 group-hover:bg-black group-hover:text-white text-gray-600 text-xs font-black rounded-full border border-black tracking-widest transition-colors">
              COMING SOON
            </span>
          </div>
        </div>
      </section>

      {/* 2. VIDEOS SECTION (Exact match to Screenshot 3) */}
      <section className="pt-4" id="videos-section">
        {/* Header Bar with Blue Offset Pill & Browse All */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="relative inline-block">
            {/* Background Blue Offset Block */}
            <div className="absolute inset-0 bg-[#3884FF] rounded-2xl translate-x-1.5 translate-y-1.5" />
            {/* Foreground White Box */}
            <div className="relative bg-white border-[2.5px] border-black px-6 py-2 rounded-2xl shadow-[3px_3px_0px_#000]">
              <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                {pick(lang, "视频", "Videos", "Видео")}
              </h2>
            </div>
          </div>

          <button
            onClick={() => onNavigate("videos")}
            className="inline-flex items-center gap-2 text-sm font-black text-black hover:text-[#3884FF] transition-colors cursor-pointer group"
          >
            <span>
              {pick(
                lang,
                "查看全部视频",
                "Watch all videos",
                "Смотреть все видео",
              )}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {topVideos.map((video, idx) => (
            <div
              key={video.id}
              onClick={() => {
                if (video.externalUrl) {
                  window.open(
                    video.externalUrl,
                    "_blank",
                    "noopener,noreferrer",
                  );
                } else {
                  onOpenVideo(video);
                }
              }}
              className="group bg-white border-[2.5px] border-black rounded-3xl overflow-hidden shadow-[5px_5px_0px_#000000] hover:shadow-[9px_9px_0px_#3884FF] hover:-translate-y-1 transition-all cursor-pointer flex flex-col"
            >
              {/* Video Cover Area */}
              <div className="relative h-48 sm:h-52 w-full border-b-[2.5px] border-black overflow-hidden">
                {idx === 0 && (
                  <VideoCrawfishCover
                    text={pick(
                      lang,
                      video.coverText,
                      video.coverTextEn ?? video.coverText,
                      video.coverTextRu ?? video.coverTextEn ?? video.coverText,
                    )}
                  />
                )}
                {idx === 1 && (
                  <VideoDietCover
                    text={pick(
                      lang,
                      video.coverText,
                      video.coverTextEn ?? video.coverText,
                      video.coverTextRu ?? video.coverTextEn ?? video.coverText,
                    )}
                  />
                )}
                {idx === 2 && (
                  <VideoNewYearCover
                    text={pick(
                      lang,
                      video.coverText,
                      video.coverTextEn ?? video.coverText,
                      video.coverTextRu ?? video.coverTextEn ?? video.coverText,
                    )}
                  />
                )}

                {/* Top-left 抖音 Platform Pill */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 bg-[#FE2C55] text-white border-[1.5px] border-black text-[11px] font-black rounded-full shadow-[2px_2px_0px_#000] tracking-wider">
                    {pick(lang, video.badge, "Douyin", "Дуинь")}
                  </span>
                </div>

                {/* Bottom-right Duration Pill */}
                <div className="absolute bottom-3 right-3 z-10">
                  <span className="px-2.5 py-0.5 bg-black/80 backdrop-blur-xs text-white text-[11px] font-mono font-black rounded-md border border-white/20">
                    {formatDuration(lang, video.duration)}
                  </span>
                </div>
              </div>

              {/* Video Info Area */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <h3
                  className={`text-base sm:text-lg font-black tracking-tight leading-snug line-clamp-2 ${
                    video.isSpecialTitle
                      ? "text-[#2563EB] group-hover:underline"
                      : "text-black group-hover:text-[#2563EB]"
                  } transition-colors`}
                >
                  {pick(lang, video.titleZh, video.title, video.titleRu)}
                </h3>

                {/* Dotted Divider & Stats */}
                <div className="pt-3 border-t border-dashed border-gray-300 flex items-center justify-between text-xs font-bold text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-gray-500" />
                    <span>{formatCount(lang, video.views)}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-[#FF5C67] fill-[#FF5C67]" />
                    <span>{video.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ARTICLES SECTION (Exact match to Screenshot 2) */}
      <section className="pt-4" id="articles-section">
        {/* Header Bar with Pink Offset Pill & Browse All */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="relative inline-block">
            {/* Background Pink Offset Block */}
            <div className="absolute inset-0 bg-[#FF5C67] rounded-2xl translate-x-1.5 translate-y-1.5" />
            {/* Foreground White Box */}
            <div className="relative bg-white border-[2.5px] border-black px-6 py-2 rounded-2xl shadow-[3px_3px_0px_#000]">
              <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                {pick(lang, "文章", "Articles", "Статьи")}
              </h2>
            </div>
          </div>

          <button
            onClick={() => onNavigate("articles")}
            className="inline-flex items-center gap-2 text-sm font-black text-black hover:text-[#FF5C67] transition-colors cursor-pointer group"
          >
            <span>
              {pick(lang, "浏览全部文章", "Browse all articles", "Все статьи")}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {topArticles.map((article, idx) => (
            <div
              key={article.id}
              onClick={() => {
                if (article.externalUrl) {
                  window.open(
                    article.externalUrl,
                    "_blank",
                    "noopener,noreferrer",
                  );
                } else {
                  onOpenArticle(article);
                }
              }}
              className="group bg-white border-[2.5px] border-black rounded-3xl overflow-hidden shadow-[5px_5px_0px_#000000] hover:shadow-[9px_9px_0px_#FF5C67] hover:-translate-y-1 transition-all cursor-pointer flex flex-col"
            >
              {/* Article Cover Image Container */}
              <div className="relative h-48 sm:h-52 w-full border-b-[2.5px] border-black overflow-hidden bg-gray-50">
                {idx === 0 && <ArticleNetFriendsCover />}
                {idx === 1 && <ArticleGouqiIslandCover />}
                {idx === 2 && <ArticleSJTUCover />}
              </div>

              {/* Article Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2.5">
                  {/* Category Pill & Date */}
                  <div className="flex items-center gap-2.5 text-xs">
                    <span className="px-2.5 py-0.5 bg-[#FF5C67] text-white border-[1.5px] border-black font-black rounded-full shadow-[1.5px_1.5px_0px_#000]">
                      {pick(
                        lang,
                        article.categoryZh,
                        article.category,
                        article.categoryRu,
                      )}
                    </span>
                    <span className="text-gray-500 font-bold flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg font-black tracking-tight leading-snug line-clamp-2 ${
                      article.isSpecialTitle
                        ? "text-[#2563EB] group-hover:underline"
                        : "text-black group-hover:text-[#FF5C67]"
                    } transition-colors`}
                  >
                    {pick(
                      lang,
                      article.titleZh,
                      article.title,
                      article.titleRu,
                    )}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 font-medium leading-relaxed">
                    {pick(
                      lang,
                      article.excerptZh,
                      article.excerpt,
                      article.excerptRu,
                    )}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-bold text-gray-500">
                  <span>
                    {formatReadTime(lang, article.readTime, article.readTimeRu)}
                  </span>
                  <span className="font-black text-black group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    {pick(lang, "阅读全文", "Read", "Читать")}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. STUDY IN CHINA - ADMISSION NOTICES SHOWCASE (Dedicated requested section!) */}
      <section className="pt-4" id="study-in-china-section">
        {/* Header Bar with Red/Gold Offset Pill */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="space-y-2">
            <div className="relative inline-block">
              {/* Background Offset Block (Chinese Red) */}
              <div className="absolute inset-0 bg-[#C41230] rounded-2xl translate-x-1.5 translate-y-1.5" />
              {/* Foreground Box */}
              <div className="relative bg-white border-[2.5px] border-black px-6 py-2 rounded-2xl shadow-[3px_3px_0px_#000]">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-[#C41230]" />
                  <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                    {pick(
                      lang,
                      "留学中国 · 录取通知书荣誉展厅",
                      "Study in China · Admission Notices",
                      "Учёба в Китае · Зал зачислений",
                    )}
                  </h2>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-bold text-gray-700 max-w-2xl mt-2 leading-relaxed">
              {pick(
                lang,
                "真实《录取通知书》原件展示——语言生、本科到学位申请，材料辅导到签证落地全程陪伴。",
                "Real admission letters on display — from language programs to degree studies, guided end to end.",
                "Настоящие уведомления о зачислении — от языковых курсов до степеней, полное сопровождение: документы, подача, виза.",
              )}
            </p>
          </div>

          <button
            onClick={() => onNavigate("study-china")}
            className="self-start md:self-auto px-5 py-2.5 bg-black text-white text-xs font-black rounded-full border-2 border-black shadow-[3px_3px_0px_#FFC01E] hover:bg-[#C41230] hover:shadow-[3px_3px_0px_#000] transition-all cursor-pointer flex items-center gap-2"
          >
            <span>
              {pick(
                lang,
                "查看全部录取通知书",
                "View All Admission Letters",
                "Все уведомления о зачислении",
              )}
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Milestone Badges Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 bg-[#FFF8F0] border-2 border-black rounded-3xl p-5 shadow-[4px_4px_0px_#000]">
          <div className="text-center sm:border-r border-black/20 p-2">
            <div className="text-2xl sm:text-3xl font-black text-[#C41230]">
              88.9%
            </div>
            <div className="text-xs font-bold text-gray-700 mt-1">
              {pick(lang, "申请成功率", "Success Rate", "Процент зачисления")}
            </div>
          </div>
          <div className="text-center sm:border-r border-black/20 p-2">
            <div className="text-2xl sm:text-3xl font-black text-[#10B981]">
              8
            </div>
            <div className="text-xs font-bold text-gray-700 mt-1">
              {pick(
                lang,
                "正式录取信原件",
                "Original Offers",
                "Оригиналов офферов",
              )}
            </div>
          </div>
          <div className="text-center sm:border-r border-black/20 p-2">
            <div className="text-2xl sm:text-3xl font-black text-[#3884FF]">
              {pick(lang, "2026秋", "Fall 2026", "Осень 2026")}
            </div>
            <div className="text-xs font-bold text-gray-700 mt-1">
              {pick(lang, "最新入学批次", "Latest Intake", "Последний набор")}
            </div>
          </div>
          <div className="text-center p-2">
            <div className="text-2xl sm:text-3xl font-black text-[#FFC01E]">
              1+
            </div>
            <div className="text-xs font-bold text-gray-700 mt-1">
              {pick(
                lang,
                "覆盖生源国（持续增加）",
                "Nationalities",
                "Стран студентов",
              )}
            </div>
          </div>
        </div>

        {/* Admission Letters Marquee (single row, continuous left scroll, pause on hover) */}
        <div className="marquee-hover relative overflow-hidden">
          <div className="marquee-track flex w-max">
            {[0, 1].map((half) => (
              <div
                key={half}
                className="flex gap-6 sm:gap-7 pr-6 sm:pr-7"
                aria-hidden={half === 1}
              >
                {filteredOffers.map((offer) => (
                  <div
                    key={`${half}-${offer.id}`}
                    className="w-[300px] sm:w-[340px] shrink-0"
                  >
                    <OfferCard
                      offer={offer}
                      lang={lang}
                      onOpen={onOpenAdmissionOffer}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER CALLOUT / COLLABORATION */}
      <motion.section
        initial={{ opacity: 0, y: 56, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -0.5 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        whileHover={{ rotate: 0, scale: 1.015 }}
        className="relative bg-[#FFC01E] border-[2.5px] border-black rounded-3xl p-8 sm:p-12 shadow-[6px_6px_0px_#000000] hover:shadow-[9px_9px_0px_#000000] transition-shadow overflow-hidden"
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

        {/* Floating doodles */}
        <motion.span
          aria-hidden="true"
          className="absolute top-5 right-7 text-2xl font-black text-black/20 select-none"
          animate={{ y: [0, -8, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          ✦
        </motion.span>
        <motion.span
          aria-hidden="true"
          className="absolute bottom-5 left-7 w-3 h-3 rounded-full bg-[#FF5C67] border-2 border-black"
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
        <motion.span
          aria-hidden="true"
          className="absolute top-6 left-1/3 w-2.5 h-2.5 rounded-full bg-[#3884FF] border-2 border-black hidden sm:block"
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
              {pick(
                lang,
                "想一起做些酷产品，或咨询留学中国？",
                "Want to collaborate or study in China?",
                "Хочешь вместе делать крутые продукты или узнать об учёбе в Китае?",
              )}
            </h3>
            <p className="text-sm sm:text-base font-bold text-gray-800">
              {pick(
                lang,
                "无论是深夜 Vibe Coding、创意合作，还是留学中国申请，随时欢迎聊聊！",
                "Open for vibe coding hacks, product design collaborations, and Study in China mentorship.",
                "Ночные vibe-код сессии, совместные продукты и консультации по учёбе в Китае — пишите в любой момент!",
              )}
            </p>
          </div>

          <motion.button
            onClick={onOpenContact}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="px-8 py-4 bg-black text-white font-black text-sm rounded-2xl border-2 border-black shadow-[4px_4px_0px_#FFFFFF] hover:bg-[#FF5C67] hover:shadow-[4px_4px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer shrink-0"
          >
            {pick(lang, "立即取得联系", "Get in touch", "Связаться")}
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};
