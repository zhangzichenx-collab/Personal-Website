import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Sliders, Volume2, HelpCircle } from 'lucide-react';
import { Language, TabType, VibeProductItem } from '../types';
import { vibeProductsData } from '../data/portfolioData';
import { pick } from '../i18n';

interface ProductsTabProps {
  onNavigate: (tab: TabType) => void;
  lang: Language;
  onOpenProduct: (product: VibeProductItem) => void;
}

export const ProductsTab: React.FC<ProductsTabProps> = ({
  onNavigate,
  lang,
  onOpenProduct,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    // Only show #001 邯郸美食排行榜, hide #002/#003/#004
    const baseList = vibeProductsData.filter((p) => p.id === 'what-to-eat');
    if (!searchQuery.trim()) return baseList;
    const query = searchQuery.toLowerCase();
    return baseList.filter(
      (p) =>
        p.titleZh.toLowerCase().includes(query) ||
        p.title.toLowerCase().includes(query) ||
        (p.titleRu?.toLowerCase().includes(query) ?? false) ||
        p.descriptionZh.toLowerCase().includes(query) ||
        (p.descriptionRu?.toLowerCase().includes(query) ?? false) ||
        (p.itemNumber && p.itemNumber.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <div className="space-y-12 sm:space-y-16 py-4 sm:py-8">
      {/* =========================================================================
          HEADER ROW: Vibe Workshop Title & Search Box (Matches Screenshot)
      ========================================================================= */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left: Vibe Workshop Title & Subtitle */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-black">
              Vibe
            </h1>
            <div className="inline-block bg-[#FFC01E] text-black px-4 sm:px-6 py-1 sm:py-2 border-[3px] border-black shadow-[4px_4px_0px_#000000]">
              <span className="text-3xl sm:text-5xl font-black tracking-tight">
                {pick(lang, '工坊', 'Workshop', 'Мастерская')}
              </span>
            </div>
          </div>
          <p className="text-base sm:text-lg font-bold text-gray-700">
            {pick(
              lang,
              '为了让生活和工作简单、有趣一点点，和AI大聪明聊出来一些代码边角料。',
              'Little bits of vibe-coded hacks cooked up with AI assistants to make daily life fun and easy.',
              'Небольшие vibe-код поделки, рождённые в беседах с ИИ, чтобы жизнь и работа стали проще и веселее.',
            )}
          </p>
        </div>

        {/* Right: Search Box (Matches Screenshot) */}
        <div className="w-full md:w-80">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-black">
              <Search className="w-5 h-5 stroke-[2.5]" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={pick(lang, '搜索产品...', 'Search products...', 'Поиск продуктов...')}
              className="w-full pl-11 pr-4 py-3 bg-white border-[2.5px] border-black rounded-2xl text-sm font-black placeholder-gray-500 shadow-[4px_4px_0px_#000000] focus:outline-none focus:shadow-[6px_6px_0px_#000000] transition-all"
            />
          </div>
        </div>
      </div>

      {/* =========================================================================
          PRODUCTS GRID (Matches Screenshot: High Fidelity Neo-Brutalist Grid)
      ========================================================================= */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white border-[2.5px] border-black rounded-3xl p-12 text-center shadow-[4px_4px_0px_#000000] space-y-3">
          <p className="text-xl font-black text-black">
            {pick(lang, '没有找到匹配的产品', 'No products found', 'Продукты не найдены')}
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="px-4 py-2 bg-[#FFC01E] border-2 border-black rounded-xl font-black text-sm cursor-pointer"
          >
            {pick(lang, '重置搜索', 'Reset Search', 'Сбросить поиск')}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative rounded-3xl border-[2.5px] border-black p-7 sm:p-8 shadow-[8px_8px_0px_#000000] hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000000] transition-all overflow-hidden flex flex-col justify-between group cursor-default"
              style={{
                backgroundColor: '#FAF8F5',
                backgroundImage:
                  'linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }}
            >
              {/* Soft Yellow Top-Right Fold/Light Effect as in screenshot */}
              <div
                className="absolute top-0 right-0 w-36 h-36 bg-[#FEF08A]/50 -mr-10 -mt-10 rounded-full blur-xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Diagonal folded corner accent */}
              <div
                className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.03) 50%)',
                }}
              />

              {/* Top Details */}
              <div className="relative z-10">
                {/* # 001 Badge */}
                <div className="inline-block px-3 py-1 bg-black text-white text-xs font-mono font-black rounded-md tracking-wider">
                  {product.itemNumber || '# 001'}
                </div>

                {/* Product Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight mt-4">
                  {pick(lang, product.titleZh, product.title, product.titleRu)}
                </h3>

                {/* Description with Left Black Line Quote */}
                <div className="border-l-[2.5px] border-black pl-3 py-0.5 mt-4">
                  <p className="text-sm font-bold text-gray-800 leading-relaxed">
                    {pick(lang, product.descriptionZh, product.description, product.descriptionRu)}
                  </p>
                </div>
              </div>

              {/* Bottom Actions & Release Date */}
              <div className="relative z-10 pt-8 mt-auto">
                <div>
                  <button
                    onClick={() => onOpenProduct(product)}
                    className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 bg-white text-black font-black text-sm rounded-xl border-[2px] border-black shadow-[3px_3px_0px_#000000] hover:bg-black hover:text-white hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                  >
                    <span>{pick(lang, '查看产品', 'View Product', 'Смотреть продукт')}</span>
                    <span className="font-sans">→</span>
                  </button>
                </div>

                {/* RELEASED ON DATE */}
                <div className="mt-6 text-center">
                  <span className="text-[11px] font-mono font-extrabold text-gray-400 tracking-wider uppercase">
                    {product.releaseDate || 'RELEASED ON 2026.01.17'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
