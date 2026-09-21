import React, { useState } from 'react';
import { Search, ArrowRight, Clock, Calendar, BookOpen, X } from 'lucide-react';
import { Language, ArticleItem } from '../types';
import { articlesData } from '../data/portfolioData';
import {
  ArticleSwatchesVector,
  ArticleH1Vector,
  ArticleMobileVector,
  ArticleNetFriendsCover,
  ArticleSJTUCover,
  ArticleGouqiIslandCover,
  ArticleXianyuSopCover,
  ArticleGptUsersCover,
  ArticlePostMealCover,
  ArticleEarthOnlineCover,
  ArticleNikeIdentityCover,
  ArticleCostcoTrustCover,
  ArticlePowerLawCover,
  ArticleRightOneCover,
  ArticlePopMartCover,
  ArticleProbabilityCover,
  ArticleEcologicalNicheCover,
  ArticleSpacexRedefineCover,
  ArticleIslandTradeCover,
  ArticleMathWisdomCover,
  ArticleCooperationCover,
  ArticleAttentionLeverageCover,
  ArticleIslandSavingCover,
  ArticleTcmFilterCover,
} from './Illustrations';
import { pick, formatReadTime } from '../i18n';

interface ArticlesTabProps {
  lang: Language;
  onOpenArticle: (article: ArticleItem) => void;
}

export const ArticlesTab: React.FC<ArticlesTabProps> = ({ lang, onOpenArticle }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredArticles = articlesData.filter((art) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      searchQuery === '' ||
      art.title.toLowerCase().includes(q) ||
      art.titleZh.toLowerCase().includes(q) ||
      (art.titleRu?.toLowerCase().includes(q) ?? false) ||
      art.excerpt.toLowerCase().includes(q) ||
      art.excerptZh.toLowerCase().includes(q) ||
      (art.excerptRu?.toLowerCase().includes(q) ?? false);
    return matchesSearch;
  });

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 1. ARTICLES HERO */}
      <section className="pt-6 sm:pt-10 text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block px-3.5 py-1.5 bg-[#FF5C67] border-2 border-black rounded-full shadow-[3px_3px_0px_#000000] text-xs font-black uppercase tracking-wider text-white">
          {pick(lang, '写作与思考', 'WRITING & THOUGHTS', 'ТЕКСТЫ И МЫСЛИ')}
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-black">
          {pick(lang, '我的文章与见解', 'Articles & News', 'Статьи и заметки')}
        </h1>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto font-normal">
          {pick(
            lang,
            '记录关于现代产品设计、数学字阶规范、新野兽派视觉哲学与全流程代码化原型的深度探索。',
            'Deep dives into modern product design, modular type scales, neo-brutalist visual philosophy, and code-driven prototyping.',
            'Размышления о продуктовом дизайне, типографике, нео-бруталистской визуальной философии и прототипировании на коде.',
          )}
        </p>

        {/* Search Bar */}
        <div className="pt-6 max-w-md mx-auto">
          <div className="relative group">
            <Search className="w-5 h-5 text-gray-400 absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={pick(lang, '搜索文章关键词...', 'Search articles...', 'Поиск по статьям...')}
              className="w-full pl-14 pr-12 py-3.5 bg-white border-[3px] border-black rounded-full text-sm font-medium focus:outline-none focus:shadow-[5px_5px_0px_#000000] shadow-[3px_3px_0px_#000000] transition-shadow"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#FF5C67] transition-colors cursor-pointer"
                aria-label={pick(lang, '清除搜索', 'Clear search', 'Очистить поиск')}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. ARTICLES GRID (Matches Image 4 styling) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            onClick={() => {
              if (article.externalUrl) {
                window.open(article.externalUrl, "_blank", "noopener,noreferrer");
              } else {
                onOpenArticle(article);
              }
            }}
            className="bg-white border-[2.5px] border-black rounded-3xl p-6 shadow-[5px_5px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              {/* Card Illustration Box */}
              <div className="w-full h-48 bg-gray-50 border-2 border-black rounded-2xl mb-5 overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform">
                {article.coverType === 'avatar-polaroid' && <ArticleNetFriendsCover />}
                {article.coverType === 'minimal-blue' && <ArticleSJTUCover />}
                {article.coverType === 'ocean-island' && <ArticleGouqiIslandCover />}
                {article.coverType === 'xianyu-sop' && <ArticleXianyuSopCover />}
                {article.coverType === 'gpt-users' && <ArticleGptUsersCover />}
                {article.coverType === 'post-meal' && <ArticlePostMealCover />}
                {article.coverType === 'earth-online' && <ArticleEarthOnlineCover />}
                {article.coverType === 'nike-identity' && <ArticleNikeIdentityCover />}
                {article.coverType === 'costco-trust' && <ArticleCostcoTrustCover />}
                {article.coverType === 'power-law' && <ArticlePowerLawCover />}
                {article.coverType === 'right-one' && <ArticleRightOneCover />}
                {article.coverType === 'pop-mart' && <ArticlePopMartCover />}
                {article.coverType === 'probability' && <ArticleProbabilityCover />}
                {article.coverType === 'ecological-niche' && <ArticleEcologicalNicheCover />}
                {article.coverType === 'spacex-redefine' && <ArticleSpacexRedefineCover />}
                {article.coverType === 'island-trade' && <ArticleIslandTradeCover />}
                {article.coverType === 'math-wisdom' && <ArticleMathWisdomCover />}
                {article.coverType === 'cooperation' && <ArticleCooperationCover />}
                {article.coverType === 'attention-leverage' && <ArticleAttentionLeverageCover />}
                {article.coverType === 'island-saving' && <ArticleIslandSavingCover />}
                {article.coverType === 'tcm-filter' && <ArticleTcmFilterCover />}
                {article.illustrationType === 'swatches' && <ArticleSwatchesVector />}
                {article.illustrationType === 'h1-monitor' && <ArticleH1Vector />}
                {article.illustrationType === 'mobile-analytics' && <ArticleMobileVector />}
              </div>

              {/* Category & Date */}
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="px-3 py-1 bg-black text-white font-extrabold rounded-full uppercase tracking-wider">
                  {pick(lang, article.categoryZh, article.category, article.categoryRu)}
                </span>
                <div className="flex items-center gap-1 font-bold text-gray-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.date}</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl font-black text-black tracking-tight leading-snug group-hover:text-[#FF5C67] transition-colors mb-2">
                {pick(lang, article.titleZh, article.title, article.titleRu)}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                {pick(lang, article.excerptZh, article.excerpt, article.excerptRu)}
              </p>
            </div>

            {/* Bottom Meta */}
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{formatReadTime(lang, article.readTime, article.readTimeRu)}</span>
              </div>
              <span className="text-black font-extrabold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                {pick(lang, '完整阅读', 'Read more', 'Читать далее')} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </section>

      {/* Empty State */}
      {filteredArticles.length === 0 && (
        <div className="text-center py-12 bg-white border-2 border-black rounded-3xl p-8 shadow-[4px_4px_0px_#000000]">
          <BookOpen className="w-12 h-12 mx-auto text-gray-400 mb-3" />
          <h3 className="text-lg font-black text-black">
            {pick(lang, '没有找到相关文章', 'No articles found', 'Статьи не найдены')}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {pick(
              lang,
              '尝试调整你的搜索关键词。',
              'Try adjusting your search keywords.',
              'Попробуйте изменить поисковый запрос.',
            )}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 bg-black text-white text-xs font-bold rounded-full cursor-pointer"
          >
            {pick(lang, '清除筛选', 'Clear Filters', 'Сбросить фильтры')}
          </button>
        </div>
      )}
    </div>
  );
};
