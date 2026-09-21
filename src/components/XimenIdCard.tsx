import React from 'react';
import { Sparkles } from 'lucide-react';
import { Language } from '../types';
import { pick } from '../i18n';

interface XimenIdCardProps {
  className?: string;
  lang?: Language;
}

export const XimenIdCard: React.FC<XimenIdCardProps> = ({
  className = '',
  lang = 'zh' as Language,
}) => {
  return (
    <div
      className={`relative w-full max-w-[420px] bg-white border-[3px] border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_#000000] hover:shadow-[12px_12px_0px_#000000] transition-all hover:-translate-y-1 select-none ${className}`}
    >
      {/* Top Green Banner */}
      <div className="bg-[#22C55E] border-b-[3px] border-black px-6 py-3.5 relative">
        <h3 className="text-xl font-black tracking-wider text-black">ID CARD</h3>
        <p className="text-[11px] font-extrabold text-black/90 tracking-widest uppercase">
          ZHUHAI COLLEGE OF SCIENCE AND TECHNOLOGY
        </p>

        {/* Top-Right Stamp Sticker: XMMXOVO */}
        <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full bg-[#FF70A6] border-[2.5px] border-black flex flex-col items-center justify-center rotate-12 shadow-[3px_3px_0px_#000000] z-10 hover:rotate-6 transition-transform">
          <svg className="w-8 h-8 text-black" viewBox="0 0 36 36" fill="currentColor">
            {/* Smile face */}
            <circle cx="18" cy="18" r="16" fill="#FF70A6" stroke="#000" strokeWidth="2.5" />
            <circle cx="12" cy="14" r="2.5" fill="#000" />
            <circle cx="24" cy="14" r="2.5" fill="#000" />
            <path
              d="M 12 21 C 14 26, 22 26, 24 21"
              stroke="#000"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-[10px] font-black text-black tracking-tight mt-0.5">
            YCMXOVO
          </span>
        </div>
      </div>

      {/* Main Body */}
      <div className="p-5 sm:p-6 space-y-5">
        {/* Photo + Details Row */}
        <div className="flex gap-4 items-stretch">
          {/* Avatar Area */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-36 bg-[#F8FAFC] border-[2.5px] border-black rounded-2xl overflow-hidden flex items-center justify-center shadow-[2px_2px_0px_#000000]">
              {/* Cartoon Yichen Avatar — Racing Driver */}
              <svg viewBox="0 0 160 180" className="w-full h-full">
                <rect width="160" height="180" fill="#FFC01E" />

                {/* Neck */}
                <rect
                  x="68"
                  y="98"
                  width="24"
                  height="30"
                  fill="#FFEDD5"
                  stroke="#000"
                  strokeWidth="3"
                />

                {/* Racing Suit Body */}
                <path
                  d="M 18 180 L 26 138 L 52 124 L 80 140 L 108 124 L 134 138 L 142 180 Z"
                  fill="#F0392B"
                  stroke="#000"
                  strokeWidth="3.5"
                />
                {/* Stand-up Collar */}
                <path
                  d="M 62 124 C 66 116, 94 116, 98 124 L 98 132 C 90 126, 70 126, 62 132 Z"
                  fill="#F0392B"
                  stroke="#000"
                  strokeWidth="3"
                />
                {/* Shoulder Stripes (Yellow) */}
                <path d="M 22 140 L 50 123 L 53 129 L 25 146 Z" fill="#FFC01E" stroke="#000" strokeWidth="2" />
                <path d="M 138 140 L 110 123 L 107 129 L 135 146 Z" fill="#FFC01E" stroke="#000" strokeWidth="2" />
                {/* Shoulder Stripes (White) */}
                <path d="M 26 147 L 53 131 L 56 136 L 29 152 Z" fill="#FFFFFF" stroke="#000" strokeWidth="1.6" />
                <path d="M 134 147 L 107 131 L 104 136 L 131 152 Z" fill="#FFFFFF" stroke="#000" strokeWidth="1.6" />
                {/* Center Zipper */}
                <path d="M 80 130 L 80 180" stroke="#000" strokeWidth="3" fill="none" />
                <path d="M 76 140 L 84 140 M 76 168 L 84 168" stroke="#000" strokeWidth="2" fill="none" />
                {/* Chest Badges */}
                <circle cx="60" cy="152" r="6.5" fill="#FFC01E" stroke="#000" strokeWidth="2" />
                <circle cx="60" cy="152" r="2.5" fill="#F0392B" stroke="#000" strokeWidth="1.2" />
                <rect x="86" y="146" width="11" height="15" rx="2" fill="#FFC01E" stroke="#000" strokeWidth="2" />
                <path d="M 91.5 150 L 89 155 L 94 155 Z" fill="#000" />

                {/* Racing Helmet (bottom-left, cropped) */}
                <circle cx="32" cy="164" r="21" fill="#F0392B" stroke="#000" strokeWidth="3.5" />
                <rect x="16" y="156" width="26" height="13" rx="6.5" fill="#17171B" stroke="#000" strokeWidth="2.5" />
                <path d="M 20 152 C 22 147, 26 144, 31 143" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />

                {/* Hand gripping helmet */}
                <rect x="34" y="140" width="9" height="14" rx="4.5" fill="#FFEDD5" stroke="#000" strokeWidth="2.5" />
                <rect x="44" y="137" width="9" height="15" rx="4.5" fill="#FFEDD5" stroke="#000" strokeWidth="2.5" />

                {/* Ears */}
                <circle cx="44" cy="84" r="8" fill="#FFEDD5" stroke="#000" strokeWidth="3" />
                <circle cx="116" cy="84" r="8" fill="#FFEDD5" stroke="#000" strokeWidth="3" />

                {/* Face */}
                <path
                  d="M 48 60 C 48 38, 112 38, 112 60 C 112 96, 48 96, 48 60 Z"
                  fill="#FFEDD5"
                  stroke="#000"
                  strokeWidth="3"
                />

                {/* Spiky Black Hair */}
                <path
                  d="M 58 42 L 64 26 L 71 40 L 76 38 L 83 22 L 90 38 L 95 40 L 102 30 L 106 44 C 114 50, 118 56, 118 64 C 112 54, 104 58, 98 54 C 92 60, 84 56, 80 58 C 72 54, 66 60, 60 55 C 52 58, 46 58, 42 64 C 42 56, 48 48, 58 42 Z"
                  fill="#17171B"
                  stroke="#000"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />

                {/* Black Sunglasses */}
                <rect x="51" y="66" width="25" height="17" rx="6" fill="#17171B" stroke="#000" strokeWidth="2.5" />
                <rect x="84" y="66" width="25" height="17" rx="6" fill="#17171B" stroke="#000" strokeWidth="2.5" />
                <path d="M 76 73 L 84 73" stroke="#000" strokeWidth="3" />
                <path d="M 51 71 L 45 69 M 109 71 L 115 69" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
                {/* Lens glare */}
                <path d="M 58 70 L 61 77 M 62 69 L 64 73" stroke="#FFF" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
                <path d="M 91 70 L 94 77 M 95 69 L 97 73" stroke="#FFF" strokeWidth="2" strokeLinecap="round" opacity="0.9" />

                {/* Nose */}
                <path d="M 78 87 C 79 89, 81 89, 82 87" stroke="#000" strokeWidth="2.2" strokeLinecap="round" fill="none" />

                {/* Cool Slight Smile */}
                <path d="M 71 93 C 75 97, 85 97, 89 93" stroke="#000" strokeWidth="2.6" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            {/* Pill Badges below Avatar */}
            <div className="flex items-center gap-1.5 mt-2.5">
              <span className="px-2.5 py-1 bg-[#3884FF] text-white text-[11px] font-black rounded-lg border-[2px] border-black shadow-[1.5px_1.5px_0px_#000000]">
                2003.02.18
              </span>
              <span className="px-2.5 py-1 bg-[#FF70A6] text-black text-[11px] font-black rounded-lg border-[2px] border-black shadow-[1.5px_1.5px_0px_#000000]">
                {pick(lang, '邯郸', 'Handan', 'Хандань')}
              </span>
            </div>
          </div>

          {/* Details Column */}
          <div className="flex-1 flex flex-col justify-between gap-2.5">
            {/* NAME */}
            <div className="bg-[#FEF08A] border-[2px] border-black rounded-xl p-2.5 shadow-[2px_2px_0px_#000000]">
              <span className="block text-[10px] font-black tracking-wider text-black/70">
                NAME
              </span>
              <span className="block text-xl font-black text-black">
                {pick(lang, '一晨', 'John Carter', 'Джон Картер')}
              </span>
            </div>

            {/* MAJOR */}
            <div className="bg-[#DBEAFE] border-[2px] border-black rounded-xl p-2.5 shadow-[2px_2px_0px_#000000]">
              <span className="block text-[10px] font-black tracking-wider text-black/70">
                MAJOR
              </span>
              <span className="block text-sm font-extrabold text-black leading-tight">
                {pick(
                  lang,
                  '计算机科学与技术',
                  'Computer Science & Technology',
                  'Информатика и вычислительная техника',
                )}
              </span>
            </div>

            {/* JOB */}
            <div className="bg-[#EDE9FE] border-[2px] border-black rounded-xl p-2.5 shadow-[2px_2px_0px_#000000]">
              <span className="block text-[10px] font-black tracking-wider text-black/70">
                JOB
              </span>
              <span className="block text-sm font-extrabold text-black leading-tight">
                {pick(
                  lang,
                  '前端开发工程师',
                  'Frontend Developer',
                  'Фронтенд-разработчик',
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section: ID No, Barcode, Official Stamp */}
        <div className="pt-2 border-t-[2px] border-dashed border-gray-300 flex items-end justify-between gap-3">
          <div className="space-y-1.5 flex-1">
            <span className="block text-[10px] font-black tracking-wider text-gray-500">
              ID NO.
            </span>
            <div className="text-sm font-black tracking-wider font-mono text-black">
              YC-20030218-0V0
            </div>

            {/* Realistic Barcode */}
            <div className="bg-white border-[2px] border-black rounded-lg p-2 shadow-[2px_2px_0px_#000000] flex items-center justify-between h-9 max-w-[200px]">
              <div className="flex items-center gap-[3px] h-full w-full">
                <span className="w-[3px] h-full bg-black"></span>
                <span className="w-[1.5px] h-full bg-black"></span>
                <span className="w-[4px] h-full bg-black"></span>
                <span className="w-[1px] h-full bg-black"></span>
                <span className="w-[2.5px] h-full bg-black"></span>
                <span className="w-[1px] h-full bg-black"></span>
                <span className="w-[3px] h-full bg-black"></span>
                <span className="w-[1.5px] h-full bg-black"></span>
                <span className="w-[2px] h-full bg-black"></span>
                <span className="w-[3.5px] h-full bg-black"></span>
                <span className="w-[1px] h-full bg-black"></span>
                <span className="w-[2.5px] h-full bg-black"></span>
                <span className="w-[4px] h-full bg-black"></span>
                <span className="w-[1.5px] h-full bg-black"></span>
                <span className="w-[2px] h-full bg-black"></span>
                <span className="w-[3px] h-full bg-black"></span>
                <span className="w-[1px] h-full bg-black"></span>
                <span className="w-[2px] h-full bg-black"></span>
              </div>
            </div>
          </div>

          {/* Official Vibe Circular Stamp */}
          <div className="w-16 h-16 rounded-full bg-[#FF70A6] border-[2.5px] border-black flex items-center justify-center p-1 shadow-[2px_2px_0px_#000000] rotate-[-8deg]">
            <div className="w-full h-full rounded-full bg-[#4EBA6F] border-[2px] border-black flex flex-col items-center justify-center text-center">
              <span className="text-[9px] font-black text-black leading-none">OFFICIAL</span>
              <span className="text-[9px] font-black text-black leading-none mt-0.5">VIBE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
