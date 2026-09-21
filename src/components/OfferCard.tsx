import React from 'react';
import { Award, ShieldCheck, GraduationCap, ChevronRight, FileCheck } from 'lucide-react';
import { StudyInChinaOffer, Language } from '../types';
import { pick } from '../i18n';

interface OfferCardProps {
  offer: StudyInChinaOffer;
  lang: Language;
  onOpen: (offer: StudyInChinaOffer) => void;
}

/**
 * 录取通知书案例卡片
 * 隐私规则：不显示学校名称与学生姓名，直接展示通知书原件照片
 */
export const OfferCard: React.FC<OfferCardProps> = ({ offer, lang, onOpen }) => {
  return (
    <div
      onClick={() => onOpen(offer)}
      className="group bg-white border-[2.5px] border-black rounded-3xl overflow-hidden shadow-[5px_5px_0px_#000000] hover:shadow-[9px_9px_0px_#C41230] hover:-translate-y-1 transition-all cursor-pointer flex flex-col"
    >
      {/* 通知书原件照片 */}
      <div className="relative h-56 sm:h-60 border-b-[2.5px] border-black bg-[#FFFDF9] overflow-hidden">
        {offer.imageUrl ? (
          <img
            src={offer.imageUrl}
            alt={pick(lang, '录取通知书原件', 'Original admission letter', 'Оригинал уведомления о зачислении')}
            className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-300"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: `${offer.universityColor}1A` }}
          >
            <FileCheck className="w-12 h-12 stroke-[1.5]" style={{ color: offer.universityColor }} />
          </div>
        )}
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#FFC01E] text-black text-[11px] font-black rounded-full border-[1.5px] border-black shadow-[2px_2px_0px_#000]">
          {pick(lang, offer.badge, offer.badgeEn ?? 'Fall 2026', offer.badgeRu ?? offer.badgeEn ?? 'Осень 2026')}
        </span>
        <span className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/80 backdrop-blur-xs text-white text-[10px] font-mono font-black rounded-md border border-white/20">
          {pick(lang, '通知书原件', 'ORIGINAL', 'ОРИГИНАЛ')}
        </span>
      </div>

      {/* 信息区（隐私：不含学校名与学生姓名） */}
      <div className="p-5 flex-1 flex items-center justify-between">
        <span className="text-xl" role="img" aria-label={offer.studentCountry}>
          {offer.studentFlag}
        </span>
        <span className="text-[11px] font-bold px-2 py-0.5 bg-gray-100 border border-black/20 rounded-md">
          Class of {offer.year}
        </span>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5">
        <div className="pt-3 border-t border-dashed border-gray-300 flex items-center justify-between text-xs font-black text-gray-700 group-hover:text-[#C41230] transition-colors">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
            {pick(lang, '官方防伪可核验', 'Verified', 'Проверено')}
          </span>
          <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            {pick(lang, '检视通知书原件', 'View Notice', 'Открыть документ')}
            <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};
