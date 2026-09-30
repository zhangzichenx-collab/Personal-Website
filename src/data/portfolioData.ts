import {
  ArticleItem,
  VibeProductItem,
  VideoItem,
  StudyInChinaOffer,
} from "../types";

export const vibeProductsData: VibeProductItem[] = [
  {
    id: "what-to-eat",
    itemNumber: "# 001",
    releaseDate: "RELEASED ON 2026.09.08",
    title: "What to eat later?",
    titleZh: "邯郸宝藏小店（一晨版）",
    tagline: "LBS Random Blindbox Food Decider",
    taglineZh: "治愈选择困难症的美食盲盒",
    description:
      "Based on your real-time LBS coordinates to automatically scout nearby dining spots and draw a single blind-box restaurant pick.",
    descriptionZh:
      '别再问"等会儿吃啥？"了一晨替你踩过雷，打开就是邯郸人的饭搭子。',
    titleRu: "Сокровища Ханьданя (выбор Ичэня)",
    descriptionRu:
      "Хватит спрашивать «что сегодня поесть?». Ичэнь уже проверил всё за тебя — открывай и выбирай!",
    iconType: "food",
    status: "active",
  },
  {
    id: "glycopulse",
    itemNumber: "# 002",
    releaseDate: "RELEASED ON 2026.09.19",
    title: "GlycoPulse",
    titleZh: "糖衡 GlycoPulse",
    tagline: "CGM & Lifestyle Behavior Causal Analysis",
    taglineZh: "连续动态血糖与生活行为因果分析",
    description:
      "Ever wondered why a bowl of noodles sends your blood sugar on a rollercoaster? See how every meal and post-meal walk sculpts your glucose curve on a 24h CGM chart.",
    descriptionZh:
      "一碗牛肉面为啥让血糖坐过山车？每一餐、每一次饭后散步怎么雕刻你的血糖曲线，打开全画给你看。",
    titleRu: "ГликоПульс",
    descriptionRu:
      "Почему миска лапши заставляет сахар взлетать? Наглядно: как каждый приём пищи и прогулка после еды выстраивают твою гликемическую кривую на суточном графике CGM.",
    iconType: "health",
    status: "active",
    link: "https://glycopulse-ten.vercel.app/",
  },
];

export const videosData: VideoItem[] = [
  {
    id: "video-1",
    title:
      "Vlog | A student entrepreneur born in 2003 runs a Japanese restaurant for a day",
    titleZh: "🌿vlog｜03年男大学生创业开日式料理的一天",
    titleRu:
      "🌿влог｜Студент 2003 г.р. целый день ведёт свой японский ресторан",
    platform: "bilibili",
    duration: "00:47",
    views: "3218",
    likes: 31,
    coverText: "创业开日式料理的一天",
    coverTextEn: "A day running my Japanese restaurant",
    coverTextRu: "Один день своего ресторана",
    coverBg: "#F3E8FF",
    badge: "抖音",
    externalUrl: "https://v.douyin.com/40QVJT07_MI/",
    descriptionZh:
      "03年男大学生的创业日常：从备菜、出餐到打烊收店，完整记录开日式料理店的一天，看看年轻老板的真实营业实录。",
    descriptionEn:
      "A day-in-the-life vlog of a student entrepreneur born in 2003 running his Japanese restaurant, from prep to closing.",
    descriptionRu:
      "Будни студента-предпринимателя 2003 г.р.: от заготовки и подачи блюд до закрытия — полный день работы японского ресторана глазами молодого владельца.",
    danmakuList: [
      "03年都开始创业了？！",
      "这家店看着就好吃",
      "老板好年轻啊",
      "创业不易，加油！",
      "下次去打卡",
    ],
    danmakuListEn: [
      "Born in 2003 and already a business owner?!",
      "Looks so delicious",
      "Such a young boss",
      "Entrepreneurship is hard, keep it up!",
      "Visiting next time",
    ],
    danmakuListRu: [
      "В 2003 уже свой бизнес?!",
      "Выглядит очень аппетитно",
      "Какой молодой хозяин",
      "Своё дело — это непросто, удачи!",
      "Загляну как-нибудь",
    ],
  },
  {
    id: "video-2",
    title: "Recording talking-head videos is one of the fastest ways to grow",
    titleZh: "录口播绝对是人生进步最快的方式之一",
    titleRu: "Запись видео в кадре — один из самых быстрых способов вырасти",
    platform: "bilibili",
    duration: "图文",
    views: "15.2万",
    likes: 6867,
    coverText: "录口播进步最快的方式",
    coverTextEn: "Talking-heads = the fastest growth",
    coverTextRu: "Говорить в камеру — значит расти",
    coverBg: "#FEF3C7",
    badge: "抖音",
    externalUrl: "https://v.douyin.com/5EdocVwDWCQ/",
    descriptionZh:
      "录口播为什么是人生进步最快的方式之一？从表达逻辑到镜头表现，聊聊用输出倒逼输入的成长方法，做自媒体的必看干货。",
    descriptionEn:
      "Why recording talking-head videos is one of the fastest ways to grow: expression, logic, and learning by output.",
    descriptionRu:
      "Почему запись говорящих видео — один из самых быстрых путей развития: логика изложения, работа на камеру и рост через отдачу наружу. Мастхэв для контент-мейкеров.",
    danmakuList: [
      "说得太对了",
      "已经开始录了",
      "坚持输出第30天",
      "表达力真的能练",
      "干货收藏了",
    ],
    danmakuListEn: [
      "So true",
      "Already started recording",
      "Day 30 of consistent output",
      "Expression really is trainable",
      "Saved the gems",
    ],
    danmakuListRu: [
      "Совершенно верно",
      "Уже начал записывать",
      "30-й день постоянных публикаций",
      "Изложение реально прокачивается",
      "Забираю в закладки",
    ],
  },
  {
    id: "video-3",
    title: "Top 10 typical 'student mindsets' to unlearn",
    titleZh: "十大典型的“学生思维”",
    titleRu: "10 типичных «студенческих установок», от которых пора избавиться",
    platform: "bilibili",
    duration: "图文",
    views: "11.6万",
    likes: 2167,
    coverText: "十大典型的学生思维",
    coverTextEn: "Top 10 student mindsets",
    coverTextRu: "10 ловушек «студента»",
    coverBg: "#FFE4E6",
    badge: "抖音",
    isSpecialTitle: true,
    externalUrl: "https://v.douyin.com/Rd97KoAlJjA/",
    descriptionZh:
      "盘点十大典型的“学生思维”：等标准答案、怕犯错、只顾线性努力……这些认知陷阱在创业和职场里越早摆脱越好，你中了几个？",
    descriptionEn:
      "Ten typical 'student mindsets' to unlearn for entrepreneurship and career — how many are you still holding onto?",
    descriptionRu:
      "Десять типичных «студенческих установок»: ждать готовый ответ, бояться ошибок, мыслить только линейно… Чем раньше избавишься от этих ловушек в бизнесе и карьере, тем лучше. Сколько из них твои?",
    danmakuList: [
      "全中了怎么办",
      "学生思维害人",
      "第3条太真实了",
      "认知升级了",
      "转发给朋友看看",
    ],
    danmakuListEn: [
      "Guilty of all of them",
      "Student mindset is toxic",
      "Point 3 is too real",
      "Mindset upgraded",
      "Sharing with a friend",
    ],
    danmakuListRu: [
      "Все мои — что делать",
      "Студенческое мышление вредит",
      "Пункт 3 — слишком жизненно",
      "Сознание прокачано",
      "Отправил другу",
    ],
  },
  {
    id: "video-4",
    title: "Vlog | How much does a Japanese restaurant in Handan make per day?",
    titleZh: "🌿vlog｜00后在邯郸开日式料理，一天能赚多少钱",
    titleRu:
      "🌿влог｜Сколько приносит за день японский ресторан в Ханьдане у зумера",
    platform: "bilibili",
    duration: "01:09",
    views: "3335",
    likes: 35,
    coverText: "开日料一天能赚多少？",
    coverTextEn: "How much does a day bring?",
    coverTextRu: "Сколько приносит день?",
    coverBg: "#FEF3C7",
    badge: "抖音",
    externalUrl: "https://v.douyin.com/0DyTsK77-bg",
    descriptionZh:
      "00后在邯郸经营日式料理店的营业实录：一天流水多少、成本花在哪、最后到手多少？用真实数据翻开小店老板的账本。",
    descriptionEn:
      "A transparent day's breakdown of revenue, costs, and profit from running a Japanese restaurant in Handan.",
    descriptionRu:
      "Честный дневник японского ресторана в Ханьдане: дневная выручка, статьи расходов и чистая прибыль — реальные цифры из тетради владельца маленького заведения.",
    danmakuList: [
      "账本太真实了",
      "比上班强多了吧",
      "成本控制可以啊",
      "想去邯郸打卡！",
      "老板生意兴隆",
    ],
    danmakuListEn: [
      "The numbers are so real",
      "Way better than an office job",
      "Solid cost control",
      "Wanna visit Handan!",
      "Wishing the boss booming business",
    ],
    danmakuListRu: [
      "Цифры очень честные",
      "Похоже, лучше офисной работы",
      "С контролем расходов порядок",
      "Захотелось в Ханьдань!",
      "Процветания бизнесу",
    ],
  },
  {
    id: "video-5",
    title: "On Practice: Testing truth through real action",
    titleZh: "毛选：实践才是检验真理的唯一标准",
    titleRu: "Избранное Мао: практика — единственный критерий истины",
    platform: "bilibili",
    duration: "图文",
    views: "2.9万",
    likes: 527,
    coverText: "实践检验真理",
    coverTextEn: "Practice tests truth",
    coverTextRu: "Практика — критерий истины",
    coverBg: "#FFE4E6",
    badge: "抖音",
    externalUrl: "https://v.douyin.com/xZLh6xMGfWM/",
    descriptionZh:
      "重读毛选《实践论》：实践才是检验真理的唯一标准。从认识论聊到做事方法，为什么想明白一件事，最终都要靠亲手去做？",
    descriptionEn:
      "Rereading 'On Practice' from Mao's Selected Works: truth is tested through practice — why doing beats theorizing.",
    descriptionRu:
      "Перечитываем «О практике» из Избранного Мао: истина проверяется только практикой. От теории познания к методу действий — почему любую идею в итоге нужно проверить своими руками?",
    danmakuList: [
      "教员的思想永不过时",
      "实践出真知",
      "学到了！",
      "重读毛选打卡",
      "认知升级了",
    ],
    danmakuListEn: [
      "The Chairman's ideas never age",
      "Practice brings true knowledge",
      "Learned a lot!",
      "Rereading Mao, checking in",
      "Mindset upgraded",
    ],
    danmakuListRu: [
      "Идеи Учителя не стареют",
      "Практика рождает знание",
      "Намотал на ус!",
      "Возвращаюсь к классике",
      "Сознание прокачано",
    ],
  },
  {
    id: "video-6",
    title: "Performing is a required course in life",
    titleZh: "表演是一门必修课",
    titleRu: "Игра на публике — обязательный предмет в жизни",
    platform: "bilibili",
    duration: "图文",
    views: "1.2万",
    likes: 477,
    coverText: "表演是必修课",
    coverTextEn: "Performing is a required course",
    coverTextRu: "Игра — обязательный предмет",
    coverBg: "#ECFCCB",
    badge: "抖音",
    externalUrl: "https://v.douyin.com/683rw3RQjbA/",
    descriptionZh:
      "人生处处是舞台：面试、汇报、社交场合……聊聊为什么“表演”是每个人的必修课，以及如何在合适的场景里演好合适的角色。",
    descriptionEn:
      "Life is a stage: interviews, presentations, social settings — why performing well is a required course for everyone.",
    descriptionRu:
      "Жизнь — сплошная сцена: собеседования, презентации, общение… Почему «играть роль» необходимо каждому и как уместно исполнять подходящую роль в нужной ситуации.",
    danmakuList: [
      "太真实了",
      "影帝影后都是练出来的",
      "社交场合全靠演技",
      "人生如戏全靠演技",
      "学到了",
    ],
    danmakuListEn: [
      "So true",
      "Best actors are made, not born",
      "Social life runs on acting skills",
      "All the world's a stage",
      "Useful",
    ],
    danmakuListRu: [
      "Слишком жизненно",
      "Актёрами не рождаются — ими становятся",
      "В социуме всё держится на игре",
      "Вся жизнь — театр",
      "Полезно",
    ],
  },
  {
    id: "video-7",
    title: "Zero-base to Full-stack Website with Vibe Coding",
    titleZh: "0基础小白用自然语言写出个人全栈网站！Vibe Coding 真香",
    titleRu:
      "Новичок без опыта собрал фулстек-сайт на естественном языке! Vibe Coding — это вещь",
    platform: "bilibili",
    duration: "04:15",
    views: "2.4万",
    likes: 1890,
    coverText: "AI 编程实战",
    coverTextEn: "AI coding in action",
    coverTextRu: "Практика ИИ-программирования",
    coverBg: "#E0F2FE",
    badge: "抖音",
    descriptionZh:
      "不用啃枯燥的前端框架，深夜一边听 lo-fi 音乐一边用纯中文自然语言指挥 AI，手把手带你上线一个酷炫的新野兽派个人网站！",
    descriptionEn:
      "How to build fullstack web apps using pure natural language prompts and AI agents.",
    descriptionRu:
      "Без скучных фреймворков: поздней ночью под lo-fi, командуя ИИ простым естественным языком, пошагово запускаем дерзкий нео-бруталистский личный сайт!",
    danmakuList: [
      "我也在用这种方式写代码！",
      "这就是未来的软件开发范式吗",
      "求 prompt 教程！",
      "西门太强了",
    ],
    danmakuListEn: [
      "I write code this way too!",
      "Is this the future of software dev?",
      "Need a prompt tutorial!",
      "Ximen is awesome",
    ],
    danmakuListRu: [
      "Я тоже так пишу код!",
      "Это будущее разработки?",
      "Дайте урок по промптам!",
      "Ичэнь могуч",
    ],
  },
];

export const studyInChinaOffersData: StudyInChinaOffer[] = [
  {
    id: "rakhmonov-tjk-language-2026",
    studentName: "Rakhmonov S. Zamjonovich",
    studentCountry: "Tajikistan",
    studentFlag: "🇹🇯",
    university: "XX University",
    universityZh: "XX学院",
    universityRu: "Университет XX",
    universityLogoText: "XX",
    universityColor: "#64748B",
    degree: "Chinese Language Program (Non-degree)",
    degreeZh: "语言生（一年制 · 非学历）",
    degreeRu: "Программа китайского языка (1 год, без степени)",
    major: "Chinese Language, Faculty of Literature",
    majorZh: "汉语学习 / 文学院（中文授课）",
    majorRu:
      "Китайский язык / филологический факультет (обучение на китайском)",
    scholarship: "Self-funded",
    scholarshipZh: "自费语言生项目",
    scholarshipRu: "Программа за свой счёт (без стипендии)",
    scholarshipType: "self-funded",
    year: "2026",
    admissionNo: "—",
    badge: "2026 秋季入学",
    badgeEn: "Fall 2026 Intake",
    badgeRu: "Зачисление осенью 2026",
    imageUrl: "/admissions/offer-0.jpg",
    noticeDetails: {
      issueDate: "July 15, 2026",
      reportingDate: "September 7-9, 2026",
      congratulationsZh:
        "我们高兴地通知您，经审查您的申请材料，我校决定录取您为语言生，自2026年9月14日起在我校文学院进行为期一年的汉语学习，授课语言为中文。",
      congratulationsEn:
        "We are pleased to inform you that, upon review of your application materials, you have been admitted as a language student for a one-year Chinese language program at the Faculty of Literature, starting September 14, 2026, taught in Chinese.",
      congratulationsRu:
        "Мы рады сообщить, что после рассмотрения ваших документов вы зачислены на годовую программу китайского языка на филологическом факультете с 14 сентября 2026 г. Обучение проводится на китайском языке.",
      facultyZh: "文学院",
      facultyEn: "Faculty of Literature",
      facultyRu: "Филологический факультет",
      scholarshipCoverageZh:
        "自费语言生项目。需持本《录取通知书》及 JW202 表等材料办理来华学习（X1/X2）签证，入境后须进行外国人来华体检，并于规定日期内到校办理入学手续。",
      scholarshipCoverageEn:
        "Self-funded language program. Apply for an X1/X2 study visa with this admission notice and JW202 form; complete the required physical examination upon arrival and register on time.",
      scholarshipCoverageRu:
        "Программа за свой счёт. С данным уведомлением о зачислении и формой JW202 оформите студенческую визу X1/X2; по приезде пройдите медосмотр для иностранцев и зарегистрируйтесь в установленные сроки.",
    },
  },
  {
    id: "tjk-lang-2026-01",
    studentName: "K. Jon",
    studentCountry: "Tajikistan",
    studentFlag: "🇹🇯",
    university: "Jinggangshan University",
    universityZh: "井冈山大学",
    universityRu: "Цзинганшаньский университет",
    universityLogoText: "JGSU",
    universityColor: "#64748B",
    degree: "Chinese Language Program (Half-year)",
    degreeZh: "语言生（半年制 · 非学历）",
    degreeRu: "Программа китайского языка (полгода, без степени)",
    major: "Chinese Language, International School",
    majorZh: "汉语学习 / 国际学院（中文授课）",
    majorRu: "Китайский язык / международный институт (обучение на китайском)",
    scholarship: "Self-funded",
    scholarshipZh: "自费语言生项目",
    scholarshipRu: "Программа за свой счёт (без стипендии)",
    scholarshipType: "self-funded",
    year: "2026",
    admissionNo: "—",
    badge: "2026秋 · 半年制",
    badgeEn: "Fall 2026 · Half-year",
    badgeRu: "Осень 2026 · полгода",
    imageUrl: "/admissions/offer-tjk-lang-1-2026.jpg",
  },
  {
    id: "tjk-lang-2026-02",
    studentName: "S. Shamsiddinzod",
    studentCountry: "Tajikistan",
    studentFlag: "🇹🇯",
    university: "Jinggangshan University",
    universityZh: "井冈山大学",
    universityRu: "Цзинганшаньский университет",
    universityLogoText: "JGSU",
    universityColor: "#64748B",
    degree: "Chinese Language Program (Half-year)",
    degreeZh: "语言生（半年制 · 非学历）",
    degreeRu: "Программа китайского языка (полгода, без степени)",
    major: "Chinese Language, International School",
    majorZh: "汉语学习 / 国际学院（中文授课）",
    majorRu: "Китайский язык / международный институт (обучение на китайском)",
    scholarship: "Self-funded",
    scholarshipZh: "自费语言生项目",
    scholarshipRu: "Программа за свой счёт (без стипендии)",
    scholarshipType: "self-funded",
    year: "2026",
    admissionNo: "—",
    badge: "2026秋 · 半年制",
    badgeEn: "Fall 2026 · Half-year",
    badgeRu: "Осень 2026 · полгода",
    imageUrl: "/admissions/offer-tjk-lang-2-2026.jpg",
  },
  {
    id: "tjk-lang-2026-03",
    studentName: "A. Abdul",
    studentCountry: "Tajikistan",
    studentFlag: "🇹🇯",
    university: "Jinggangshan University",
    universityZh: "井冈山大学",
    universityRu: "Цзинганшаньский университет",
    universityLogoText: "JGSU",
    universityColor: "#64748B",
    degree: "Chinese Language Program (Half-year)",
    degreeZh: "语言生（半年制 · 非学历）",
    degreeRu: "Программа китайского языка (полгода, без степени)",
    major: "Chinese Language, International School",
    majorZh: "汉语学习 / 国际学院（中文授课）",
    majorRu: "Китайский язык / международный институт (обучение на китайском)",
    scholarship: "Self-funded",
    scholarshipZh: "自费语言生项目",
    scholarshipRu: "Программа за свой счёт (без стипендии)",
    scholarshipType: "self-funded",
    year: "2026",
    admissionNo: "—",
    badge: "2026秋 · 半年制",
    badgeEn: "Fall 2026 · Half-year",
    badgeRu: "Осень 2026 · полгода",
    imageUrl: "/admissions/offer-tjk-lang-3-2026.jpg",
  },
  {
    id: "tjk-lang-2026-04",
    studentName: "S. Alijon",
    studentCountry: "Tajikistan",
    studentFlag: "🇹🇯",
    university: "Jinggangshan University",
    universityZh: "井冈山大学",
    universityRu: "Цзинганшаньский университет",
    universityLogoText: "JGSU",
    universityColor: "#64748B",
    degree: "Chinese Language Program (Half-year)",
    degreeZh: "语言生（半年制 · 非学历）",
    degreeRu: "Программа китайского языка (полгода, без степени)",
    major: "Chinese Language, International School",
    majorZh: "汉语学习 / 国际学院（中文授课）",
    majorRu: "Китайский язык / международный институт (обучение на китайском)",
    scholarship: "Self-funded",
    scholarshipZh: "自费语言生项目",
    scholarshipRu: "Программа за свой счёт (без стипендии)",
    scholarshipType: "self-funded",
    year: "2026",
    admissionNo: "—",
    badge: "2026秋 · 半年制",
    badgeEn: "Fall 2026 · Half-year",
    badgeRu: "Осень 2026 · полгода",
    imageUrl: "/admissions/offer-tjk-lang-4-2026.jpg",
  },
  {
    id: "tjk-lang-2026-05",
    studentName: "A. Ahmad",
    studentCountry: "Tajikistan",
    studentFlag: "🇹🇯",
    university: "Jinggangshan University",
    universityZh: "井冈山大学",
    universityRu: "Цзинганшаньский университет",
    universityLogoText: "JGSU",
    universityColor: "#64748B",
    degree: "Chinese Language Program (Half-year)",
    degreeZh: "语言生（半年制 · 非学历）",
    degreeRu: "Программа китайского языка (полгода, без степени)",
    major: "Chinese Language, International School",
    majorZh: "汉语学习 / 国际学院（中文授课）",
    majorRu: "Китайский язык / международный институт (обучение на китайском)",
    scholarship: "Self-funded",
    scholarshipZh: "自费语言生项目",
    scholarshipRu: "Программа за свой счёт (без стипендии)",
    scholarshipType: "self-funded",
    year: "2026",
    admissionNo: "—",
    badge: "2026秋 · 半年制",
    badgeEn: "Fall 2026 · Half-year",
    badgeRu: "Осень 2026 · полгода",
    imageUrl: "/admissions/offer-tjk-lang-5-2026.jpg",
  },
  {
    id: "tjk-lang-2026-06",
    studentName: "E. Shahrom",
    studentCountry: "Tajikistan",
    studentFlag: "🇹🇯",
    university: "Jinggangshan University",
    universityZh: "井冈山大学",
    universityRu: "Цзинганшаньский университет",
    universityLogoText: "JGSU",
    universityColor: "#64748B",
    degree: "Chinese Language Program (Half-year)",
    degreeZh: "语言生（半年制 · 非学历）",
    degreeRu: "Программа китайского языка (полгода, без степени)",
    major: "Chinese Language, International School",
    majorZh: "汉语学习 / 国际学院（中文授课）",
    majorRu: "Китайский язык / международный институт (обучение на китайском)",
    scholarship: "Self-funded",
    scholarshipZh: "自费语言生项目",
    scholarshipRu: "Программа за свой счёт (без стипендии)",
    scholarshipType: "self-funded",
    year: "2026",
    admissionNo: "—",
    badge: "2026秋 · 半年制",
    badgeEn: "Fall 2026 · Half-year",
    badgeRu: "Осень 2026 · полгода",
    imageUrl: "/admissions/offer-tjk-lang-6-2026.jpg",
  },
  {
    id: "tjk-lang-2026-07",
    studentName: "S. Toirov",
    studentCountry: "Tajikistan",
    studentFlag: "🇹🇯",
    university: "Hunan Chemical Vocational Technology College",
    universityZh: "湖南化工职业技术学院",
    universityRu: "Хунаньский химико-технологический колледж",
    universityLogoText: "HNCVTC",
    universityColor: "#64748B",
    degree: "Chinese Language Program (One-year)",
    degreeZh: "语言生（一年制 · 非学历）",
    degreeRu: "Программа китайского языка (1 год, без степени)",
    major: "Chinese Language",
    majorZh: "汉语学习 / 中文专业（中文授课）",
    majorRu: "Китайский язык (обучение на китайском)",
    scholarship: "Self-funded",
    scholarshipZh: "自费语言生项目",
    scholarshipRu: "Программа за свой счёт (без стипендии)",
    scholarshipType: "self-funded",
    year: "2026",
    admissionNo: "2026ZW010",
    badge: "2026秋 · 一年制",
    badgeEn: "Fall 2026 · One-year",
    badgeRu: "Осень 2026 · 1 год",
    imageUrl: "/admissions/offer-7.jpg",
  },
];

export const articlesData: ArticleItem[] = [
  {
    id: "article-net-friends",
    title: "Why Acne & Inflammation Keep Coming Back",
    titleZh: "为什么你脸上的痘痘和炎症一直反反复复",
    titleRu: "Почему прыщи и воспаления на лице возвращаются снова и снова",
    category: "Health",
    categoryZh: "护肤",
    categoryRu: "Уход за кожей",
    date: "2026-08-17",
    readTime: "5 min read",
    readTimeRu: "5 мин чтения",
    excerpt: "No medication, no skincare—just fix one thing: your diet.",
    excerptZh: "不需要靠药物、不需要靠护肤品，只需要做好一件事：饮食。",
    excerptRu:
      "Ни лекарств, ни косметики — нужно наладить лишь одну вещь: питание.",
    coverType: "avatar-polaroid",
    likes: 428,
    externalUrl: "https://mp.weixin.qq.com/s/6R-yXXxoWu7ftWI9kCbW-A",
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
    id: "article-gouqi-island",
    title: "Bull Come: Stand Out or Get Out",
    titleZh: "《牛来》启示录：这个时代，要么出众，要么出局",
    titleRu: "Уроки «Bull Come»: в эту эпоху要么 выделяйся, либо выбывай",
    category: "Film",
    categoryZh: "影评",
    categoryRu: "Кино",
    date: "2026-08-17",
    readTime: "7 min read",
    readTimeRu: "7 мин чтения",
    excerpt:
      "The breakout hit 'Bull Come' proves a brutal truth—no madness, no magic.",
    excerptZh: "《牛来》这部电影的爆火，再次印证了一个残酷的真相：不疯不成魔。",
    excerptRu:
      "Триумф фильма «Bull Come» подтверждает жестокую правду: без безумия нет магии.",
    coverType: "ocean-island",
    likes: 890,
    externalUrl: "https://mp.weixin.qq.com/s/GvBSLBaCw4RQ_ik5-yxk2g",
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
    id: "article-sjtu-diary-4",
    title: "Business 101: Is McDonald's Just a Fast-Food Company?",
    titleZh: "商业启蒙篇：麦当劳是一家卖快餐公司？不止如此！",
    titleRu: "Азы бизнеса: McDonald's — просто фастфуд-компания? Не только!",
    category: "Business",
    categoryZh: "商业",
    categoryRu: "Бизнес",
    date: "2026-08-10",
    readTime: "6 min read",
    readTimeRu: "6 мин чтения",
    excerpt:
      "Most people's first encounter with McDonald's starts with a burger. But is that all it is?",
    excerptZh:
      "很多人第一次认识麦当劳，是从一个汉堡开始的。但麦当劳真的只是一家卖快餐的公司吗？",
    excerptRu:
      "У многих знакомство с McDonald's начинается с бургера. Но правда ли, что он продаёт только бургеры?",
    coverType: "minimal-blue",
    isSpecialTitle: true,
    likes: 671,
    externalUrl: "https://mp.weixin.qq.com/s/hLe1HcfBHmVXSGpwK0x4wg",
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
    id: "article-wx-1",
    title: "Xianyu SOP: Set Up Your Homepage Before Listing",
    titleZh: "闲鱼SOP：确认供应商后，先把闲鱼首页设置好",
    titleRu:
      "SOP для Xianyu: сначала оформи свою страницу, потом выставляй товары",
    category: "Side Hustle",
    categoryZh: "副业",
    categoryRu: "Подработка",
    date: "2026-09-05",
    readTime: "6 min read",
    readTimeRu: "6 мин чтения",
    excerpt:
      "After confirming your supplier, don't list products yet—set up your Xianyu homepage first.",
    excerptZh:
      "确认你的供应商之后，我们先不要直接上架商品，先把我们闲鱼首页给设置一下。",
    excerptRu:
      "После выбора поставщика не спеши выставлять товары — сначала приведи в порядок свою главную страницу в Xianyu.",
    coverType: "xianyu-sop",
    likes: 215,
    externalUrl: "https://mp.weixin.qq.com/s/6qlJEKZEjCNbERQjcSkEHA",
    contentZh: `### 闲鱼副业起步 SOP

确认好供应商之后，第一件事不是急着上架商品，而是先把闲鱼首页的门面打理清楚。

#### 1. 主页就是你的小店招牌
头像、昵称、简介、背景图，每一处都在向买家传递「这家店靠不靠谱」。一个干净、垂直、有辨识度的主页，转化率远高于东拼西凑的杂货铺。

#### 2. 信任资产需要慢慢攒
闲鱼买家下单前一定会点进主页看历史评价、在售商品和回复速度。前期把首页打磨好，后期每一单都在为你滚雪球式的信任背书。`,
    contentEn: `### Xianyu Side Hustle Launch SOP

A step-by-step SOP for launching a Xianyu (Idle Fish) side hustle—starting with homepage setup before listing any products.`,
  },
  {
    id: "article-wx-2",
    title: "The 6 Most Active GPT User Profiles",
    titleZh: "使用GPT最活跃的6类人群",
    titleRu: "6 типов самых активных пользователей GPT",
    category: "AI",
    categoryZh: "AI",
    categoryRu: "ИИ",
    date: "2026-08-20",
    readTime: "5 min read",
    readTimeRu: "5 мин чтения",
    excerpt: "Who's actually using GPT every day? Six profiles stand out.",
    excerptZh: "到底是谁在每天高频使用 GPT？这六类人最有代表性。",
    excerptRu:
      "Кто реально пользуется GPT каждый день? Ярче всего выделяются шесть типов.",
    coverType: "gpt-users",
    likes: 342,
    externalUrl: "https://mp.weixin.qq.com/s/LNfNM98avJtRGsGWFaXFYA",
    contentZh: `### GPT 的真实高频用户画像

当所有人都在谈 AI，到底是谁在真正每天用 GPT 干活？观察下来，有六类人最活跃。

#### 1. 把 AI 当外脑的人
他们不再用搜索引擎「搜一下」，而是把 GPT 当成可以对话、可以迭代、可以挑战思路的「外挂大脑」。

#### 2. 用 Codex 和 Skill 把流程自动化的人
不只是聊天，而是把重复劳动封装成可复用的 skill，让 AI 真正进入工作流。`,
    contentEn: `### Six Profiles of Daily GPT Power Users

From treating AI as a second brain to automating workflows with Codex and skills—six profiles of people who use GPT most actively.`,
  },
  {
    id: "article-wx-3",
    title: "Post-Meal Movement Stabilizes Blood Sugar",
    titleZh: "饭后动一动，血糖曲线更平稳",
    titleRu: "Подвигайся после еды — и сахар в крови будет стабильнее",
    category: "Health",
    categoryZh: "健康",
    categoryRu: "Здоровье",
    date: "2026-08-20",
    readTime: "4 min read",
    readTimeRu: "4 мин чтения",
    excerpt: "A short walk after meals can flatten your glucose curve.",
    excerptZh: "饭后运动可以帮助血糖曲线平稳，抗炎饮食的另一块拼图。",
    excerptRu:
      "Короткая прогулка после еды сглаживает гликемическую кривую — ещё один элемент противовоспалительной диеты.",
    coverType: "post-meal",
    likes: 287,
    externalUrl: "https://mp.weixin.qq.com/s/YFylFDW0qaPi3qju-qwTgQ",
    contentZh: `### 抗炎饮食的另一块拼图：饭后动一动

很多人只盯着「吃什么」，却忽略了「吃完之后做什么」。饭后一段轻量运动，能让血糖曲线明显平稳下来。

#### 1. 血糖过山车才是炎症的温床
餐后血糖骤升骤降，会反复刺激胰岛素分泌，长痘、长炎症、长疲惫都和它有关。

#### 2. 不需要剧烈，散步就够
饭后 10-15 分钟的散步、拉伸或家务，足以让血糖曲线温柔下来。`,
    contentEn: `### Post-Meal Movement as the Anti-Inflammatory Puzzle Piece

A short walk after meals flattens the glucose curve—an often-overlooked piece of an anti-inflammatory lifestyle.`,
  },
  {
    id: "article-wx-4",
    title: "Life is an 'Earth Online' Game",
    titleZh: "兄弟们，人生就是一场「地球Online」游戏",
    titleRu: "Ребята, жизнь — это игра «Земля Online»",
    category: "Reflection",
    categoryZh: "感悟",
    categoryRu: "Размышления",
    date: "2026-08-19",
    readTime: "7 min read",
    readTimeRu: "7 мин чтения",
    excerpt: "We take 'success' and 'failure' way too seriously.",
    excerptZh:
      "咱们总把「创业」「成功」「失败」看得太重，其实人生就是一场地球 Online。",
    excerptRu:
      "Мы слишком серьёзно относимся к «бизнесу», «успеху» и «поражению» — а жизнь это всего лишь «Земля Online».",
    coverType: "earth-online",
    likes: 568,
    externalUrl: "https://mp.weixin.qq.com/s/LPFzHv7qF8KkToo5TcwMFg",
    contentZh: `### 把人生当成一场地球 Online

最近有个想法一直在脑子里转：咱们总把「创业」「成功」「失败」看得太重，反而错过了游戏本身的乐趣。

#### 1. 没有真正的 Game Over
地球 Online 没有硬性终点，每一次「失败」只是一次存档点。换条支线继续探索，比死磕主线更值得。

#### 2. 玩家心态不是躺平
把人生当游戏，不是不认真，而是允许自己试错、重新建号、换职业、换地图。`,
    contentEn: `### Treating Life Like an Open-World Game

Life is an open-world game where failure is just a save point, not a Game Over—why taking it less seriously unlocks more play.`,
  },
  {
    id: "article-wx-5",
    title: "Business 101: Nike Sells Identity, Not Shoes",
    titleZh: "商业启蒙篇：为什么你曾经很厉害，别人却不会一直选择你Nike耐克？",
    titleRu: "Азы бизнеса: Nike продаёт не кроссовки, а идентичность",
    category: "Business",
    categoryZh: "商业",
    categoryRu: "Бизнес",
    date: "2026-08-19",
    readTime: "6 min read",
    readTimeRu: "6 мин чтения",
    excerpt: "Nike sells an identity, not just a shoe.",
    excerptZh:
      "我年轻时想买耐克，它代表一种身份——商业世界最有意思的地方就在这里。",
    excerptRu:
      "В молодости я хотел Nike, потому что он означал статус — в этом и есть самое интересное в бизнесе.",
    coverType: "nike-identity",
    isSpecialTitle: true,
    likes: 612,
    externalUrl: "https://mp.weixin.qq.com/s/vRkkhCpfUWme_1ZX2cleXg",
    contentZh: `### 商业启蒙篇：耐克卖的到底是什么

我年轻时想买耐克，不是因为鞋本身多好，而是因为它代表一种身份。

#### 1. 产品是壳，身份是核
耐克真正卖的，是「我想成为什么样的人」这件事本身。把产品做成身份符号，是品牌的最高级玩法。

#### 2. 别人不会一直选你，因为你没持续更新身份
曾经厉害不等于永远被选择，身份需要不断重新定义，否则就会被新一代消费者遗忘。`,
    contentEn: `### Business 101: Nike Sells Identity, Not Shoes

Why being 'once great' doesn't keep you chosen forever—Nike sells an identity that must be constantly redefined.`,
  },
  {
    id: "article-wx-6",
    title: "Business 101: Why Costco Wins With Fewer Products",
    titleZh: "商业启蒙篇：为什么Costco开业客的商品越少，顾客反而越信任？",
    titleRu:
      "Азы бизнеса: почему чем меньше товаров у Costco, тем больше ему доверяют?",
    category: "Business",
    categoryZh: "商业",
    categoryRu: "Бизнес",
    date: "2026-08-18",
    readTime: "6 min read",
    readTimeRu: "6 мин чтения",
    excerpt: "Costco built a trust system, not a supermarket.",
    excerptZh: "Costco 建立了一套「信任系统」：商品越少，顾客反而越信任。",
    excerptRu:
      "Costco построил не супермаркет, а систему доверия: чем меньше товаров, тем сильнее доверие.",
    coverType: "costco-trust",
    isSpecialTitle: true,
    likes: 534,
    externalUrl: "https://mp.weixin.qq.com/s/vg70EYkWJGbC4C7rtywqCA",
    contentZh: `### 商业启蒙篇：Costco 的「少即是多」

看不懂 Costco 的人会问：商品种类这么少，怎么还能做到全球零售巨头？

#### 1. 少而精，是一种替顾客把关的承诺
SKU 越少，意味着每一件商品都被严格筛选过。顾客不需要自己再做功课，信任成本被大幅降低。

#### 2. 会员制是一种「双向下注」
顾客付年费成为会员，Costco 用低毛利回馈——双方都在为「长期关系」下注，而不是单次交易。`,
    contentEn: `### Business 101: Costco's Trust System

How Costco turned 'fewer products' into a trust system that customers actually pay to join.`,
  },
  {
    id: "article-wx-7",
    title: "Top 10 'Earth Online' Players Share One Secret",
    titleZh: "研究了地球Online财富排行榜前十玩家的致富秘籍，我发现了同一个秘密",
    titleRu:
      "Изучив секреты богатства топ-10 игроков «Земли Online», я нашёл одну общую тайну",
    category: "Business",
    categoryZh: "商业",
    categoryRu: "Бизнес",
    date: "2026-08-16",
    readTime: "8 min read",
    readTimeRu: "8 мин чтения",
    excerpt: "Wealth follows a power-law distribution, not a normal one.",
    excerptZh:
      "财富的分配是幂律分布，而非正态分布——这就是前十玩家的同一个秘密。",
    excerptRu:
      "Богатство распределено по степенному закону, а не по нормальному — в этом общий секрет топ-10 игроков.",
    coverType: "power-law",
    likes: 723,
    externalUrl: "https://mp.weixin.qq.com/s/Q_OT7piUH4JVF7ty8xrBVQ",
    contentZh: `### 财富榜前十玩家的同一个秘密

研究完地球 Online 财富榜前十，我发现他们致富路径迥异，但底层逻辑惊人一致。

#### 1. 幂律分布，不是正态分布
财富从来不是「平均+波动」，而是少数头部吃掉大部分收益。理解这一点，你就不会再用「努力就有回报」的线性思维安慰自己。

#### 2. 押注头部，比均衡下注更重要
前十玩家都在用全部筹码押注自己最看好的少数赌注，而不是把鸡蛋均匀分到十个篮子里。`,
    contentEn: `### The Top 10 Players' Shared Secret: Power Law

Studying the top 10 wealthiest 'Earth Online' players reveals one shared secret: wealth follows a power law, not a normal distribution.`,
  },
  {
    id: "article-wx-8",
    title: "Why Haven't You Met Your Right One?",
    titleZh: "凭什么你没有迎来自己的正缘？",
    titleRu: "Почему ты ещё не встретил свою настоящую судьбу?",
    category: "Emotion",
    categoryZh: "情感",
    categoryRu: "Отношения",
    date: "2026-08-16",
    readTime: "5 min read",
    readTimeRu: "5 мин чтения",
    excerpt: "A person must be very 'zheng' to welcome the right one.",
    excerptZh: "陷入色欲的人永远不会迎来正缘——一个人要很正，才能迎来正缘。",
    excerptRu:
      "Погрязший в вожделении никогда не встретит настоящую судьбу — человек сам должен быть «правильным».",
    coverType: "right-one",
    likes: 489,
    externalUrl: "https://mp.weixin.qq.com/s/Dv_ltCI--YSYmWFUledvJw",
    contentZh: `### 关于正缘的一点真心话

陷入色欲的人永远不会迎来正缘。一个人要很「正」，才能迎来正缘。

#### 1. 正缘不是等来的，是修来的
所谓「正」，不是道德绑架，而是一种内在的稳定、自洽和清明。你自己是什么样的人，就会吸引什么样的缘分。

#### 2. 先把自己理顺，缘分才会理顺
缘分不是中彩票，是你整个生命状态的投影。把自己活成对的人，对的人才会出现。`,
    contentEn: `### On Meeting Your Right Person

You don't wait for the right person—you become someone they'd recognize. Right relationships mirror your inner state.`,
  },
  {
    id: "article-wx-9",
    title: "Business 101: What Pop Mart Really Sells",
    titleZh: "商业启蒙篇：从塑料玩具到商业帝国，泡泡玛特真正卖的是什么？",
    titleRu: "Азы бизнеса: что на самом деле продаёт Pop Mart?",
    category: "Business",
    categoryZh: "商业",
    categoryRu: "Бизнес",
    date: "2026-08-15",
    readTime: "6 min read",
    readTimeRu: "6 мин чтения",
    excerpt:
      "If you don't get Pop Mart, you're missing the best part of business.",
    excerptZh: "看不懂泡泡玛特？这正是商业世界最有意思的地方。",
    excerptRu:
      "Не понимаешь Pop Mart? Тогда ты упускаешь самое интересное в бизнесе.",
    coverType: "pop-mart",
    isSpecialTitle: true,
    likes: 651,
    externalUrl: "https://mp.weixin.qq.com/s/4Y_vnNvn8XYnF6HFTRBzrg",
    contentZh: `### 商业启蒙篇：泡泡玛特真正卖的是什么

看不懂泡泡玛特的人会说：不就是塑料玩具吗？这正是商业世界最有意思的地方。

#### 1. 卖的是情绪和惊喜，不是塑料
盲盒的核心不是「玩具」，而是拆开那一瞬间的情绪波动。泡泡玛特卖的是「多巴胺的小型赌博」。

#### 2. IP 才是真正的资产
塑料会贬值，但 IP 会升值。每一个被记住的角色，都是一座可以反复变现的情绪矿。`,
    contentEn: `### Business 101: Pop Mart Sells Dopamine, Not Plastic

Pop Mart isn't selling plastic toys—it's selling dopamine hits and IP that appreciates over time.`,
  },
  {
    id: "article-wx-10",
    title: "The Probability Game Behind 'Predicting the Future'",
    titleZh: "为什么总有人能「精准预测未来」？你可能忽略了背后的概率游戏",
    titleRu:
      "Почему кому-то удаётся «точно предсказывать будущее»? За этим стоит игра вероятностей",
    category: "Business",
    categoryZh: "商业",
    categoryRu: "Бизнес",
    date: "2026-08-14",
    readTime: "5 min read",
    readTimeRu: "5 мин чтения",
    excerpt: "A story about SMS predictions and survivorship bias.",
    excerptZh:
      "讲一个短信预测的故事——你以为的「精准预测」，背后其实是一场概率游戏。",
    excerptRu:
      "История о SMS-прогнозах и ошибке выжившего: за «точными предсказаниями» часто стоит просто игра вероятностей.",
    coverType: "probability",
    likes: 478,
    externalUrl: "https://mp.weixin.qq.com/s/AIy8rt9OuS-VLj9RrsLFsg",
    contentZh: `### 「精准预测未来」背后的概率游戏

讲一个短信预测的故事：有人连续几周精准预测了股票涨跌，你信吗？

#### 1. 幸存者偏差才是真相
真相是：他一开始给一万个人发了不同的预测，最后只剩下「蒙对」的那一小撮人。你以为的神预测，只是概率的必然产物。

#### 2. 别把幸存当能力
在商业和投资里，区分「真本事」和「幸存者偏差」，是避免被割韭菜的第一课。`,
    contentEn: `### The Probability Game Behind 'Precise Predictions'

A story about SMS stock tips and survivorship bias—what looks like 'precise prediction' is often just probability doing its work.`,
  },
  {
    id: "article-wx-11",
    title: "It's Not Effort—It's Ecological Niche",
    titleZh: "很多人的问题，不是不够努力，而是站错了位置。",
    titleRu: "Проблема многих не в нехватке старания, а в неправильном месте",
    category: "Reflection",
    categoryZh: "感悟",
    categoryRu: "Размышления",
    date: "2026-08-13",
    readTime: "5 min read",
    readTimeRu: "5 мин чтения",
    excerpt: "Giraffes eat high leaves, rabbits eat grass—find your niche.",
    excerptZh:
      "生物学有个概念叫生态位：长颈鹿吃高处树叶，兔子吃地上草。人也一样，站对位置比努力更重要。",
    excerptRu:
      "В биологии есть понятие экологической ниши: жираф ест листья сверху, кролик — траву внизу. С людьми так же: верная ниша важнее усердия.",
    coverType: "ecological-niche",
    likes: 532,
    externalUrl: "https://mp.weixin.qq.com/s/kHpwrvU0XN0NQ6SLXd4aTA",
    contentZh: `### 站错位置，再努力也白搭

很多人的问题，不是不够努力，而是站错了位置。生物学里有个概念叫「生态位」。

#### 1. 长颈鹿和兔子各吃各的草
长颈鹿吃高处的树叶，兔子吃地上的草，谁也不抢谁的饭碗。每个物种都有自己的生态位，错位竞争只会两败俱伤。

#### 2. 找到属于你的那片草地
与其在别人的赛道上卷，不如认真问自己：我天生适合吃什么「高度的树叶」？`,
    contentEn: `### It's Not Effort—It's Ecological Niche

Like giraffes and rabbits, every species has its niche. Finding yours matters more than working harder.`,
  },
  {
    id: "article-wx-12",
    title: "Business 101: SpaceX Redefined an Industry",
    titleZh: "商业启蒙篇：SpaceX最厉害的不是造火箭，而是重新定义了一个行业。",
    titleRu:
      "Азы бизнеса: главное достижение SpaceX — не ракеты, а переопределение целой отрасли",
    category: "Business",
    categoryZh: "商业",
    categoryRu: "Бизнес",
    date: "2026-08-12",
    readTime: "7 min read",
    readTimeRu: "7 мин чтения",
    excerpt: "Why should rockets only be used once?",
    excerptZh:
      "为什么火箭只能用一次？SpaceX 最厉害的不是造火箭，而是重新定义了一个行业。",
    excerptRu:
      "Почему ракета должна быть одноразовой? Главное достижение SpaceX — не ракеты, а переопределение правил целой отрасли.",
    coverType: "spacex-redefine",
    isSpecialTitle: true,
    likes: 689,
    externalUrl: "https://mp.weixin.qq.com/s/ryO264rvPmwfqPjuenc88Q",
    contentZh: `### 商业启蒙篇：SpaceX 重新定义了一个行业

为什么火箭只能用一次？这是 SpaceX 抛给整个航天业的问题。

#### 1. 重新定义问题，比解决问题更值钱
所有人都默认火箭是一次性消耗品，只有马斯克问：为什么不能回收？这个问题一旦被提出，整个行业的成本结构就被改写。

#### 2. 行业级重新定义才是真壁垒
SpaceX 的厉害不是某项技术，而是把「火箭=一次性」这个共识彻底掀翻，从此别人都得按新规则玩。`,
    contentEn: `### Business 101: SpaceX Redefined the Industry

SpaceX's real breakthrough wasn't building rockets—it was redefining the industry's cost structure by questioning 'single-use' as a given.`,
  },
  {
    id: "article-wx-13",
    title: "Reading 'How an Economy Grows' Week 2",
    titleZh: "读《小岛经济学》第2周总结：真正让人变富的，不是钱本身",
    titleRu: "«Как растёт экономика», неделя 2: богатыми делают не сами деньги",
    category: "Reading",
    categoryZh: "读书",
    categoryRu: "Чтение",
    date: "2026-08-09",
    readTime: "8 min read",
    readTimeRu: "8 мин чтения",
    excerpt:
      "From borrowing fish to interest, division of labor, trade, and money.",
    excerptZh:
      "从小岛上的借鱼，讲到了利息、分工、贸易和货币——真正让人变富的，是生产力、信用、合作和交换效率。",
    excerptRu:
      "От займа рыбы к процентам, разделению труда, торговле и деньгам: богатыми делают производительность, доверие, сотрудничество и эффективность обмена.",
    coverType: "island-trade",
    likes: 445,
    externalUrl: "https://mp.weixin.qq.com/s/ExwoJMWFyOvS0-_Fnub6mw",
    contentZh: `### 《小岛经济学》第 2 周读书笔记

从小岛上的借鱼，讲到了利息、分工、贸易和货币。真正让人变富的，从来不是钱本身。

#### 1. 生产力才是财富的源头
钱只是交换工具，真正让人变富的是生产力、信用、合作和交换效率。

#### 2. 分工和贸易让所有人变富
当每个人都做自己最擅长的事，再通过交换获取其他所需，整个小岛的总财富就被放大了。`,
    contentEn: `### Reading Notes: 'How an Economy Grows' Week 2

From borrowing fish to interest, division of labor, trade, and money—what really makes people rich isn't money itself.`,
  },
  {
    id: "article-wx-14",
    title: "Why Learn Advanced Math If I'm Not a Mathematician?",
    titleZh: "我以后又不当数学家，为什么要学习高数？",
    titleRu:
      "Зачем мне высшая математика, если я не собираюсь быть математиком?",
    category: "Reflection",
    categoryZh: "感悟",
    categoryRu: "Размышления",
    date: "2026-08-09",
    readTime: "5 min read",
    readTimeRu: "5 мин чтения",
    excerpt: "Two words: 'wisdom'.",
    excerptZh:
      "我以后又不当历史老师，为什么要背那么多人物？就两个字——「明智」。",
    excerptRu:
      "Два слова: «мудрость». Знания — это тренажёрный зал для мышления: формулы могут не пригодиться, но натренированный ум остаётся с тобой везде.",
    coverType: "math-wisdom",
    likes: 401,
    externalUrl: "https://mp.weixin.qq.com/s/g0tDPHLPRH1rqyNTakUIBQ",
    contentZh: `### 为什么要学那些「以后用不上」的东西

我以后又不当数学家，为什么要学高数？我以后又不当历史老师，为什么要背那么多人物？

#### 1. 答案就两个字：明智
学习不是为了未来某天「用得上」，而是为了让你在面对世界时，多一份判断力和清醒。

#### 2. 知识是思维的健身房
你不会在生活里直接用上高数公式，但训练过的思维，会让你在每一个决策时刻都更稳健。`,
    contentEn: `### Why Learn Things You'll 'Never Use'?

Two words: wisdom. Knowledge is a gym for your thinking—you won't use the formulas, but the trained mind shows up everywhere.`,
  },
  {
    id: "article-wx-15",
    title: "Why Some Grow Richer Through Cooperation",
    titleZh: "为什么有人越合作越富，有人却总觉得别人占便宜？",
    titleRu:
      "Почему одни богатеют через сотрудничество, а другие везде видят обман?",
    category: "Business",
    categoryZh: "商业",
    categoryRu: "Бизнес",
    date: "2026-08-08",
    readTime: "6 min read",
    readTimeRu: "6 мин чтения",
    excerpt: "Does someone making money always mean someone else is losing?",
    excerptZh:
      "只要有人赚钱，就一定意味着有人吃亏吗？合作思维和零和思维的分水岭就在这里。",
    excerptRu:
      "Если кто-то заработал, значит, кто-то обязательно потерял? От ответа на этот вопрос зависит, сможешь ли ты богатеть через сотрудничество.",
    coverType: "cooperation",
    likes: 467,
    externalUrl: "https://mp.weixin.qq.com/s/p-r1zfrQ-rDhtTG4awTHLA",
    contentZh: `### 合作思维 vs 零和思维

只要有人赚钱，就一定意味着有人吃亏吗？这个问题的答案，决定了你能不能越合作越富。

#### 1. 零和思维的人总觉得被占便宜
他们把每一次合作都看成「你多拿我就少拿」，于是越来越紧、越来越窄，最终把自己困死。

#### 2. 正和思维的人把蛋糕做大
真正越合作越富的人，相信合作可以让总蛋糕变大，自己拿到的绝对值反而更多。`,
    contentEn: `### Cooperation Mindset vs Zero-Sum Mindset

Why some grow richer through cooperation while others always feel cheated—the difference between zero-sum and positive-sum thinking.`,
  },
  {
    id: "article-wx-16",
    title: "Why a Star's Hour Outvalues a Year of Yours",
    titleZh: "为什么明星的一小时，比普通人的一年还值钱？",
    titleRu: "Почему час звезды стоит дороже целого года обычного человека?",
    category: "Business",
    categoryZh: "商业",
    categoryRu: "Бизнес",
    date: "2026-08-06",
    readTime: "5 min read",
    readTimeRu: "5 мин чтения",
    excerpt: "Why one movie can out-earn a decade of ordinary salaries.",
    excerptZh:
      "为什么拍一部电影收入可能超过普通人十几年工资？明星的「一小时」凭什么这么贵。",
    excerptRu:
      "Почему один фильм может принести больше, чем десять лет зарплат обычного человека? Почему «час» звезды так дорого стоит.",
    coverType: "attention-leverage",
    likes: 521,
    externalUrl: "https://mp.weixin.qq.com/s/edYW5or2ZGgoxL4ObPB_zw",
    contentZh: `### 明星的一小时为什么这么贵

为什么拍一部电影收入可能超过普通人十几年的工资？明星的「一小时」凭什么这么值钱？

#### 1. 注意力稀缺，明星是注意力的聚合器
明星真正卖的不是演技，而是「能同时吸引几千万人的注意力」。这种规模效应是普通人无法复制的稀缺资源。

#### 2. 杠杆让一小时放大成千万小时
通过媒体杠杆，明星的一小时劳动可以同时被几千万人消费，单位时间的价值被极致放大。`,
    contentEn: `### Why a Star's Hour Outvalues Your Year

Attention scarcity and media leverage—why a star's hour can outvalue a year of ordinary salaries.`,
  },
  {
    id: "article-wx-17",
    title: "Reading 'How an Economy Grows' Week 1",
    titleZh: "读《小岛经济学》第1周总结：从一条鱼，看懂普通人变富的路径",
    titleRu:
      "«Как растёт экономика», неделя 1: путь обычного человека к богатству — с одной рыбы",
    category: "Reading",
    categoryZh: "读书",
    categoryRu: "Чтение",
    date: "2026-08-02",
    readTime: "7 min read",
    readTimeRu: "7 мин чтения",
    excerpt: "From one fish, see the path for ordinary people to grow rich.",
    excerptZh:
      "从一条鱼开始，看懂普通人变富的最朴素路径——存下来、借出去、再投资。",
    excerptRu:
      "Начни с одной рыбы — и увидишь самый простой путь к богатству для обычного человека: накопить, одолжить, инвестировать.",
    coverType: "island-saving",
    likes: 389,
    externalUrl: "https://mp.weixin.qq.com/s/BGDfs2pJwqUD4Ue9tKdpzQ",
    contentZh: `### 《小岛经济学》第 1 周读书笔记

从一条鱼开始，看懂普通人变富的最朴素路径。

#### 1. 先有储蓄，才有选择权
小岛上的第一个聪明人，是用「忍住不吃」换来了「未来更多鱼」。普通人的第一桶金，永远是「先存下来」。

#### 2. 借出去的鱼，会带着利息回来
把多余的鱼借给会打鱼但没工具的人，利息就是「让渡当下消费」的报酬。这就是金融最原始的样子。`,
    contentEn: `### Reading Notes: 'How an Economy Grows' Week 1

From one fish, the simplest path for ordinary people to grow rich—save first, then lend, then invest.`,
  },
  {
    id: "article-wx-18",
    title: "How Ordinary People Avoid Unreliable TCM Doctors",
    titleZh: "普通人如何避雷不靠谱的中医",
    titleRu: "Как обычному человеку не нарваться на плохого специалиста по ТКМ",
    category: "Health",
    categoryZh: "健康",
    categoryRu: "Здоровье",
    date: "2026-07-26",
    readTime: "6 min read",
    readTimeRu: "6 мин чтения",
    excerpt: "A practical guide to filtering out unreliable TCM practitioners.",
    excerptZh:
      "普通人怎么避开不靠谱的中医？一份实战避雷指南，从问诊、开方到药效判断。",
    excerptRu:
      "Практическое руководство: как отсеять ненадёжных специалистов традиционной китайской медицины — от опроса до индивидуального рецепта.",
    coverType: "tcm-filter",
    likes: 356,
    externalUrl: "https://mp.weixin.qq.com/s/DHNbrH3PjXkOr4wiXGlo1A",
    contentZh: `### 普通人避雷不靠谱中医指南

中医有用，但不靠谱的中医会让人既花钱又耽误病情。普通人怎么避雷？

#### 1. 看诊法，不看流派
靠谱的中医不论流派，都会认真望闻问切、详细问诊。一坐下三分钟就开方的，基本可以 pass。

#### 2. 看药方是否「因人而异」
真正的好中医会根据你的体质调整药方，而不是套模板开同一张方子给所有人。`,
    contentEn: `### A Practical Guide to Filtering Unreliable TCM Doctors

For ordinary people—how to spot unreliable TCM practitioners from consultation style to prescription personalization.`,
  },
];
