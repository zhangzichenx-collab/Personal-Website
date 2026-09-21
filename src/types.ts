export type TabType = 'home' | 'about' | 'articles' | 'videos' | 'products' | 'study-china';

export type Language = 'zh' | 'en';

export interface VibeProductItem {
  id: string;
  itemNumber?: string;
  releaseDate?: string;
  title: string;
  titleZh: string;
  tagline: string;
  taglineZh: string;
  description: string;
  descriptionZh: string;
  iconType: 'food' | 'prompt' | 'noise' | 'coming-soon';
  status: 'active' | 'beta' | 'coming-soon';
  link?: string;
  demoComponent?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  titleZh: string;
  platform: 'bilibili' | 'youtube';
  duration: string;
  views: string;
  likes: number;
  coverText: string;
  coverBg: string;
  coverImage?: string;
  badge: string;
  isSpecialTitle?: boolean; // blue highlighted title
  descriptionZh?: string;
  descriptionEn?: string;
  danmakuList?: string[];
}

export interface StudyInChinaOffer {
  id: string;
  studentName: string;
  studentCountry: string;
  studentFlag: string;
  university: string;
  universityZh: string;
  universityLogoText: string;
  universityColor: string;
  degree: string;
  degreeZh: string;
  major: string;
  majorZh: string;
  scholarship: string;
  scholarshipZh: string;
  scholarshipType: 'csc' | 'provincial' | 'university';
  year: string;
  admissionNo: string;
  badge: string;
  noticeDetails?: {
    issueDate: string;
    reportingDate: string;
    congratulationsZh: string;
    congratulationsEn: string;
    facultyZh: string;
    facultyEn: string;
    scholarshipCoverageZh: string;
    scholarshipCoverageEn: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  iconType: 'web' | 'uiux' | 'product';
}

export interface ProjectItem {
  id: string;
  title: string;
  titleZh: string;
  client: string;
  category: 'web' | 'uiux' | 'mobile' | 'branding' | 'saas' | 'product';
  categoryLabel: string;
  categoryLabelZh: string;
  description: string;
  descriptionZh: string;
  bgColor: string;
  illustrationType: 'studio-laptop' | 'ecommerce-mobile' | 'fintech-dashboard' | 'fitness-app' | 'brand-system' | 'saas-analytics';
  tags: string[];
  metrics?: { label: string; value: string }[];
  caseStudy?: {
    overview: string;
    overviewZh: string;
    challenge: string;
    challengeZh: string;
    solution: string;
    solutionZh: string;
    colors: string[];
    fonts: string[];
    timeline: string;
    role: string;
    roleZh: string;
  };
}

export interface ArticleItem {
  id: string;
  title: string;
  titleZh: string;
  category: string;
  categoryZh: string;
  date: string;
  readTime: string;
  excerpt: string;
  excerptZh: string;
  illustrationType?: 'swatches' | 'h1-monitor' | 'mobile-analytics' | 'design-tokens' | 'accessibility';
  coverType?: 'avatar-polaroid' | 'minimal-blue' | 'ocean-island' | 'swatches' | 'h1-monitor' | 'mobile-analytics';
  isSpecialTitle?: boolean; // blue highlighted title like #SJTU游离日记#0004
  contentZh: string;
  contentEn: string;
  likes: number;
}

export interface ExperienceItem {
  id: string;
  period: string;
  periodZh: string;
  role: string;
  roleZh: string;
  company: string;
  companyZh: string;
  description: string;
  descriptionZh: string;
  iconBg: string;
  iconType: 'refresh' | 'blocks' | 'code' | 'layers';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  quoteZh: string;
  author: string;
  authorZh: string;
  role: string;
  roleZh: string;
  company: string;
  avatarBg: string;
}
