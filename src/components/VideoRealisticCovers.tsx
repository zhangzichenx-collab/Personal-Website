import React from 'react';

interface VideoCoverProps {
  id: string;
  coverText: string;
  className?: string;
}

export const VideoRealisticCover: React.FC<VideoCoverProps> = ({ id, coverText, className = 'w-full h-full' }) => {
  switch (id) {
    case 'video-1':
      // 从小龙虾到三体人 (Blue knitwear by high-rise apartment window)
      return (
        <div className={`relative w-full h-full overflow-hidden bg-[#CBD5E1] select-none ${className}`}>
          <svg viewBox="0 0 360 220" className="w-full h-full object-cover">
            {/* Window background with skyscraper outlines */}
            <rect width="360" height="220" fill="#E2E8F0" />
            <path d="M 0 160 L 60 140 L 90 180 L 140 130 L 180 170 L 240 120 L 300 160 L 360 130 L 360 220 L 0 220 Z" fill="#94A3B8" opacity="0.4" />
            <rect x="20" y="40" width="40" height="90" fill="#94A3B8" opacity="0.3" />
            <rect x="280" y="30" width="50" height="110" fill="#94A3B8" opacity="0.3" />

            {/* Ximen Avatar in Blue Knitwear */}
            {/* Body */}
            <path d="M 70 220 C 80 150, 140 135, 180 135 C 220 135, 280 150, 290 220 Z" fill="#475569" />
            <path d="M 90 220 C 100 160, 145 145, 180 145 C 215 145, 260 160, 270 220 Z" fill="#64748B" />
            {/* Blue knitwear texture stitches */}
            <circle cx="150" cy="185" r="2.5" fill="#94A3B8" />
            <circle cx="180" cy="185" r="2.5" fill="#94A3B8" />
            <circle cx="210" cy="185" r="2.5" fill="#94A3B8" />

            {/* Neck */}
            <rect x="162" y="110" width="36" height="35" fill="#FED7AA" />

            {/* Dark Hair (Medium Bob) */}
            <path d="M 120 70 C 110 130, 125 155, 140 155 L 220 155 C 235 155, 250 130, 240 70 Z" fill="#1E293B" />

            {/* Face */}
            <ellipse cx="180" cy="85" rx="42" ry="46" fill="#FFEDD5" />

            {/* Bangs */}
            <path d="M 134 70 C 140 40, 220 40, 226 70 C 215 65, 195 62, 180 64 C 165 62, 145 65, 134 70 Z" fill="#1E293B" />

            {/* Round Glasses */}
            <circle cx="160" cy="82" r="14" fill="white" fillOpacity="0.25" stroke="#000" strokeWidth="3" />
            <circle cx="200" cy="82" r="14" fill="white" fillOpacity="0.25" stroke="#000" strokeWidth="3" />
            <line x1="174" y1="82" x2="186" y2="82" stroke="#000" strokeWidth="3" />

            {/* Eyes behind glasses */}
            <ellipse cx="160" cy="82" rx="3.5" ry="3.5" fill="#000" />
            <ellipse cx="200" cy="82" rx="3.5" ry="3.5" fill="#000" />

            {/* Blush */}
            <ellipse cx="146" cy="94" rx="6" ry="3.5" fill="#FDA4AF" opacity="0.8" />
            <ellipse cx="214" cy="94" rx="6" ry="3.5" fill="#FDA4AF" opacity="0.8" />

            {/* Cheerful Smile */}
            <path d="M 168 102 Q 180 112 192 102" stroke="#E11D48" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>

          {/* Bold Cover Title matching screenshot */}
          <div className="absolute inset-0 flex items-center justify-center p-3 pointer-events-none">
            <h4
              className="text-2xl sm:text-3xl font-black text-white tracking-wider text-center"
              style={{
                textShadow:
                  '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 4px 0 #000',
              }}
            >
              {coverText}
            </h4>
          </div>
        </div>
      );

    case 'video-2':
      // 分手是我减肥的动力 (Kitchen warm background, closeup smile)
      return (
        <div className={`relative w-full h-full overflow-hidden bg-[#FEF3C7] select-none ${className}`}>
          <svg viewBox="0 0 360 220" className="w-full h-full object-cover">
            {/* Kitchen warm yellow wall & cabinet tiles */}
            <rect width="360" height="220" fill="#FFFBEB" />
            <line x1="0" y1="60" x2="360" y2="60" stroke="#FDE68A" strokeWidth="2" />
            <line x1="0" y1="120" x2="360" y2="120" stroke="#FDE68A" strokeWidth="2" />
            <line x1="80" y1="0" x2="80" y2="120" stroke="#FDE68A" strokeWidth="2" />
            <line x1="280" y1="0" x2="280" y2="120" stroke="#FDE68A" strokeWidth="2" />
            {/* Fridge/Cupboard shelf item */}
            <rect x="290" y="40" width="45" height="60" rx="6" fill="#86EFAC" opacity="0.7" />

            {/* Closeup Face of Ximen */}
            <path d="M 60 220 C 70 170, 130 160, 180 160 C 230 160, 290 170, 300 220 Z" fill="#1E293B" />
            <ellipse cx="180" cy="115" rx="58" ry="62" fill="#FFEDD5" />

            {/* Hair Framing */}
            <path d="M 115 90 C 105 160, 125 180, 140 180 L 220 180 C 235 180, 255 160, 245 90 Z" fill="#1E293B" />
            <path d="M 120 90 C 130 50, 230 50, 240 90 C 220 80, 195 78, 180 80 C 165 78, 140 80, 120 90 Z" fill="#1E293B" />

            {/* Round Glasses */}
            <circle cx="152" cy="110" r="18" fill="white" fillOpacity="0.25" stroke="#000" strokeWidth="3.5" />
            <circle cx="208" cy="110" r="18" fill="white" fillOpacity="0.25" stroke="#000" strokeWidth="3.5" />
            <line x1="170" y1="110" x2="190" y2="110" stroke="#000" strokeWidth="3.5" />

            {/* Smiling Crescent Eyes */}
            <path d="M 144 110 Q 152 103 160 110" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 200 110 Q 208 103 216 110" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />

            {/* Rosy cheeks */}
            <circle cx="138" cy="126" r="8" fill="#FDA4AF" opacity="0.85" />
            <circle cx="222" cy="126" r="8" fill="#FDA4AF" opacity="0.85" />

            {/* Big Grin */}
            <path d="M 166 138 C 170 148, 190 148, 194 138 Z" fill="#E11D48" stroke="#000" strokeWidth="2.5" />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center p-3 pointer-events-none">
            <h4
              className="text-2xl sm:text-3xl font-black text-white tracking-wider text-center"
              style={{
                textShadow:
                  '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 4px 0 #000',
              }}
            >
              {coverText}
            </h4>
          </div>
        </div>
      );

    case 'video-3':
      // 大年初一的迷思 (Winter red scarf & puffer jacket)
      return (
        <div className={`relative w-full h-full overflow-hidden bg-[#FFE4E6] select-none ${className}`}>
          <svg viewBox="0 0 360 220" className="w-full h-full object-cover">
            <rect width="360" height="220" fill="#FECDD3" />
            {/* Festive red / winter ambiance */}
            <circle cx="50" cy="40" r="30" fill="#FF5C67" opacity="0.4" />
            <circle cx="320" cy="50" r="45" fill="#FF5C67" opacity="0.4" />

            {/* Red Scarf & Puffer Jacket */}
            <path d="M 50 220 C 60 160, 120 145, 180 145 C 240 145, 300 160, 310 220 Z" fill="#991B1B" />
            {/* Thick Cozy Red Scarf Loops */}
            <ellipse cx="180" cy="155" rx="75" ry="32" fill="#DC2626" stroke="#000" strokeWidth="3" />
            <path d="M 130 155 C 130 185, 170 195, 170 155 Z" fill="#B91C1C" />

            {/* Head & Hair */}
            <path d="M 125 80 C 115 140, 130 155, 140 155 L 220 155 C 230 155, 245 140, 235 80 Z" fill="#1E293B" />
            <ellipse cx="180" cy="95" rx="46" ry="50" fill="#FFEDD5" />
            <path d="M 130 85 C 140 50, 220 50, 230 85 C 215 75, 195 72, 180 74 C 165 72, 145 75, 130 85 Z" fill="#1E293B" />

            {/* Glasses */}
            <circle cx="160" cy="92" r="15" fill="white" fillOpacity="0.25" stroke="#000" strokeWidth="3" />
            <circle cx="200" cy="92" r="15" fill="white" fillOpacity="0.25" stroke="#000" strokeWidth="3" />
            <line x1="175" y1="92" x2="185" y2="92" stroke="#000" strokeWidth="3" />

            {/* Eyes */}
            <ellipse cx="160" cy="92" rx="3.5" ry="3.5" fill="#000" />
            <ellipse cx="200" cy="92" rx="3.5" ry="3.5" fill="#000" />

            {/* Rosy winter blush */}
            <circle cx="145" cy="105" r="7" fill="#FDA4AF" opacity="0.9" />
            <circle cx="215" cy="105" r="7" fill="#FDA4AF" opacity="0.9" />
            {/* Smile */}
            <path d="M 172 112 Q 180 118 188 112" stroke="#E11D48" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center p-3 pointer-events-none">
            <h4
              className="text-2xl sm:text-3xl font-black text-white tracking-wider text-center"
              style={{
                textShadow:
                  '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 4px 0 #000',
              }}
            >
              {coverText}
            </h4>
          </div>
        </div>
      );

    case 'video-4':
      // 缘，妙不可言 (Laying down with pink travel U-pillow)
      return (
        <div className={`relative w-full h-full overflow-hidden bg-[#F1F5F9] select-none ${className}`}>
          <svg viewBox="0 0 360 220" className="w-full h-full object-cover">
            {/* Comfy bed / pillow background */}
            <rect width="360" height="220" fill="#E2E8F0" />
            <circle cx="80" cy="50" r="40" fill="#CBD5E1" opacity="0.6" />
            <circle cx="280" cy="180" r="60" fill="#CBD5E1" opacity="0.6" />

            {/* Pink U-shaped Neck Pillow around chin */}
            <ellipse cx="180" cy="148" rx="86" ry="42" fill="#F472B6" stroke="#000" strokeWidth="3.5" />
            <ellipse cx="180" cy="148" rx="50" ry="24" fill="#FFEDD5" />

            {/* Resting Hair Spread */}
            <path d="M 90 130 C 80 50, 280 50, 270 130 Z" fill="#1E293B" />

            {/* Relaxed Face from low angle */}
            <ellipse cx="180" cy="100" rx="52" ry="48" fill="#FFEDD5" />
            <path d="M 125 90 C 135 60, 225 60, 235 90 C 215 80, 195 78, 180 80 C 165 78, 145 80, 125 90 Z" fill="#1E293B" />

            {/* Round Glasses */}
            <circle cx="156" cy="98" r="16" fill="white" fillOpacity="0.25" stroke="#000" strokeWidth="3" />
            <circle cx="204" cy="98" r="16" fill="white" fillOpacity="0.25" stroke="#000" strokeWidth="3" />
            <line x1="172" y1="98" x2="188" y2="98" stroke="#000" strokeWidth="3" />

            {/* Warm Contented Smile */}
            <circle cx="144" cy="112" r="7" fill="#FDA4AF" opacity="0.8" />
            <circle cx="216" cy="112" r="7" fill="#FDA4AF" opacity="0.8" />
            <path d="M 170 118 Q 180 126 190 118" stroke="#E11D48" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center p-3 pointer-events-none">
            <h4
              className="text-2xl sm:text-3xl font-black text-white tracking-wider text-center"
              style={{
                textShadow:
                  '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 4px 0 #000',
              }}
            >
              {coverText}
            </h4>
          </div>
        </div>
      );

    case 'video-5':
      // 我是一个好学生 (Red plaid flannel shirt)
      return (
        <div className={`relative w-full h-full overflow-hidden bg-[#FCE7F3] select-none ${className}`}>
          <svg viewBox="0 0 360 220" className="w-full h-full object-cover">
            {/* Study room neutral background */}
            <rect width="360" height="220" fill="#F3E8FF" />
            <rect x="0" y="150" width="360" height="70" fill="#E9D5FF" />

            {/* Red Plaid / Tartan Shirt */}
            <path d="M 60 220 C 70 150, 130 135, 180 135 C 230 135, 290 150, 300 220 Z" fill="#991B1B" />
            {/* Plaid grid pattern on shirt */}
            <line x1="110" y1="140" x2="110" y2="220" stroke="#F87171" strokeWidth="4" />
            <line x1="150" y1="135" x2="150" y2="220" stroke="#F87171" strokeWidth="4" />
            <line x1="210" y1="135" x2="210" y2="220" stroke="#F87171" strokeWidth="4" />
            <line x1="250" y1="140" x2="250" y2="220" stroke="#F87171" strokeWidth="4" />
            <line x1="70" y1="170" x2="290" y2="170" stroke="#000" strokeWidth="3" />
            <line x1="70" y1="195" x2="290" y2="195" stroke="#000" strokeWidth="3" />

            {/* Neck */}
            <rect x="165" y="105" width="30" height="35" fill="#FED7AA" />

            {/* Head & Hair */}
            <path d="M 120 75 C 110 135, 125 155, 140 155 L 220 155 C 235 155, 250 135, 240 75 Z" fill="#1E293B" />
            <ellipse cx="180" cy="90" rx="46" ry="50" fill="#FFEDD5" />
            <path d="M 128 75 C 135 45, 225 45, 232 75 C 215 65, 195 62, 180 64 C 165 62, 145 65, 128 75 Z" fill="#1E293B" />

            {/* Good Student Glasses */}
            <circle cx="158" cy="88" r="15" fill="white" fillOpacity="0.25" stroke="#000" strokeWidth="3" />
            <circle cx="202" cy="88" r="15" fill="white" fillOpacity="0.25" stroke="#000" strokeWidth="3" />
            <line x1="173" y1="88" x2="187" y2="88" stroke="#000" strokeWidth="3" />

            {/* Diligent Gaze */}
            <circle cx="158" cy="88" r="3.5" fill="#000" />
            <circle cx="202" cy="88" r="3.5" fill="#000" />

            {/* Gentle Smile */}
            <path d="M 172 108 Q 180 114 188 108" stroke="#E11D48" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center p-3 pointer-events-none">
            <h4
              className="text-2xl sm:text-3xl font-black text-white tracking-wider text-center"
              style={{
                textShadow:
                  '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 4px 0 #000',
              }}
            >
              {coverText}
            </h4>
          </div>
        </div>
      );

    case 'video-6':
      // 真 棒 (Cute pink hair clip, proud cheerful smile)
      return (
        <div className={`relative w-full h-full overflow-hidden bg-[#FEF08A] select-none ${className}`}>
          <svg viewBox="0 0 360 220" className="w-full h-full object-cover">
            {/* Cheerful sunny background */}
            <rect width="360" height="220" fill="#FEF9C3" />
            <circle cx="60" cy="50" r="40" fill="#FEF08A" />
            <circle cx="300" cy="160" r="50" fill="#FEF08A" />

            {/* Body */}
            <path d="M 60 220 C 70 160, 130 145, 180 145 C 230 145, 290 160, 300 220 Z" fill="#3B82F6" />
            <ellipse cx="180" cy="100" rx="50" ry="52" fill="#FFEDD5" />

            {/* Hair */}
            <path d="M 120 85 C 110 140, 125 160, 140 160 L 220 160 C 235 160, 250 140, 240 85 Z" fill="#1E293B" />
            <path d="M 125 80 C 135 48, 225 48, 235 80 C 215 70, 195 68, 180 70 C 165 68, 145 70, 125 80 Z" fill="#1E293B" />

            {/* Pink Hair Clip on top right of hair */}
            <rect x="210" y="55" width="22" height="10" rx="5" fill="#FF70A6" stroke="#000" strokeWidth="2.5" transform="rotate(15 221 60)" />
            <circle cx="216" cy="60" r="2.5" fill="#FFFFFF" />

            {/* Round Glasses */}
            <circle cx="158" cy="96" r="16" fill="white" fillOpacity="0.25" stroke="#000" strokeWidth="3" />
            <circle cx="202" cy="96" r="16" fill="white" fillOpacity="0.25" stroke="#000" strokeWidth="3" />
            <line x1="174" y1="96" x2="186" y2="96" stroke="#000" strokeWidth="3" />

            {/* Happy Eyes */}
            <path d="M 150 96 Q 158 88 166 96" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 194 96 Q 202 88 210 96" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />

            {/* Blush */}
            <circle cx="144" cy="110" r="7" fill="#FDA4AF" opacity="0.9" />
            <circle cx="216" cy="110" r="7" fill="#FDA4AF" opacity="0.9" />

            {/* Cheerful Open Smile */}
            <path d="M 170 118 C 174 128, 186 128, 190 118 Z" fill="#E11D48" stroke="#000" strokeWidth="2" />
          </svg>

          {/* Pink Bold Characters for "真 棒" */}
          <div className="absolute inset-0 flex items-center justify-center p-3 pointer-events-none">
            <h4
              className="text-4xl sm:text-5xl font-black text-[#FF70A6] tracking-widest text-center"
              style={{
                textShadow:
                  '-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000, 0 5px 0 #000',
              }}
            >
              {coverText}
            </h4>
          </div>
        </div>
      );

    default:
      // Fallback for AI coding or other future videos
      return (
        <div className={`relative w-full h-full overflow-hidden bg-[#E0F2FE] select-none flex items-center justify-center p-4 ${className}`}>
          <div className="text-center">
            <h4
              className="text-2xl sm:text-3xl font-black text-white tracking-wider text-center"
              style={{
                textShadow:
                  '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 4px 0 #000',
              }}
            >
              {coverText}
            </h4>
          </div>
        </div>
      );
  }
};
