import React, { useState, useMemo } from 'react';
import {
  GraduationCap,
  Award,
  ShieldCheck,
  Search,
  ExternalLink,
  ChevronRight,
  Globe,
  Sparkles,
  BookOpen,
  FileCheck,
  Building,
  CheckCircle2,
} from 'lucide-react';
import { Language, TabType, StudyInChinaOffer } from '../types';
import { studyInChinaOffersData } from '../data/portfolioData';

interface StudyChinaTabProps {
  onNavigate: (tab: TabType) => void;
  lang: Language;
  onOpenAdmissionOffer: (offer: StudyInChinaOffer) => void;
  onOpenContact: () => void;
}

export const StudyChinaTab: React.FC<StudyChinaTabProps> = ({
  onNavigate,
  lang,
  onOpenAdmissionOffer,
  onOpenContact,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState<string>('all');
  const [selectedScholarship, setSelectedScholarship] = useState<string>('all');

  const universities = [
    { key: 'all', labelZh: '全部高校', labelEn: 'All Universities' },
    { key: 'Shanghai Jiao Tong University', labelZh: '上海交通大学', labelEn: 'SJTU' },
    { key: 'Tsinghua University', labelZh: '清华大学', labelEn: 'Tsinghua' },
    { key: 'Peking University', labelZh: '北京大学', labelEn: 'PKU' },
    { key: 'Fudan University', labelZh: '复旦大学', labelEn: 'Fudan' },
    { key: 'Zhejiang University', labelZh: '浙江大学', labelEn: 'ZJU' },
  ];

  const scholarships = [
    { key: 'all', labelZh: '全部奖学金', labelEn: 'All Scholarships' },
    { key: 'csc', labelZh: 'CSC 中国政府奖学金', labelEn: 'CSC Full Scholarship' },
    { key: 'university', labelZh: '大学全额学者奖学金', labelEn: 'University Fellowship' },
  ];

  const filteredOffers = useMemo(() => {
    return studyInChinaOffersData.filter((offer) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        offer.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        offer.studentCountry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        offer.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
        offer.universityZh.toLowerCase().includes(searchQuery.toLowerCase()) ||
        offer.major.toLowerCase().includes(searchQuery.toLowerCase()) ||
        offer.majorZh.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      if (selectedUniversity !== 'all' && offer.university !== selectedUniversity) {
        return false;
      }

      if (selectedScholarship !== 'all' && offer.scholarshipType !== selectedScholarship) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedUniversity, selectedScholarship]);

  return (
    <div className="space-y-12 sm:space-y-16 py-4 sm:py-8">
      {/* =========================================================================
          HEADER ROW: Study in China Title, Subtitle & Search
      ========================================================================= */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left: Title & Subtitle */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-black">
              Study in China
            </h1>
            <div className="inline-block bg-[#E11D48] text-white px-4 sm:px-6 py-1 sm:py-2 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_#000000] rotate-[-2deg]">
              <span className="text-3xl sm:text-5xl font-black tracking-tight">
                {lang === 'zh' ? '成果案例' : 'Success Cases'}
              </span>
            </div>
          </div>
          <p className="text-base sm:text-lg font-bold text-gray-700">
            {lang === 'zh'
              ? '陪伴全球国际学子斩获中国顶尖学府录取 · CSC 中国政府全额奖学金真实案例库'
              : 'Empowering global students to secure admissions and full CSC scholarships at China’s top tier universities.'}
          </p>
        </div>

        {/* Right: Search Box */}
        <div className="w-full md:w-80">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-black">
              <Search className="w-5 h-5 stroke-[2.5]" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'zh' ? '搜索学员、专业、高校...' : 'Search student, major, school...'}
              className="w-full pl-11 pr-4 py-3 bg-white border-[2.5px] border-black rounded-2xl text-sm font-black placeholder-gray-500 shadow-[4px_4px_0px_#000000] focus:outline-none focus:shadow-[6px_6px_0px_#000000] transition-all"
            />
          </div>
        </div>
      </div>

      {/* =========================================================================
          STAT BENTO CARDS (Highlighting Results)
      ========================================================================= */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-[#FFE4E6] border-[2.5px] border-black rounded-3xl p-5 sm:p-6 shadow-[5px_5px_0px_#000000]">
          <div className="text-3xl sm:text-4xl font-black text-black">100+</div>
          <div className="text-xs sm:text-sm font-black text-rose-900 mt-1">
            {lang === 'zh' ? '顶尖大学录取案例' : 'Top Tier Admissions'}
          </div>
        </div>

        <div className="bg-[#FEF08A] border-[2.5px] border-black rounded-3xl p-5 sm:p-6 shadow-[5px_5px_0px_#000000]">
          <div className="text-3xl sm:text-4xl font-black text-black">98.5%</div>
          <div className="text-xs sm:text-sm font-black text-amber-900 mt-1">
            {lang === 'zh' ? '全额奖学金覆盖率' : 'Full Scholarship Rate'}
          </div>
        </div>

        <div className="bg-[#E0F2FE] border-[2.5px] border-black rounded-3xl p-5 sm:p-6 shadow-[5px_5px_0px_#000000]">
          <div className="text-3xl sm:text-4xl font-black text-black">25+</div>
          <div className="text-xs sm:text-sm font-black text-sky-900 mt-1">
            {lang === 'zh' ? '全球生源覆盖国家' : 'Student Origin Countries'}
          </div>
        </div>

        <div className="bg-[#DCFCE7] border-[2.5px] border-black rounded-3xl p-5 sm:p-6 shadow-[5px_5px_0px_#000000]">
          <div className="text-3xl sm:text-4xl font-black text-black">C9 / 985</div>
          <div className="text-xs sm:text-sm font-black text-emerald-900 mt-1">
            {lang === 'zh' ? '聚焦顶尖名校攻坚' : 'Targeting Elite Schools'}
          </div>
        </div>
      </div>

      {/* =========================================================================
          FILTER PILLS: Universities & Scholarships
      ========================================================================= */}
      <div className="space-y-4 bg-white border-[2.5px] border-black rounded-3xl p-5 sm:p-6 shadow-[5px_5px_0px_#000000]">
        {/* University Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-black text-gray-500 uppercase tracking-wider shrink-0 mr-1">
            {lang === 'zh' ? '高校筛选:' : 'University:'}
          </span>
          {universities.map((u) => (
            <button
              key={u.key}
              onClick={() => setSelectedUniversity(u.key)}
              className={`px-3.5 py-1.5 rounded-xl border-[2px] border-black text-xs font-black tracking-wide shrink-0 transition-all cursor-pointer ${
                selectedUniversity === u.key
                  ? 'bg-black text-white shadow-[2px_2px_0px_#FFC01E] -translate-y-0.5'
                  : 'bg-gray-50 text-black hover:bg-gray-100'
              }`}
            >
              {lang === 'zh' ? u.labelZh : u.labelEn}
            </button>
          ))}
        </div>

        {/* Scholarship Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-gray-200">
          <span className="text-xs font-black text-gray-500 uppercase tracking-wider shrink-0 mr-1">
            {lang === 'zh' ? '奖学金类别:' : 'Scholarship:'}
          </span>
          {scholarships.map((s) => (
            <button
              key={s.key}
              onClick={() => setSelectedScholarship(s.key)}
              className={`px-3.5 py-1.5 rounded-xl border-[2px] border-black text-xs font-black tracking-wide shrink-0 transition-all cursor-pointer ${
                selectedScholarship === s.key
                  ? 'bg-[#FFC01E] text-black shadow-[2px_2px_0px_#000000] -translate-y-0.5'
                  : 'bg-gray-50 text-black hover:bg-gray-100'
              }`}
            >
              {lang === 'zh' ? s.labelZh : s.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* =========================================================================
          OFFER CASE CARDS GRID
      ========================================================================= */}
      {filteredOffers.length === 0 ? (
        <div className="bg-white border-[2.5px] border-black rounded-3xl p-12 text-center shadow-[4px_4px_0px_#000000] space-y-3">
          <p className="text-xl font-black text-black">
            {lang === 'zh' ? '没有找到符合筛选条件的录取案例' : 'No matching admission cases found'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedUniversity('all');
              setSelectedScholarship('all');
            }}
            className="px-4 py-2 bg-[#FFC01E] border-2 border-black rounded-xl font-black text-sm cursor-pointer"
          >
            {lang === 'zh' ? '重置所有筛选' : 'Reset All Filters'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white border-[2.5px] border-black rounded-3xl p-6 shadow-[6px_6px_0px_#000000] hover:shadow-[9px_9px_0px_#000000] hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              {/* Card Top: Student Badge & Admission No */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b-2 border-dashed border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl" role="img" aria-label={offer.studentCountry}>
                      {offer.studentFlag}
                    </span>
                    <div>
                      <div className="font-black text-sm text-black leading-none">
                        {offer.studentName}
                      </div>
                      <div className="text-[10px] font-bold text-gray-500 mt-0.5">
                        {offer.studentCountry} · Class of {offer.year}
                      </div>
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 bg-black text-white text-[10px] font-mono font-black rounded-md">
                    {offer.badge}
                  </span>
                </div>

                {/* University Header with Logo Stamp */}
                <div className="mt-4 flex items-start gap-3">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center font-black text-white text-xs border-[2px] border-black shadow-[2px_2px_0px_#000000] shrink-0"
                    style={{ backgroundColor: offer.universityColor }}
                  >
                    {offer.universityLogoText}
                  </div>
                  <div>
                    <h3 className="font-black text-lg text-black leading-tight group-hover:text-[#E11D48] transition-colors">
                      {lang === 'zh' ? offer.universityZh : offer.university}
                    </h3>
                    <p className="text-xs font-bold text-gray-500 mt-0.5">
                      {offer.university}
                    </p>
                  </div>
                </div>

                {/* Degree & Major */}
                <div className="mt-4 p-3.5 bg-gray-50 rounded-2xl border-[1.5px] border-black space-y-1">
                  <div className="text-xs font-extrabold text-black flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-black stroke-[2.5]" />
                    <span>{lang === 'zh' ? offer.degreeZh : offer.degree}</span>
                  </div>
                  <div className="text-xs font-bold text-gray-700 leading-snug pl-5">
                    {lang === 'zh' ? offer.majorZh : offer.major}
                  </div>
                </div>

                {/* Scholarship Badge */}
                <div className="mt-3.5 p-3 rounded-2xl bg-[#FFFBEB] border-[1.5px] border-amber-400">
                  <div className="flex items-center gap-1.5 text-xs font-black text-amber-950">
                    <Award className="w-4 h-4 text-amber-600 stroke-[2.5] shrink-0" />
                    <span className="line-clamp-1">
                      {lang === 'zh' ? offer.scholarshipZh : offer.scholarship}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer: View Notice Button */}
              <div className="mt-6 pt-4 border-t-2 border-black flex items-center justify-between">
                <div className="text-[10px] font-mono text-gray-500 font-bold">
                  NO. {offer.admissionNo}
                </div>

                <button
                  onClick={() => onOpenAdmissionOffer(offer)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FFC01E] text-black font-black text-xs rounded-xl border-[2px] border-black shadow-[2px_2px_0px_#000000] hover:bg-black hover:text-white hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                >
                  <FileCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>{lang === 'zh' ? '查看录取通知书' : 'View Notice'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* =========================================================================
          CONSULTATION & GUIDANCE CTA BANNER
      ========================================================================= */}
      <section className="pt-6 sm:pt-8">
        <div className="bg-[#FEF08A] border-[3px] border-black rounded-3xl p-8 sm:p-12 shadow-[8px_8px_0px_#000000] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-black text-white text-xs font-black rounded-lg">
              {lang === 'zh' ? '2025/2026 申请季开启' : 'Admissions Open'}
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight">
              {lang === 'zh' ? '想要申请中国顶尖名校 & CSC 全额奖学金？' : 'Ready to apply to China’s top universities?'}
            </h2>
            <p className="text-sm sm:text-base font-bold text-gray-800 max-w-xl">
              {lang === 'zh'
                ? '提供一站式专业文书定制、导师匹配、CSC奖学金网申攻略与面试模拟，助力圆梦清北交复等中国顶级学府。'
                : 'End-to-end guidance including SOP crafting, professor outreach, CSC scholarship applications, and interview mock prep.'}
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="px-8 py-4 bg-black text-white font-black text-base rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_#FF5C67] hover:bg-[#E11D48] hover:-translate-y-1 transition-all cursor-pointer tracking-wide shrink-0"
          >
            {lang === 'zh' ? '预约留学咨询 🚀' : 'Book Consultation 🚀'}
          </button>
        </div>
      </section>
    </div>
  );
};
