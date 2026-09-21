import {
  ServiceItem,
  ProjectItem,
  ArticleItem,
  ExperienceItem,
  TestimonialItem,
  VibeProductItem,
  VideoItem,
  StudyInChinaOffer,
} from '../types';

export const vibeProductsData: VibeProductItem[] = [
  {
    id: 'what-to-eat',
    itemNumber: '# 001',
    releaseDate: 'RELEASED ON 2026.01.17',
    title: 'What to eat later?',
    titleZh: '等会儿吃啥？',
    tagline: 'LBS Random Blindbox Food Decider',
    taglineZh: '治愈选择困难症的美食盲盒',
    description: 'Based on your real-time LBS coordinates to automatically scout nearby dining spots and draw a single blind-box restaurant pick.',
    descriptionZh: '基于 LBS 地理位置自动获取周边餐厅并随机抽取一家「盲盒」餐厅。',
    iconType: 'food',
    status: 'active',
  },
  {
    id: 'prompt-tone',
    itemNumber: '# 002',
    releaseDate: 'RELEASED ON 2026.02.03',
    title: 'Prompt Tone Crafter',
    titleZh: 'Vibe 提示词调谐器',
    tagline: 'Interactive LLM Persona Tuner',
    taglineZh: '大模型人设与温湿度微调',
    description: 'A visual slider board tweaking system prompts for vibe coders to calibrate witty, sarcastic, or zen programming assistants.',
    descriptionZh: '专为 Vibe Coding 设计的可视化提示词语气调节台，一键调教你的专属 AI 编程搭子。',
    iconType: 'prompt',
    status: 'active',
  },
  {
    id: 'lofi-noise',
    itemNumber: '# 003',
    releaseDate: 'RELEASED ON 2026.02.19',
    title: 'Late Night Lo-Fi Synthesizer',
    titleZh: '深夜写代码白噪音机',
    tagline: 'Interactive Ambient Beats & Rain',
    taglineZh: '治愈深夜敲代码的焦虑',
    description: 'A minimal browser synth generating mechanical keyboard clicks, gentle rainfall, and mellow lo-fi chords in real time.',
    descriptionZh: '模拟青轴敲击音、窗边淅沥雨声与复古模拟合成器，一键开启沉浸式深夜编程结界。',
    iconType: 'noise',
    status: 'active',
  },
  {
    id: 'mind-cards',
    itemNumber: '# 004',
    releaseDate: 'RELEASED ON 2026.03.01',
    title: 'Bilateral Brain Sparks',
    titleZh: '左右脑互搏灵感卡片',
    tagline: 'Absurd Thought Generator',
    taglineZh: '打破思维定势的灵感抽屉',
    description: 'Random daily thought experiments exploring science fiction, roadside noodles, and human absurdities to spark your next vibe code.',
    descriptionZh: '从脱水三体人到路边麻辣香锅，随机抽取荒谬却深刻的思维盲盒，激发你的下一行创意。',
    iconType: 'prompt',
    status: 'active',
  },
];

export const videosData: VideoItem[] = [
  {
    id: 'video-1',
    title: 'Gosh, this world is getting more and more fascinating!',
    titleZh: '天啊这个世界真的越来越有趣了！',
    platform: 'bilibili',
    duration: '03:26',
    views: '1.5万',
    likes: 477,
    coverText: '从小龙虾到三体人',
    coverBg: '#F3E8FF',
    badge: 'BILIBILI',
    descriptionZh: '从路边麻辣小龙虾的生物神经节构造，聊到大刘笔下脱水的三体人，人类对未知的好奇心永远是科技与设计前进的第一动力。',
    descriptionEn: 'A fun late-night monologue on cosmic curiosities and sci-fi tropes, connecting roadside crawfish to the Trisolarans.',
    danmakuList: [
      '从小龙虾过来的哈哈哈！',
      '脑洞真的太大了！',
      '三体人看了连夜脱水',
      '三连了UP主！',
      '哈哈哈哈神展开',
    ],
  },
  {
    id: 'video-2',
    title: 'Fans watched me gain 20 pounds over the past year',
    titleZh: '粉丝眼睁睁看着我在过去一年涨了20斤',
    platform: 'bilibili',
    duration: '01:52',
    views: '2.8万',
    likes: 1205,
    coverText: '分手是我减肥的动力',
    coverBg: '#FEF3C7',
    badge: 'BILIBILI',
    descriptionZh: '坦白局：熬夜写代码、狂吃碳水与快乐肥宅水，被粉丝全程云见证的长胖实录。以及痛定思痛后如何用番茄钟与生酮食谱自救！',
    descriptionEn: 'A candid, self-deprecating vlog about the realities of late-night tech stress eating and bouncing back with humor.',
    danmakuList: [
      '哈哈哈哈真实了',
      '原来大家都一样！',
      '抱抱UP主，健康最重要',
      '高燃减肥打卡！',
      '好可爱啊哈哈哈',
    ],
  },
  {
    id: 'video-3',
    title: 'Spring Festival is more tiring than work, random musings',
    titleZh: '过年比上班累，梦到哪句说哪句吧',
    platform: 'bilibili',
    duration: '02:49',
    views: '1.9万',
    likes: 893,
    coverText: '大年初一的迷思',
    coverBg: '#FFE4E6',
    badge: 'BILIBILI',
    isSpecialTitle: true,
    descriptionZh: '大年初一清晨的即兴碎碎念：亲戚的催婚灵魂拷问、走亲访友的社交电量耗尽，以及只想安静缩在房间里敲代码的年轻人们。',
    descriptionEn: 'Vlog reflections on traditional family festivities vs introverted quiet time during Lunar New Year celebrations.',
    danmakuList: [
      '太懂了！我的社交电量也见底了',
      '一模一样的初一体验！',
      '大年初一居然还在更新！',
      '祝UP主新年快乐！',
      '新年暴富暴瘦！',
    ],
  },
  {
    id: 'video-4',
    title: 'Stories of Ximen and Three Strangers',
    titleZh: '西门和三个陌生男子的小故事',
    platform: 'bilibili',
    duration: '03:04',
    views: '3.6万',
    likes: 2763,
    coverText: '缘，妙不可言',
    coverBg: '#FFE4E6',
    badge: 'BILIBILI',
    descriptionZh: '分享旅途中碰到的三段奇妙际遇，原来人与人之间的连接可以这么纯粹又荒谬，缘分有时候真的妙不可言！',
    descriptionEn: 'Three delightfully absurd encounters with strangers on the road. Serendipity is truly wonderous!',
    danmakuList: [
      '前排蹲西门的新故事！',
      '哈哈哈哈太抓马了吧',
      '颈枕好可爱',
      '生活比剧本还要精彩',
      '哈哈哈哈妙不可言！',
    ],
  },
  {
    id: 'video-5',
    title: 'Turns out my symptoms started in high school',
    titleZh: '原来我的症状从中学就已经开始了',
    platform: 'bilibili',
    duration: '03:22',
    views: '10.8万',
    likes: 4164,
    coverText: '我是一个好学生',
    coverBg: '#FCE7F3',
    badge: 'BILIBILI',
    descriptionZh: '从小被贴上乖乖好学生标签的我，内心的叛逆与多巴胺狂热到底从什么时候生根发芽？复盘我从小到大的精神内耗与觉醒之路。',
    descriptionEn: 'Tracing back how a "model student" ended up taking unorthodox life routes. High school memories and inner voice.',
    danmakuList: [
      '10.8万播放！实至名归',
      '这就是我本人吧呜呜呜',
      '好真实的学生时代心路历程',
      '格子衬衫好评！',
      '西门太敢说了！',
    ],
  },
  {
    id: 'video-6',
    title: 'What does it feel like to have a boss who kills with over-praise?',
    titleZh: '有一个捧杀式领导是什么样的体验？',
    platform: 'bilibili',
    duration: '02:27',
    views: '8554',
    likes: 421,
    coverText: '真 棒',
    coverBg: '#ECFCCB',
    badge: 'BILIBILI',
    descriptionZh: '职场生存观察：每天把“你最靠谱了”、“这事非你莫属”挂在嘴边的捧杀式领导，背后暗藏的打工人血泪与防坑避雷小技巧。',
    descriptionEn: 'Workplace psychology: navigating overly lavish praises from managers and how to stay grounded.',
    danmakuList: [
      '真 棒！哈哈哈哈哈',
      '天啊一模一样的经历！',
      '头上的粉色发夹亮了',
      '字字珠玑，学到了防坑',
      '打工人的精神状态领先五十年',
    ],
  },
  {
    id: 'video-7',
    title: 'Zero-base to Full-stack Website with Vibe Coding',
    titleZh: '0基础小白用自然语言写出个人全栈网站！Vibe Coding 真香',
    platform: 'bilibili',
    duration: '04:15',
    views: '2.4万',
    likes: 1890,
    coverText: 'AI 编程实战',
    coverBg: '#E0F2FE',
    badge: 'BILIBILI',
    descriptionZh: '不用啃枯燥的前端框架，深夜一边听 lo-fi 音乐一边用纯中文自然语言指挥 AI，手把手带你上线一个酷炫的新野兽派个人网站！',
    descriptionEn: 'How to build fullstack web apps using pure natural language prompts and AI agents.',
    danmakuList: [
      '我也在用这种方式写代码！',
      '这就是未来的软件开发范式吗',
      '求 prompt 教程！',
      '西门太强了',
    ],
  },
  {
    id: 'video-8',
    title: 'Cursor + Claude + Gemini, My New Product Manager Workflow',
    titleZh: 'Cursor + Claude + Gemini，我的产品经理AI新工作流',
    platform: 'bilibili',
    duration: '03:48',
    views: '1.7万',
    likes: 1320,
    coverText: 'PM 的 AI 武器库',
    coverBg: '#FEF9C3',
    badge: 'BILIBILI',
    descriptionZh: '作为 995 的 toB 软件产品经理，我是如何用最新大模型和工具把 PRD 编写、原型生成和数据分析提效 300% 的实操分享！',
    descriptionEn: 'Inside the daily AI-augmented toolchain of a modern toB enterprise Product Manager.',
    danmakuList: [
      '同行来取经了！',
      '干货满满',
      '吹爆这个工作流',
      '码住回头慢慢学',
    ],
  },
];

export const studyInChinaOffersData: StudyInChinaOffer[] = [
  {
    id: 'sjtu-cs-sarah',
    studentName: 'Sarah Tremblay',
    studentCountry: 'Canada',
    studentFlag: '🇨🇦',
    university: 'Shanghai Jiao Tong University',
    universityZh: '上海交通大学',
    universityLogoText: 'SJTU',
    universityColor: '#C41230',
    degree: 'Master of Engineering',
    degreeZh: '工学硕士研究生（全日制）',
    major: 'Computer Science & Software Systems',
    majorZh: '计算机科学与技术 / 电子信息与电气工程学院',
    scholarship: 'Chinese Government Scholarship (CSC Type A - Full)',
    scholarshipZh: '中国政府奖学金（CSC全额奖学金 · 免学费/免住宿/月生活补贴）',
    scholarshipType: 'csc',
    year: '2024',
    admissionNo: 'SJTU-2024-INTL-0891',
    badge: 'C9 Top 3',
    noticeDetails: {
      issueDate: 'July 15, 2024',
      reportingDate: 'September 2-3, 2024',
      congratulationsZh: '经上海交通大学留学生招生委员会严格审核评定，决定正式录取你为我校计算机科学与技术专业硕士研究生，特此祝贺！',
      congratulationsEn: 'Having fulfilled all academic requirements and entrance appraisals, you are officially admitted to Shanghai Jiao Tong University as a Master candidate.',
      facultyZh: '电子信息与电气工程学院（SEIEE）',
      facultyEn: 'School of Electronic Information and Electrical Engineering',
      scholarshipCoverageZh: '免除全额学费、校内国际留学生公寓全额住宿补贴、并按月发放综合生活助学金。',
      scholarshipCoverageEn: '100% Tuition waiver, complimentary campus dorm accommodation, and monthly stipend allowance included.',
    },
  },
  {
    id: 'tsinghua-ai-alex',
    studentName: 'Alexandre Moreau',
    studentCountry: 'France',
    studentFlag: '🇫🇷',
    university: 'Tsinghua University',
    universityZh: '清华大学',
    universityLogoText: 'THU',
    universityColor: '#660874',
    degree: 'Master of Science',
    degreeZh: '理学硕士研究生',
    major: 'Interdisciplinary Information Sciences (IIIS)',
    majorZh: '交叉信息研究院 / 国际智能科学项目',
    scholarship: 'Tsinghua International Outstanding Scholar Full Fellowship',
    scholarshipZh: '清华大学卓越外国留学生全额特等奖学金',
    scholarshipType: 'university',
    year: '2024',
    admissionNo: 'THU-2024-GRAD-0312',
    badge: 'QS World #14',
    noticeDetails: {
      issueDate: 'June 28, 2024',
      reportingDate: 'August 28, 2024',
      congratulationsZh: '恭喜你！自强不息，厚德载物。清华大学正式向你发放研究生录取通知书，期待你在水木清华开启卓越研究之旅。',
      congratulationsEn: 'Congratulations! In recognition of your outstanding academic performance, you are formally offered admission to Tsinghua University.',
      facultyZh: '交叉信息研究院（姚班实验室）',
      facultyEn: 'Institute for Interdisciplinary Information Sciences',
      scholarshipCoverageZh: '全额免除在校学费与综合保险费，由清华国际卓越研究生科研基金全额资助。',
      scholarshipCoverageEn: 'Full tuition exemption and comprehensive medical coverage sponsored by Tsinghua Research Fellowship.',
    },
  },
  {
    id: 'pku-yenching-elena',
    studentName: 'Elena Rostova',
    studentCountry: 'Germany',
    studentFlag: '🇩🇪',
    university: 'Peking University',
    universityZh: '北京大学',
    universityLogoText: 'PKU',
    universityColor: '#8C0000',
    degree: 'Master of China Studies',
    degreeZh: '中国学硕士研究生（全英语授课）',
    major: 'Yenching Academy International Relations',
    majorZh: '燕京学堂 / 全球中国治理与国际关系',
    scholarship: 'Yenching Academy Full Fellowship (Dean’s Honor)',
    scholarshipZh: '北京大学燕京学堂院长全额学者奖学金（顶级荣誉）',
    scholarshipType: 'university',
    year: '2024',
    admissionNo: 'PKU-2024-YCA-0145',
    badge: 'QS World #17',
    noticeDetails: {
      issueDate: 'July 8, 2024',
      reportingDate: 'September 1, 2024',
      congratulationsZh: '未名湖畔好读书，博雅塔下结知己。北京大学决定录取你为燕京学堂全额资助国际学者，欢迎来到燕园！',
      congratulationsEn: 'Welcome to the historic Yenching grounds at Peking University as an honored graduate fellow.',
      facultyZh: '北京大学燕京学堂',
      facultyEn: 'Yenching Academy of Peking University',
      scholarshipCoverageZh: '免除全额培养学费、燕园单人间留学生公寓、往返国际机票及高额学术津贴。',
      scholarshipCoverageEn: 'Covers full tuition, single room dormitory, roundtrip travel stipend, and academic field study grant.',
    },
  },
  {
    id: 'fudan-biz-park',
    studentName: 'Park Min-Ji',
    studentCountry: 'South Korea',
    studentFlag: '🇰🇷',
    university: 'Fudan University',
    universityZh: '复旦大学',
    universityLogoText: 'FDU',
    universityColor: '#002C6C',
    degree: 'Bachelor of Economics',
    degreeZh: '经济学全日制学士本科',
    major: 'International Business & Finance',
    majorZh: '管理学院 / 国际商务与金融学',
    scholarship: 'Shanghai Municipal Government Scholarship (Class A)',
    scholarshipZh: '上海市外国留学生政府全额奖学金（A类全奖）',
    scholarshipType: 'provincial',
    year: '2024',
    admissionNo: 'FD-2024-ADM-1120',
    badge: 'Shanghai Top 2',
    noticeDetails: {
      issueDate: 'July 18, 2024',
      reportingDate: 'September 5, 2024',
      congratulationsZh: '博学而笃志，切问而近思。复旦大学决定正式录取你为我校外国留学生本科生，期待你在上海江湾光华楼绽放光芒。',
      congratulationsEn: 'Welcome to Fudan University. You have been chosen for the undergraduate degree program in international economics.',
      facultyZh: '复旦大学管理学院',
      facultyEn: 'School of Management, Fudan University',
      scholarshipCoverageZh: '由上海市政府专项基金全额免除四年本科阶段学费，并享受基本医疗保险待遇。',
      scholarshipCoverageEn: 'Four-year comprehensive tuition exemption sponsored by the Shanghai Municipal Government.',
    },
  },
  {
    id: 'zju-eng-david',
    studentName: 'David K. Chen',
    studentCountry: 'United States',
    studentFlag: '🇺🇸',
    university: 'Zhejiang University',
    universityZh: '浙江大学',
    universityLogoText: 'ZJU',
    universityColor: '#003A70',
    degree: 'Master of Engineering',
    degreeZh: '工程硕士研究生',
    major: 'Artificial Intelligence & Robotics',
    majorZh: '计算机科学与技术学院 / 机器人智能感知',
    scholarship: 'Chinese Government Scholarship (CSC Type B)',
    scholarshipZh: '中国政府高水平研究生全额奖学金（CSC全奖）',
    scholarshipType: 'csc',
    year: '2024',
    admissionNo: 'ZJU-2024-CSC-0588',
    badge: 'C9 League',
    noticeDetails: {
      issueDate: 'July 22, 2024',
      reportingDate: 'September 4, 2024',
      congratulationsZh: '求是创新，大不自多。浙江大学热烈祝贺你被录取为我校工程硕士研究生，共赴启真湖畔探索科技前沿！',
      congratulationsEn: 'Zhejiang University proudly offers you admission to our graduate engineering program.',
      facultyZh: '浙江大学计算机科学与技术学院',
      facultyEn: 'College of Computer Science and Technology',
      scholarshipCoverageZh: '免全额学费、提供浙大紫金港校区留学生公寓、按月发放国家研究生生活费。',
      scholarshipCoverageEn: 'Covers full tuition, campus housing at Zijingang, and official CSC monthly stipend.',
    },
  },
  {
    id: 'nju-edu-sofia',
    studentName: 'Sofia Bianchi',
    studentCountry: 'Italy',
    studentFlag: '🇮🇹',
    university: 'Nanjing University',
    universityZh: '南京大学',
    universityLogoText: 'NJU',
    universityColor: '#581845',
    degree: 'Master of Arts (MTCSOL)',
    degreeZh: '国际中文教育硕士研究生',
    major: 'International Chinese Language Education',
    majorZh: '海外教育学院 / 跨文化语言与教育学',
    scholarship: 'International Chinese Language Teachers Full Scholarship',
    scholarshipZh: '教育部国际中文教师全额奖学金（含学杂费与生活费）',
    scholarshipType: 'csc',
    year: '2024',
    admissionNo: 'NJU-2024-CIS-0294',
    badge: 'C9 Elite',
    noticeDetails: {
      issueDate: 'July 12, 2024',
      reportingDate: 'September 6, 2024',
      congratulationsZh: '诚朴雄伟，励学敦行。南京大学热烈欢迎你成为仙林校区的新成员，祝愿你在金陵六朝古都收获丰硕学识！',
      congratulationsEn: 'Congratulations on your admission to the Master of Arts program at Nanjing University.',
      facultyZh: '海外教育学院',
      facultyEn: 'Institute for International Students',
      scholarshipCoverageZh: '免除全额学费及住宿费，按国家标准提供全额生活补贴与外籍人员综合保障。',
      scholarshipCoverageEn: 'Full tuition, free residence hall accommodation, and living subsidy included.',
    },
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Web design',
    titleZh: '网页设计',
    description: 'Lacus adipiscing lectus convallis purus aliquet cursus magnaol dolori montes augue donec cras.',
    descriptionZh: '精通响应式布局与极简交互架构，为现代品牌打造兼具视觉冲击力与转化率的网站体验。',
    iconType: 'web',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX design',
    titleZh: 'UI/UX 交互设计',
    description: 'Arcu venenatis sit nullam pellentesq varius urna non sed aliquam colemir imperdiet amet imperdiet.',
    descriptionZh: '以用户为中心进行原型构思、交互流转与体验调优，交付逻辑严谨、直观流畅的数字化产品。',
    iconType: 'uiux',
  },
  {
    id: 'product-design',
    title: 'Product design',
    titleZh: '全流程产品设计',
    description: 'Arcu venenatis sit nullam pellentesq varius urna non sed aliquam colemir imperdiet amet imperdiet.',
    descriptionZh: '跨越从概念雏形、设计系统规范到多端落地的完整闭环，赋能业务增长与品牌心智建立。',
    iconType: 'product',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: 'Jan 2023 - Present',
    periodZh: '2023年1月 - 至今',
    role: 'Mobile Product Designer',
    roleZh: '高级移动端产品设计师',
    company: 'NeoCraft Labs',
    companyZh: 'NeoCraft Labs 创新实验室',
    description: 'Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.',
    descriptionZh: '主导下一代跨平台金融与协同工具的核心交互重构，重塑组件库标准，提升整体团队产出效率达 40%。',
    iconBg: '#3884FF',
    iconType: 'refresh',
  },
  {
    id: 'exp-2',
    period: 'Jan 2021 - Dec 2022',
    periodZh: '2021年1月 - 2022年12月',
    role: 'VP of Design',
    roleZh: '设计副总裁 / 设计总监',
    company: 'Papercraft Interactive',
    companyZh: 'Papercraft 互动创意工作室',
    description: 'Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.',
    descriptionZh: '带领 18 人设计研发团队，交付超过 30 个全球知名品牌的数字体验转型与品牌重塑项目。',
    iconBg: '#00D1B2',
    iconType: 'blocks',
  },
  {
    id: 'exp-3',
    period: 'Jun 2018 - Dec 2020',
    periodZh: '2018年6月 - 2020年12月',
    role: 'Senior UI/UX Designer',
    roleZh: '资深 UI/UX 设计师',
    company: 'HyperStudio NY',
    companyZh: '纽约 HyperStudio 联合创研',
    description: 'In ultricies viverra sed at hendrerit drogon nunc scelerisque nisl pellentesque et dignissim at aenean tempor.',
    descriptionZh: '深度参与 SaaS 管理平台与复杂数据看板的设计架构，打造高度可扩展的开源 Design Token 体系。',
    iconBg: '#FF5C67',
    iconType: 'layers',
  },
  {
    id: 'exp-4',
    period: 'Aug 2015 - May 2018',
    periodZh: '2015年8月 - 2018年5月',
    role: 'Visual & Web Designer',
    roleZh: '视觉与前端体验设计师',
    company: 'Brooklyn Design Guild',
    companyZh: '布鲁克林设计行会',
    description: 'Egestas gravida sed in purus enim molestie gravida imperdiet integer varius pellentesque arcu ornare.',
    descriptionZh: '负责初创企业官网设计、品牌插画绘制及前端原型构建，荣获多项 Awwwards 与 CSSDA 荣誉提名为最佳交互。',
    iconBg: '#FFC01E',
    iconType: 'code',
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'studio-user-research',
    title: 'Studio user research and analysis',
    titleZh: 'Studio 创意工作台：用户调研与全景分析系统',
    client: 'Studio Inc.',
    category: 'uiux',
    categoryLabel: 'UI/UX Design',
    categoryLabelZh: '界面与交互设计',
    description: 'In ultricies viverra sed at hendrerit drogon nunc scelerisque nisl pellentesque et dignissim at aenean tempor adipiscing eget mi diam at tempus.',
    descriptionZh: '针对百万级数字创作者打造的多维视频与设计资产管理平台，通过直观的节点式交互与模块化排版大幅缩减工作耗时。',
    bgColor: '#5B4EFF',
    illustrationType: 'studio-laptop',
    tags: ['UI/UX Design', 'User Research', 'Design System', 'Desktop App'],
    metrics: [
      { label: 'Task Efficiency', value: '+38%' },
      { label: 'Active Users', value: '450k+' },
      { label: 'NPS Score', value: '74' },
    ],
    caseStudy: {
      overview: 'Studio is an all-in-one creative suite designed for modern creators, combining timeline video curation, asset grouping, and rapid prototyping in a unified window.',
      overviewZh: 'Studio 是一款面向现代创作者的一体化数字创意工具，融合了流媒体预览、时间线剪辑及设计资产云端编排。',
      challenge: 'Users previously had to switch between 4 different fragmented applications, resulting in high cognitive load and frequent asset desynchronization.',
      challengeZh: '早期创作者往往需要在 4 款互不兼容的软件间来回切换，认知负荷大且素材极易产生版本错位。',
      solution: 'Constructed an intuitive multi-pane workspace with neo-brutalist visual accents, custom drag-and-drop mechanics, and instant cloud sync.',
      solutionZh: '构建了清晰利落的多面板响应式工作台，融合高对比度微交互与无阻碍拖拽流转，提升整体操作流畅感。',
      colors: ['#5B4EFF', '#FFC01E', '#111111', '#FFFFFF'],
      fonts: ['Plus Jakarta Sans', 'JetBrains Mono'],
      timeline: '4 Months (Q1-Q2 2024)',
      role: 'Lead Product Designer',
      roleZh: '主导产品交互设计师',
    },
  },
  {
    id: 'paycraft-fintech',
    title: 'PayCraft Next-Gen Mobile Banking',
    titleZh: 'PayCraft 新一代年轻化移动金融钱包',
    client: 'PayCraft Global',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    categoryLabelZh: '移动应用端',
    description: 'Redefining personal financial management for digital nomads with playful micro-interactions and transparent real-time spending insights.',
    descriptionZh: '为全球数字游民定制的现代极简账单应用，融合鲜明色彩指引与即时转账微动画，告别沉闷传统的银行体验。',
    bgColor: '#3884FF',
    illustrationType: 'ecommerce-mobile',
    tags: ['Fintech', 'iOS & Android', 'Micro-interactions'],
    metrics: [
      { label: 'Sign-up Conversion', value: '+62%' },
      { label: 'Rating', value: '4.9 ★' },
      { label: 'Retention (D30)', value: '54%' },
    ],
    caseStudy: {
      overview: 'A youth-oriented mobile financial companion app that gamifies savings goals and provides card control at a glance.',
      overviewZh: '以年轻化视觉为导向的移动钱包，将储蓄理财转化为直观有趣的卡片成就，支持即刻风控管理。',
      challenge: 'Traditional banking apps were cluttered with legal disclaimers and tiny illegible tables, causing high abandonment rates.',
      challengeZh: '传统银行业务往往布满密密麻麻的条款表格，新手注册流失率高达 45%。',
      solution: 'Introduced bold, friendly cards with card-swiping gestures, instant transaction feeds, and biometric security.',
      solutionZh: '采用大圆角卡片、生动的插画式状态反馈以及流畅的手势滑动体验，显著降低操作门槛。',
      colors: ['#3884FF', '#FF5C67', '#0A0A0A', '#F7F7F8'],
      fonts: ['Plus Jakarta Sans', 'Inter'],
      timeline: '3 Months (2024)',
      role: 'Mobile UX Architect',
      roleZh: '移动端架构师',
    },
  },
  {
    id: 'pulse-health-tracker',
    title: 'Pulse Wearable Health Ecosystem',
    titleZh: 'Pulse 智能穿戴与健康数据仪表盘',
    client: 'Pulse Biosystems',
    category: 'product',
    categoryLabel: 'Product Design',
    categoryLabelZh: '智能硬件与穿戴',
    description: 'A synchronized smartwatch interface and mobile health companion designed for endurance athletes and medical tracking.',
    descriptionZh: '跨手表端与手机端的高频运动体征监测系统，以醒目高可读性的仪表盘实时呈现心率波动与恢复状态。',
    bgColor: '#10B981',
    illustrationType: 'fitness-app',
    tags: ['WearOS', 'Health Tech', 'Data Viz'],
    metrics: [
      { label: 'Glance Time', value: '0.8s' },
      { label: 'Daily Active', value: '1.2M' },
      { label: 'Data Accuracy', value: '99.4%' },
    ],
    caseStudy: {
      overview: 'Real-time physiological metric tracking made legible under direct sunlight with high-contrast neo-brutalist dials.',
      overviewZh: '专为强光户外运动优化的体征监视界面，通过高反差色块与即时震动反馈提供无障碍读数。',
      challenge: 'Wearable screens are constrained in space; displaying 6 vital metrics simultaneously usually causes illegibility.',
      challengeZh: '腕上显示空间严苛受限，如何在奔跑颠簸中单手一瞥即读出 6 项体征是巨大挑战。',
      solution: 'Engineered high-contrast color zones with thick boundary separation and glanceable circular progress rings.',
      solutionZh: '将屏幕严格划分为鲜明色块层级，以粗黑勾边隔绝眩光干扰，实现 0.8 秒极速眼动捕捉。',
      colors: ['#10B981', '#FFC01E', '#111111', '#E5E7EB'],
      fonts: ['Plus Jakarta Sans'],
      timeline: '5 Months (2023)',
      role: 'Senior Hardware UI Specialist',
      roleZh: '智能设备 UI 专家',
    },
  },
  {
    id: 'hyperbrand-identity',
    title: 'HyperBrand Multi-Platform Design System',
    titleZh: 'HyperBrand 跨端设计规范与开源组件库',
    client: 'OpenSource Labs',
    category: 'web',
    categoryLabel: 'Design System',
    categoryLabelZh: '设计系统与规范',
    description: 'Comprehensive token-driven component architecture adopted by over 200 frontend engineering teams worldwide.',
    descriptionZh: '基于原子化 Token 与极简插画风格打造的企业级设计规范，支持 Figma 变量到 React/Tailwind 的一键同步。',
    bgColor: '#FF5C67',
    illustrationType: 'brand-system',
    tags: ['Design System', 'Tokens', 'Figma', 'React'],
    metrics: [
      { label: 'GitHub Stars', value: '8.4k' },
      { label: 'Adoption Rate', value: '89%' },
      { label: 'Dev Velocity', value: '+50%' },
    ],
    caseStudy: {
      overview: 'A playful yet strictly typed UI component system providing accessibility, dark/light parity, and consistent brand identity.',
      overviewZh: '兼备鲜明风格与严谨工程标准的前端设计库，内置完备的无障碍键盘导航与暗黑/明亮双模式适配。',
      challenge: 'Engineering and design teams were maintaining discordant style constants, resulting in visual drift across 12 products.',
      challengeZh: '12 个不同业务线各自定义了互不兼容的 CSS 变量，导致用户在不同子产品间跳转时视觉断层严重。',
      solution: 'Created a single source of truth connecting Figma Variables via automated CI/CD directly into NPM component packages.',
      solutionZh: '打通 Figma 变量至代码仓的自动化同步流水线，实现设计资产秒级验证与跨端无缝分发。',
      colors: ['#FF5C67', '#3884FF', '#FFC01E', '#111111'],
      fonts: ['Plus Jakarta Sans', 'Fira Code'],
      timeline: '6 Months (2023)',
      role: 'Design Systems Architect',
      roleZh: '设计系统架构师',
    },
  },
  {
    id: 'matrix-saas-dashboard',
    title: 'Matrix AI Cloud Orchestration Dashboard',
    titleZh: 'Matrix AI 智能算力调度管理中台',
    client: 'Matrix Cloud Computing',
    category: 'saas',
    categoryLabel: 'SaaS Platform',
    categoryLabelZh: 'B端中台与看板',
    description: 'Enterprise telemetry platform visualizing GPU clusters, distributed pipelines, and model inference latency in real time.',
    descriptionZh: '为大型数据工程师团队设计的集群算力监视中台，采用模块化卡片布局与即时告警流水线。',
    bgColor: '#FFC01E',
    illustrationType: 'saas-analytics',
    tags: ['B2B SaaS', 'Analytics', 'Complex Data'],
    metrics: [
      { label: 'Telemetry Latency', value: '<50ms' },
      { label: 'Incident TTR', value: '-65%' },
      { label: 'Cluster Capacity', value: '10k+ nodes' },
    ],
    caseStudy: {
      overview: 'Simplifying massive distributed infrastructure into actionable, beautifully organized dashboard widgets.',
      overviewZh: '将复杂庞大的机房集群拓扑结构提炼为模块清晰、警报分级明确的高能效交互中台。',
      challenge: 'Engineers suffered alert fatigue due to wall-of-text logging without clear spatial priority.',
      challengeZh: '海量日志滚屏导致运维人员产生严重的报警疲劳，难以在 10 秒内锁定故障根因节点。',
      solution: 'Designed a neo-brutalist card hierarchy with distinct badge statuses, customizable grid snapping, and dark theme support.',
      solutionZh: '运用强对比色块指示器与磁吸排版网格，让异常节点在第一视野内脱颖而出。',
      colors: ['#FFC01E', '#3884FF', '#111111', '#FFFFFF'],
      fonts: ['Plus Jakarta Sans', 'Space Mono'],
      timeline: '4 Months (2024)',
      role: 'Enterprise UX Lead',
      roleZh: '企业级产品体验负责人',
    },
  },
  {
    id: 'bloom-eco-commerce',
    title: 'Bloom Sustainable Goods Marketplace',
    titleZh: 'Bloom 绿色可持续电商精选平台',
    client: 'Bloom Ecology',
    category: 'web',
    categoryLabel: 'E-Commerce',
    categoryLabelZh: '电商体验设计',
    description: 'Transparent carbon footprint auditing paired with delightful, friction-free checkout flows for conscious consumers.',
    descriptionZh: '将绿色碳足迹溯源与极致流畅的购物体验相融合，以沉浸式故事化商品详情页唤起消费共鸣。',
    bgColor: '#5B4EFF',
    illustrationType: 'studio-laptop',
    tags: ['E-Commerce', 'Branding', 'Checkout UX'],
    metrics: [
      { label: 'Checkout Drop-off', value: '-28%' },
      { label: 'Avg Order Value', value: '+35%' },
      { label: 'Sustainability Score', value: 'A+' },
    ],
    caseStudy: {
      overview: 'A transparent direct-to-consumer store celebrating ethical craftsmanship and zero-waste packaging.',
      overviewZh: '主打零废弃环保生活方式的独立电商品牌，透明公开每件好物的材料来源与碳减排数据。',
      challenge: 'Eco-conscious products often struggled with consumer skepticism over vague greenwashing claims.',
      challengeZh: '环保类商品在传统网购中容易遭遇“概念噱头”质疑，缺乏可量化、可感知的透明数据支撑。',
      solution: 'Integrated an interactive supply chain timeline and simple carbon offset checkout toggle into the shopping bag.',
      solutionZh: '在结算抽屉中植入趣味化的碳中和滑块与产地漫画故事，让每一笔消费都有可验证的环保贡献。',
      colors: ['#5B4EFF', '#10B981', '#FFC01E', '#FFFFFF'],
      fonts: ['Plus Jakarta Sans'],
      timeline: '3 Months (2023)',
      role: 'Lead Visual Designer',
      roleZh: '主导视觉设计师',
    },
  },
];

export const articlesData: ArticleItem[] = [
  {
    id: 'article-net-friends',
    title: 'My Dispensable Internet Friends',
    titleZh: '我可有可无的网友',
    category: '随笔',
    categoryZh: '随笔',
    date: '2021-08-19',
    readTime: '4 min read',
    excerpt: 'About those digital connections that suddenly enter your life, shimmer briefly, and then fade without a trace.',
    excerptZh: '关于那些在生命中出现又消失的数字连接。',
    coverType: 'avatar-polaroid',
    likes: 428,
    contentZh: `### 关于那些在生命中出现又消失的数字连接

我们隔着两块发光的玻璃屏幕，在深夜交换了彼此最隐秘的焦虑、喜怒哀乐与未完成的代码片段。我们从未见过彼此的真实面孔，甚至连真名都不曾交换，却在某一瞬间比现实中并肩而坐的熟人更懂得彼此的脆弱。

#### 1. 赛博空间里的虚拟同温层
互联网最迷人的地方，恰恰在于它的“轻量”与“无附带责任”。你不需要承担世俗寒暄的沉重压力，也不必费心维系年复一年的节庆客套。一条突如其来的私信，几句不经意的共鸣，就能点亮一个疲惫的凌晨。

#### 2. 静悄悄的散场与告别
然而，数字世界的连接往往也是脆弱的。没有争吵，没有仪式感，只是对话框的最后一条消息停留在某个月份，随后被不断涌入的新群聊、工作通知和日常琐事向下挤压。某天当你突然想起来翻开主页时，可能只剩下一片红色的感叹号，或者停更半年的灰色头像。

> “我们在这个浩瀚的比特之海里短暂相撞，像两艘在雾夜中互鸣汽笛的轮船，随后各自驶向属于自己的航道。”`,
    contentEn: `### On Ephemeral Connections in Cyberspace

Through two glowing glass screens, we exchanged our most guarded vulnerabilities and late-night thoughts without ever knowing each other's real names. In a world defined by heavy social expectations, lightweight digital friendships feel like sudden bursts of starlight—spontaneous, warm, and gracefully fleeting.`,
  },
  {
    id: 'article-sjtu-diary-4',
    title: '#SJTU Stray Notes #0004',
    titleZh: '#SJTU游离日记#0004',
    category: '日记',
    categoryZh: '日记',
    date: '2021-05-03',
    readTime: '5 min read',
    excerpt: 'In the days at Shanghai Jiao Tong University, those trivial yet profoundly genuine moments lingering around campus.',
    excerptZh: '在交大的日子里，那些琐碎而真实的时间。',
    coverType: 'minimal-blue',
    isSpecialTitle: true,
    likes: 671,
    contentZh: `### 在交大的日子里，那些琐碎而真实的时间

初夏五月的闵行校区，思源湖畔的风总是带着潮湿微温的青草气味。东区的自行车流像潮汐一样随着下课铃声涌过拖鞋门，图书馆包玉刚楼前被落日染成淡粉紫色的天际线，是每个交大人心头挥之不去的印记。

#### 1. 实验室与代码窗口的昼夜倒错
在电院大楼（SEIEE）的走廊尽头，实验室的白炽灯似乎从不熄灭。屏幕上跳动着编译器的报错信息、神经网络的收敛曲线与尚未画完的交互线框图。大家叫着炸鸡外卖，在白板上疯狂画着算法流程，累了就趴在行军床上眯两个小时。

#### 2. 游离与确立
大学最宝贵的体验，不仅在于你学到了多少严密的数学推导与工程架构，而在于你获得了“允许自己偶尔游离”的自由。在学术与生活的夹缝里，我们探寻自己到底想成为怎样的人、想做出怎样真正带给世界温度的产品。

> “天地交而万物通，上下交而其志同。每一次在深夜骑过交大笔直大道的风，都在提醒我们前方的路还很宽阔。”`,
    contentEn: `### #SJTU Stray Notes #0004: Fleeting Memories at Jiao Tong

Reflecting on the tranquil sunsets over Siyuan Lake, the intense coding sessions in SEIEE laboratories, and the irreplaceable sense of intellectual curiosity that defined my university years at SJTU.`,
  },
  {
    id: 'article-gouqi-island',
    title: 'About Gouqi Island and My Love Story',
    titleZh: '关于枸杞岛和我的恋爱',
    category: '情感',
    categoryZh: '情感',
    date: '2021-02-28',
    readTime: '6 min read',
    excerpt: 'The salty sea breeze, misty fishing islands, and that sun-drenched memory of an unforgettable summer.',
    excerptZh: '海风、岛屿，还有那段关于夏天的记忆。',
    coverType: 'ocean-island',
    likes: 890,
    contentZh: `### 海风、岛屿，还有那段关于夏天的记忆

枸杞岛的夏天，天空与海水是同一种不掺杂质的蔚蓝。贻贝养殖基地的白色浮标在波浪间连成一片无边无际的银色琴弦，海浪不知疲倦地拍打着荒村废弃砖墙上的绿藤。

#### 1. 颠簸的慢船与无人公路
为了抵达这座东极之外的海岛，我们需要先坐三个小时的大巴，再转乘在风浪中摇晃的轮渡。当你真正踏上环岛公路，踩着细软的沙滩看着橘红色的落日沉入东海地平线时，所有城市的喧嚣与纷扰都在一瞬间被海风洗刷得干干净净。

#### 2. 爱是一起看浪潮退去
最动人的时刻往往不是轰轰烈烈的誓言，而是两个人坐在防波堤上吹着咸湿的夜风，一人戴着一边耳机，不说话也丝毫不觉得尴尬。浪花一次次涌上来又退下去，月光在海面上铺开一条银色的长路。

> “即使夏天终究会结束，海水终究会变凉，但那些被阳光晒得发烫的日子和彼此眼里的光芒，永远留在了记忆的暗房里。”`,
    contentEn: `### The Island Breeze and That Golden Summer

A nostalgic travelogue and personal essay recounting the azure waters of Gouqi Island, the abandoned green village, and the quiet intimacy of seaside sunsets shared between two people.`,
  },
  {
    id: 'article-1',
    title: 'What is the right design tool to choose in 2023?',
    titleZh: '2024-2025 年设计师该如何挑选最适合自己的工具链？',
    category: 'Resources',
    categoryZh: '设计资源',
    date: 'Oct 28, 2024',
    readTime: '6 min read',
    excerpt: 'An in-depth breakdown comparing Figma, Framer, Penpot, and code-based prototyping workflows to help you build faster.',
    excerptZh: '全方位深度对比 Figma、Framer、Penpot 与代码化原型工作流，助你在团队协作与独立交付中事半功倍。',
    illustrationType: 'swatches',
    likes: 342,
    contentZh: `### 设计工具正在发生深刻的范式转移

在过去几年里，设计工具的边界正在以前所未有的速度模糊。从静态切图到动态变量，再到今天由 AI 辅助生成的无缝代码交付，设计师不再只是“画图的人”，而是数字产品体验的全程构建者。

#### 1. Figma：依然是团队协作的坚实底座
无论新工具如何涌现，Figma 凭借其坚固的实时多人协作、变量系统（Variables）以及深度打通的 Dev Mode，依然是中大型团队不可替代的标配。它的优势在于：
- **设计系统规范化**：Token 的引入让设计师和前端工程师使用同一套词汇。
- **丰富的插件生态**：从自动内容填充到无障碍对比度检测，应有尽有。

#### 2. Framer：从画布直通线上站点的飞跃
如果你专注于营销站、个人作品集或初创品牌官网，Framer 提供了无与伦比的效率。你不再需要等待开发人员排期，在画布上完成的响应式断点与平滑滚动手势可以直接一键上线。

#### 3. 代码化原型与未来视角
拥抱基本的 HTML/CSS 与 React/Tailwind 理解能力，将赋予设计师巨大的杠杆优势。当你理解 Flexbox、Grid 以及状态生命周期时，你的设计方案天然就具备工程可行性。

> “真正决定设计质量的从来不是画布软件的名字，而是你如何将混乱的业务诉求梳理为清晰愉悦的交互秩序。”`,
    contentEn: `### The Paradigm Shift in Modern Design Tooling

Over the past few years, the boundaries between design software and production code have blurred at an unprecedented pace. Designers are no longer just pixel-pushers—they are end-to-end architects of digital product experiences.

#### 1. Figma: The Collaboration Workhorse
Despite challenger tools, Figma remains supreme for cross-functional product teams:
- **Design Tokens & Variables**: Seamless terminology bridging design and code.
- **Developer Mode**: Inspection, snippet export, and direct git sync.

#### 2. Framer: From Canvas to Production URL
For portfolios, marketing sites, and high-fidelity landing pages, Framer removes engineering bottlenecks completely.

#### 3. Code-literate Design Thinking
Understanding basic React, Tailwind, and CSS layout engines allows you to design with real constraints in mind.

> "The true craft lies not in the software icon on your dock, but in how gracefully you distill ambiguity into intuitive interaction."`,
  },
  {
    id: 'article-2',
    title: 'Font sizes in UI design: The complete guide to follow',
    titleZh: 'UI 界面排版与字阶系统完全指南：从数学比例到无障碍可读性',
    category: 'Articles',
    categoryZh: '专业文章',
    date: 'Nov 14, 2024',
    readTime: '8 min read',
    excerpt: 'Lorem ipsum dolor sit amet dolor consectetur adipiscing elit ectus. How to establish typographic rhythm that scales gracefully.',
    excerptZh: '深入拆解字号阶梯倍率、行高黄金律与移动端微排版，彻底解决界面字体层次混乱与阅读疲劳问题。',
    illustrationType: 'h1-monitor',
    likes: 519,
    contentZh: `### 为什么字阶（Type Scale）是界面的骨骼？

优秀的排版往往让人感觉不到它的刻意存在，但一旦排版失衡，界面就会充斥着廉价感与阅读杂音。建立一套清晰严谨的字阶系统，是任何设计系统的第一基石。

#### 1. 选择正确的数学递进比例
不要随意手动填写字号，使用规律的数学比率：
- **Minor Third (1.200)**：适合密集型企业 B 端看板或移动端列表，层级平缓不抢占屏幕空间。
- **Major Third (1.250)**：泛用型黄金标准，兼顾正文舒适度与卡片标题辨识度。
- **Perfect Fourth (1.333)**：适合高对比度的品牌营销站、个人作品集与富有张力的标题。

#### 2. 严守行高（Line Height）与段落宽度法则
- **正文基线**：中文正文推荐 1.6 ~ 1.75 倍行高，英文推荐 1.5 ~ 1.6 倍。
- **字符限制**：单行文本字符数应严格控制在 60 ~ 75 字符（中文约 30 ~ 40 字），避免眼球横向跳跃疲劳。
- **标题紧致**：大号标题（32px 以上）的行高必须适度压缩至 1.1 ~ 1.25，避免标题词句之间产生过大空洞。

#### 3. 字体权重与色彩层级
不要仅仅依赖字号区分重要度。通过 **Regular (400) / SemiBold (600) / ExtraBold (800)** 与 **主黑 (#111111) / 次级灰 (#666666)** 的巧妙交叉，可以构筑出井然有序的三维视觉深度。`,
    contentEn: `### Why Typographic Scales are the Backbone of UI

Great typography is invisible, yet bad typography instantly ruins credibility. Setting up a mathematical scale is step zero of any robust design system.

#### 1. Choosing the Right Step Ratio
- **Minor Third (1.200)**: Ideal for dense B2B SaaS applications.
- **Major Third (1.250)**: The universal standard for apps and web services.
- **Perfect Fourth (1.333)**: High drama and impact for landing pages.

#### 2. Mastering Line-Height & Measure
- Keep body lines within 65-75 characters to avoid ocular fatigue.
- Tighten heading line-height to 1.1-1.2x so titles hold together visually.`,
  },
  {
    id: 'article-3',
    title: '6 practical exercises to learn become a pro UI/UX designer',
    titleZh: '从新手到资深主导：6 个助你突破瓶颈的高效 UI/UX 实操刻意练习',
    category: 'News',
    categoryZh: '行业动态',
    date: 'Dec 02, 2024',
    readTime: '10 min read',
    excerpt: 'Lorem ipsum dolor sit amet dolor consectetur adipiscing elit ectus. Master user flows, micro-interactions, and real-world system thinking.',
    excerptZh: '告别无意义的假想概念稿临摹，通过高阶逆向工程、无障碍极端工况测试与设计系统重构磨练实战肌肉。',
    illustrationType: 'mobile-analytics',
    likes: 428,
    contentZh: `### 如何避免停留在“好看但不实用”的初级阶段？

许多初学者常常把大量时间花在 Dribbble 上的概念效果图上，但现实中的商业产品面临的是复杂状态、异常容错与跨端适配。以下 6 个实操练习将直接升级你的设计硬实力：

#### 练习 1：经典产品的逆向工程（Reverse Engineering）
挑选你每天都在用的顶级 App（如 Spotify、Airbnb 或 Notion），不看现成截图，尝试手动复刻其全部微交互状态：加载骨架屏、网络断开提示、长文本溢出省略、空数据引导态。

#### 练习 2：极端工况压力测试（Stress Testing）
为一个看似简单的卡片设计注入真实数据极端场景：
- 用户名字长达 45 个字符；
- 商品价格从 ¥9.9 跃升为 ¥999,999.00；
- 用户关闭了系统定位或摄像头权限；
- 在 320px 极窄屏幕与 4K 超宽屏上的表现。

#### 练习 3：无障碍可读性审计（WCAG AA）
尝试完全脱离鼠标，仅依靠 Tab 键与屏幕阅读器浏览你的设计原型。你是否为每一个图标按钮都标注了语义标签？文字在背景上的对比度是否达到 4.5:1？

#### 练习 4：撰写清晰的设计提案（RFC）
不仅要展示设计图，更要能用简洁文字写明：“我们解决了什么核心问题？放弃了哪三种备选方案？衡量的关键商业指标是什么？”`,
    contentEn: `### Moving Beyond Superficial "Dribbble Concept" Designs

Real-world digital products must withstand edge cases, accessibility standards, and complex business logic. Here are 6 deliberate practice exercises:

1. **Reverse-Engineer Production Apps**: Recreate edge states (empty states, errors, offline mode).
2. **Data Stress Testing**: Push extreme input values (40-character names, huge currencies).
3. **Accessibility (WCAG AA) Audit**: Design with 4.5:1 minimum contrast and full keyboard navigation.
4. **Write Design RFCs**: Articulate trade-offs and rationale in clear written documents.`,
  },
  {
    id: 'article-4',
    title: 'Designing with Neo-Brutalism: Boldness without sacrificing clarity',
    titleZh: '玩转新野兽派设计（Neo-Brutalism）：在鲜明张力与极致易用间取得平衡',
    category: 'Resources',
    categoryZh: '设计资源',
    date: 'Jan 15, 2025',
    readTime: '7 min read',
    excerpt: 'How thick black borders, hard drop shadows, and vibrant pop colors can inject memorable personality into boring digital interfaces.',
    excerptZh: '拆解高对比黑边轮廓、硬朗几何投影与高纯度多巴胺配色的底层美学法则，让产品脱颖而出且不失易用性。',
    illustrationType: 'swatches',
    likes: 671,
    contentZh: `### 为什么新野兽派正在席卷全球数字产品设计？

在过去十年的极简主义和微渐变浪潮之后，大量的 SaaS 产品与个人网站陷入了“千篇一律”的同质化泥潭。新野兽派（Neo-Brutalism）以其复古而前卫的性格，重新唤醒了人们对互联网早期的生机与趣味记忆。

#### 1. 核心视觉基因解构
- **高对比度的纯黑轮廓（2px - 3px Borders）**：给每一个元素赋予坚实的物理边界，杜绝任何模棱两可的模糊虚影。
- **实体硬投影（Hard Offset Shadows）**：不使用大模糊半径的软阴影（0px blur），而是采用诸如 \`4px 4px 0px #000\` 的利落位移，营造类似纸张剪贴画的层次立体感。
- **高纯度色块与暖灰底色的碰撞**：选用明黄色（#FFC01E）、珊瑚红（#FF5C67）、宝蓝（#3884FF）作为视觉焦点，同时搭配极净的白与浅暖灰维持大面积呼吸感。

#### 2. 避免陷入“盲目叛逆”的可用性陷阱
新野兽派绝不等于混乱无序：
- 控件点击区域必须清晰，按钮的 Hover 状态建议配合 \`-2px, -2px\` 位移与投影加深，给予用户明确的物理按压反馈；
- 文字信息必须严守高对比度，切忌在花哨的彩色背景上放置低灰度小字；
- 保持网格对齐与数学比例，用秩序衬托风格的灵动。`,
    contentEn: `### Why Neo-Brutalism is Reshaping the Web

After a decade of sanitized corporate minimalism, Neo-Brutalism introduces punchy personality, paper-cutout tactile physicality, and infectious energy.

#### The Core Formula
- **Crisp Solid Borders**: 2px-3px dark strokes defining distinct object bounds.
- **Zero-Blur Hard Shadows**: Offset shadows like \`4px 4px 0px #000000\` providing tactile papercraft depth.
- **Vibrant Accent Pops**: Yellows, electric blues, and coral pinks anchoring key action points.`,
  },
];

export const clientTestimonial: TestimonialItem = {
  id: 'testimonial-1',
  quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim et minim quis nostrud exercitation ullamco laboris.',
  quoteZh: 'John 拥有极为罕见的产品全栈嗅觉。从前期的深度用户访谈到令人惊艳的微交互落地，他带领团队完成了质的飞跃。每一个细节都经得起推敲，与他的合作是我们年度最顺利的项目！',
  author: 'Lily Woods',
  authorZh: 'Lily Woods',
  role: 'VP of Design at Google',
  roleZh: 'Google 核心设计副总裁',
  company: 'Google',
  avatarBg: '#FF5C67',
};
