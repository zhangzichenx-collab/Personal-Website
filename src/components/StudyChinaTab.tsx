import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Language, TabType, StudyInChinaOffer } from "../types";
import { studyInChinaOffersData } from "../data/portfolioData";
import { OfferCard } from "./OfferCard";
import { pick } from "../i18n";

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
  const [searchQuery, setSearchQuery] = useState("");
  const filteredOffers = useMemo(() => {
    return studyInChinaOffersData.filter((offer) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery.trim() === "" ||
        offer.studentName.toLowerCase().includes(q) ||
        offer.studentCountry.toLowerCase().includes(q) ||
        offer.university.toLowerCase().includes(q) ||
        offer.universityZh.toLowerCase().includes(q) ||
        (offer.universityRu?.toLowerCase().includes(q) ?? false) ||
        offer.major.toLowerCase().includes(q) ||
        offer.majorZh.toLowerCase().includes(q) ||
        (offer.majorRu?.toLowerCase().includes(q) ?? false);

      return matchesSearch;
    });
  }, [searchQuery]);

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
              {pick(lang, "留学中国", "Study in China", "Учёба в Китае")}
            </h1>
            <div className="inline-block bg-[#E11D48] text-white px-4 sm:px-6 py-1 sm:py-2 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_#000000] rotate-[-2deg]">
              <span className="text-3xl sm:text-5xl font-black tracking-tight">
                {pick(lang, "成果案例", "Success Cases", "Истории успеха")}
              </span>
            </div>
          </div>
          <p className="text-base sm:text-lg font-bold text-gray-700">
            {pick(
              lang,
              "真实录取通知书案例库 · 语言生到学位申请，材料辅导到签证落地全程陪伴",
              "A real admission letter gallery — from language programs to degrees, guided end to end.",
              "Галерея настоящих уведомлений о зачислении — от языковых курсов до степеней, полное сопровождение до приезда.",
            )}
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
              placeholder={pick(
                lang,
                "搜索学员、专业、高校...",
                "Search student, major, school...",
                "Поиск: студент, специальность, вуз...",
              )}
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
          <div className="text-3xl sm:text-4xl font-black text-black">8</div>
          <div className="text-xs sm:text-sm font-black text-rose-900 mt-1">
            {pick(
              lang,
              "录取通知书原件",
              "Original Letters",
              "Оригиналов уведомлений",
            )}
          </div>
        </div>

        <div className="bg-[#FEF08A] border-[2.5px] border-black rounded-3xl p-5 sm:p-6 shadow-[5px_5px_0px_#000000]">
          <div className="text-3xl sm:text-4xl font-black text-black">
            88.9%
          </div>
          <div className="text-xs sm:text-sm font-black text-amber-900 mt-1">
            {pick(lang, "申请成功率", "Success Rate", "Процент зачисления")}
          </div>
        </div>

        <div className="bg-[#E0F2FE] border-[2.5px] border-black rounded-3xl p-5 sm:p-6 shadow-[5px_5px_0px_#000000]">
          <div className="text-3xl sm:text-4xl font-black text-black">
            {pick(lang, "2026秋", "Fall 2026", "Осень 2026")}
          </div>
          <div className="text-xs sm:text-sm font-black text-sky-900 mt-1">
            {pick(lang, "最新入学批次", "Latest Intake", "Последний набор")}
          </div>
        </div>

        <div className="bg-[#DCFCE7] border-[2.5px] border-black rounded-3xl p-5 sm:p-6 shadow-[5px_5px_0px_#000000]">
          <div className="text-3xl sm:text-4xl font-black text-black">1+</div>
          <div className="text-xs sm:text-sm font-black text-emerald-900 mt-1">
            {pick(
              lang,
              "覆盖生源国（持续增加）",
              "Origin Countries",
              "Стран студентов",
            )}
          </div>
        </div>
      </div>

      {/* =========================================================================
          OFFER CASE CARDS GRID
      ========================================================================= */}
      {filteredOffers.length === 0 ? (
        <div className="bg-white border-[2.5px] border-black rounded-3xl p-12 text-center shadow-[4px_4px_0px_#000000] space-y-3">
          <p className="text-xl font-black text-black">
            {pick(
              lang,
              "没有找到符合筛选条件的录取案例",
              "No matching admission cases found",
              "Подходящие случаи зачисления не найдены",
            )}
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="px-4 py-2 bg-[#FFC01E] border-2 border-black rounded-xl font-black text-sm cursor-pointer"
          >
            {pick(
              lang,
              "重置所有筛选",
              "Reset All Filters",
              "Сбросить все фильтры",
            )}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredOffers.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              lang={lang}
              onOpen={onOpenAdmissionOffer}
            />
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
              {pick(
                lang,
                "2025/2026 申请季开启",
                "Admissions Open",
                "Набор на 2025/2026 открыт",
              )}
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight">
              {pick(
                lang,
                "想来中国留学？",
                "Want to study in China?",
                "Хотите учиться в Китае?",
              )}
            </h2>
            <p className="text-sm sm:text-base font-bold text-gray-800 max-w-xl">
              {pick(
                lang,
                "提供一站式院校规划、文书定制、签证材料辅导与行前指南，助力顺利来华入学。",
                "End-to-end guidance including school planning, document crafting, visa materials, and pre-departure support.",
                "Сопровождение под ключ: подбор вузов, подготовка документов, визовая поддержка и инструктаж перед отъездом.",
              )}
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="px-8 py-4 bg-black text-white font-black text-base rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_#FF5C67] hover:bg-[#E11D48] hover:-translate-y-1 transition-all cursor-pointer tracking-wide shrink-0"
          >
            {pick(
              lang,
              "预约留学咨询 🚀",
              "Book Consultation 🚀",
              "Записаться на консультацию 🚀",
            )}
          </button>
        </div>
      </section>
    </div>
  );
};
