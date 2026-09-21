import React from 'react';
import { motion } from 'motion/react';

/**
 * High-fidelity vector illustrations recreating the exact neo-brutalist cartoon visual style
 * from the user's reference screenshots.
 */

// 1. Hero John Carter Avatar (Yellow Card with Character)
export const JohnCarterAvatar: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      whileHover={{ scale: 1.06, rotate: -3 }}
      transition={{ type: 'spring', stiffness: 280, damping: 18 }}
    >
      <img
        src="/avatar.png"
        alt="一晨 · A Product Manager · 练习时长两年半"
        className="w-full h-auto drop-shadow-[6px_6px_0px_#000000] rounded-3xl border-[6px] border-black"
      />
    </motion.div>
  );
};

// 8. Article Illustration: Color Swatches & Pen Tool
export const ArticleSwatchesVector: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <div className={`flex items-center justify-center p-3 ${className}`}>
      <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Browser Frame */}
        <rect x="20" y="18" width="280" height="184" rx="16" fill="#F8F8FA" stroke="#000000" strokeWidth="4" />
        <line x1="20" y1="46" x2="300" y2="46" stroke="#000000" strokeWidth="3" />
        <circle cx="38" cy="32" r="4" fill="#FF5C67" />
        <circle cx="50" cy="32" r="4" fill="#FFC01E" />
        <circle cx="62" cy="32" r="4" fill="#10B981" />

        {/* Vector Pen Tool Card */}
        <rect
          x="42"
          y="65"
          width="70"
          height="80"
          rx="12"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="3.5"
          className="drop-shadow-[3px_3px_0px_#000000]"
        />
        <path
          d="M77 82 L90 102 L80 120 L74 120 L64 102 Z"
          fill="#FFC01E"
          stroke="#000000"
          strokeWidth="3"
        />
        <circle cx="77" cy="102" r="2.5" fill="#000000" />
        <line x1="77" y1="104" x2="77" y2="120" stroke="#000000" strokeWidth="2.5" />

        {/* Color Wheel with Nodes */}
        <circle cx="160" cy="115" r="38" fill="none" stroke="#000000" strokeWidth="3.5" />
        <circle cx="160" cy="77" r="6" fill="#FF5C67" stroke="#000000" strokeWidth="2.5" />
        <circle cx="198" cy="115" r="6" fill="#FFC01E" stroke="#000000" strokeWidth="2.5" />
        <circle cx="160" cy="153" r="6" fill="#10B981" stroke="#000000" strokeWidth="2.5" />
        <circle cx="122" cy="115" r="6" fill="#3884FF" stroke="#000000" strokeWidth="2.5" />

        {/* Color Swatch Card on Right */}
        <rect
          x="220"
          y="60"
          width="65"
          height="125"
          rx="12"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="3.5"
          className="drop-shadow-[3px_3px_0px_#000000]"
        />
        <rect x="230" y="70" width="45" height="24" rx="6" fill="#3884FF" />
        <rect x="230" y="100" width="45" height="24" rx="6" fill="#FF5C67" />
        <rect x="230" y="130" width="45" height="24" rx="6" fill="#FFA3AF" />
      </svg>
    </div>
  );
};

// 9. Article Illustration: Monitor with H1 Text
export const ArticleH1Vector: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <div className={`flex items-center justify-center p-3 ${className}`}>
      <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Monitor Screen */}
        <rect
          x="25"
          y="20"
          width="190"
          height="120"
          rx="14"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="4"
          className="drop-shadow-[3px_3px_0px_#000000]"
        />

        {/* Stand */}
        <path d="M105 140 L105 160 L135 160 L135 140" fill="#FFFFFF" stroke="#000000" strokeWidth="3.5" />
        <line x1="90" y1="160" x2="150" y2="160" stroke="#000000" strokeWidth="4" strokeLinecap="round" />

        {/* Bounding Box for H1 */}
        <rect x="42" y="38" width="62" height="65" fill="none" stroke="#000000" strokeWidth="2.5" />
        <rect x="38" y="34" width="8" height="8" rx="2" fill="#5B4EFF" stroke="#000000" strokeWidth="2" />
        <rect x="100" y="34" width="8" height="8" rx="2" fill="#5B4EFF" stroke="#000000" strokeWidth="2" />
        <rect x="38" y="99" width="8" height="8" rx="2" fill="#5B4EFF" stroke="#000000" strokeWidth="2" />
        <rect x="100" y="99" width="8" height="8" rx="2" fill="#5B4EFF" stroke="#000000" strokeWidth="2" />

        {/* H1 Text */}
        <text x="50" y="82" fontFamily="sans-serif" fontSize="30" fontWeight="900" fill="#111111">
          H₁
        </text>

        {/* Red Status Dot & Lines */}
        <circle cx="125" cy="46" r="3.5" fill="#FF5C67" />
        <line x1="135" y1="44" x2="175" y2="44" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="135" y1="52" x2="165" y2="52" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />

        {/* Yellow Button */}
        <rect x="125" y="65" width="45" height="18" rx="6" fill="#FFC01E" stroke="#000000" strokeWidth="2.5" />
        <line x1="135" y1="74" x2="155" y2="74" stroke="#000000" strokeWidth="2" strokeLinecap="round" />

        <line x1="125" y1="98" x2="185" y2="98" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
};

// 10. Article Illustration: Mobile UI Wireframe & Pie Chart
export const ArticleMobileVector: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <div className={`flex items-center justify-center p-3 ${className}`}>
      <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Phone Frame */}
        <rect
          x="65"
          y="15"
          width="110"
          height="150"
          rx="22"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="4"
          className="drop-shadow-[3px_3px_0px_#000000]"
        />

        {/* Top Notch Line */}
        <line x1="105" y1="23" x2="135" y2="23" stroke="#000000" strokeWidth="3" strokeLinecap="round" />

        {/* Top Header Card */}
        <rect x="78" y="35" width="84" height="24" rx="6" fill="#FFC01E" stroke="#000000" strokeWidth="2.5" />
        <line x1="84" y1="35" x2="156" y2="59" stroke="#000000" strokeWidth="2" />
        <line x1="156" y1="35" x2="84" y2="59" stroke="#000000" strokeWidth="2" />

        {/* Magnifying Glass on Left */}
        <circle cx="48" cy="80" r="14" fill="#FFFFFF" stroke="#000000" strokeWidth="3" className="drop-shadow-[2px_2px_0px_#000]" />
        <circle cx="48" cy="80" r="6" fill="#5B4EFF" />
        <line x1="58" y1="90" x2="68" y2="100" stroke="#000000" strokeWidth="4" strokeLinecap="round" />

        {/* Pie Chart on Phone */}
        <circle cx="95" cy="110" r="16" fill="#FF5C67" stroke="#000000" strokeWidth="2.5" />
        <path d="M95 110 L95 94 A16 16 0 0 1 111 110 Z" fill="#3884FF" stroke="#000000" strokeWidth="2" />
        <path d="M95 110 L82 120 A16 16 0 0 1 95 94 Z" fill="#FFC01E" stroke="#000000" strokeWidth="2" />

        {/* Mini Bars */}
        <line x1="125" y1="100" x2="155" y2="100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        <line x1="125" y1="110" x2="148" y2="110" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        <line x1="125" y1="120" x2="152" y2="120" stroke="#000000" strokeWidth="3" strokeLinecap="round" />

        {/* Pencil Edit Icon on Right */}
        <rect
          x="175"
          y="110"
          width="32"
          height="32"
          rx="8"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="3"
          className="drop-shadow-[2px_2px_0px_#000]"
        />
        <path d="M185 132 L198 118 L202 122 L189 136 Z" fill="#FFC01E" stroke="#000000" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

// 12. Article Cover: 《为什么你脸上的痘痘和炎症一直反反复复》(Skin × Diet)
export const ArticleNetFriendsCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#FFE4E6] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Soft Background grid pattern */}
        <pattern id="grid-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#FDA4AF" />
        </pattern>
        <rect width="320" height="200" fill="url(#grid-dots)" />

        {/* Polaroid frame tilted */}
        <g transform="translate(45, 15) rotate(-2)">
          <rect x="0" y="0" width="220" height="170" rx="14" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
          <rect x="15" y="15" width="190" height="120" rx="8" fill="#FCE7F3" stroke="#000000" strokeWidth="2.5" />

          {/* Face: simplified profile circle */}
          <circle cx="95" cy="85" r="34" fill="#FED7AA" stroke="#000000" strokeWidth="2.5" />
          {/* Hair tuft */}
          <path d="M65 70 Q80 50 100 60 Q95 75 80 78 Z" fill="#1F2937" stroke="#000000" strokeWidth="2" />
          {/* Closed eye (calm expression) */}
          <path d="M85 88 Q92 92 99 88" stroke="#000000" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Red inflammation spots (acne) */}
          <circle cx="108" cy="78" r="4" fill="#FF5C67" stroke="#000000" strokeWidth="1.5" />
          <circle cx="118" cy="92" r="3.5" fill="#FF5C67" stroke="#000000" strokeWidth="1.5" />
          <circle cx="105" cy="100" r="3" fill="#FF5C67" stroke="#000000" strokeWidth="1.5" />

          {/* Green apple / diet */}
          <g transform="translate(165, 70)">
            <path d="M0 20 C0 5, 30 5, 30 20 C30 35, 0 35, 0 20 Z" fill="#10B981" stroke="#000000" strokeWidth="2" />
            <path d="M15 5 Q18 -2 22 2" stroke="#000000" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M22 8 Q28 2 32 8" fill="#22C55E" stroke="#000000" strokeWidth="1.5" />
          </g>

          {/* Sparkle */}
          <path d="M165 30 L168 38 L176 41 L168 44 L165 52 L162 44 L154 41 L162 38 Z" fill="#FFC01E" stroke="#000000" strokeWidth="1.5" />
          <text x="35" y="152" fill="#000000" fontSize="11" fontWeight="900" fontFamily="sans-serif">
            SKIN × DIET
          </text>
        </g>
      </svg>
    </div>
  );
};

// 13. Article Cover: 《商业启蒙篇：麦当劳是一家卖快餐公司？不止如此！》(Golden Arches)
export const ArticleSJTUCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#FEF08A] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Background grid pattern */}
        <pattern id="m-biz-dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#FACC15" />
        </pattern>
        <rect width="320" height="200" fill="url(#m-biz-dots)" />

        {/* Central badge */}
        <g transform="translate(85, 30)">
          <rect x="0" y="0" width="150" height="100" rx="16" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />

          {/* Golden M arches (two arches) */}
          <path d="M30 80 C30 45, 45 35, 55 35 C65 35, 65 50, 65 80 Z" fill="#FFC01E" stroke="#000000" strokeWidth="2.5" />
          <path d="M85 80 C85 45, 100 35, 110 35 C120 35, 120 50, 120 80 Z" fill="#FFC01E" stroke="#000000" strokeWidth="2.5" />

          {/* Question mark */}
          <text x="135" y="55" fill="#FF5C67" fontSize="22" fontWeight="900" fontFamily="sans-serif">?</text>

          {/* Caption */}
          <text x="75" y="95" textAnchor="middle" fill="#000000" fontSize="11" fontWeight="900" fontFamily="sans-serif">
            M = ?
          </text>
        </g>

        {/* Burger icon at bottom left */}
        <g transform="translate(25, 145)">
          <ellipse cx="18" cy="0" rx="18" ry="6" fill="#FED7AA" stroke="#000000" strokeWidth="2" />
          <rect x="0" y="3" width="36" height="5" fill="#22C55E" stroke="#000000" strokeWidth="2" />
          <ellipse cx="18" cy="11" rx="18" ry="5" fill="#FED7AA" stroke="#000000" strokeWidth="2" />
        </g>

        {/* Tag at top right */}
        <g transform="translate(245, 150)">
          <rect x="0" y="0" width="60" height="22" rx="11" fill="#000000" />
          <text x="30" y="15" textAnchor="middle" fill="#FFC01E" fontSize="10" fontWeight="900" fontFamily="sans-serif">
            BUSINESS 101
          </text>
        </g>
      </svg>
    </div>
  );
};

// 14. Article Cover: 《《牛来》启示录：这个时代，要么出众，要么出局》 (Film Bull)
export const ArticleGouqiIslandCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#1F2937] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Top film strip with sprocket holes */}
        <rect x="0" y="10" width="320" height="22" fill="#000000" stroke="#FFC01E" strokeWidth="2" />
        {[10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290].map((x, i) => (
          <rect key={`top-${i}`} x={x + 4} y="15" width="8" height="12" fill="#FFC01E" />
        ))}

        {/* Bottom film strip */}
        <rect x="0" y="168" width="320" height="22" fill="#000000" stroke="#FFC01E" strokeWidth="2" />
        {[10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290].map((x, i) => (
          <rect key={`bot-${i}`} x={x + 4} y="173" width="8" height="12" fill="#FFC01E" />
        ))}

        {/* Bull horns - golden */}
        <path d="M110 130 Q95 110 80 80 Q110 90 130 120 Z" fill="#FFC01E" stroke="#FFFFFF" strokeWidth="2.5" />
        <path d="M210 130 Q225 110 240 80 Q210 90 190 120 Z" fill="#FFC01E" stroke="#FFFFFF" strokeWidth="2.5" />

        {/* Bull head silhouette */}
        <ellipse cx="160" cy="130" rx="55" ry="32" fill="#FFC01E" stroke="#FFFFFF" strokeWidth="2.5" />
        <ellipse cx="160" cy="138" rx="22" ry="18" fill="#1F2937" stroke="#FFFFFF" strokeWidth="2" />

        {/* Eyes - fierce */}
        <circle cx="142" cy="125" r="3.5" fill="#FF5C67" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="178" cy="125" r="3.5" fill="#FF5C67" stroke="#FFFFFF" strokeWidth="1.5" />

        {/* Caption */}
        <text x="160" y="90" textAnchor="middle" fill="#FFC01E" fontSize="13" fontWeight="900" fontFamily="sans-serif">
          OUTSTANDING OR OUT
        </text>
      </svg>
    </div>
  );
};

// 15. Article Cover: 闲鱼SOP（鱼 + 主页卡片）
export const ArticleXianyuSopCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#FEF3C7] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <pattern id="xy-dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#FCD34D" />
        </pattern>
        <rect width="320" height="200" fill="url(#xy-dots)" />

        {/* 主页卡片框 */}
        <g transform="translate(60, 35) rotate(-2)">
          <rect x="0" y="0" width="200" height="130" rx="14" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
          {/* 头像圆圈 */}
          <circle cx="50" cy="40" r="22" fill="#FFC01E" stroke="#000000" strokeWidth="2.5" />
          <circle cx="50" cy="34" r="8" fill="#000000" />
          <path d="M35 50 Q50 42 65 50 L65 60 L35 60 Z" fill="#000000" />
          {/* 昵称占位条 */}
          <rect x="85" y="28" width="90" height="9" rx="3" fill="#000000" />
          <rect x="85" y="45" width="60" height="6" rx="2" fill="#9CA3AF" />
          {/* 简介 3 行 */}
          <rect x="20" y="80" width="160" height="5" rx="2" fill="#E5E7EB" />
          <rect x="20" y="92" width="140" height="5" rx="2" fill="#E5E7EB" />
          <rect x="20" y="104" width="120" height="5" rx="2" fill="#E5E7EB" />
        </g>

        {/* 鱼 icon - 黄色 */}
        <g transform="translate(20, 145)">
          <path d="M0 20 Q10 5 30 10 Q50 5 60 20 Q50 35 30 30 Q10 35 0 20 Z" fill="#FFC01E" stroke="#000000" strokeWidth="2.5" />
          <circle cx="48" cy="17" r="2.5" fill="#000000" />
          <path d="M55 20 L70 12 L70 28 Z" fill="#FFC01E" stroke="#000000" strokeWidth="2.5" />
        </g>

        {/* SOP 标签 */}
        <g transform="translate(245, 155)">
          <rect x="0" y="0" width="60" height="22" rx="11" fill="#000000" />
          <text x="30" y="15" textAnchor="middle" fill="#FFC01E" fontSize="10" fontWeight="900" fontFamily="sans-serif">
            XIANYU SOP
          </text>
        </g>
      </svg>
    </div>
  );
};

// 16. Article Cover: GPT 最活跃 6 类人（6 个头像圆圈）
export const ArticleGptUsersCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#DBEAFE] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <pattern id="gpt-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#93C5FD" />
        </pattern>
        <rect width="320" height="200" fill="url(#gpt-dots)" />

        {/* 6 个用户头像圆圈 - 网格布局 */}
        {[
          { cx: 90, cy: 65, fill: '#FFC01E' },
          { cx: 160, cy: 65, fill: '#FF5C67' },
          { cx: 230, cy: 65, fill: '#10B981' },
          { cx: 90, cy: 135, fill: '#8B5CF6' },
          { cx: 160, cy: 135, fill: '#F97316' },
          { cx: 230, cy: 135, fill: '#3884FF' },
        ].map((u, i) => (
          <g key={i} transform={`translate(${u.cx}, ${u.cy})`}>
            <circle cx="0" cy="0" r="22" fill={u.fill} stroke="#000000" strokeWidth="2.5" />
            {/* 简笔人脸 */}
            <circle cx="-6" cy="-4" r="2" fill="#000000" />
            <circle cx="6" cy="-4" r="2" fill="#000000" />
            <path d="M-6 6 Q0 10 6 6" stroke="#000000" strokeWidth="2" fill="none" strokeLinecap="round" />
          </g>
        ))}

        {/* GPT logo 风格六瓣花 - 左上角小图标 */}
        <g transform="translate(35, 35)">
          <path d="M0 10 Q5 0 15 5 Q20 -5 25 5 Q35 0 30 15 Q40 20 25 25 Q30 35 15 30 Q5 35 5 25 Q-5 20 0 10 Z" fill="#10B981" stroke="#000000" strokeWidth="2" />
        </g>

        {/* 标签 */}
        <g transform="translate(125, 175)">
          <rect x="0" y="0" width="70" height="20" rx="10" fill="#000000" />
          <text x="35" y="14" textAnchor="middle" fill="#FFC01E" fontSize="10" fontWeight="900" fontFamily="sans-serif">
            POWER USERS
          </text>
        </g>
      </svg>
    </div>
  );
};

// 17. Article Cover: 饭后运动（走路的人 + 血糖曲线）
export const ArticlePostMealCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#FFE4E6] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <pattern id="pm-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#FDA4AF" />
        </pattern>
        <rect width="320" height="200" fill="url(#pm-dots)" />

        {/* 血糖曲线 - 上方波动后变平稳 */}
        <path d="M20 60 Q60 20 100 80 Q140 30 180 90 Q220 80 280 75" stroke="#FF5C67" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        {/* 平稳线 */}
        <path d="M180 90 Q220 88 280 90" stroke="#10B981" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeDasharray="4 4" />
        {/* 阶段标签 */}
        <text x="60" y="20" fill="#000000" fontSize="9" fontWeight="900" fontFamily="sans-serif">SPIKE</text>
        <text x="240" y="60" fill="#10B981" fontSize="9" fontWeight="900" fontFamily="sans-serif">STABLE</text>

        {/* 走路的小人 */}
        <g transform="translate(130, 120)">
          {/* 头 */}
          <circle cx="0" cy="0" r="12" fill="#FFC01E" stroke="#000000" strokeWidth="2.5" />
          {/* 身体 */}
          <line x1="0" y1="12" x2="0" y2="42" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
          {/* 手摆动 */}
          <line x1="0" y1="22" x2="-12" y2="35" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="0" y1="22" x2="12" y2="35" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />
          {/* 腿走路姿态 */}
          <line x1="0" y1="42" x2="-10" y2="60" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
          <line x1="0" y1="42" x2="10" y2="60" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* 苹果小图 */}
        <g transform="translate(245, 145)">
          <path d="M0 12 C0 2 20 2 20 12 C20 22 0 22 0 12 Z" fill="#FF5C67" stroke="#000000" strokeWidth="2" />
          <path d="M10 0 Q12 -4 16 0" stroke="#000000" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>

        {/* 标签 */}
        <g transform="translate(20, 165)">
          <rect x="0" y="0" width="100" height="22" rx="11" fill="#000000" />
          <text x="50" y="15" textAnchor="middle" fill="#FFC01E" fontSize="10" fontWeight="900" fontFamily="sans-serif">
            GLUCOSE CURVE
          </text>
        </g>
      </svg>
    </div>
  );
};

// 18. Article Cover: 地球 Online（地球 + 游戏手柄）
export const ArticleEarthOnlineCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#1F2937] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* 星空点 */}
        <pattern id="eo-stars" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="5" cy="5" r="1" fill="#FFC01E" />
          <circle cx="20" cy="15" r="0.8" fill="#FFFFFF" />
          <circle cx="10" cy="25" r="1" fill="#FF5C67" />
        </pattern>
        <rect width="320" height="200" fill="url(#eo-stars)" />

        {/* 地球 */}
        <g transform="translate(160, 100)">
          <circle cx="0" cy="0" r="55" fill="#3884FF" stroke="#FFFFFF" strokeWidth="3" />
          {/* 大陆简笔形状 */}
          <path d="M-30 -15 Q-15 -25 -5 -10 Q5 -20 20 -8 Q15 5 0 8 Q-15 15 -30 -15 Z" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
          <path d="M-15 18 Q0 12 15 22 Q5 32 -10 28 Z" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
          {/* 经线 */}
          <ellipse cx="0" cy="0" rx="22" ry="55" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.5" />
          <ellipse cx="0" cy="0" rx="55" ry="22" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.5" />
        </g>

        {/* 游戏手柄 - 左下 */}
        <g transform="translate(25, 130)">
          <rect x="0" y="0" width="80" height="35" rx="17" fill="#FFC01E" stroke="#FFFFFF" strokeWidth="2.5" />
          {/* D-pad */}
          <rect x="15" y="12" width="10" height="10" fill="#000000" />
          <rect x="12" y="15" width="16" height="4" fill="#000000" />
          {/* 按钮 */}
          <circle cx="58" cy="17" r="4" fill="#FF5C67" stroke="#000000" strokeWidth="1.5" />
          <circle cx="68" cy="17" r="4" fill="#10B981" stroke="#000000" strokeWidth="1.5" />
        </g>

        {/* 标签 */}
        <g transform="translate(220, 25)">
          <rect x="0" y="0" width="80" height="22" rx="11" fill="#FFC01E" />
          <text x="40" y="15" textAnchor="middle" fill="#000000" fontSize="10" fontWeight="900" fontFamily="sans-serif">
            EARTH ONLINE
          </text>
        </g>
      </svg>
    </div>
  );
};

// 19. Article Cover: Nike 卖身份（swoosh + 徽章）
export const ArticleNikeIdentityCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#000000] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <pattern id="nk-dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#1F2937" />
        </pattern>
        <rect width="320" height="200" fill="url(#nk-dots)" />

        {/* swoosh 大对勾 */}
        <path d="M50 140 Q120 50 260 60 Q200 90 130 140 Q90 165 50 140 Z" fill="#FFC01E" stroke="#FFFFFF" strokeWidth="3" />

        {/* 身份徽章 - 右上 */}
        <g transform="translate(215, 30)">
          <rect x="0" y="0" width="80" height="40" rx="6" fill="#FFC01E" stroke="#FFFFFF" strokeWidth="2.5" />
          <text x="40" y="25" textAnchor="middle" fill="#000000" fontSize="11" fontWeight="900" fontFamily="sans-serif">
            IDENTITY
          </text>
        </g>

        {/* 鞋子简笔 - 左下 */}
        <g transform="translate(20, 150)">
          <path d="M0 25 L10 5 Q25 0 50 5 L70 5 L80 25 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
          <path d="M10 5 Q25 0 50 5" stroke="#FF5C67" strokeWidth="3" fill="none" />
        </g>

        {/* Just Do It 小字 */}
        <text x="160" y="180" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="900" fontFamily="sans-serif" letterSpacing="2">
          BUSINESS 101
        </text>
      </svg>
    </div>
  );
};

// 20. Article Cover: Costco 信任系统（仓库 + 购物车）
export const ArticleCostcoTrustCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#FEF08A] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <pattern id="co-dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#FACC15" />
        </pattern>
        <rect width="320" height="200" fill="url(#co-dots)" />

        {/* 仓库建筑 */}
        <g transform="translate(60, 50)">
          {/* 屋顶 */}
          <path d="M0 30 L100 0 L200 30 Z" fill="#FF5C67" stroke="#000000" strokeWidth="3" />
          {/* 主体 */}
          <rect x="0" y="30" width="200" height="90" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
          {/* 顶部 COSTCO 字样 */}
          <text x="100" y="22" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="sans-serif" letterSpacing="2">
            COSTCO
          </text>
          {/* 大卷门 */}
          <rect x="20" y="50" width="160" height="60" fill="#FED7AA" stroke="#000000" strokeWidth="2.5" />
          {/* 卷门横条 */}
          {[55, 65, 75, 85, 95, 105].map((y, i) => (
            <line key={i} x1="20" y1={y} x2="180" y2={y} stroke="#000000" strokeWidth="1.5" opacity="0.5" />
          ))}
          {/* 仅 3 个商品 - 货架 */}
          <rect x="30" y="58" width="20" height="20" fill="#FFC01E" stroke="#000000" strokeWidth="2" />
          <rect x="60" y="58" width="20" height="20" fill="#10B981" stroke="#000000" strokeWidth="2" />
          <rect x="90" y="58" width="20" height="20" fill="#3884FF" stroke="#000000" strokeWidth="2" />
        </g>

        {/* 购物车 - 右下 */}
        <g transform="translate(245, 145)">
          <path d="M0 5 L8 5 L15 25 L40 25 L45 10 L12 10" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="18" cy="32" r="4" fill="#000000" />
          <circle cx="36" cy="32" r="4" fill="#000000" />
        </g>

        {/* 标签 */}
        <g transform="translate(15, 15)">
          <rect x="0" y="0" width="100" height="22" rx="11" fill="#000000" />
          <text x="50" y="15" textAnchor="middle" fill="#FFC01E" fontSize="10" fontWeight="900" fontFamily="sans-serif">
            TRUST SYSTEM
          </text>
        </g>
      </svg>
    </div>
  );
};

// 21. Article Cover: 财富榜幂律分布（柱状图）
export const ArticlePowerLawCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#FFE4E6] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <pattern id="pl-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#FDA4AF" />
        </pattern>
        <rect width="320" height="200" fill="url(#pl-dots)" />

        {/* 坐标轴 */}
        <line x1="40" y1="40" x2="40" y2="170" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        <line x1="40" y1="170" x2="290" y2="170" stroke="#000000" strokeWidth="3" strokeLinecap="round" />

        {/* 幂律分布柱图 - 第一根特别高，后面急剧下降 */}
        {[
          { x: 55, w: 25, h: 120, c: '#FF5C67' },
          { x: 90, w: 25, h: 50, c: '#FFC01E' },
          { x: 125, w: 25, h: 30, c: '#3884FF' },
          { x: 160, w: 25, h: 18, c: '#10B981' },
          { x: 195, w: 25, h: 12, c: '#8B5CF6' },
          { x: 230, w: 25, h: 8, c: '#F97316' },
          { x: 265, w: 20, h: 5, c: '#EC4899' },
        ].map((b, i) => (
          <rect key={i} x={b.x} y={170 - b.h} width={b.w} height={b.h} fill={b.c} stroke="#000000" strokeWidth="2" />
        ))}

        {/* 标注：HEAD + tail */}
        <text x="67" y="35" textAnchor="middle" fill="#FF5C67" fontSize="9" fontWeight="900" fontFamily="sans-serif">
          HEAD
        </text>
        <text x="265" y="160" textAnchor="middle" fill="#000000" fontSize="9" fontWeight="900" fontFamily="sans-serif">
          TAIL
        </text>

        {/* 标签 */}
        <g transform="translate(105, 175)">
          <rect x="0" y="0" width="110" height="20" rx="10" fill="#000000" />
          <text x="55" y="14" textAnchor="middle" fill="#FFC01E" fontSize="10" fontWeight="900" fontFamily="sans-serif">
            POWER LAW
          </text>
        </g>
      </svg>
    </div>
  );
};

// 22. Article Cover: 正缘（心形 + 简笔人物）
export const ArticleRightOneCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#DBEAFE] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <pattern id="ro-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#93C5FD" />
        </pattern>
        <rect width="320" height="200" fill="url(#ro-dots)" />

        {/* 大心形 */}
        <path d="M160 165 C100 120 80 80 110 60 C135 45 155 60 160 80 C165 60 185 45 210 60 C240 80 220 120 160 165 Z" fill="#FF5C67" stroke="#000000" strokeWidth="3" />

        {/* 两个小人剪影 - 心形中央 */}
        <g transform="translate(160, 110)">
          {/* 左人 */}
          <circle cx="-15" cy="-12" r="6" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />
          <path d="M-22 -2 Q-15 -8 -8 -2 L-8 10 L-22 10 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />
          {/* 右人 */}
          <circle cx="15" cy="-12" r="6" fill="#FFC01E" stroke="#000000" strokeWidth="1.5" />
          <path d="M8 -2 Q15 -8 22 -2 L22 10 L8 10 Z" fill="#FFC01E" stroke="#000000" strokeWidth="1.5" />
        </g>

        {/* 闪亮星星 */}
        <path d="M70 50 L73 58 L81 61 L73 64 L70 72 L67 64 L59 61 L67 58 Z" fill="#FFC01E" stroke="#000000" strokeWidth="1.5" />
        <path d="M250 40 L252 46 L258 48 L252 50 L250 56 L248 50 L242 48 L248 46 Z" fill="#FFC01E" stroke="#000000" strokeWidth="1.5" />

        {/* 标签 */}
        <g transform="translate(115, 25)">
          <rect x="0" y="0" width="90" height="22" rx="11" fill="#000000" />
          <text x="45" y="15" textAnchor="middle" fill="#FFC01E" fontSize="10" fontWeight="900" fontFamily="sans-serif">
            RIGHT ONE
          </text>
        </g>
      </svg>
    </div>
  );
};

// 23. Article Cover: 泡泡玛特盲盒
export const ArticlePopMartCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#FCE7F3] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <pattern id="pm-box-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#F9A8D4" />
        </pattern>
        <rect width="320" height="200" fill="url(#pm-box-dots)" />

        {/* 立体盲盒 - 正面 */}
        <g transform="translate(100, 40)">
          <rect x="0" y="0" width="120" height="120" rx="6" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
          {/* 顶盖 */}
          <rect x="-5" y="-15" width="130" height="20" rx="4" fill="#FF5C67" stroke="#000000" strokeWidth="3" />
          <line x1="60" y1="-15" x2="60" y2="0" stroke="#000000" strokeWidth="3" />
          {/* 盒内透明窗 */}
          <rect x="15" y="20" width="90" height="80" rx="4" fill="#FEF3C7" stroke="#000000" strokeWidth="2.5" />
          {/* 大问号 */}
          <text x="60" y="75" textAnchor="middle" fill="#FF5C67" fontSize="40" fontWeight="900" fontFamily="sans-serif">
            ?
          </text>
        </g>

        {/* 三个小角色头像 - 围绕 */}
        <g transform="translate(45, 95)">
          <circle cx="0" cy="0" r="14" fill="#FFC01E" stroke="#000000" strokeWidth="2.5" />
          <circle cx="-4" cy="-2" r="2" fill="#000000" />
          <circle cx="4" cy="-2" r="2" fill="#000000" />
          <path d="M-4 5 Q0 8 4 5" stroke="#000000" strokeWidth="1.5" fill="none" />
        </g>
        <g transform="translate(280, 80)">
          <circle cx="0" cy="0" r="14" fill="#3884FF" stroke="#000000" strokeWidth="2.5" />
          <circle cx="-4" cy="-2" r="2" fill="#000000" />
          <circle cx="4" cy="-2" r="2" fill="#000000" />
          <path d="M-4 5 Q0 8 4 5" stroke="#000000" strokeWidth="1.5" fill="none" />
        </g>
        <g transform="translate(280, 160)">
          <circle cx="0" cy="0" r="14" fill="#10B981" stroke="#000000" strokeWidth="2.5" />
          <circle cx="-4" cy="-2" r="2" fill="#000000" />
          <circle cx="4" cy="-2" r="2" fill="#000000" />
          <path d="M-4 5 Q0 8 4 5" stroke="#000000" strokeWidth="1.5" fill="none" />
        </g>

        {/* 标签 */}
        <g transform="translate(110, 175)">
          <rect x="0" y="0" width="100" height="22" rx="11" fill="#000000" />
          <text x="50" y="15" textAnchor="middle" fill="#FFC01E" fontSize="10" fontWeight="900" fontFamily="sans-serif">
            BLIND BOX
          </text>
        </g>
      </svg>
    </div>
  );
};

// 24. Article Cover: 概率游戏（骰子 + 短信）
export const ArticleProbabilityCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#FEF08A] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <pattern id="pr-dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#FACC15" />
        </pattern>
        <rect width="320" height="200" fill="url(#pr-dots)" />

        {/* 短信框 */}
        <g transform="translate(30, 40)">
          <rect x="0" y="0" width="160" height="80" rx="12" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
          {/* 信号波 */}
          <path d="M15 15 L20 12" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
          <path d="M12 20 L20 16 L28 22" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* 短信文字 - 看不见模糊条 */}
          <rect x="40" y="20" width="100" height="5" rx="2" fill="#000000" />
          <rect x="40" y="32" width="80" height="5" rx="2" fill="#9CA3AF" />
          <rect x="40" y="44" width="90" height="5" rx="2" fill="#9CA3AF" />
          <rect x="40" y="56" width="60" height="5" rx="2" fill="#000000" />
        </g>

        {/* 骰子 - 右下 */}
        <g transform="translate(220, 95) rotate(15)">
          <rect x="0" y="0" width="70" height="70" rx="8" fill="#FF5C67" stroke="#000000" strokeWidth="3" />
          <circle cx="18" cy="18" r="5" fill="#FFFFFF" />
          <circle cx="52" cy="18" r="5" fill="#FFFFFF" />
          <circle cx="18" cy="52" r="5" fill="#FFFFFF" />
          <circle cx="52" cy="52" r="5" fill="#FFFFFF" />
          <circle cx="35" cy="35" r="5" fill="#FFFFFF" />
        </g>

        {/* 标签 */}
        <g transform="translate(115, 170)">
          <rect x="0" y="0" width="90" height="22" rx="11" fill="#000000" />
          <text x="45" y="15" textAnchor="middle" fill="#FFC01E" fontSize="10" fontWeight="900" fontFamily="sans-serif">
            PROBABILITY
          </text>
        </g>
      </svg>
    </div>
  );
};

// 25. Article Cover: 生态位（长颈鹿 + 兔子）
export const ArticleEcologicalNicheCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#ECFCCB] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <pattern id="en-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#A3E635" />
        </pattern>
        <rect width="320" height="200" fill="url(#en-dots)" />

        {/* 树 - 高树叶 */}
        <g transform="translate(150, 20)">
          <rect x="22" y="100" width="6" height="80" fill="#92400E" stroke="#000000" strokeWidth="2" />
          <circle cx="25" cy="80" r="35" fill="#10B981" stroke="#000000" strokeWidth="3" />
          <circle cx="15" cy="70" r="22" fill="#10B981" stroke="#000000" strokeWidth="2.5" />
          <circle cx="35" cy="70" r="22" fill="#10B981" stroke="#000000" strokeWidth="2.5" />
        </g>

        {/* 长颈鹿 - 左侧高处吃叶 */}
        <g transform="translate(30, 30)">
          {/* 身体 */}
          <ellipse cx="35" cy="105" rx="30" ry="20" fill="#FFC01E" stroke="#000000" strokeWidth="3" />
          {/* 长脖子和头 */}
          <path d="M55 90 Q70 60 70 30 Q75 20 85 25" stroke="#FFC01E" strokeWidth="14" fill="none" strokeLinecap="round" />
          <path d="M55 90 Q70 60 70 30 Q75 20 85 25" stroke="#000000" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="85" cy="22" r="9" fill="#FFC01E" stroke="#000000" strokeWidth="2.5" />
          <circle cx="88" cy="20" r="1.5" fill="#000000" />
          {/* 腿 */}
          <line x1="20" y1="120" x2="20" y2="155" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
          <line x1="40" y1="120" x2="40" y2="155" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
          <line x1="55" y1="120" x2="55" y2="155" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* 兔子 - 右下角吃草 */}
        <g transform="translate(245, 140)">
          <ellipse cx="0" cy="10" rx="22" ry="14" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
          <circle cx="-15" cy="-2" r="10" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
          {/* 长耳 */}
          <ellipse cx="-18" cy="-15" rx="3" ry="10" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
          <ellipse cx="-12" cy="-15" rx="3" ry="10" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
          <circle cx="-18" cy="-2" r="1.5" fill="#FF5C67" />
          <circle cx="-12" cy="-2" r="1.5" fill="#FF5C67" />
        </g>

        {/* 草丛 */}
        <path d="M230 165 L235 155 L240 165 L245 158 L250 165 L255 160 L260 165" stroke="#10B981" strokeWidth="2.5" fill="none" />

        {/* 标签 */}
        <g transform="translate(110, 170)">
          <rect x="0" y="0" width="100" height="22" rx="11" fill="#000000" />
          <text x="50" y="15" textAnchor="middle" fill="#FFC01E" fontSize="10" fontWeight="900" fontFamily="sans-serif">
            ECOLOGICAL NICHE
          </text>
        </g>
      </svg>
    </div>
  );
};

// 26. Article Cover: SpaceX 重新定义行业（火箭 + 循环箭头）
export const ArticleSpacexRedefineCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#0F172A] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* 星空 */}
        <pattern id="sp-stars" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="5" cy="5" r="1" fill="#FFFFFF" />
          <circle cx="20" cy="15" r="0.8" fill="#FFC01E" />
          <circle cx="10" cy="25" r="1" fill="#FF5C67" />
        </pattern>
        <rect width="320" height="200" fill="url(#sp-stars)" />

        {/* 火箭主体 */}
        <g transform="translate(160, 110)">
          {/* 火箭身 */}
          <path d="M-15 -60 Q0 -75 15 -60 L15 30 Q0 50 -15 30 Z" fill="#FFFFFF" stroke="#FFC01E" strokeWidth="3" />
          {/* 顶部尖 */}
          <path d="M-15 -60 Q0 -75 15 -60 Z" fill="#FF5C67" stroke="#FFC01E" strokeWidth="3" />
          {/* 窗户 */}
          <circle cx="0" cy="-30" r="6" fill="#3884FF" stroke="#FFC01E" strokeWidth="2" />
          {/* 翼 */}
          <path d="M-15 10 L-25 30 L-15 25 Z" fill="#FF5C67" stroke="#FFC01E" strokeWidth="2.5" />
          <path d="M15 10 L25 30 L15 25 Z" fill="#FF5C67" stroke="#FFC01E" strokeWidth="2.5" />
          {/* 火焰 */}
          <path d="M-10 30 Q0 60 10 30 Q5 50 0 65 Q-5 50 -10 30 Z" fill="#FFC01E" stroke="#FF5C67" strokeWidth="2" />
        </g>

        {/* 循环箭头 - 表示重新定义 */}
        <g transform="translate(40, 60)">
          <path d="M0 0 Q20 -15 40 0" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M40 0 L36 -6 M40 0 L36 6" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>

        {/* 标签 */}
        <g transform="translate(225, 30)">
          <rect x="0" y="0" width="85" height="22" rx="11" fill="#FFC01E" />
          <text x="42" y="15" textAnchor="middle" fill="#000000" fontSize="10" fontWeight="900" fontFamily="sans-serif">
            REDEFINE
          </text>
        </g>
      </svg>
    </div>
  );
};

// 27. Article Cover: 小岛经济学2（鱼 + 金币）
export const ArticleIslandTradeCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#DBEAFE] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <pattern id="it-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#93C5FD" />
        </pattern>
        <rect width="320" height="200" fill="url(#it-dots)" />

        {/* 鱼 */}
        <g transform="translate(50, 70)">
          <path d="M0 25 Q15 5 40 15 Q65 5 80 25 Q65 45 40 35 Q15 45 0 25 Z" fill="#3884FF" stroke="#000000" strokeWidth="3" />
          <circle cx="65" cy="20" r="3" fill="#000000" />
          <path d="M75 25 L95 17 L95 33 Z" fill="#3884FF" stroke="#000000" strokeWidth="3" />
        </g>

        {/* 交换箭头 */}
        <g transform="translate(140, 75)">
          <path d="M0 0 L40 0" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
          <path d="M40 0 L32 -5 M40 0 L32 5" stroke="#000000" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>

        {/* 金币堆 */}
        <g transform="translate(210, 60)">
          <ellipse cx="25" cy="50" rx="25" ry="8" fill="#FFC01E" stroke="#000000" strokeWidth="2.5" />
          <ellipse cx="25" cy="35" rx="22" ry="7" fill="#FFC01E" stroke="#000000" strokeWidth="2.5" />
          <ellipse cx="25" cy="22" rx="18" ry="6" fill="#FFC01E" stroke="#000000" strokeWidth="2.5" />
          <text x="25" y="25" textAnchor="middle" fill="#000000" fontSize="9" fontWeight="900" fontFamily="sans-serif">$</text>
        </g>

        {/* 小岛 + 棕榈 */}
        <g transform="translate(135, 130)">
          <ellipse cx="25" cy="30" rx="35" ry="6" fill="#FED7AA" stroke="#000000" strokeWidth="2.5" />
          <rect x="22" y="5" width="6" height="25" fill="#92400E" stroke="#000000" strokeWidth="2" />
          <path d="M25 5 Q5 -5 0 8 Q15 0 25 5 Z" fill="#10B981" stroke="#000000" strokeWidth="2" />
          <path d="M25 5 Q45 -5 50 8 Q35 0 25 5 Z" fill="#10B981" stroke="#000000" strokeWidth="2" />
          <path d="M25 5 Q25 -10 30 -12" stroke="#10B981" strokeWidth="2" fill="none" />
        </g>

        {/* 标签 */}
        <g transform="translate(110, 170)">
          <rect x="0" y="0" width="100" height="22" rx="11" fill="#000000" />
          <text x="50" y="15" textAnchor="middle" fill="#FFC01E" fontSize="10" fontWeight="900" fontFamily="sans-serif">
            TRADE & MONEY
          </text>
        </g>
      </svg>
    </div>
  );
};

// 28. Article Cover: 高数明智（公式 + 大脑）
export const ArticleMathWisdomCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#FEF3C7] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <pattern id="mw-dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#FCD34D" />
        </pattern>
        <rect width="320" height="200" fill="url(#mw-dots)" />

        {/* 大脑 */}
        <g transform="translate(160, 100)">
          <path d="M-50 -20 Q-60 -10 -55 10 Q-65 25 -45 35 Q-30 50 0 45 Q30 50 45 35 Q65 25 55 10 Q60 -10 50 -20 Q40 -35 20 -30 Q0 -40 -20 -30 Q-40 -35 -50 -20 Z" fill="#FFC01E" stroke="#000000" strokeWidth="3" />
          {/* 大脑沟回 */}
          <path d="M-30 0 Q-15 -10 0 0 Q15 10 30 0" stroke="#000000" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M-25 15 Q-10 5 5 15 Q20 25 35 15" stroke="#000000" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M-20 -10 Q-5 -20 10 -10 Q25 -5 40 -10" stroke="#000000" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>

        {/* 数学公式贴纸 */}
        <g transform="translate(35, 30) rotate(-8)">
          <rect x="0" y="0" width="60" height="35" rx="4" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
          <text x="30" y="22" textAnchor="middle" fill="#000000" fontSize="14" fontWeight="900" fontFamily="serif" fontStyle="italic">
            ∫f(x)
          </text>
        </g>
        <g transform="translate(230, 30) rotate(6)">
          <rect x="0" y="0" width="55" height="35" rx="4" fill="#FF5C67" stroke="#000000" strokeWidth="2.5" />
          <text x="28" y="22" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="serif" fontStyle="italic">
            π=r²
          </text>
        </g>

        {/* 标签 */}
        <g transform="translate(110, 175)">
          <rect x="0" y="0" width="100" height="22" rx="11" fill="#000000" />
          <text x="50" y="15" textAnchor="middle" fill="#FFC01E" fontSize="10" fontWeight="900" fontFamily="sans-serif">
            MIND GYM
          </text>
        </g>
      </svg>
    </div>
  );
};

// 29. Article Cover: 合作 vs 零和（拼图块）
export const ArticleCooperationCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#FFE4E6] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <pattern id="cp-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#FDA4AF" />
        </pattern>
        <rect width="320" height="200" fill="url(#cp-dots)" />

        {/* 左拼图块 */}
        <g transform="translate(50, 60)">
          <path d="M0 0 L60 0 L60 20 Q70 20 70 30 Q70 40 60 40 L60 60 L0 60 L0 40 Q-10 40 -10 30 Q-10 20 0 20 Z" fill="#3884FF" stroke="#000000" strokeWidth="3" />
        </g>
        {/* 右拼图块 - 配合 */}
        <g transform="translate(120, 60)">
          <path d="M60 0 L0 0 L0 20 Q-10 20 -10 30 Q-10 40 0 40 L0 60 L60 60 L60 40 Q70 40 70 30 Q70 20 60 20 Z" fill="#FFC01E" stroke="#000000" strokeWidth="3" />
        </g>

        {/* 第三块在上方 - 表示蛋糕做大 */}
        <g transform="translate(170, 120)">
          <path d="M0 0 L40 0 L40 12 Q48 12 48 20 Q48 28 40 28 L40 40 L0 40 L0 28 Q-8 28 -8 20 Q-8 12 0 12 Z" fill="#10B981" stroke="#000000" strokeWidth="2.5" />
        </g>

        {/* 上升箭头 */}
        <g transform="translate(20, 130)">
          <path d="M0 30 L0 0" stroke="#FF5C67" strokeWidth="3" strokeLinecap="round" />
          <path d="M0 0 L-5 8 L5 8 Z" fill="#FF5C67" stroke="#000000" strokeWidth="1.5" />
        </g>

        {/* 标签 */}
        <g transform="translate(105, 175)">
          <rect x="0" y="0" width="110" height="22" rx="11" fill="#000000" />
          <text x="55" y="15" textAnchor="middle" fill="#FFC01E" fontSize="10" fontWeight="900" fontFamily="sans-serif">
            WIN-WIN
          </text>
        </g>
      </svg>
    </div>
  );
};

// 30. Article Cover: 明星的一小时（星星 + 时钟）
export const ArticleAttentionLeverageCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#FEF08A] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <pattern id="al-dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#FACC15" />
        </pattern>
        <rect width="320" height="200" fill="url(#al-dots)" />

        {/* 大五角星 */}
        <g transform="translate(160, 90)">
          <path d="M0 -45 L13 -14 L45 -14 L19 6 L29 38 L0 18 L-29 38 L-19 6 L-45 -14 L-13 -14 Z" fill="#FFC01E" stroke="#000000" strokeWidth="3" />
          <circle cx="0" cy="-5" r="6" fill="#FF5C67" stroke="#000000" strokeWidth="2" />
        </g>

        {/* 时钟 - 左下 */}
        <g transform="translate(40, 140)">
          <circle cx="0" cy="0" r="25" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
          <line x1="0" y1="0" x2="0" y2="-15" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="0" y1="0" x2="12" y2="0" stroke="#FF5C67" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="0" cy="0" r="2" fill="#000000" />
          {/* 时钟刻度 */}
          <circle cx="0" cy="-20" r="1.5" fill="#000000" />
          <circle cx="20" cy="0" r="1.5" fill="#000000" />
          <circle cx="0" cy="20" r="1.5" fill="#000000" />
          <circle cx="-20" cy="0" r="1.5" fill="#000000" />
        </g>

        {/* 多条放射光线 - 杠杆放大效应 */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 160 + Math.cos(rad) * 55;
          const y1 = 90 + Math.sin(rad) * 55;
          const x2 = 160 + Math.cos(rad) * 75;
          const y2 = 90 + Math.sin(rad) * 75;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FF5C67" strokeWidth="2.5" strokeLinecap="round" />;
        })}

        {/* 标签 */}
        <g transform="translate(225, 165)">
          <rect x="0" y="0" width="80" height="22" rx="11" fill="#000000" />
          <text x="40" y="15" textAnchor="middle" fill="#FFC01E" fontSize="10" fontWeight="900" fontFamily="sans-serif">
            ATTENTION
          </text>
        </g>
      </svg>
    </div>
  );
};

// 31. Article Cover: 小岛经济学1（鱼 + 储蓄罐）
export const ArticleIslandSavingCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#DBEAFE] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <pattern id="is-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#93C5FD" />
        </pattern>
        <rect width="320" height="200" fill="url(#is-dots)" />

        {/* 储蓄罐（小猪） */}
        <g transform="translate(160, 95)">
          <ellipse cx="0" cy="0" rx="55" ry="38" fill="#FF5C67" stroke="#000000" strokeWidth="3" />
          {/* 嘴 */}
          <circle cx="-45" cy="-5" r="10" fill="#FF5C67" stroke="#000000" strokeWidth="2.5" />
          <circle cx="-48" cy="-7" r="1.5" fill="#000000" />
          <circle cx="-48" cy="-3" r="1.5" fill="#000000" />
          {/* 眼 */}
          <circle cx="-20" cy="-12" r="3" fill="#000000" />
          {/* 耳 */}
          <path d="M-15 -35 L-5 -30 L-10 -22 Z" fill="#FF5C67" stroke="#000000" strokeWidth="2" />
          <path d="M10 -35 L20 -30 L15 -22 Z" fill="#FF5C67" stroke="#000000" strokeWidth="2" />
          {/* 腿 */}
          <rect x="-30" y="35" width="8" height="12" fill="#000000" />
          <rect x="-10" y="35" width="8" height="12" fill="#000000" />
          <rect x="10" y="35" width="8" height="12" fill="#000000" />
          <rect x="30" y="35" width="8" height="12" fill="#000000" />
          {/* 投币口 */}
          <rect x="-5" y="-38" width="14" height="4" fill="#000000" />
        </g>

        {/* 鱼 - 左侧 */}
        <g transform="translate(35, 70)">
          <path d="M0 15 Q12 3 30 8 Q50 3 60 15 Q50 27 30 22 Q12 27 0 15 Z" fill="#3884FF" stroke="#000000" strokeWidth="2.5" />
          <circle cx="48" cy="12" r="2" fill="#000000" />
          <path d="M58 15 L75 8 L75 22 Z" fill="#3884FF" stroke="#000000" strokeWidth="2.5" />
        </g>

        {/* 金币从天而降 */}
        <g transform="translate(155, 25)">
          <ellipse cx="0" cy="0" rx="8" ry="3" fill="#FFC01E" stroke="#000000" strokeWidth="2" />
          <text x="0" y="1" textAnchor="middle" fill="#000000" fontSize="6" fontWeight="900">$</text>
        </g>

        {/* 标签 */}
        <g transform="translate(110, 170)">
          <rect x="0" y="0" width="100" height="22" rx="11" fill="#000000" />
          <text x="50" y="15" textAnchor="middle" fill="#FFC01E" fontSize="10" fontWeight="900" fontFamily="sans-serif">
            SAVE FIRST
          </text>
        </g>
      </svg>
    </div>
  );
};

// 32. Article Cover: 中医避雷（脉诊 + 雷电）
export const ArticleTcmFilterCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#FFE4E6] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <pattern id="tcm-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#FDA4AF" />
        </pattern>
        <rect width="320" height="200" fill="url(#tcm-dots)" />

        {/* 手腕 + 脉诊手指 */}
        <g transform="translate(80, 100)">
          {/* 手臂 */}
          <rect x="-30" y="0" width="50" height="20" rx="10" fill="#FED7AA" stroke="#000000" strokeWidth="2.5" />
          {/* 手 */}
          <path d="M20 0 Q40 -5 50 5 L50 20 Q40 25 20 20 Z" fill="#FED7AA" stroke="#000000" strokeWidth="2.5" />
          {/* 三指搭脉 */}
          <rect x="28" y="-15" width="6" height="14" rx="2" fill="#FFC01E" stroke="#000000" strokeWidth="2" />
          <rect x="36" y="-15" width="6" height="14" rx="2" fill="#FFC01E" stroke="#000000" strokeWidth="2" />
          <rect x="44" y="-15" width="6" height="14" rx="2" fill="#FFC01E" stroke="#000000" strokeWidth="2" />
          {/* 脉动波 */}
          <path d="M30 -20 Q35 -25 40 -20 Q45 -15 50 -20" stroke="#FF5C67" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>

        {/* 雷电 - 表示「避雷」 */}
        <g transform="translate(220, 50)">
          <path d="M0 0 L-15 35 L0 35 L-10 70 L20 25 L5 25 L15 0 Z" fill="#FFC01E" stroke="#000000" strokeWidth="3" strokeLinejoin="round" />
        </g>

        {/* 红色禁止圆圈 */}
        <g transform="translate(225, 130)">
          <circle cx="0" cy="0" r="25" fill="none" stroke="#FF5C67" strokeWidth="4" />
          <line x1="-18" y1="-18" x2="18" y2="18" stroke="#FF5C67" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* 标签 */}
        <g transform="translate(105, 170)">
          <rect x="0" y="0" width="110" height="22" rx="11" fill="#000000" />
          <text x="55" y="15" textAnchor="middle" fill="#FFC01E" fontSize="10" fontWeight="900" fontFamily="sans-serif">
            TCM SURVIVAL
          </text>
        </g>
      </svg>
    </div>
  );
};

// 33. Video Cover: 日式料理创业vlog
export const VideoCrawfishCover: React.FC<{ text: string; className?: string }> = ({ text, className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full bg-[#EDE9FE] flex items-center justify-center p-4 overflow-hidden select-none ${className}`}>
      {/* Background Graphic Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 300 180" fill="none">
        <circle cx="240" cy="40" r="60" stroke="#8B5CF6" strokeWidth="3" strokeDasharray="6 6" />
        <circle cx="50" cy="140" r="40" stroke="#8B5CF6" strokeWidth="3" />
      </svg>

      <div className="relative z-10 text-center">
        <span className="inline-block px-2.5 py-0.5 bg-[#8B5CF6] text-white text-[11px] font-black rounded-md mb-2 shadow-[2px_2px_0px_#000]">
          STARTUP VLOG
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-tight">
          {text}
        </h3>
        <p className="text-[11px] font-extrabold text-purple-800 mt-1">
          JAPANESE RESTAURANT DIARY
        </p>
      </div>
    </div>
  );
};

// 16. Video Cover: 录口播成长法
export const VideoDietCover: React.FC<{ text: string; className?: string }> = ({ text, className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full bg-[#FEF3C7] flex items-center justify-center p-4 overflow-hidden select-none ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 300 180" fill="none">
        <rect x="20" y="20" width="80" height="80" rx="20" fill="#F59E0B" />
        <circle cx="230" cy="120" r="45" fill="#F59E0B" />
      </svg>

      <div className="relative z-10 text-center">
        <span className="inline-block px-2.5 py-0.5 bg-[#F59E0B] text-black text-[11px] font-black rounded-md mb-2 shadow-[2px_2px_0px_#000]">
          SELF MEDIA
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-tight">
          {text}
        </h3>
        <p className="text-[11px] font-extrabold text-amber-900 mt-1">
          SPEAK UP & GROW
        </p>
      </div>
    </div>
  );
};

// 17. Video Cover: 十大学生思维 (With Center Play Button)
export const VideoNewYearCover: React.FC<{ text: string; className?: string }> = ({ text, className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full bg-[#FFE4E6] flex items-center justify-center p-4 overflow-hidden select-none ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 300 180" fill="none">
        <circle cx="50" cy="40" r="30" fill="#FF5C67" />
        <circle cx="250" cy="140" r="50" fill="#FF5C67" />
      </svg>

      {/* Central Big Glowing Play Button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-14 h-14 rounded-full bg-white border-[2.5px] border-black flex items-center justify-center shadow-[3px_3px_0px_#000] text-black z-20">
          <svg className="w-6 h-6 fill-black ml-1" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 text-center pt-8">
        <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-tight">
          {text}
        </h3>
        <p className="text-[11px] font-extrabold text-rose-800 mt-1">
          MINDSET CHECKLIST
        </p>
      </div>
    </div>
  );
};

