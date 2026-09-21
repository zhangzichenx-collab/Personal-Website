import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Heart, Eye, Share2, ThumbsUp, MessageSquare, Volume2, Maximize2 } from 'lucide-react';
import { VideoItem, Language } from '../types';
import { pick, formatCount, formatDuration } from '../i18n';

interface VideoPlayerModalProps {
  video: VideoItem | null;
  onClose: () => void;
  lang: Language;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  video,
  onClose,
  lang,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(video ? video.likes : 0);
  const [danmakuIndex, setDanmakuIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(25);

  useEffect(() => {
    if (video) {
      setLikeCount(video.likes);
      setHasLiked(false);
      setIsPlaying(true);
      setProgress(20);
    }
  }, [video]);

  // Simulate progress when playing
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 1));
      setDanmakuIndex((d) => d + 1);
    }, 400);
    return () => clearInterval(timer);
  }, [isPlaying]);

  if (!video) return null;

  const handleLike = () => {
    if (hasLiked) {
      setLikeCount((c) => c - 1);
      setHasLiked(false);
    } else {
      setLikeCount((c) => c + 1);
      setHasLiked(true);
    }
  };

  const danmakuPool = pick(
    lang,
    video.danmakuList ?? [],
    video.danmakuListEn ?? video.danmakuList ?? [],
    video.danmakuListRu ?? video.danmakuListEn ?? video.danmakuList ?? [],
  );

  const currentDanmaku =
    danmakuPool.length > 0
      ? danmakuPool[danmakuIndex % danmakuPool.length]
      : pick(
          lang,
          'UP主更新太快啦！',
          'The creator updates too fast!',
          'Автор слишком быстро выпускает новые видео!',
        );

  const badgeText = pick(lang, video.badge, 'Douyin', 'Дуинь');
  const videoTitle = pick(lang, video.titleZh, video.title, video.titleRu);
  const coverText = pick(
    lang,
    video.coverText,
    video.coverTextEn ?? video.coverText,
    video.coverTextRu ?? video.coverTextEn ?? video.coverText,
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in">
      <div
        className="bg-white border-[3px] border-black rounded-3xl w-full max-w-2xl shadow-[8px_8px_0px_#000000] overflow-hidden flex flex-col relative max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#3884FF] text-white border-b-[2.5px] border-black px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-black text-white font-black text-xs rounded-full uppercase tracking-wider">
              {badgeText}
            </span>
            <span className="font-extrabold text-sm sm:text-base tracking-tight truncate max-w-xs sm:max-w-md">
              {videoTitle}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white text-black border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer shadow-[2px_2px_0px_#000]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="relative w-full h-64 sm:h-80 bg-neutral-900 border-b-[2.5px] border-black flex items-center justify-center overflow-hidden select-none group">
          {/* Simulated Video Background with Cover Art */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-transform duration-700"
            style={{ backgroundColor: video.coverBg }}
          >
            <div className="text-center p-6 space-y-3">
              <span className="inline-block px-3 py-1 bg-black text-white text-xs font-black rounded-full mb-1">
                {pick(
                  lang,
                  `${badgeText} 视频预览`,
                  `${badgeText} VIDEO PREVIEW`,
                  `ВИДЕОПРЕВЬЮ · ${badgeText}`,
                )}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight leading-snug drop-shadow-xs">
                {coverText}
              </h2>
              <p className="text-xs sm:text-sm font-bold text-gray-700 max-w-md mx-auto">
                {videoTitle}
              </p>
            </div>
          </div>

          {/* Floating Danmaku Bullet Chat */}
          {isPlaying && (
            <div className="absolute top-6 left-full animate-marquee whitespace-nowrap text-white bg-black/60 px-3.5 py-1 rounded-full text-xs font-black border border-white/40 shadow-sm pointer-events-none">
              💬 {currentDanmaku}
            </div>
          )}

          {/* Central Play/Pause Watermark Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative z-10 w-16 h-16 rounded-full bg-white/95 border-[2.5px] border-black text-black flex items-center justify-center shadow-[4px_4px_0px_#000000] hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 fill-black" />
            ) : (
              <Play className="w-7 h-7 fill-black ml-1" />
            )}
          </button>

          {/* Player Bottom Control Bar */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 flex flex-col gap-1.5 z-10">
            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden cursor-pointer">
              <div
                className="h-full bg-[#FF5C67] transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-white text-xs font-bold px-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-[#FFC01E] cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <div className="flex items-center gap-1">
                  <Volume2 className="w-4 h-4" />
                  <span>01:14 / {formatDuration(lang, video.duration)}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="bg-white/20 px-2 py-0.5 rounded text-[11px]">
                  {pick(lang, '1080P 高清', '1080P HD', '1080P')}
                </span>
                <Maximize2 className="w-4 h-4 hover:text-[#FFC01E] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Video Info & Interactive Actions */}
        <div className="p-6 space-y-4 overflow-y-auto flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-xl font-black text-black tracking-tight leading-snug">
                {videoTitle}
              </h3>
              <div className="flex items-center gap-3 text-xs font-bold text-gray-500 mt-1">
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  {formatCount(lang, video.views)} {pick(lang, '播放', 'views', 'просмотров')}
                </span>
                <span>•</span>
                <span>{pick(lang, '弹幕 328 条', '328 danmaku', '328 комментариев')}</span>
                <span>•</span>
                <span>
                  {pick(lang, '时长', 'Duration', 'Длительность')}{' '}
                  {formatDuration(lang, video.duration)}
                </span>
              </div>
            </div>

            {/* Like & Interaction Pills */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleLike}
                className={`px-4 py-2 rounded-xl text-xs font-black border-2 border-black flex items-center gap-1.5 transition-all cursor-pointer ${
                  hasLiked
                    ? 'bg-[#FF5C67] text-white shadow-[2px_2px_0px_#000]'
                    : 'bg-white text-black hover:bg-gray-100 shadow-[2px_2px_0px_#000]'
                }`}
              >
                <Heart className={`w-4 h-4 ${hasLiked ? 'fill-white' : ''}`} />
                <span>{likeCount}</span>
              </button>

              <button
                onClick={() =>
                  alert(
                    pick(
                      lang,
                      '已复制视频链接！',
                      'Link copied to clipboard!',
                      'Ссылка на видео скопирована!',
                    ),
                  )
                }
                className="px-3 py-2 rounded-xl text-xs font-black border-2 border-black bg-white text-black hover:bg-gray-100 shadow-[2px_2px_0px_#000] flex items-center gap-1 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>{pick(lang, '分享', 'Share', 'Поделиться')}</span>
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-50 border-2 border-black rounded-2xl p-4 text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
            <p>
              {pick(
                lang,
                video.descriptionZh ?? '',
                video.descriptionEn ?? '',
                video.descriptionRu ?? video.descriptionEn ?? '',
              )}
            </p>
          </div>

          {/* Simulated Comments Area */}
          <div className="border-t border-gray-200 pt-3 space-y-2">
            <div className="text-xs font-black text-black flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-black" />
              <span>{pick(lang, '热门弹幕评论 (3 条)', 'Top Comments (3)', 'Лучшие комментарии (3)')}</span>
            </div>

            <div className="space-y-2">
              <div className="bg-white border border-black/30 rounded-xl p-2.5 text-xs">
                <span className="font-extrabold text-black">
                  {pick(lang, '@交大野生程序员', '@SJTU Wild Coder', '@SJTU Wild Coder')}:{' '}
                </span>
                <span className="text-gray-700">
                  {pick(
                    lang,
                    '哈哈哈哈这个选题太对味了！从大年初一到三体人，脑洞一如既往的大！',
                    'Hahaha this topic is spot on! From Lunar New Year to Trisolarians, the ideas are wilder than ever!',
                    'Хахаха, тема огонь! От первого дня Нового года до трисоляриан — фантазия как всегда на максималках!',
                  )}
                </span>
              </div>
              <div className="bg-white border border-black/30 rounded-xl p-2.5 text-xs">
                <span className="font-extrabold text-black">@VibeCoder99: </span>
                <span className="text-gray-700">
                  {pick(
                    lang,
                    '等会儿吃啥的小程序我也在用，盲盒抽中了潮汕牛肉火锅，真的治好了我的纠结症！',
                    "I use the 'what to eat' mini-app too — rolled Chaoshan beef hotpot from the blind box, cured my indecision!",
                    'Я тоже пользуюсь мини-приложением «что поесть» — в слепой коробке выпал чаошаньский говяжий хого, мою нерешительность как рукой сняло!',
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
