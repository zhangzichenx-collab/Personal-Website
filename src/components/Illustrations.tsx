import React from 'react';

/**
 * High-fidelity vector illustrations recreating the exact neo-brutalist cartoon visual style
 * from the user's reference screenshots.
 */

// 1. Hero John Carter Avatar (Yellow Card with Character)
export const JohnCarterAvatar: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        viewBox="0 0 440 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[6px_6px_0px_#000000]"
      >
        {/* Background Card */}
        <rect
          x="12"
          y="12"
          width="416"
          height="416"
          rx="36"
          fill="#FFC01E"
          stroke="#000000"
          strokeWidth="6"
        />

        <g id="character">
          {/* Red Polka-dot Sweater Body */}
          <path
            d="M50 422 C70 330, 140 300, 220 300 C300 300, 370 330, 390 422 Z"
            fill="#FF5C67"
            stroke="#000000"
            strokeWidth="5"
          />

          {/* Yellow Polka Dots on Sweater */}
          <circle cx="120" cy="350" r="10" fill="#FFC01E" />
          <circle cx="170" cy="380" r="11" fill="#FFC01E" />
          <circle cx="210" cy="340" r="10" fill="#FFC01E" />
          <circle cx="270" cy="355" r="11" fill="#FFC01E" />
          <circle cx="320" cy="380" r="10" fill="#FFC01E" />
          <circle cx="150" cy="415" r="9" fill="#FFC01E" />
          <circle cx="250" cy="415" r="10" fill="#FFC01E" />
          <circle cx="340" cy="340" r="8" fill="#FFC01E" />
          <circle cx="95" cy="400" r="9" fill="#FFC01E" />

          {/* Neck */}
          <rect
            x="192"
            y="250"
            width="56"
            height="46"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="5"
          />

          {/* Sweater Turtleneck Collar */}
          <rect
            x="172"
            y="272"
            width="96"
            height="36"
            rx="18"
            fill="#FF5C67"
            stroke="#000000"
            strokeWidth="5"
          />

          {/* Ears */}
          <circle cx="140" cy="230" r="18" fill="#FFFFFF" stroke="#000000" strokeWidth="5" />
          <path d="M142 225 C140 230, 144 235, 142 238" stroke="#000000" strokeWidth="3" strokeLinecap="round" />

          <circle cx="300" cy="230" r="18" fill="#FFFFFF" stroke="#000000" strokeWidth="5" />
          <path d="M298 225 C300 230, 296 235, 298 238" stroke="#000000" strokeWidth="3" strokeLinecap="round" />

          {/* Face Base */}
          <path
            d="M152 180 C152 140, 180 125, 220 125 C260 125, 288 140, 288 180 L288 235 C288 275, 260 288, 220 288 C180 288, 152 275, 152 235 Z"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="5"
          />

          {/* Full Black Beard */}
          <path
            d="M152 222 C152 278, 185 306, 220 306 C255 306, 288 278, 288 222 C288 222, 275 240, 255 242 C240 243, 230 236, 220 236 C210 236, 200 243, 185 242 C165 240, 152 222, 152 222 Z"
            fill="#111111"
            stroke="#000000"
            strokeWidth="5"
          />

          {/* Smile Inside Beard */}
          <path
            d="M208 260 C212 268, 228 268, 232 260"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="4"
          />

          {/* Eyes */}
          <ellipse cx="192" cy="195" rx="5" ry="6" fill="#111111" />
          <ellipse cx="248" cy="195" rx="5" ry="6" fill="#111111" />

          {/* Eyebrows */}
          <path d="M182 182 C188 178, 200 178, 204 184" stroke="#000000" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M236 184 C240 178, 252 178, 258 182" stroke="#000000" strokeWidth="4.5" strokeLinecap="round" />

          {/* Nose */}
          <path d="M220 196 L216 216 L226 216" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

          {/* Black Stylized Hair */}
          <path
            d="M148 185 C140 135, 160 85, 225 80 C285 75, 320 120, 315 170 C310 190, 305 210, 300 220 C290 205, 290 180, 285 160 C265 130, 210 130, 175 145 C155 155, 148 175, 148 185 Z"
            fill="#111111"
            stroke="#000000"
            strokeWidth="5"
          />
          {/* Hair Swoop Texture / detail */}
          <path
            d="M195 105 C230 95, 275 105, 295 135"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M170 125 C190 115, 225 115, 245 125"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
};

// 2. Character with Laptop in Coral Circle (Who's behind all this)
export const JohnCarterLaptop: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        viewBox="0 0 460 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[5px_5px_0px_#000000]"
      >
        {/* Coral Pink Circular Badge */}
        <circle
          cx="230"
          cy="230"
          r="215"
          fill="#FF5C67"
          stroke="#000000"
          strokeWidth="6"
        />

        <g id="character-laptop">
          {/* Yellow Patterned Sweater Body */}
          <path
            d="M75 425 C95 310, 165 270, 235 270 C305 270, 385 310, 400 425 Z"
            fill="#FFC01E"
            stroke="#000000"
            strokeWidth="5"
          />

          {/* Red Polka Dots on Yellow Sweater */}
          <circle cx="120" cy="350" r="9" fill="#FF5C67" />
          <circle cx="140" cy="300" r="9" fill="#FF5C67" />
          <circle cx="160" cy="390" r="10" fill="#FF5C67" />
          <circle cx="190" cy="330" r="10" fill="#FF5C67" />
          <circle cx="215" cy="390" r="9" fill="#FF5C67" />
          <circle cx="260" cy="340" r="10" fill="#FF5C67" />
          <circle cx="300" cy="380" r="9" fill="#FF5C67" />
          <circle cx="320" cy="315" r="9" fill="#FF5C67" />

          {/* Turtleneck */}
          <rect
            x="185"
            y="235"
            width="80"
            height="32"
            rx="16"
            fill="#FFC01E"
            stroke="#000000"
            strokeWidth="5"
          />

          {/* Neck */}
          <rect x="202" y="210" width="46" height="30" fill="#FFFFFF" stroke="#000000" strokeWidth="4" />

          {/* Face */}
          <path
            d="M175 160 C175 125, 195 110, 225 110 C255 110, 275 125, 275 160 L275 200 C275 230, 255 240, 225 240 C195 240, 175 230, 175 200 Z"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="5"
          />

          {/* Ears */}
          <circle cx="168" cy="180" r="14" fill="#FFFFFF" stroke="#000000" strokeWidth="4" />
          <circle cx="282" cy="180" r="14" fill="#FFFFFF" stroke="#000000" strokeWidth="4" />

          {/* Beard */}
          <path
            d="M175 185 C175 235, 200 250, 225 250 C250 250, 275 235, 275 185 C275 185, 260 200, 245 200 C235 200, 230 195, 225 195 C220 195, 215 200, 205 200 C190 200, 175 185, 175 185 Z"
            fill="#111111"
            stroke="#000000"
            strokeWidth="4"
          />

          {/* Eyes & Eyebrows */}
          <ellipse cx="205" cy="165" rx="4" ry="5" fill="#111111" />
          <ellipse cx="245" cy="165" rx="4" ry="5" fill="#111111" />
          <path d="M198 155 Q205 150 212 155" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M238 155 Q245 150 252 155" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />

          {/* Nose & Smile */}
          <path d="M226 166 L222 178 L230 178" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M220 210 Q225 216 230 210" stroke="#FFFFFF" strokeWidth="3.5" fill="none" strokeLinecap="round" />

          {/* Hair */}
          <path
            d="M172 165 C165 125, 185 85, 230 80 C275 75, 295 110, 290 150 C285 165, 280 180, 275 185 C270 170, 265 145, 255 130 C240 110, 205 110, 185 130 C175 140, 172 155, 172 165 Z"
            fill="#111111"
            stroke="#000000"
            strokeWidth="5"
          />

          {/* Arm & Hand */}
          <path
            d="M120 375 L160 365 L180 340 L160 300"
            fill="#FFC01E"
            stroke="#000000"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          {/* Hands Typing on Keyboard */}
          <path
            d="M245 350 C255 340, 275 330, 295 340 C305 345, 305 365, 290 370 C275 375, 250 370, 245 350 Z"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="4"
          />
          <path d="M265 340 L275 360" stroke="#000000" strokeWidth="3" />
          <path d="M275 338 L285 358" stroke="#000000" strokeWidth="3" />

          {/* Black Modern Laptop */}
          <path
            d="M260 380 L350 270 L430 270 L340 380 Z"
            fill="#111111"
            stroke="#000000"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          {/* Laptop Lid Apple/Circle Logo */}
          <circle cx="365" cy="325" r="12" fill="none" stroke="#FFFFFF" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
};

// 3. Lily Woods Testimonial Avatar (Coral Circle)
export const LilyWoodsAvatar: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        viewBox="0 0 380 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[5px_5px_0px_#000000]"
      >
        {/* Coral Circle */}
        <circle cx="190" cy="190" r="175" fill="#FF5C67" stroke="#000000" strokeWidth="6" />

        <g id="lily-character">
          {/* Purple & White Patterned Sweater */}
          <path
            d="M60 360 C80 270, 130 250, 190 250 C250 250, 300 270, 320 360 Z"
            fill="#5B4EFF"
            stroke="#000000"
            strokeWidth="5"
          />
          {/* White Slanted Dashes on Sweater */}
          <line x1="120" y1="290" x2="135" y2="310" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
          <line x1="170" y1="280" x2="185" y2="300" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
          <line x1="220" y1="295" x2="235" y2="315" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
          <line x1="140" y1="330" x2="155" y2="350" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
          <line x1="250" y1="335" x2="265" y2="355" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />

          {/* Striped Blue Turtleneck */}
          <rect x="150" y="215" width="80" height="34" rx="17" fill="#FFFFFF" stroke="#000000" strokeWidth="5" />
          <line x1="166" y1="215" x2="166" y2="249" stroke="#3884FF" strokeWidth="5" />
          <line x1="178" y1="215" x2="178" y2="249" stroke="#3884FF" strokeWidth="5" />
          <line x1="190" y1="215" x2="190" y2="249" stroke="#3884FF" strokeWidth="5" />
          <line x1="202" y1="215" x2="202" y2="249" stroke="#3884FF" strokeWidth="5" />
          <line x1="214" y1="215" x2="214" y2="249" stroke="#3884FF" strokeWidth="5" />

          {/* Neck */}
          <rect x="168" y="195" width="44" height="25" fill="#FFFFFF" stroke="#000000" strokeWidth="4" />

          {/* Face */}
          <path
            d="M145 150 C145 115, 165 105, 190 105 C215 105, 235 115, 235 150 L235 185 C235 210, 215 220, 190 220 C165 220, 145 210, 145 185 Z"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="5"
          />

          {/* Ear */}
          <circle cx="238" cy="170" r="12" fill="#FFFFFF" stroke="#000000" strokeWidth="4" />
          <path d="M236 165 C238 170, 236 174, 238 176" stroke="#000000" strokeWidth="3" />

          {/* Eyes & Eyebrows */}
          <ellipse cx="170" cy="155" rx="4.5" ry="5.5" fill="#111111" />
          <ellipse cx="205" cy="155" rx="4.5" ry="5.5" fill="#111111" />
          <path d="M165 145 Q170 140 178 145" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M200 145 Q205 140 213 145" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />

          {/* Nose & Sweet Smile */}
          <path d="M192 155 L188 168 L196 168" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M178 185 Q188 198 198 185" stroke="#000000" strokeWidth="3.5" fill="none" strokeLinecap="round" />

          {/* Dark Bob Haircut */}
          <path
            d="M138 155 C130 95, 160 65, 210 65 C260 65, 275 105, 275 170 C275 220, 245 240, 240 240 C235 230, 230 200, 235 180 C235 150, 230 115, 205 115 C175 115, 150 140, 145 160 C140 175, 138 210, 132 210 C130 190, 138 175, 138 155 Z"
            fill="#111111"
            stroke="#000000"
            strokeWidth="5"
          />
        </g>
      </svg>
    </div>
  );
};

// 4. Web Design Vector (Browser with cursor & elements)
export const WebDesignVector: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <div className={`flex items-center justify-center p-4 ${className}`}>
      <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Browser Window */}
        <rect
          x="12"
          y="16"
          width="250"
          height="160"
          rx="18"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="4"
          className="drop-shadow-[4px_4px_0px_#000000]"
        />
        {/* Window Top Bar Line */}
        <line x1="12" y1="44" x2="262" y2="44" stroke="#000000" strokeWidth="3.5" />

        {/* 3 Dots */}
        <circle cx="28" cy="30" r="4.5" fill="#FF5C67" />
        <circle cx="42" cy="30" r="4.5" fill="#FFC01E" />
        <circle cx="56" cy="30" r="4.5" fill="#10B981" />

        {/* Content Wireframe */}
        <line x1="28" y1="62" x2="100" y2="62" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
        <line x1="28" y1="74" x2="70" y2="74" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="28" y1="86" x2="85" y2="86" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />

        {/* Black Button */}
        <rect x="28" y="100" width="46" height="14" rx="5" fill="#111111" />

        {/* Blue Image Placeholder */}
        <rect
          x="125"
          y="60"
          width="75"
          height="55"
          rx="10"
          fill="#3884FF"
          stroke="#000000"
          strokeWidth="3.5"
        />

        {/* Bottom Circles */}
        <circle cx="50" cy="140" r="8" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
        <circle cx="100" cy="140" r="8" fill="#3884FF" stroke="#000000" strokeWidth="3" />
        <circle cx="150" cy="140" r="8" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />

        {/* Bottom Lines */}
        <line x1="35" y1="158" x2="65" y2="158" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        <line x1="85" y1="158" x2="115" y2="158" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        <line x1="135" y1="158" x2="165" y2="158" stroke="#000000" strokeWidth="3" strokeLinecap="round" />

        {/* Yellow Pointer Arrow with Shadow */}
        <path
          d="M205 110 L230 125 L218 128 L225 142 L217 146 L210 132 L202 138 Z"
          fill="#FFC01E"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinejoin="round"
          className="drop-shadow-[3px_3px_0px_#000000]"
        />
      </svg>
    </div>
  );
};

// 5. UI/UX Design Vector (Phone with Bounding Box)
export const UiUxDesignVector: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <div className={`flex items-center justify-center p-4 ${className}`}>
      <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Transform Bounding Box Guides */}
        <rect
          x="45"
          y="15"
          width="190"
          height="170"
          fill="none"
          stroke="#000000"
          strokeWidth="2.5"
        />

        {/* 4 Purple/Blue Handles */}
        <rect x="39" y="9" width="12" height="12" rx="3" fill="#5B4EFF" stroke="#000000" strokeWidth="2.5" />
        <rect x="229" y="9" width="12" height="12" rx="3" fill="#5B4EFF" stroke="#000000" strokeWidth="2.5" />
        <rect x="39" y="179" width="12" height="12" rx="3" fill="#5B4EFF" stroke="#000000" strokeWidth="2.5" />
        <rect x="229" y="179" width="12" height="12" rx="3" fill="#5B4EFF" stroke="#000000" strokeWidth="2.5" />

        {/* Phone Frame */}
        <rect
          x="85"
          y="25"
          width="110"
          height="150"
          rx="24"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="4"
          className="drop-shadow-[4px_4px_0px_#000000]"
        />

        {/* Phone Speaker Notch */}
        <path d="M125 25 L125 29 C125 32, 127 34, 130 34 L150 34 C153 34, 155 32, 155 29 L155 25 Z" fill="#000000" />

        {/* Red Status Dot & Header Line */}
        <circle cx="102" cy="48" r="4.5" fill="#FF5C67" />
        <line x1="112" y1="48" x2="135" y2="48" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        <line x1="170" y1="46" x2="182" y2="46" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        <line x1="170" y1="52" x2="182" y2="52" stroke="#000000" strokeWidth="3" strokeLinecap="round" />

        {/* Floating Red Notification / Banner */}
        <rect
          x="75"
          y="68"
          width="130"
          height="36"
          rx="12"
          fill="#FF5C67"
          stroke="#000000"
          strokeWidth="3.5"
          className="drop-shadow-[3px_3px_0px_#000000]"
        />

        {/* Two Mini Cards Inside Phone */}
        <rect x="98" y="120" width="36" height="30" rx="8" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
        <circle cx="116" cy="135" r="5" fill="#FF5C67" />
        <line x1="113" y1="135" x2="119" y2="135" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <line x1="116" y1="132" x2="116" y2="138" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

        <rect x="146" y="120" width="36" height="30" rx="8" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
      </svg>
    </div>
  );
};

// 6. Product Design Vector (Smartwatch & Ruler)
export const ProductDesignVector: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <div className={`flex items-center justify-center p-4 ${className}`}>
      <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Watch Straps */}
        <path
          d="M75 35 C75 20, 85 10, 110 10 C135 10, 145 20, 145 35 Z"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="4"
        />
        <path
          d="M75 165 C75 180, 85 190, 110 190 C135 190, 145 180, 145 165 Z"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="4"
        />

        {/* Watch Body */}
        <rect
          x="55"
          y="35"
          width="110"
          height="130"
          rx="32"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="4"
          className="drop-shadow-[4px_4px_0px_#000000]"
        />

        {/* Watch Crown / Button */}
        <rect x="165" y="70" width="8" height="24" rx="3" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />

        {/* Notification Pill on Watch */}
        <circle cx="78" cy="58" r="4.5" fill="#10B981" />
        <line x1="88" y1="56" x2="115" y2="56" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="88" y1="62" x2="105" y2="62" stroke="#000000" strokeWidth="2" strokeLinecap="round" />

        {/* Vibrant Neon Green Screen */}
        <rect
          x="70"
          y="78"
          width="80"
          height="55"
          rx="12"
          fill="#6CD97E"
          stroke="#000000"
          strokeWidth="3.5"
        />

        {/* Bottom Indicator on Watch */}
        <line x1="95" y1="145" x2="125" y2="145" stroke="#000000" strokeWidth="3" strokeLinecap="round" />

        {/* Technical Ruler on Right */}
        <rect
          x="195"
          y="25"
          width="32"
          height="150"
          rx="10"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="4"
          className="drop-shadow-[4px_4px_0px_#000000]"
        />
        {/* Ruler Tick Marks */}
        <line x1="195" y1="45" x2="215" y2="45" stroke="#FFC01E" strokeWidth="3" />
        <line x1="195" y1="65" x2="222" y2="65" stroke="#000000" strokeWidth="3" />
        <line x1="195" y1="85" x2="215" y2="85" stroke="#FFC01E" strokeWidth="3" />
        <line x1="195" y1="105" x2="222" y2="105" stroke="#000000" strokeWidth="3" />
        <line x1="195" y1="125" x2="215" y2="125" stroke="#FFC01E" strokeWidth="3" />
        <line x1="195" y1="145" x2="222" y2="145" stroke="#000000" strokeWidth="3" />
      </svg>
    </div>
  );
};

// 7. Featured Laptop Vector (Studio Case Study on Purple Background)
export const LaptopMockupVector: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <div className={`flex items-center justify-center p-6 ${className}`}>
      <svg viewBox="0 0 460 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Laptop Screen Bezel */}
        <rect
          x="35"
          y="20"
          width="390"
          height="250"
          rx="18"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="5"
          className="drop-shadow-[6px_6px_0px_#000000]"
        />

        {/* Screen Window Divider */}
        <line x1="35" y1="52" x2="425" y2="52" stroke="#000000" strokeWidth="3.5" />
        <line x1="120" y1="52" x2="120" y2="270" stroke="#000000" strokeWidth="3.5" />

        {/* Left Sidebar Controls */}
        <circle cx="55" cy="36" r="4.5" fill="#3884FF" />
        <circle cx="80" cy="36" r="4.5" fill="#FF5C67" />

        <circle cx="55" cy="80" r="5" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
        <line x1="68" y1="80" x2="95" y2="80" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        <circle cx="105" cy="80" r="3" fill="#000000" />

        <circle cx="55" cy="115" r="5" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
        <line x1="68" y1="115" x2="95" y2="115" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        <circle cx="105" cy="115" r="3" fill="#000000" />

        <circle cx="55" cy="150" r="5" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
        <line x1="68" y1="150" x2="95" y2="150" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        <circle cx="105" cy="150" r="3" fill="#000000" />

        {/* Main Display Video Card */}
        <rect
          x="135"
          y="68"
          width="170"
          height="105"
          rx="14"
          fill="#5B4EFF"
          stroke="#000000"
          strokeWidth="4"
        />
        {/* Big White Play Button */}
        <path
          d="M210 102 L230 115 L210 128 Z"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Sub-controls under video */}
        <circle cx="145" cy="195" r="7" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
        <line x1="160" y1="195" x2="225" y2="195" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
        <rect x="245" y="188" width="40" height="15" rx="5" fill="#3884FF" stroke="#000000" strokeWidth="2.5" />

        {/* Right Side Panel / Lists */}
        <circle cx="330" cy="80" r="3.5" fill="#000000" />
        <line x1="342" y1="80" x2="385" y2="80" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />

        <circle cx="330" cy="105" r="3.5" fill="#000000" />
        <line x1="342" y1="102" x2="395" y2="102" stroke="#3884FF" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="342" y1="109" x2="380" y2="109" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />

        <circle cx="330" cy="135" r="3.5" fill="#000000" />
        <line x1="342" y1="135" x2="395" y2="135" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />

        <circle cx="330" cy="160" r="3.5" fill="#000000" />
        <line x1="342" y1="160" x2="390" y2="160" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />

        {/* Right Bottom Button */}
        <rect x="330" y="195" width="65" height="18" rx="5" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />

        {/* Laptop Keyboard Base */}
        <path
          d="M10 270 L450 270 C450 282, 440 292, 425 292 L35 292 C20 292, 10 282, 10 270 Z"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="5"
        />
        {/* Trackpad notch */}
        <path d="M210 270 L210 278 L250 278 L250 270" stroke="#000000" strokeWidth="3.5" />
      </svg>
    </div>
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

// 11. Newsletter Envelope Vector
export const NewsletterEnvelopeVector: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[4px_4px_0px_#000000]"
      >
        {/* Blue Circle Badge */}
        <circle cx="80" cy="80" r="72" fill="#3884FF" stroke="#000000" strokeWidth="5" />

        {/* Checklist Document sticking out */}
        <rect
          x="52"
          y="35"
          width="56"
          height="65"
          rx="8"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="3.5"
        />
        {/* Checklist Clip */}
        <rect x="68" y="29" width="24" height="12" rx="4" fill="#FF5C67" stroke="#000000" strokeWidth="3" />

        {/* Checklist Items */}
        <circle cx="62" cy="50" r="2.5" fill="#FF5C67" />
        <line x1="68" y1="50" x2="95" y2="50" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />

        <circle cx="62" cy="62" r="2.5" fill="#10B981" />
        <line x1="68" y1="62" x2="92" y2="62" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />

        <circle cx="62" cy="74" r="2.5" fill="#FFC01E" />
        <line x1="68" y1="74" x2="90" y2="74" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />

        {/* Yellow Envelope Body */}
        <path
          d="M32 75 L80 105 L128 75 L128 115 C128 122, 122 128, 115 128 L45 128 C38 128, 32 122, 32 115 Z"
          fill="#FFC01E"
          stroke="#000000"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path d="M32 125 L65 95" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M128 125 L95 95" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};

// 12. Article Cover: 《我可有可无的网友》 (Life Selfie with playful stickers)
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

          {/* Cute avatar drawing */}
          {/* Hair */}
          <path d="M70 120 C70 60, 150 60, 150 120 Z" fill="#1F2937" stroke="#000000" strokeWidth="2.5" />
          {/* Face */}
          <circle cx="110" cy="85" r="32" fill="#FED7AA" stroke="#000000" strokeWidth="2.5" />
          {/* Bangs */}
          <path d="M85 75 Q110 90 135 75 Q125 60 110 60 Q95 60 85 75 Z" fill="#1F2937" stroke="#000000" strokeWidth="2" />
          {/* Cat ears / playful sticker */}
          <path d="M85 60 L75 40 L100 55 Z" fill="#FF5C67" stroke="#000000" strokeWidth="2" />
          <path d="M135 60 L145 40 L120 55 Z" fill="#FF5C67" stroke="#000000" strokeWidth="2" />
          {/* Cute eyes */}
          <circle cx="100" cy="85" r="3" fill="#000000" />
          <circle cx="120" cy="85" r="3" fill="#000000" />
          {/* Blush */}
          <ellipse cx="94" cy="93" rx="4" ry="2.5" fill="#FB7185" />
          <ellipse cx="126" cy="93" rx="4" ry="2.5" fill="#FB7185" />
          {/* Smile */}
          <path d="M106 94 Q110 98 114 94" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
          {/* Sparkles */}
          <path d="M165 35 L170 45 L180 50 L170 55 L165 65 L160 55 L150 50 L160 45 Z" fill="#FFC01E" stroke="#000000" strokeWidth="1.5" />
          <text x="35" y="152" fill="#000000" fontSize="11" fontWeight="900" fontFamily="sans-serif">
            MEMORIES OF CYBER SPACE ✨
          </text>
        </g>
      </svg>
    </div>
  );
};

// 13. Article Cover: 《#SJTU游离日记#0004》 (Minimalist Sky Blue Campus)
export const ArticleSJTUCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#E0F2FE] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Soft clouds & geometric calm */}
        <circle cx="60" cy="50" r="35" fill="#BAE6FD" opacity="0.6" />
        <circle cx="95" cy="45" r="28" fill="#BAE6FD" opacity="0.6" />
        <circle cx="260" cy="70" r="45" fill="#BAE6FD" opacity="0.5" />

        {/* Minimalist modern campus building & lake line */}
        <path d="M0 160 Q160 145 320 160 L320 200 L0 200 Z" fill="#3884FF" />
        <path d="M0 170 Q160 160 320 170 L320 200 L0 200 Z" fill="#1D4ED8" />

        {/* Central SJTU Stamp / Minimalist Badge */}
        <g transform="translate(85, 45)">
          <rect x="0" y="0" width="150" height="75" rx="16" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
          <text x="75" y="32" textAnchor="middle" fill="#003A70" fontSize="16" fontWeight="900" fontFamily="sans-serif">
            #SJTU
          </text>
          <text x="75" y="52" textAnchor="middle" fill="#2563EB" fontSize="12" fontWeight="800" fontFamily="sans-serif">
            游离日记 0004
          </text>
          <line x1="30" y1="62" x2="120" y2="62" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};

// 14. Article Cover: 《关于枸杞岛和我的恋爱》 (Ocean Island Waves)
export const ArticleGouqiIslandCover: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#38BDF8] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Golden Sun */}
        <circle cx="240" cy="55" r="30" fill="#FFC01E" stroke="#000000" strokeWidth="3" />
        {/* Distant Sea Island Green Hills */}
        <path d="M40 145 Q110 80 180 145 Z" fill="#10B981" stroke="#000000" strokeWidth="3" />
        <path d="M140 145 Q200 95 270 145 Z" fill="#059669" stroke="#000000" strokeWidth="3" />

        {/* Little White Lighthouse */}
        <rect x="165" y="90" width="14" height="35" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
        <polygon points="160,90 172,75 184,90" fill="#FF5C67" stroke="#000000" strokeWidth="2" />

        {/* Sea Waves in Neo-brutalism style */}
        <path d="M-10 145 Q40 135 90 145 T190 145 T290 145 T340 145 L340 210 L-10 210 Z" fill="#0284C7" stroke="#000000" strokeWidth="3" />
        <path d="M-10 165 Q40 155 90 165 T190 165 T290 165 T340 165 L340 210 L-10 210 Z" fill="#0369A1" stroke="#000000" strokeWidth="3" />

        {/* Floating white sea birds */}
        <path d="M70 50 Q77 43 84 50 Q91 43 98 50" stroke="#000000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M110 65 Q116 59 122 65 Q128 59 134 65" stroke="#000000" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
};

// 15. Video Cover: 小龙虾到三体人
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
          THOUGHT LAB
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-tight">
          {text}
        </h3>
        <p className="text-[11px] font-extrabold text-purple-800 mt-1">
          LATE NIGHT SCIENCE VLOG
        </p>
      </div>
    </div>
  );
};

// 16. Video Cover: 减肥的动力
export const VideoDietCover: React.FC<{ text: string; className?: string }> = ({ text, className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full bg-[#FEF3C7] flex items-center justify-center p-4 overflow-hidden select-none ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 300 180" fill="none">
        <rect x="20" y="20" width="80" height="80" rx="20" fill="#F59E0B" />
        <circle cx="230" cy="120" r="45" fill="#F59E0B" />
      </svg>

      <div className="relative z-10 text-center">
        <span className="inline-block px-2.5 py-0.5 bg-[#F59E0B] text-black text-[11px] font-black rounded-md mb-2 shadow-[2px_2px_0px_#000]">
          REAL LIFE VLOG
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-tight">
          {text}
        </h3>
        <p className="text-[11px] font-extrabold text-amber-900 mt-1">
          WEIGHT DIARY & RECOVERY
        </p>
      </div>
    </div>
  );
};

// 17. Video Cover: 大年初一的迷思 (With Center Play Button)
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
          HOLIDAY MONOLOGUE
        </p>
      </div>
    </div>
  );
};

