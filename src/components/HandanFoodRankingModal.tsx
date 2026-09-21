import React, { useEffect, useState } from "react";
import { X, MapPin, Flame, Star, Navigation } from "lucide-react";
import { Language } from "../types";
import { pick } from "../i18n";

interface HandanFoodRankingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

type Category =
  | "all"
  | "breakfast"
  | "snack"
  | "burger"
  | "ricenoodle"
  | "friedpancake"
  | "ramen"
  | "riceplate"
  | "hotpot"
  | "western"
  | "grill"
  | "dessert";

interface Restaurant {
  name: string;
  searchName: string;
  category: Category;
  categoryLabel: string;
  rating: number;
  signatureDish: string;
  tagline: string;
  area: string;
  distance: string;
}

const restaurants: Restaurant[] = [
  {
    name: "好再来砂锅米线",
    searchName: "好再来砂锅米线 邯郸",
    category: "ricenoodle",
    categoryLabel: "米线",
    rating: 4.6,
    signatureDish: "砂锅米线、卤味拼盘",
    tagline: "砂锅老汤 · 米线Q弹",
    area: "丛台区",
    distance: "2.7km",
  },
  {
    name: "刘老师雪花酪(曙光街49号院店)",
    searchName: "刘老师雪花酪 曙光街49号院店 邯郸",
    category: "dessert",
    categoryLabel: "甜品",
    rating: 4.5,
    signatureDish: "雪花酪、红豆冰",
    tagline: "夏日排队王 · 手作冰品",
    area: "丛台区",
    distance: "3.3km",
  },
  {
    name: "老字号煎猪血",
    searchName: "老字号煎猪血 邯郸",
    category: "snack",
    categoryLabel: "小吃",
    rating: 4.5,
    signatureDish: "煎猪血、蒜汁蘸料",
    tagline: "本地早点 · 老邯郸味",
    area: "邯山区",
    distance: "5.5km",
  },
  {
    name: "郭八火烧店(曙光街店)",
    searchName: "郭八火烧店 曙光街店 邯郸",
    category: "snack",
    categoryLabel: "小吃",
    rating: 4.6,
    signatureDish: "郭八火烧、驴肉夹火烧",
    tagline: "非遗传承 · 层层酥脆",
    area: "丛台区",
    distance: "3.3km",
  },
  {
    name: "新发斋羊肉饼",
    searchName: "新发斋羊肉饼 邯郸",
    category: "snack",
    categoryLabel: "小吃",
    rating: 4.5,
    signatureDish: "羊肉饼、羊汤",
    tagline: "清真老字号 · 皮薄馅大",
    area: "邯山区",
    distance: "7.2km",
  },
  {
    name: "米兰西典(连城别苑悦龙庭店)",
    searchName: "米兰西典 连城别苑悦龙庭店 邯郸",
    category: "western",
    categoryLabel: "西餐",
    rating: 4.7,
    signatureDish: "牛排、意面、焗饭",
    tagline: "西餐标杆 · 约会首选",
    area: "丛台区",
    distance: "933m",
  },
  {
    name: "鼎库海鲜姿造(滏东店)",
    searchName: "鼎库海鲜姿造 滏东店 邯郸",
    category: "hotpot",
    categoryLabel: "火锅",
    rating: 4.6,
    signatureDish: "海鲜姿造、刺身、鲍鱼",
    tagline: "滏东高端海鲜 · 鲜度拉满",
    area: "丛台区",
    distance: "1.2km",
  },
  {
    name: "金大叔石锅烤肉(绿化路店)",
    searchName: "金大叔石锅烤肉 绿化路店 邯郸",
    category: "grill",
    categoryLabel: "烤肉",
    rating: 4.7,
    signatureDish: "石锅拌饭、五花肉、牛舌",
    tagline: "韩式烤肉 · 石锅一绝",
    area: "邯山区",
    distance: "5.7km",
  },
  {
    name: "东环南沿村拉面",
    searchName: "东环南沿村拉面 邯郸",
    category: "ramen",
    categoryLabel: "拉面",
    rating: 4.6,
    signatureDish: "兰州拉面、牛肉面",
    tagline: "东环拉面代表 · 汤鲜面筋",
    area: "复兴区",
    distance: "3.1km",
  },
  {
    name: "川人川味木桶盖浇饭(万达店)",
    searchName: "川人川味木桶盖浇饭 万达店 邯郸",
    category: "riceplate",
    categoryLabel: "盖饭",
    rating: 4.6,
    signatureDish: "木桶饭、麻婆豆腐、回锅肉",
    tagline: "万达川味 · 下饭神器",
    area: "丛台区",
    distance: "3.7km",
  },
  {
    name: "老赵炒饼(11:00-14:30)",
    searchName: "老赵炒饼 邯郸",
    category: "friedpancake",
    categoryLabel: "炒饼",
    rating: 4.4,
    signatureDish: "炒饼、蛋花汤",
    tagline: "本地午餐神店 · 11:00-14:30 限时营业",
    area: "丛台区",
    distance: "3.4km",
  },
  {
    name: "狄家食铺",
    searchName: "狄家食铺 邯郸",
    category: "riceplate",
    categoryLabel: "盖饭",
    rating: 4.7,
    signatureDish: "家常菜、炖菜",
    tagline: "邯郸家常味道 · 老狄手作",
    area: "丛台区",
    distance: "1.7km",
  },
  {
    name: "老家味道(青年路店)",
    searchName: "老家味道 青年路店 邯郸",
    category: "breakfast",
    categoryLabel: "早餐",
    rating: 4.7,
    signatureDish: "家常菜、炖菜、小炒",
    tagline: "青年路老牌家常菜 · 邯郸人的食堂",
    area: "丛台区",
    distance: "4.5km",
  },
  {
    name: "肯德基（连城别苑DT店）鸡肉汉堡&蛋挞",
    searchName: "肯德基 连城别苑DT店 邯郸",
    category: "burger",
    categoryLabel: "汉堡",
    rating: 4.5,
    signatureDish: "鸡肉汉堡、蛋挞",
    tagline: "连城别苑DT店 · 标准化快餐",
    area: "丛台区",
    distance: "1.3km",
  },
  {
    name: "小放牛炒菜馆(阳光天鸿广场)",
    searchName: "小放牛炒菜馆 阳光天鸿广场 邯郸",
    category: "riceplate",
    categoryLabel: "盖饭",
    rating: 4.6,
    signatureDish: "家常炒菜、特色小炒",
    tagline: "天鸿广场旁 · 本地炒菜代表",
    area: "丛台区",
    distance: "1.6km",
  },
];

const categoryTabs: { id: Category; label: string; color: string }[] = [
  { id: "all", label: "全部", color: "bg-[#FFC01E]" },
  { id: "breakfast", label: "早餐", color: "bg-[#C7E3FF]" },
  { id: "snack", label: "小吃", color: "bg-[#FFC01E]" },
  { id: "burger", label: "汉堡", color: "bg-[#FF5C67]" },
  { id: "ricenoodle", label: "米线", color: "bg-[#3884FF]" },
  { id: "friedpancake", label: "炒饼", color: "bg-[#C7E3FF]" },
  { id: "ramen", label: "拉面", color: "bg-[#3884FF]" },
  { id: "riceplate", label: "盖饭", color: "bg-[#FFC01E]" },
  { id: "hotpot", label: "火锅", color: "bg-[#FF5C67]" },
  { id: "western", label: "西餐", color: "bg-[#1F2937] text-white" },
  { id: "grill", label: "烤肉", color: "bg-[#FF5C67]" },
  { id: "dessert", label: "甜品", color: "bg-[#FFC01E]" },
];

const categoryLabelI18n: Record<Category, [string, string]> = {
  all: ["All", "Все"],
  breakfast: ["Breakfast", "Завтрак"],
  snack: ["Snacks", "Снэки"],
  burger: ["Burgers", "Бургеры"],
  ricenoodle: ["Rice Noodles", "Рисовая лапша"],
  friedpancake: ["Fried Pancakes", "Жареные лепёшки"],
  ramen: ["Ramen", "Лапша"],
  riceplate: ["Rice Plates", "Рис с начинкой"],
  hotpot: ["Hot Pot", "Хот-пот"],
  western: ["Western", "Западная кухня"],
  grill: ["Grill", "Гриль"],
  dessert: ["Desserts", "Десерты"],
};

export const HandanFoodRankingModal: React.FC<HandanFoodRankingModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  // 每次打开弹窗默认重置为「全部」
  useEffect(() => {
    if (isOpen) {
      setActiveCategory("all");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const toKm = (d: string) => {
    const v = parseFloat(d);
    return d.toLowerCase().endsWith("m") && !d.toLowerCase().endsWith("km")
      ? v / 1000
      : v;
  };
  const filtered = (
    activeCategory === "all"
      ? restaurants
      : restaurants.filter((r) => r.category === activeCategory)
  )
    .slice()
    .sort((a, b) => toKm(a.distance) - toKm(b.distance));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white border-[3px] border-black rounded-3xl shadow-[8px_8px_0px_#000000] max-h-[92vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#FFC01E] border-b-[2.5px] border-black px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000]">
              <Flame className="w-5 h-5 text-[#FF5C67]" />
            </div>
            <div>
              <h3 className="font-black text-lg text-black tracking-tight leading-none">
                {pick(
                  lang,
                  "邯郸宝藏小店（一晨版）",
                  "Handan Hidden Gems (YiChen Picks)",
                  "Скрытые жемчужины Хандана (выбор Ичэня)",
                )}
              </h3>
              <p className="text-[11px] font-bold text-gray-800 mt-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#FF5C67]" />
                {pick(
                  lang,
                  "邯郸市丛台区南城庄园周边 · 实时雷达",
                  "Around Nancheng Manor, Congtai District, Handan · Live radar",
                  "Район Наньчэн, район Цунтай, Хандан · живой радар",
                )}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer shadow-[2px_2px_0px_#000]"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="px-6 py-3 border-b-[2px] border-black bg-white">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1 rounded-full border-2 border-black text-xs font-black transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? `${tab.color} scale-105 shadow-[2px_2px_0px_#000]`
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {pick(
                  lang,
                  tab.label,
                  categoryLabelI18n[tab.id][0],
                  categoryLabelI18n[tab.id][1],
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Body - scrollable */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {filtered.map((r) => (
            <div
              key={r.name}
              className="group bg-gray-50 hover:bg-white border-2 border-black rounded-2xl p-4 flex items-center gap-4 hover:shadow-[4px_4px_0px_#000000] hover:-translate-y-0.5 transition-all"
            >
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-black text-sm sm:text-base text-black truncate">
                    {r.name}
                  </h4>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-1 text-[10px] font-bold text-gray-700">
                  <span className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 text-[#FFC01E] fill-[#FFC01E]" />
                    {r.rating}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-0.5">
                    <Navigation className="w-3 h-3 text-[#3884FF]" />
                    {r.distance}
                  </span>
                </div>
              </div>
              {/* Navigate Button - Right Aligned */}
              <a
                href={`https://uri.amap.com/search?keyword=${encodeURIComponent(r.searchName)}&city=${encodeURIComponent("邯郸")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-shrink-0 px-3 py-2 bg-black text-white rounded-xl border-2 border-black flex items-center gap-1.5 hover:bg-[#FF5C67] hover:shadow-[3px_3px_0px_#000000] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all font-black text-[11px]"
              >
                <Navigation className="w-3.5 h-3.5" />
                {pick(lang, "导航", "Navigate", "Маршрут")}
              </a>
            </div>
          ))}

          {/* Footer Note */}
          <div className="pt-3 border-t-2 border-dashed border-gray-300 text-center mt-4">
            <p className="text-[11px] text-gray-500 font-medium">
              {pick(
                lang,
                "📡 持续收录中 · 数据来自本地吃货投票 + 实地踩点",
                "📡 Continuously curated by local foodies",
                "📡 Список пополняется: голоса местных гурманов и личные проверки",
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
