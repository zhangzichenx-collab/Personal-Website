export type TabType = 'home' | 'about' | 'articles' | 'videos' | 'products' | 'study-china';

export type Language = 'zh' | 'en' | 'ru';

export interface VibeProductItem {
  id: string;
  itemNumber?: string;
  releaseDate?: string;
  title: string;
  titleZh: string;
  titleRu?: string;
  tagline: string;
  taglineZh: string;
  description: string;
  descriptionZh: string;
  descriptionRu?: string;
  iconType: 'food' | 'health' | 'prompt' | 'noise' | 'coming-soon';
  status: 'active' | 'beta' | 'coming-soon';
  link?: string;
  demoComponent?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  titleZh: string;
  titleRu?: string;
  platform: 'bilibili' | 'youtube';
  duration: string;
  views: string;
  likes: number;
  coverText: string;
  coverTextEn?: string;
  coverTextRu?: string;
  coverBg: string;
  coverImage?: string;
  badge: string;
  isSpecialTitle?: boolean; // blue highlighted title
  externalUrl?: string; // 抖音等平台视频外链，填写后点击卡片直接跳转
  descriptionZh?: string;
  descriptionEn?: string;
  descriptionRu?: string;
  danmakuList?: string[];
  danmakuListEn?: string[];
  danmakuListRu?: string[];
}

export interface StudyInChinaOffer {
  id: string;
  studentName: string;
  studentCountry: string;
  studentFlag: string;
  university: string;
  universityZh: string;
  universityRu?: string;
  universityLogoText: string;
  universityColor: string;
  degree: string;
  degreeZh: string;
  degreeRu?: string;
  major: string;
  majorZh: string;
  majorRu?: string;
  scholarship: string;
  scholarshipZh: string;
  scholarshipRu?: string;
  scholarshipType: 'csc' | 'provincial' | 'university' | 'self-funded';
  year: string;
  admissionNo: string;
  badge: string;
  badgeEn?: string;
  badgeRu?: string;
  imageUrl?: string;
  noticeDetails?: {
    issueDate: string;
    reportingDate: string;
    congratulationsZh: string;
    congratulationsEn: string;
    congratulationsRu?: string;
    facultyZh: string;
    facultyEn: string;
    facultyRu?: string;
    scholarshipCoverageZh: string;
    scholarshipCoverageEn: string;
    scholarshipCoverageRu?: string;
  };
}

export interface ArticleItem {
  id: string;
  title: string;
  titleZh: string;
  titleRu?: string;
  category: string;
  categoryZh: string;
  categoryRu?: string;
  date: string;
  readTime: string;
  readTimeRu?: string;
  excerpt: string;
  excerptZh: string;
  excerptRu?: string;
  illustrationType?: 'swatches' | 'h1-monitor' | 'mobile-analytics' | 'design-tokens' | 'accessibility';
  coverType?:
    | 'avatar-polaroid'
    | 'minimal-blue'
    | 'ocean-island'
    | 'swatches'
    | 'h1-monitor'
    | 'mobile-analytics'
    | 'xianyu-sop'
    | 'gpt-users'
    | 'post-meal'
    | 'earth-online'
    | 'nike-identity'
    | 'costco-trust'
    | 'power-law'
    | 'right-one'
    | 'pop-mart'
    | 'probability'
    | 'ecological-niche'
    | 'spacex-redefine'
    | 'island-trade'
    | 'math-wisdom'
    | 'cooperation'
    | 'attention-leverage'
    | 'island-saving'
    | 'tcm-filter';
  isSpecialTitle?: boolean; // blue highlighted title like #SJTU游离日记#0004
  contentZh: string;
  contentEn: string;
  contentRu?: string;
  likes: number;
  externalUrl?: string; // 公众号文章永久链接，填写后点击卡片在新窗口打开
}
