import React, { useState } from 'react';
import { Search, ArrowRight, Heart, Clock, Calendar, BookOpen } from 'lucide-react';
import { Language, ArticleItem } from '../types';
import { articlesData } from '../data/portfolioData';
import {
  ArticleSwatchesVector,
  ArticleH1Vector,
  ArticleMobileVector,
  ArticleNetFriendsCover,
  ArticleSJTUCover,
  ArticleGouqiIslandCover,
} from './Illustrations';

interface ArticlesTabProps {
  lang: Language;
  onOpenArticle: (article: ArticleItem) => void;
}

export const ArticlesTab: React.FC<ArticlesTabProps> = ({ lang, onOpenArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', '随笔', '日记', '情感', 'Resources', 'Articles'];

  const filteredArticles = articlesData.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.titleZh.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerptZh.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 1. ARTICLES HERO */}
      <section className="pt-6 sm:pt-10 text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block px-3.5 py-1.5 bg-[#FF5C67] border-2 border-black rounded-full shadow-[3px_3px_0px_#000000] text-xs font-black uppercase tracking-wider text-white">
          {lang === 'zh' ? '设计专栏 & 博客' : 'WRITING & THOUGHTS'}
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-black">
          {lang === 'zh' ? '我的文章与见解' : 'Articles & News'}
        </h1>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto font-normal">
          {lang === 'zh'
            ? '记录关于现代产品设计、数学字阶规范、新野兽派视觉哲学与全流程代码化原型的深度探索。'
            : 'Lorem ipsum dolor sit amet dolor consectetur adipiscing elit ectus felis aliquet cursus magnaol dolori montes augue donec cras.'}
        </p>

        {/* Search & Category Filter Controls */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'zh' ? '搜索文章关键词...' : 'Search articles...'}
              className="w-full pl-9 pr-4 py-2 bg-white border-2 border-black rounded-full text-xs sm:text-sm font-medium focus:outline-none focus:shadow-[2px_2px_0px_#000000]"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-black border-2 border-black transition-all cursor-pointer ${
                    isActive
                      ? 'bg-black text-white shadow-[2px_2px_0px_#FFC01E]'
                      : 'bg-white text-black hover:bg-gray-100 shadow-[1.5px_1.5px_0px_#000000]'
                  }`}
                >
                  {cat === 'All' ? (lang === 'zh' ? '全部' : 'All') : cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. ARTICLES GRID (Matches Image 4 styling) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            onClick={() => onOpenArticle(article)}
            className="bg-white border-[2.5px] border-black rounded-3xl p-6 shadow-[5px_5px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              {/* Card Illustration Box */}
              <div className="w-full h-48 bg-gray-50 border-2 border-black rounded-2xl mb-5 overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform">
                {article.coverType === 'avatar-polaroid' && <ArticleNetFriendsCover />}
                {article.coverType === 'minimal-blue' && <ArticleSJTUCover />}
                {article.coverType === 'ocean-island' && <ArticleGouqiIslandCover />}
                {article.illustrationType === 'swatches' && <ArticleSwatchesVector />}
                {article.illustrationType === 'h1-monitor' && <ArticleH1Vector />}
                {article.illustrationType === 'mobile-analytics' && <ArticleMobileVector />}
              </div>

              {/* Category & Date */}
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="px-3 py-1 bg-black text-white font-extrabold rounded-full uppercase tracking-wider">
                  {lang === 'zh' ? article.categoryZh : article.category}
                </span>
                <div className="flex items-center gap-1 font-bold text-gray-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.date}</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl font-black text-black tracking-tight leading-snug group-hover:text-[#FF5C67] transition-colors mb-2">
                {lang === 'zh' ? article.titleZh : article.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                {lang === 'zh' ? article.excerptZh : article.excerpt}
              </p>
            </div>

            {/* Bottom Meta */}
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </div>
              <span className="text-black font-extrabold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                {lang === 'zh' ? '完整阅读' : 'Read more'} <ArrowRight className="w-3.5 h-3.5" />
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
            {lang === 'zh' ? '没有找到相关文章' : 'No articles found'}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {lang === 'zh' ? '尝试调整你的搜索关键词或筛选分类。' : 'Try adjusting your search keywords or filter.'}
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 bg-black text-white text-xs font-bold rounded-full cursor-pointer"
          >
            {lang === 'zh' ? '清除筛选' : 'Clear Filters'}
          </button>
        </div>
      )}
    </div>
  );
};
