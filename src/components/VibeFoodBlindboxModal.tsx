import React, { useState } from 'react';
import { X, Utensils, RefreshCw, MapPin, Sparkles, Navigation, CheckCircle2, DollarSign } from 'lucide-react';
import { Language } from '../types';

interface VibeFoodBlindboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

const mockRestaurants = [
  {
    name: '南门潮汕鲜牛肉火锅',
    nameEn: 'Nanmen Chaozhou Beef Hotpot',
    category: '火锅 / 潮汕菜',
    categoryEn: 'Hotpot / Cantonese',
    rating: '4.8 ★',
    price: '¥85/人',
    distance: '320m · 步行约4分钟',
    distanceEn: '320m · 4 min walk',
    signatureDish: '吊龙伴、手打生牛肉丸、沙茶牛河',
    signatureDishEn: 'Fresh beef slices, hand-beaten meatballs, sha cha noodles',
    tag: '排队王 · 肉质鲜嫩',
    address: '徐汇区华山路1988号',
    bgColor: '#FFE4E6',
  },
  {
    name: '思源湖畔生煎馆',
    nameEn: 'Siyuan Lake Crispy Pan-fried Buns',
    category: '本帮小吃 / 点心',
    categoryEn: 'Shanghai Dim Sum',
    rating: '4.9 ★',
    price: '¥24/人',
    distance: '150m · 步行约2分钟',
    distanceEn: '150m · 2 min walk',
    signatureDish: '大虾鲜肉生煎、咖喱牛肉粉丝汤',
    signatureDishEn: 'Crispy shrimp pork buns, curry beef soup',
    tag: '底脆多汁 · 百年传承',
    address: '东川路800号交大校门东侧',
    bgColor: '#FEF3C7',
  },
  {
    name: '东京深夜居酒屋 · 炭火烧鸟',
    nameEn: 'Tokyo Midnight Yakitori Bar',
    category: '日料 / 烧鸟居酒屋',
    categoryEn: 'Japanese Yakitori',
    rating: '4.7 ★',
    price: '¥110/人',
    distance: '580m · 骑行约3分钟',
    distanceEn: '580m · 3 min bike',
    signatureDish: '京葱鸡肉串、提灯、三文鱼厚切、生啤',
    signatureDishEn: 'Chicken scallion skewers, lantern skewers, fresh salmon, draft beer',
    tag: '微醺治愈 · 晚间营业至2:00',
    address: '定西路创意街区B座',
    bgColor: '#E0E7FF',
  },
  {
    name: '兰州正宗牛肉面馆（24h）',
    nameEn: 'Lanzhou Authentic Hand-pulled Noodles',
    category: '西北风味 / 面食',
    categoryEn: 'Hand-pulled Noodles',
    rating: '4.8 ★',
    price: '¥22/人',
    distance: '420m · 步行约5分钟',
    distanceEn: '420m · 5 min walk',
    signatureDish: '一清二白三红四绿牛肉大碗、卤蛋、酱牛肉',
    signatureDishEn: 'Hand-pulled noodle bowl, braised beef, spiced egg',
    tag: '热腾劲道 · 熬夜码农加油站',
    address: '番禺路240号',
    bgColor: '#D1FAE5',
  },
  {
    name: '轻食工坊 · 慢烤三文鱼能量碗',
    nameEn: 'Vitality Bowl & Organic Greens',
    category: '轻食沙拉 / 咖啡',
    categoryEn: 'Organic Salad & Coffee',
    rating: '4.6 ★',
    price: '¥48/人',
    distance: '210m · 步行约3分钟',
    distanceEn: '210m · 3 min walk',
    signatureDish: '挪威三文鱼藜麦暖碗、手冲耶加雪菲',
    signatureDishEn: 'Salmon quinoa warm bowl, pour-over Yirgacheffe',
    tag: '低卡控糖 · 减脂期必备',
    address: '淮海西路570号红坊',
    bgColor: '#F3E8FF',
  },
  {
    name: '川味老茶馆手撕烤兔 & 钵钵鸡',
    nameEn: 'Sichuan Spicy Skewers & Roasted Rabbit',
    category: '川菜 / 辣味小吃',
    categoryEn: 'Spicy Sichuan Skewers',
    rating: '4.8 ★',
    price: '¥55/人',
    distance: '650m · 步行约8分钟',
    distanceEn: '650m · 8 min walk',
    signatureDish: '红油钵钵鸡、手撕五香烤兔、冰镇红糖糍粑',
    signatureDishEn: 'Cold spicy chicken skewers, roasted rabbit, brown sugar rice cake',
    tag: '香辣过瘾 · 灵魂蘸料',
    address: '天平路88号',
    bgColor: '#FEE2E2',
  },
];

export const VibeFoodBlindboxModal: React.FC<VibeFoodBlindboxModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [isRolling, setIsRolling] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [rollCount, setRollCount] = useState(1);

  if (!isOpen) return null;

  const currentPick = mockRestaurants[selectedIdx];

  const handleRoll = () => {
    if (isRolling) return;
    setIsRolling(true);

    let counter = 0;
    const interval = setInterval(() => {
      setSelectedIdx((prev) => (prev + 1) % mockRestaurants.length);
      counter++;
      if (counter > 14) {
        clearInterval(interval);
        const randomPick = Math.floor(Math.random() * mockRestaurants.length);
        setSelectedIdx(randomPick);
        setIsRolling(false);
        setRollCount((c) => c + 1);
      }
    }, 90);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in">
      <div
        className="bg-white border-[3px] border-black rounded-3xl w-full max-w-lg shadow-[8px_8px_0px_#000000] overflow-hidden flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-[#FFC01E] border-b-[2.5px] border-black px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000]">
              <Utensils className="w-4 h-4 text-black" />
            </div>
            <div>
              <h3 className="font-black text-lg text-black tracking-tight leading-none">
                {lang === 'zh' ? '等会儿吃啥？' : 'What to eat later?'}
              </h3>
              <p className="text-[11px] font-bold text-gray-800 mt-0.5">
                {lang === 'zh' ? 'Vibe Coding 治愈选择困难症盲盒' : 'LBS Restaurant Decider'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer shadow-[2px_2px_0px_#000]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Mock LBS Location Info */}
          <div className="flex items-center justify-between bg-gray-50 border-2 border-black rounded-2xl px-4 py-2.5 text-xs font-bold text-gray-700">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#FF5C67]" />
              <span>
                {lang === 'zh'
                  ? '上海交通大学徐汇校区周边 1.5km 实时雷达'
                  : 'Near Shanghai Jiao Tong Univ (1.5km radar)'}
              </span>
            </div>
            <span className="text-[11px] px-2 py-0.5 bg-black text-white rounded-full">
              GPS ON
            </span>
          </div>

          {/* Restaurant Result Card */}
          <div
            className={`border-[2.5px] border-black rounded-3xl p-6 shadow-[5px_5px_0px_#000000] transition-all duration-200 ${
              isRolling ? 'scale-98 opacity-80' : 'scale-100 opacity-100'
            }`}
            style={{ backgroundColor: currentPick.bgColor }}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="px-3 py-1 bg-black text-white text-xs font-extrabold rounded-full">
                {lang === 'zh' ? currentPick.category : currentPick.categoryEn}
              </span>
              <span className="px-2.5 py-0.5 bg-white border-[1.5px] border-black text-[11px] font-black rounded-full text-[#E11D48]">
                {currentPick.tag}
              </span>
            </div>

            <h4 className="text-2xl font-black text-black tracking-tight mb-2">
              {lang === 'zh' ? currentPick.name : currentPick.nameEn}
            </h4>

            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-gray-800 mb-4">
              <span className="bg-white/80 px-2.5 py-1 rounded-lg border border-black/20">
                {currentPick.rating}
              </span>
              <span className="bg-white/80 px-2.5 py-1 rounded-lg border border-black/20">
                {currentPick.price}
              </span>
              <span className="bg-white/80 px-2.5 py-1 rounded-lg border border-black/20 flex items-center gap-1">
                <Navigation className="w-3 h-3 text-[#3884FF]" />
                {lang === 'zh' ? currentPick.distance : currentPick.distanceEn}
              </span>
            </div>

            <div className="bg-white border-2 border-black rounded-2xl p-3.5 space-y-1 text-xs">
              <div className="font-extrabold text-black flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#FFC01E] fill-[#FFC01E]" />
                <span>{lang === 'zh' ? '必吃招牌推荐：' : 'Signature Dish:'}</span>
              </div>
              <p className="text-gray-700 font-medium">
                {lang === 'zh' ? currentPick.signatureDish : currentPick.signatureDishEn}
              </p>
            </div>
          </div>

          {/* Action Area */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={handleRoll}
              disabled={isRolling}
              className="w-full sm:flex-1 py-3.5 bg-black text-white font-black text-sm rounded-2xl border-2 border-black shadow-[4px_4px_0px_#FFC01E] hover:bg-[#FF5C67] hover:shadow-[4px_4px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isRolling ? 'animate-spin' : ''}`} />
              <span>
                {isRolling
                  ? lang === 'zh' ? '盲盒摇号抽取中...' : 'Deciding...'
                  : lang === 'zh' ? `随机再摇一家 (已抽取 ${rollCount} 次)` : `Spin Again (${rollCount})`}
              </span>
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3.5 bg-white text-black font-black text-sm rounded-2xl border-2 border-black shadow-[3px_3px_0px_#000] hover:bg-gray-100 transition-all cursor-pointer"
            >
              {lang === 'zh' ? '就吃这家了！' : 'Let\'s Go!'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
