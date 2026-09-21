import React, { useState, useMemo } from 'react';
import { Search, MessageSquare, Code, Eye, Heart, ExternalLink, Sparkles } from 'lucide-react';
import { Language, TabType, VideoItem } from '../types';
import { videosData } from '../data/portfolioData';
import { VideoRealisticCover } from './VideoRealisticCovers';
import { pick, formatCount, formatDuration } from '../i18n';

interface VideosTabProps {
  onNavigate: (tab: TabType) => void;
  lang: Language;
  onOpenVideo: (video: VideoItem) => void;
}

export const VideosTab: React.FC<VideosTabProps> = ({ onNavigate, lang, onOpenVideo }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'sb-chat' | 'ai-coding'>('sb-chat');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter videos based on category and search query
  const filteredVideos = useMemo(() => {
    return videosData.filter((v) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        v.titleZh.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (v.titleRu?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
        v.coverText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (v.coverTextEn?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
        (v.coverTextRu?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);

      if (!matchesSearch) return false;

      if (activeCategory === 'sb-chat') {
        // Videos 1 to 6 are life and chat vlogs
        return ['video-1', 'video-2', 'video-3', 'video-4', 'video-5', 'video-6'].includes(v.id);
      }

      if (activeCategory === 'ai-coding') {
        // AI coding videos
        return ['video-7', 'video-8'].includes(v.id);
      }

      return true;
    });
  }, [activeCategory, searchQuery]);

  const displayedVideos = filteredVideos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredVideos.length;

  return (
    <div className="space-y-12 sm:space-y-16 py-4 sm:py-8">
      {/* =========================================================================
          HEADER ROW: Video Library Title & Search Input (Matches Screenshot 1)
      ========================================================================= */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left: Video Library Title & Subtitle */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-black">
              {pick(lang, '视频', 'Video', 'Видео')}
            </h1>
            <div className="inline-block bg-[#3884FF] text-white px-5 sm:px-6 py-1.5 sm:py-2 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_#000000] rotate-[-2deg]">
              <span className="text-3xl sm:text-5xl font-black tracking-tight">
                {pick(lang, '库', 'Library', 'тека')}
              </span>
            </div>
          </div>
          <p className="text-base sm:text-lg font-bold text-gray-700">
            {pick(
              lang,
              '从日料店一天赚多少，到毛选里的做事方法，再到 AI 编程从 0 到 1——坑我先踩，你抄作业就行。',
              'From a day’s restaurant revenue to On Practice and vibe coding from zero — I test the pitfalls, you copy the homework.',
              'От дневной выручки ресторана до идей Мао Цзэдуна и ИИ-программирования с нуля — я наступаю на грабли, вы копируете готовое.',
            )}
          </p>
        </div>

        {/* Right: Search Input (Matches Screenshot 1) */}
        <div className="w-full md:w-80">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-black">
              <Search className="w-5 h-5 stroke-[2.5]" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={pick(lang, '搜索视频...', 'Search videos...', 'Поиск видео...')}
              className="w-full pl-11 pr-4 py-3 bg-white border-[2.5px] border-black rounded-2xl text-sm font-black placeholder-gray-500 shadow-[3px_3px_0px_#000000] focus:outline-none focus:shadow-[5px_5px_0px_#000000] transition-all"
            />
          </div>
        </div>
      </div>

      {/* =========================================================================
          CATEGORY FILTER TABS (Matches Screenshot 1: SB唠嗑 / AI编程)
      ========================================================================= */}
      <div className="flex flex-wrap items-center gap-3.5">
        {/* SB唠嗑 Filter Button */}
        <button
          onClick={() => setActiveCategory('sb-chat')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border-[2.5px] border-black font-black text-sm tracking-wide cursor-pointer transition-all ${
            activeCategory === 'sb-chat'
              ? 'bg-[#FF70A6] text-black shadow-[4px_4px_0px_#000000] -translate-y-0.5'
              : 'bg-white text-black hover:bg-gray-50 shadow-[2px_2px_0px_#000000]'
          }`}
        >
          <MessageSquare className="w-4 h-4 stroke-[2.5]" />
          <span>{pick(lang, 'SB唠嗑', 'Life Banter', 'Жизненный трёп')}</span>
        </button>

        {/* AI编程 Filter Button */}
        <button
          onClick={() => setActiveCategory('ai-coding')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border-[2.5px] border-black font-black text-sm tracking-wide cursor-pointer transition-all ${
            activeCategory === 'ai-coding'
              ? 'bg-[#FF70A6] text-black shadow-[4px_4px_0px_#000000] -translate-y-0.5'
              : 'bg-white text-black hover:bg-gray-50 shadow-[2px_2px_0px_#000000]'
          }`}
        >
          <Code className="w-4 h-4 stroke-[2.5]" />
          <span>{pick(lang, 'AI编程', 'AI Coding', 'ИИ-кодинг')}</span>
        </button>
      </div>

      {/* =========================================================================
          VIDEOS GRID (Matches Screenshot 1 & 2: 3 Columns, High Fidelity Cards)
      ========================================================================= */}
      {displayedVideos.length === 0 ? (
        <div className="bg-white border-[2.5px] border-black rounded-3xl p-12 text-center shadow-[4px_4px_0px_#000000] space-y-3">
          <p className="text-xl font-black text-black">
            {pick(lang, '没有找到相关视频', 'No matching videos found', 'Видео не найдены')}
          </p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-[#FFC01E] border-2 border-black rounded-xl font-black text-sm cursor-pointer"
          >
            {pick(lang, '清除筛选', 'Clear Filters', 'Сбросить фильтры')}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => {
                if (video.externalUrl) {
                  window.open(video.externalUrl, '_blank', 'noopener,noreferrer');
                } else {
                  onOpenVideo(video);
                }
              }}
              className="bg-white border-[2.5px] border-black rounded-3xl overflow-hidden shadow-[5px_5px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Top Cover Image Box */}
                <div className="relative h-48 sm:h-52 w-full border-b-[2.5px] border-black overflow-hidden bg-gray-100">
                  <VideoRealisticCover
                    id={video.id}
                    coverText={pick(
                      lang,
                      video.coverText,
                      video.coverTextEn ?? video.coverText,
                      video.coverTextRu ?? video.coverTextEn ?? video.coverText,
                    )}
                  />

                  {/* Top-Left 抖音 Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-0.5 bg-[#FE2C55] text-white text-[11px] font-black rounded-md border-[1.5px] border-black shadow-[1.5px_1.5px_0px_#000000] tracking-wider">
                      {pick(lang, '抖音', 'Douyin', 'Дуинь')}
                    </span>
                  </div>

                  {/* Bottom-Right Duration Tag */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="px-2 py-0.5 bg-black/85 text-white text-[11px] font-black rounded-md font-mono">
                      {formatDuration(lang, video.duration)}
                    </span>
                  </div>
                </div>

                {/* Card Title Content */}
                <div className="p-5 sm:p-6 pb-4">
                  <h3 className="text-lg sm:text-xl font-black text-black leading-snug group-hover:text-[#3884FF] transition-colors line-clamp-2">
                    {pick(lang, video.titleZh, video.title, video.titleRu)}
                  </h3>
                </div>
              </div>

              {/* Card Bottom: Dashed Divider, Stats & Yellow Action Button */}
              <div className="px-5 sm:px-6 pb-5 pt-2">
                <div className="pt-3 border-t-[1.5px] border-dashed border-gray-300 flex items-center justify-between">
                  {/* Left: Views & Likes */}
                  <div className="flex items-center gap-4 text-xs font-black text-gray-700">
                    <div className="flex items-center gap-1.5">
                      <Eye className="w-4 h-4 text-black stroke-[2.5]" />
                      <span>{formatCount(lang, video.views)}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-4 h-4 text-[#FF5C67] stroke-[2.5]" />
                      <span>{video.likes}</span>
                    </div>
                  </div>

                  {/* Right: Yellow External Link Circle Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (video.externalUrl) {
                        window.open(video.externalUrl, '_blank', 'noopener,noreferrer');
                      } else {
                        onOpenVideo(video);
                      }
                    }}
                    className="w-9 h-9 rounded-full bg-[#FFC01E] border-[2px] border-black flex items-center justify-center text-black shadow-[2px_2px_0px_#000000] group-hover:scale-110 group-hover:rotate-6 transition-transform cursor-pointer"
                    title={pick(lang, '播放视频', 'Play video', 'Смотреть видео')}
                  >
                    <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* =========================================================================
          LOAD MORE BUTTON (Matches Screenshot 2)
      ========================================================================= */}
      {hasMore && (
        <div className="flex justify-center pt-2">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-8 py-3.5 bg-black text-white font-black text-base rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_#FFC01E] hover:bg-[#1E293B] hover:-translate-y-0.5 transition-all cursor-pointer tracking-wide"
          >
            {pick(lang, '加载更多视频', 'Load More Videos', 'Показать ещё видео')}
          </button>
        </div>
      )}

      {/* =========================================================================
          MORE CONTENT CTA CARD (Matches Screenshot 3: 想看更多内容？)
      ========================================================================= */}
      <section className="pt-6 sm:pt-10">
        <div className="bg-[#FFE4EE] border-[3px] border-black rounded-3xl p-8 sm:p-14 shadow-[8px_8px_0px_#000000] text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black">
            {pick(lang, '想看更多内容？', 'Want to see more?', 'Хотите больше контента?')}
          </h2>

          <div className="text-base sm:text-lg font-bold text-gray-800 max-w-xl mx-auto space-y-1 leading-relaxed">
            <p>
              {pick(
                lang,
                '在抖音关注我，双号更新不迷路',
                'Follow me on Douyin — two accounts, all the updates',
                'Подписывайтесь на меня в Дуине — два аккаунта, все обновления',
              )}
            </p>
            <p>
              {pick(
                lang,
                '视频号看创业vlog和认知分享，图文号读干货笔记',
                'Video account for vlogs and insights, image-text account for notes',
                'Видеоаккаунт — влоги и инсайты, текстовый аккаунт — заметки и выжимки',
              )}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => window.open('https://v.douyin.com/VkWl_KscvFE/', '_blank', 'noopener,noreferrer')}
              className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-black text-white font-black text-base sm:text-lg rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1 transition-all cursor-pointer tracking-wide"
            >
              {pick(lang, '前往我的抖音视频号', 'My Douyin Video Account', 'Мой видеоаккаунт в Дуине')}
            </button>
            <button
              onClick={() => window.open('https://v.douyin.com/wCyQDn8xHCE/', '_blank', 'noopener,noreferrer')}
              className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-[#FE2C55] text-white font-black text-base sm:text-lg rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1 transition-all cursor-pointer tracking-wide"
            >
              {pick(lang, '前往我的抖音图文号', 'My Douyin Image-Text Account', 'Мой текстовый аккаунт в Дуине')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
