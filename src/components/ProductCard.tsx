import React from 'react';
import { Language, VibeProductItem } from '../types';
import { pick } from '../i18n';

interface ProductCardProps {
  product: VibeProductItem;
  lang: Language;
  onOpen: (product: VibeProductItem) => void;
}

/**
 * Shared product card used by both HomeTab and ProductsTab.
 * Any visual change here automatically syncs to both pages.
 */
export const ProductCard: React.FC<ProductCardProps> = ({ product, lang, onOpen }) => {
  return (
    <div
      onClick={() => onOpen(product)}
      className="group relative rounded-3xl border-[2.5px] border-black p-7 sm:p-8 shadow-[8px_8px_0px_#000000] hover:-translate-y-1 hover:shadow-[10px_10px_0px_#FFC01E] transition-all overflow-hidden flex flex-col justify-between min-h-[260px] cursor-pointer"
      style={{
        backgroundColor: '#FAF8F5',
        backgroundImage:
          'linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
        backgroundSize: '18px 18px',
      }}
    >
      {/* Soft Yellow Top-Right Glow */}
      <div
        className="absolute top-0 right-0 w-36 h-36 bg-[#FEF08A]/50 -mr-10 -mt-10 rounded-full blur-xl pointer-events-none"
        aria-hidden="true"
      />
      {/* Diagonal folded corner accent */}
      <div
        className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.03) 50%)' }}
      />

      {/* Top Details */}
      <div className="relative z-10">
        <div className="inline-block px-3 py-1 bg-black text-white text-xs font-mono font-black rounded-md tracking-wider">
          {product.itemNumber}
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight mt-4 group-hover:text-[#3884FF] transition-colors">
          {pick(lang, product.titleZh, product.title, product.titleRu)}
        </h3>
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
            onClick={(e) => {
              e.stopPropagation();
              onOpen(product);
            }}
            className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 bg-white text-black font-black text-sm rounded-xl border-[2px] border-black shadow-[3px_3px_0px_#000000] hover:bg-black hover:text-white hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
          >
            <span>{pick(lang, '查看产品', 'View Product', 'Смотреть продукт')}</span>
            <span className="font-sans">→</span>
          </button>
        </div>
        <div className="mt-6 text-center">
          <span className="text-[11px] font-mono font-extrabold text-gray-400 tracking-wider uppercase">
            {product.releaseDate}
          </span>
        </div>
      </div>
    </div>
  );
};
