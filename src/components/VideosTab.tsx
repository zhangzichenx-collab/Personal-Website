import React, { useState, useMemo } from 'react';
import { Search, MessageSquare, Code, Eye, Heart, ExternalLink, Sparkles } from 'lucide-react';
import { Language, TabType, VideoItem } from '../types';
import { videosData } from '../data/portfolioData';
import { VideoRealisticCover } from './VideoRealisticCovers';

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
        v.coverText.toLowerCase().includes(searchQuery.toLowerCase());

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

  const handleBilibiliProfileClick = () => {
    window.open('https://space.bilibili.com', '_blank', 'noopener,noreferrer');
  };

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
              Video
            </h1>
            <div className="inline-block bg-[#3884FF] text-white px-5 sm:px-6 py-1.5 sm:py-2 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_#000000] rotate-[-2deg]">
              <span className="text-3xl sm:text-5xl font-black tracking-tight">
                Library
              </span>
            </div>
          </div>
          <p className="text-base sm:text-lg font-bold text-gray-700">
            {lang === 'zh'
              ? '分享抽象唠嗑视频、日常生活vlog、AI 编程的小白进阶史！'
              : 'Abstract banter, daily life vlogs, and a beginner’s journey into AI coding!'}
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
              placeholder={lang === 'zh' ? '搜索视频...' : 'Search videos...'}
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
          <span>{lang === 'zh' ? 'SB唠嗑' : 'Life Banter'}</span>
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
          <span>{lang === 'zh' ? 'AI编程' : 'AI Coding'}</span>
        </button>

        {/* Optional "All" Button for convenience */}
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2.5 rounded-xl border-[2.5px] border-black font-black text-sm cursor-pointer transition-all ${
            activeCategory === 'all'
              ? 'bg-[#FFC01E] text-black shadow-[4px_4px_0px_#000000] -translate-y-0.5'
              : 'bg-white text-gray-600 hover:bg-gray-50 shadow-[2px_2px_0px_#000000]'
          }`}
        >
          <span>{lang === 'zh' ? '全部视频' : 'All Videos'}</span>
        </button>
      </div>

      {/* =========================================================================
          VIDEOS GRID (Matches Screenshot 1 & 2: 3 Columns, High Fidelity Cards)
      ========================================================================= */}
      {displayedVideos.length === 0 ? (
        <div className="bg-white border-[2.5px] border-black rounded-3xl p-12 text-center shadow-[4px_4px_0px_#000000] space-y-3">
          <p className="text-xl font-black text-black">
            {lang === 'zh' ? '没有找到相关视频' : 'No matching videos found'}
          </p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-[#FFC01E] border-2 border-black rounded-xl font-black text-sm cursor-pointer"
          >
            {lang === 'zh' ? '清除筛选' : 'Clear Filters'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => onOpenVideo(video)}
              className="bg-white border-[2.5px] border-black rounded-3xl overflow-hidden shadow-[5px_5px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Top Cover Image Box */}
                <div className="relative h-48 sm:h-52 w-full border-b-[2.5px] border-black overflow-hidden bg-gray-100">
                  <VideoRealisticCover id={video.id} coverText={video.coverText} />

                  {/* Top-Left BILIBILI Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-0.5 bg-[#FF70A6] text-white text-[11px] font-black rounded-md border-[1.5px] border-black shadow-[1.5px_1.5px_0px_#000000] tracking-wider uppercase">
                      BILIBILI
                    </span>
                  </div>

                  {/* Bottom-Right Duration Tag */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="px-2 py-0.5 bg-black/85 text-white text-[11px] font-black rounded-md font-mono">
                      {video.duration}
                    </span>
                  </div>
                </div>

                {/* Card Title Content */}
                <div className="p-5 sm:p-6 pb-4">
                  <h3 className="text-lg sm:text-xl font-black text-black leading-snug group-hover:text-[#3884FF] transition-colors line-clamp-2">
                    {lang === 'zh' ? video.titleZh : video.title}
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
                      <span>{video.views}</span>
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
                      onOpenVideo(video);
                    }}
                    className="w-9 h-9 rounded-full bg-[#FFC01E] border-[2px] border-black flex items-center justify-center text-black shadow-[2px_2px_0px_#000000] group-hover:scale-110 group-hover:rotate-6 transition-transform cursor-pointer"
                    title={lang === 'zh' ? '播放视频' : 'Play video'}
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
            Load More Videos
          </button>
        </div>
      )}

      {/* =========================================================================
          MORE CONTENT CTA CARD (Matches Screenshot 3: 想看更多内容？)
      ========================================================================= */}
      <section className="pt-6 sm:pt-10">
        <div className="bg-[#FFE4EE] border-[3px] border-black rounded-3xl p-8 sm:p-14 shadow-[8px_8px_0px_#000000] text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black">
            {lang === 'zh' ? '想看更多内容？' : 'Want to see more?'}
          </h2>

          <div className="text-base sm:text-lg font-bold text-gray-800 max-w-xl mx-auto space-y-1 leading-relaxed">
            <p>
              {lang === 'zh'
                ? '在 Bilibili 关注我，不定期更新'
                : 'Follow me on Bilibili for spontaneous updates'}
            </p>
            <p>
              {lang === 'zh'
                ? '关于左右脑互搏、日常生活和vibe coding的精彩内容'
                : 'Fascinating thoughts on inner banter, daily life, and vibe coding adventures'}
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={handleBilibiliProfileClick}
              className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-[#FF70A6] text-white font-black text-base sm:text-lg rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1 transition-all cursor-pointer tracking-wide"
            >
              {lang === 'zh' ? '前往我的 bilibili 主页' : 'Visit My Bilibili Profile'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
