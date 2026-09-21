import React, { useState } from 'react';
import { X, Heart, Clock, Calendar, Share2, Check, Bookmark } from 'lucide-react';
import { ArticleItem, Language } from '../types';
import { ArticleSwatchesVector, ArticleH1Vector, ArticleMobileVector } from './Illustrations';
import { pick, formatReadTime } from '../i18n';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  lang: Language;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, lang }) => {
  const [likes, setLikes] = useState<number>(article?.likes || 0);
  const [hasLiked, setHasLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const content = pick(
    lang,
    article.contentZh,
    article.contentEn,
    article.contentRu ?? article.contentEn,
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white border-[3px] border-black rounded-3xl p-6 sm:p-10 shadow-[10px_10px_0px_#000000] my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full border-2 border-black bg-gray-100 hover:bg-[#FF5C67] hover:text-white flex items-center justify-center transition-colors cursor-pointer z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Category & Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-black text-white text-xs font-black uppercase rounded-full">
            {pick(lang, article.categoryZh, article.category, article.categoryRu)}
          </span>
          <div className="flex items-center gap-1 text-xs font-bold text-gray-500">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1 text-xs font-bold text-gray-500">
            <Clock className="w-3.5 h-3.5" />
            <span>{formatReadTime(lang, article.readTime, article.readTimeRu)}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-black mb-6 leading-snug">
          {pick(lang, article.titleZh, article.title, article.titleRu)}
        </h1>

        {/* Author byline */}
        <div className="flex items-center justify-between py-4 border-y-2 border-gray-200 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-black bg-[#FFC01E] flex items-center justify-center font-black text-sm">
              JC
            </div>
            <div>
              <div className="font-extrabold text-sm text-black">
                {pick(lang, '一晨', 'John Carter', 'Джон Картер')}
              </div>
              <div className="text-xs text-gray-500 font-medium">
                {pick(
                  lang,
                  '产品经理 & 写作者',
                  'Design Technologist & Writer',
                  'Продуктовый технолог и писатель',
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-black text-xs font-bold transition-all cursor-pointer ${
                hasLiked
                  ? 'bg-[#FF5C67] text-white shadow-[2px_2px_0px_#000000]'
                  : 'bg-white hover:bg-gray-100 shadow-[2px_2px_0px_#000000]'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-white' : ''}`} />
              <span>{likes}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-full border-2 border-black bg-white hover:bg-gray-100 shadow-[2px_2px_0px_#000000] cursor-pointer"
              title={pick(lang, '分享文章链接', 'Share article link', 'Поделиться ссылкой')}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Article Graphic Cover */}
        <div className="w-full bg-gray-50 border-2 border-black rounded-2xl p-4 mb-8 flex items-center justify-center shadow-[4px_4px_0px_#000000]">
          {article.illustrationType === 'swatches' ? (
            <ArticleSwatchesVector className="w-full max-w-sm max-h-56" />
          ) : article.illustrationType === 'h1-monitor' ? (
            <ArticleH1Vector className="w-full max-w-xs max-h-56" />
          ) : (
            <ArticleMobileVector className="w-full max-w-xs max-h-56" />
          )}
        </div>

        {/* Article Body Content */}
        <div className="prose prose-neutral max-w-none text-gray-800 space-y-4 text-base leading-relaxed">
          {content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-xl sm:text-2xl font-black text-black pt-4 pb-1 border-b border-gray-200">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('#### ')) {
              return (
                <h4 key={idx} className="text-lg font-extrabold text-black pt-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF5C67]" />
                  {paragraph.replace('#### ', '')}
                </h4>
              );
            }
            if (paragraph.startsWith('> ')) {
              return (
                <blockquote
                  key={idx}
                  className="bg-[#FFFBEB] border-l-4 border-[#FFC01E] p-4 rounded-r-xl text-black font-semibold italic text-base shadow-[2px_2px_0px_#000000]"
                >
                  {paragraph.replace('> ', '')}
                </blockquote>
              );
            }
            return (
              <p key={idx} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Bottom Reaction & Footer */}
        <div className="mt-10 pt-6 border-t-2 border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handleLike}
              className={`px-5 py-2.5 rounded-xl border-2 border-black font-black text-sm flex items-center gap-2 cursor-pointer shadow-[3px_3px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 ${
                hasLiked ? 'bg-[#FF5C67] text-white' : 'bg-[#FFC01E] text-black hover:bg-yellow-400'
              }`}
            >
              <Heart className={`w-4 h-4 ${hasLiked ? 'fill-white' : ''}`} />
              <span>
                {hasLiked
                  ? pick(lang, '已点赞', 'Liked!', 'Уже нравится')
                  : pick(lang, '给作者点赞', 'Applaud Article', 'Похвалить статью')}{' '}
                ({likes})
              </span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-black text-white rounded-xl border-2 border-black font-bold text-sm hover:bg-gray-800 transition-colors cursor-pointer"
          >
            {pick(lang, '返回文章列表', 'Back to Articles', 'Назад к статьям')}
          </button>
        </div>
      </div>
    </div>
  );
};
