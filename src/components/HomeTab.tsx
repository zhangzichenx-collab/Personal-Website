import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Eye,
  Heart,
  Calendar,
  Utensils,
  Award,
  ShieldCheck,
  GraduationCap,
  Sliders,
  Clock,
  ExternalLink,
  ChevronRight,
  Mail,
  Folder,
} from 'lucide-react';
import {
  TabType,
  Language,
  ArticleItem,
  VideoItem,
  VibeProductItem,
  StudyInChinaOffer,
} from '../types';
import {
  JohnCarterAvatar,
  ArticleNetFriendsCover,
  ArticleSJTUCover,
  ArticleGouqiIslandCover,
  VideoCrawfishCover,
  VideoDietCover,
  VideoNewYearCover,
} from './Illustrations';
import {
  vibeProductsData,
  videosData,
  articlesData,
  studyInChinaOffersData,
} from '../data/portfolioData';

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
  const [selectedUniFilter, setSelectedUniFilter] = useState<string>('all');

  const filteredOffers = selectedUniFilter === 'all'
    ? studyInChinaOffersData
    : selectedUniFilter === 'csc'
    ? studyInChinaOffersData.filter((o) => o.scholarshipType === 'csc')
    : studyInChinaOffersData.filter((o) => o.universityLogoText.toLowerCase() === selectedUniFilter.toLowerCase());

  // Top 3 articles matching screenshot 2
  const topArticles = articlesData.slice(0, 3);
  // Top 3 videos matching screenshot 3
  const topVideos = videosData.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 0. HERO SECTION (Matches User Uploaded Screenshot: 截屏2026-09-07 16.34.38.png) */}
      <section className="pt-4 sm:pt-10 pb-2 sm:pb-6" id="hero-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Heading, Paragraph, CTA Buttons */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] text-black">
              {lang === 'zh' ? (
                <>
                  我是{' '}
                  <span className="inline-block bg-[#FF5C67] text-white px-3 sm:px-4 py-0.5 sm:py-1 rounded-sm border-2 border-black shadow-[2px_2px_0px_#000000]">
                    John Carter
                  </span>
                  {' ，'}
                  <br />
                  常驻{' '}
                  <span className="inline-block bg-[#3884FF] text-white px-3 sm:px-4 py-0.5 sm:py-1 rounded-sm border-2 border-black shadow-[2px_2px_0px_#000000]">
                    纽约
                  </span>
                  {' '}的网页设计师
                </>
              ) : (
                <>
                  I'm{' '}
                  <span className="inline-block bg-[#FF5C67] text-white px-3 sm:px-4 py-0.5 sm:py-1 rounded-sm border-2 border-black shadow-[2px_2px_0px_#000000]">
                    John Carter
                  </span>
                  {' ,'}
                  <br />
                  a Web Designer
                  <br />
                  from{' '}
                  <span className="inline-block bg-[#3884FF] text-white px-3 sm:px-4 py-0.5 sm:py-1 rounded-sm border-2 border-black shadow-[2px_2px_0px_#000000]">
                    New York
                  </span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-gray-700 max-w-xl font-normal leading-relaxed">
              {lang === 'zh'
                ? '专注于新野兽派与极简主义数字化产品设计，致力于打造兼具视觉张力与实用交互的现代 Web 体验。'
                : 'Lacus, adipiscing lectus convallis purus aliquet cursus magnaol montes augue donec cras turpis ultrices nulla sed doler.'}
            </p>

            {/* Buttons matching screenshot: Black Get in touch + White View portfolio */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                id="hero-get-in-touch"
                onClick={onOpenContact}
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#0A0A0A] text-white font-bold text-sm sm:text-base rounded-2xl border-[2.5px] border-black flex items-center gap-2.5 shadow-[3px_3px_0px_#000000] hover:bg-[#FF5C67] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>{lang === 'zh' ? '立即联系' : 'Get in touch'}</span>
              </button>

              <button
                id="hero-view-portfolio"
                onClick={() => {
                  document.getElementById('vibe-products-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-black font-bold text-sm sm:text-base rounded-2xl border-[2.5px] border-black flex items-center gap-2.5 shadow-[3px_3px_0px_#000000] hover:bg-gray-100 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              >
                <Folder className="w-4 h-4" />
                <span>{lang === 'zh' ? '查看作品' : 'View portfolio'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Cartoon Avatar inside Yellow Rounded Card matching screenshot */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md">
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
            <span>Some of My</span>
            <span className="inline-block bg-[#FF5C67] text-white px-4 py-1 sm:py-1.5 rounded-2xl border-[2.5px] border-black shadow-[3px_3px_0px_#000000] rotate-[-2deg]">
              Vibe-coded Creations
            </span>
          </h2>
          <div className="mt-4 space-y-1 text-sm sm:text-base font-bold text-gray-700 max-w-2xl">
            <p>Code byproducts generated during late-night vibe coding sessions.</p>
            <p className="text-gray-500 font-medium">Imperfect, functional, and always interesting.</p>
          </div>
        </div>

        {/* Product Cards Grid (Screenshot 1: 2-column large cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: 等会儿吃啥？ (Clickable -> Opens Interactive Food Decider) */}
          <div
            onClick={onOpenFoodModal}
            className="group bg-white border-[2.5px] border-black rounded-3xl p-7 sm:p-9 shadow-[6px_6px_0px_#000000] hover:shadow-[10px_10px_0px_#FFC01E] hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between min-h-[260px] relative overflow-hidden"
          >
            <div className="space-y-5">
              {/* Light Blue Square Icon with Cutlery */}
              <div className="w-16 h-16 rounded-2xl bg-[#C7E3FF] border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_#000000] group-hover:bg-[#FFC01E] transition-colors">
                <div className="flex items-center justify-center text-black font-black text-2xl select-none">
                  🍴
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight group-hover:text-[#3884FF] transition-colors">
                    {lang === 'zh' ? '等会儿吃啥？' : 'What to eat later?'}
                  </h3>
                  <span className="px-3 py-1 bg-black text-white text-xs font-black rounded-full border border-black group-hover:bg-[#FF5C67] transition-colors">
                    {lang === 'zh' ? '点我抽取' : 'Try Demo'}
                  </span>
                </div>

                <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
                  {lang === 'zh'
                    ? '基于 LBS 地理位置自动获取周边餐厅并随机抽取一家「盲盒」餐厅。'
                    : 'Based on your real-time LBS coordinates to automatically scout nearby dining spots and draw a single blind-box restaurant pick.'}
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-2 text-xs font-black text-black">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span>{lang === 'zh' ? '已收录周边 1,200+ 餐厅 · 点击体验' : 'Active LBS Blindbox Decider'}</span>
              <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: 更多作品开发中... COMING SOON */}
          <div
            onClick={() => alert(lang === 'zh' ? '更多有趣的脑洞 Web 玩具正在深夜连夜敲代码中，很快就会上线！' : 'More vibe coding toys are actively being developed late at night!')}
            className="group bg-white border-[2.5px] border-black rounded-3xl p-7 sm:p-9 shadow-[6px_6px_0px_#000000] hover:shadow-[10px_10px_0px_#000000] hover:-translate-y-1 transition-all cursor-pointer flex flex-col items-center justify-center min-h-[260px] text-center space-y-3 relative border-dashed"
          >
            <div className="w-14 h-14 rounded-2xl bg-gray-100 border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000]">
              <Sparkles className="w-6 h-6 text-gray-400 group-hover:text-[#FFC01E] transition-colors" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-gray-400 group-hover:text-black transition-colors">
              {lang === 'zh' ? '更多作品开发中...' : 'More creations in progress...'}
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
                Videos
              </h2>
            </div>
          </div>

          <button
            onClick={() => onOpenVideo(topVideos[0])}
            className="inline-flex items-center gap-2 text-sm font-black text-black hover:text-[#3884FF] transition-colors cursor-pointer group"
          >
            <span>Watch all videos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {topVideos.map((video, idx) => (
            <div
              key={video.id}
              onClick={() => onOpenVideo(video)}
              className="group bg-white border-[2.5px] border-black rounded-3xl overflow-hidden shadow-[5px_5px_0px_#000000] hover:shadow-[9px_9px_0px_#3884FF] hover:-translate-y-1 transition-all cursor-pointer flex flex-col"
            >
              {/* Video Cover Area */}
              <div className="relative h-48 sm:h-52 w-full border-b-[2.5px] border-black overflow-hidden">
                {idx === 0 && <VideoCrawfishCover text={video.coverText} />}
                {idx === 1 && <VideoDietCover text={video.coverText} />}
                {idx === 2 && <VideoNewYearCover text={video.coverText} />}

                {/* Top-left Pink Platform Pill */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 bg-[#FF5C67] text-white border-[1.5px] border-black text-[11px] font-black rounded-full shadow-[2px_2px_0px_#000] uppercase tracking-wider">
                    {video.badge}
                  </span>
                </div>

                {/* Bottom-right Duration Pill */}
                <div className="absolute bottom-3 right-3 z-10">
                  <span className="px-2.5 py-0.5 bg-black/80 backdrop-blur-xs text-white text-[11px] font-mono font-black rounded-md border border-white/20">
                    {video.duration}
                  </span>
                </div>
              </div>

              {/* Video Info Area */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <h3
                  className={`text-base sm:text-lg font-black tracking-tight leading-snug line-clamp-2 ${
                    video.isSpecialTitle
                      ? 'text-[#2563EB] group-hover:underline'
                      : 'text-black group-hover:text-[#2563EB]'
                  } transition-colors`}
                >
                  {lang === 'zh' ? video.titleZh : video.title}
                </h3>

                {/* Dotted Divider & Stats */}
                <div className="pt-3 border-t border-dashed border-gray-300 flex items-center justify-between text-xs font-bold text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-gray-500" />
                    <span>{video.views}</span>
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
                Articles
              </h2>
            </div>
          </div>

          <button
            onClick={() => onNavigate('articles')}
            className="inline-flex items-center gap-2 text-sm font-black text-black hover:text-[#FF5C67] transition-colors cursor-pointer group"
          >
            <span>Browse all articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {topArticles.map((article, idx) => (
            <div
              key={article.id}
              onClick={() => onOpenArticle(article)}
              className="group bg-white border-[2.5px] border-black rounded-3xl overflow-hidden shadow-[5px_5px_0px_#000000] hover:shadow-[9px_9px_0px_#FF5C67] hover:-translate-y-1 transition-all cursor-pointer flex flex-col"
            >
              {/* Article Cover Image Container */}
              <div className="relative h-48 sm:h-52 w-full border-b-[2.5px] border-black overflow-hidden bg-gray-50">
                {idx === 0 && <ArticleNetFriendsCover />}
                {idx === 1 && <ArticleSJTUCover />}
                {idx === 2 && <ArticleGouqiIslandCover />}
              </div>

              {/* Article Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2.5">
                  {/* Category Pill & Date */}
                  <div className="flex items-center gap-2.5 text-xs">
                    <span className="px-2.5 py-0.5 bg-[#FF5C67] text-white border-[1.5px] border-black font-black rounded-full shadow-[1.5px_1.5px_0px_#000]">
                      {lang === 'zh' ? article.categoryZh : article.category}
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
                        ? 'text-[#2563EB] group-hover:underline'
                        : 'text-black group-hover:text-[#FF5C67]'
                    } transition-colors`}
                  >
                    {lang === 'zh' ? article.titleZh : article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 font-medium leading-relaxed">
                    {lang === 'zh' ? article.excerptZh : article.excerpt}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-bold text-gray-500">
                  <span>{article.readTime}</span>
                  <span className="font-black text-black group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    {lang === 'zh' ? '阅读全文' : 'Read'}
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
                    {lang === 'zh' ? '留学中国 · 录取通知书荣誉展厅' : 'Study in China · Admission Notices'}
                  </h2>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-bold text-gray-700 max-w-2xl mt-2 leading-relaxed">
              {lang === 'zh'
                ? '辅导全球留学生成功斩获清华、北大、上海交大、复旦、浙大等顶尖大学正式《录取通知书》与中国政府奖学金（CSC）全额资助荣誉。'
                : 'Real admission notices and full Chinese Government Scholarships (CSC) secured by international students.'}
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="self-start md:self-auto px-5 py-2.5 bg-black text-white text-xs font-black rounded-full border-2 border-black shadow-[3px_3px_0px_#FFC01E] hover:bg-[#C41230] hover:shadow-[3px_3px_0px_#000] transition-all cursor-pointer flex items-center gap-2"
          >
            <span>{lang === 'zh' ? '申请咨询 · 留学中国' : 'Apply Study in China'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Milestone Badges Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 bg-[#FFF8F0] border-2 border-black rounded-3xl p-5 shadow-[4px_4px_0px_#000]">
          <div className="text-center sm:border-r border-black/20 p-2">
            <div className="text-2xl sm:text-3xl font-black text-[#C41230]">100%</div>
            <div className="text-xs font-bold text-gray-700 mt-1">
              {lang === 'zh' ? '顶尖名校录取率' : 'Top Admit Rate'}
            </div>
          </div>
          <div className="text-center sm:border-r border-black/20 p-2">
            <div className="text-2xl sm:text-3xl font-black text-[#10B981]">90%+</div>
            <div className="text-xs font-bold text-gray-700 mt-1">
              {lang === 'zh' ? 'CSC全额奖学金率' : 'Full Scholarship'}
            </div>
          </div>
          <div className="text-center sm:border-r border-black/20 p-2">
            <div className="text-2xl sm:text-3xl font-black text-[#3884FF]">40+</div>
            <div className="text-xs font-bold text-gray-700 mt-1">
              {lang === 'zh' ? '正式录取信原件' : 'Offers Displayed'}
            </div>
          </div>
          <div className="text-center p-2">
            <div className="text-2xl sm:text-3xl font-black text-[#FFC01E]">18+</div>
            <div className="text-xs font-bold text-gray-700 mt-1">
              {lang === 'zh' ? '覆盖全球生源国' : 'Nationalities'}
            </div>
          </div>
        </div>

        {/* University Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: 'all', label: lang === 'zh' ? '全部录取通知书' : 'All Offers' },
            { id: 'sjtu', label: lang === 'zh' ? '上海交通大学 (SJTU)' : 'SJTU' },
            { id: 'thu', label: lang === 'zh' ? '清华大学 (THU)' : 'Tsinghua' },
            { id: 'pku', label: lang === 'zh' ? '北京大学 (PKU)' : 'Peking Univ' },
            { id: 'fdu', label: lang === 'zh' ? '复旦大学 (FDU)' : 'Fudan' },
            { id: 'zju', label: lang === 'zh' ? '浙江大学 (ZJU)' : 'Zhejiang Univ' },
            { id: 'csc', label: lang === 'zh' ? '★ CSC全额奖学金' : 'CSC Full Award' },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedUniFilter(filter.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-black border-2 border-black transition-all cursor-pointer ${
                selectedUniFilter === filter.id
                  ? 'bg-black text-white shadow-[2px_2px_0px_#FFC01E]'
                  : 'bg-white text-black hover:bg-gray-100 shadow-[2px_2px_0px_#000]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Admission Letter Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              onClick={() => onOpenAdmissionOffer(offer)}
              className="group bg-white border-[2.5px] border-black rounded-3xl overflow-hidden shadow-[5px_5px_0px_#000000] hover:shadow-[9px_9px_0px_#C41230] hover:-translate-y-1 transition-all cursor-pointer flex flex-col relative"
            >
              {/* University Header Banner with Seal */}
              <div
                className="px-5 py-4 border-b-[2.5px] border-black flex items-center justify-between text-white relative overflow-hidden"
                style={{ backgroundColor: offer.universityColor }}
              >
                <div className="flex items-center gap-2.5 z-10">
                  <div className="w-8 h-8 rounded-full bg-white text-black border-2 border-black flex items-center justify-center font-black text-xs shadow-[2px_2px_0px_#000]">
                    {offer.universityLogoText}
                  </div>
                  <div>
                    <h3 className="font-black text-sm sm:text-base tracking-tight leading-tight">
                      {lang === 'zh' ? offer.universityZh : offer.university}
                    </h3>
                    <span className="text-[10px] text-white/80 font-mono font-bold">
                      {offer.admissionNo}
                    </span>
                  </div>
                </div>

                <span className="z-10 px-2 py-0.5 bg-white/20 border border-white/40 text-white text-[10px] font-black rounded-full">
                  {offer.badge}
                </span>

                {/* Decorative background watermark */}
                <div className="absolute right-[-10px] top-[-15px] opacity-15 text-6xl font-serif font-black select-none pointer-events-none">
                  {offer.universityLogoText}
                </div>
              </div>

              {/* Admission Certificate Body Card */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-[#FFFDF9] relative">
                {/* Simulated Red Official Stamp Watermark in background */}
                <div className="absolute right-4 bottom-14 opacity-10 pointer-events-none select-none text-red-600 font-serif text-5xl font-black rotate-[-12deg]">
                  录取
                </div>

                <div className="space-y-3 relative z-10">
                  {/* Student & Country Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xl">{offer.studentFlag}</span>
                      <span className="font-black text-sm text-black">{offer.studentName}</span>
                      <span className="text-xs text-gray-500 font-bold">({offer.studentCountry})</span>
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 bg-gray-100 border border-black/20 rounded-md">
                      {offer.year}
                    </span>
                  </div>

                  {/* Degree & Major */}
                  <div className="bg-white border-2 border-black/20 rounded-2xl p-3 space-y-1 text-xs">
                    <div className="font-bold text-gray-500">
                      {lang === 'zh' ? '录取专业 / 层次：' : 'Program & Major:'}
                    </div>
                    <div className="font-black text-black text-xs sm:text-sm">
                      {lang === 'zh' ? offer.majorZh : offer.major}
                    </div>
                    <div className="text-[11px] text-gray-600 font-bold">
                      {lang === 'zh' ? offer.degreeZh : offer.degree}
                    </div>
                  </div>

                  {/* Scholarship Pill */}
                  <div className="bg-[#FEF2F2] border border-[#C41230]/40 rounded-xl p-2.5 flex items-start gap-2 text-xs">
                    <Award className="w-4 h-4 text-[#C41230] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-black text-[#C41230] block">
                        {lang === 'zh' ? offer.scholarshipZh : offer.scholarship}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom View Notice CTA */}
                <div className="pt-2 border-t border-dashed border-gray-300 flex items-center justify-between text-xs font-black text-gray-700 group-hover:text-[#C41230] transition-colors relative z-10">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    {lang === 'zh' ? '官方防伪可核验' : 'Official Notice Verified'}
                  </span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {lang === 'zh' ? '检视通知书原件' : 'View Notice'}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FOOTER CALLOUT / COLLABORATION */}
      <section className="bg-[#FFC01E] border-[2.5px] border-black rounded-3xl p-8 sm:p-12 shadow-[6px_6px_0px_#000000]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
              {lang === 'zh' ? '想一起做些酷产品，或咨询留学中国？' : 'Want to collaborate or study in China?'}
            </h3>
            <p className="text-sm sm:text-base font-bold text-gray-800">
              {lang === 'zh'
                ? '无论是深夜 Vibe Coding、创意合作，还是顶尖名校 CSC 奖学金申请，随时欢迎聊聊！'
                : 'Open for vibe coding hacks, product design collaborations, and Study in China mentorship.'}
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="px-8 py-4 bg-black text-white font-black text-sm rounded-2xl border-2 border-black shadow-[4px_4px_0px_#FFFFFF] hover:bg-[#FF5C67] hover:shadow-[4px_4px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer shrink-0"
          >
            {lang === 'zh' ? '立即取得联系' : 'Get in touch'}
          </button>
        </div>
      </section>
    </div>
  );
};
