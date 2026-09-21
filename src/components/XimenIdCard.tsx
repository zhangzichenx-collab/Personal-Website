import React from 'react';
import { Sparkles } from 'lucide-react';

interface XimenIdCardProps {
  className?: string;
}

export const XimenIdCard: React.FC<XimenIdCardProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full max-w-[420px] bg-white border-[3px] border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_#000000] hover:shadow-[12px_12px_0px_#000000] transition-all hover:-translate-y-1 select-none ${className}`}
    >
      {/* Top Green Banner */}
      <div className="bg-[#22C55E] border-b-[3px] border-black px-6 py-3.5 relative">
        <h3 className="text-xl font-black tracking-wider text-black">ID CARD</h3>
        <p className="text-[11px] font-extrabold text-black/90 tracking-widest uppercase">
          SHANGHAI JIAOTONG UNIVERSITY
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
            XMMXOVO
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
              {/* Cartoon Ximen Avatar */}
              <svg viewBox="0 0 160 180" className="w-full h-full">
                <rect width="160" height="180" fill="#E2E8F0" />
                {/* Background aura */}
                <circle cx="80" cy="85" r="55" fill="#FFFBEB" />

                {/* Body / Hoodie Jacket (Pink & Sky Blue block) */}
                <path
                  d="M 20 180 L 30 135 L 55 125 L 80 145 L 105 125 L 130 135 L 140 180 Z"
                  fill="#FF70A6"
                  stroke="#000"
                  strokeWidth="3.5"
                />
                {/* Blue Front Placket */}
                <path
                  d="M 65 130 L 95 130 L 95 180 L 65 180 Z"
                  fill="#3884FF"
                  stroke="#000"
                  strokeWidth="3.5"
                />
                {/* Collar */}
                <path
                  d="M 55 125 C 65 140, 95 140, 105 125"
                  fill="#3884FF"
                  stroke="#000"
                  strokeWidth="3"
                />
                <circle cx="80" cy="148" r="2.5" fill="#000" />

                {/* Neck */}
                <rect
                  x="68"
                  y="100"
                  width="24"
                  height="26"
                  fill="#FED7AA"
                  stroke="#000"
                  strokeWidth="3"
                />

                {/* Back Hair */}
                <path
                  d="M 38 75 C 36 125, 48 135, 62 135 L 98 135 C 112 135, 124 125, 122 75 Z"
                  fill="#1E293B"
                  stroke="#000"
                  strokeWidth="3.5"
                />

                {/* Ears */}
                <circle cx="48" cy="85" r="9" fill="#FED7AA" stroke="#000" strokeWidth="3" />
                <circle cx="112" cy="85" r="9" fill="#FED7AA" stroke="#000" strokeWidth="3" />

                {/* Face */}
                <path
                  d="M 50 65 C 50 40, 110 40, 110 65 C 110 100, 50 100, 50 65 Z"
                  fill="#FFEDD5"
                  stroke="#000"
                  strokeWidth="3"
                />

                {/* Hair Front / Bangs */}
                <path
                  d="M 44 65 C 45 35, 115 35, 116 65 C 114 62, 106 60, 98 62 C 90 58, 80 64, 75 60 C 65 65, 52 58, 44 65 Z"
                  fill="#1E293B"
                  stroke="#000"
                  strokeWidth="3.5"
                />

                {/* Eyebrows */}
                <path
                  d="M 59 70 C 63 67, 69 67, 72 70"
                  stroke="#000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 88 70 C 91 67, 97 67, 101 70"
                  stroke="#000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Round Glasses */}
                <circle
                  cx="66"
                  cy="78"
                  r="11"
                  fill="white"
                  fillOpacity="0.4"
                  stroke="#000"
                  strokeWidth="3"
                />
                <circle
                  cx="94"
                  cy="78"
                  r="11"
                  fill="white"
                  fillOpacity="0.4"
                  stroke="#000"
                  strokeWidth="3"
                />
                <path d="M 77 78 L 83 78" stroke="#000" strokeWidth="3" />

                {/* Happy Crescent Eyes */}
                <path
                  d="M 61 77 C 64 74, 68 74, 71 77"
                  stroke="#000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 89 77 C 92 74, 96 74, 99 77"
                  stroke="#000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Blush */}
                <circle cx="56" cy="85" r="4.5" fill="#FDA4AF" opacity="0.8" />
                <circle cx="104" cy="85" r="4.5" fill="#FDA4AF" opacity="0.8" />

                {/* Nose */}
                <circle cx="80" cy="83" r="1.5" fill="#EA580C" />

                {/* Big Cheerful Smile */}
                <path
                  d="M 72 90 C 74 97, 86 97, 88 90 Z"
                  fill="#E11D48"
                  stroke="#000"
                  strokeWidth="2.5"
                />
              </svg>
            </div>

            {/* Pill Badges below Avatar */}
            <div className="flex items-center gap-1.5 mt-2.5">
              <span className="px-2.5 py-1 bg-[#3884FF] text-white text-[11px] font-black rounded-lg border-[2px] border-black shadow-[1.5px_1.5px_0px_#000000]">
                2000.05.08
              </span>
              <span className="px-2.5 py-1 bg-[#FF70A6] text-black text-[11px] font-black rounded-lg border-[2px] border-black shadow-[1.5px_1.5px_0px_#000000]">
                浙江
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
              <span className="block text-xl font-black text-black">西门</span>
            </div>

            {/* MAJOR */}
            <div className="bg-[#DBEAFE] border-[2px] border-black rounded-xl p-2.5 shadow-[2px_2px_0px_#000000]">
              <span className="block text-[10px] font-black tracking-wider text-black/70">
                MAJOR
              </span>
              <span className="block text-sm font-extrabold text-black leading-tight">
                电气工程及其自动化
              </span>
            </div>

            {/* JOB */}
            <div className="bg-[#EDE9FE] border-[2px] border-black rounded-xl p-2.5 shadow-[2px_2px_0px_#000000]">
              <span className="block text-[10px] font-black tracking-wider text-black/70">
                JOB
              </span>
              <span className="block text-sm font-extrabold text-black leading-tight">
                toB 软件产品经理
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
              XM-20000508-OVO
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
