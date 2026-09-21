import React from 'react';
import { X, Award, ShieldCheck, Calendar, Download, Building, CheckCircle2, Globe2, Sparkles } from 'lucide-react';
import { StudyInChinaOffer, Language } from '../types';

interface AdmissionNoticeModalProps {
  offer: StudyInChinaOffer | null;
  onClose: () => void;
  lang: Language;
  onOpenContact: () => void;
}

export const AdmissionNoticeModal: React.FC<AdmissionNoticeModalProps> = ({
  offer,
  onClose,
  lang,
  onOpenContact,
}) => {
  if (!offer) return null;

  const details = offer.noticeDetails;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in overflow-y-auto">
      <div
        className="bg-white border-[3px] border-black rounded-3xl w-full max-w-2xl shadow-[8px_8px_0px_#000000] overflow-hidden flex flex-col relative my-6 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div
          className="border-b-[2.5px] border-black px-6 py-4 flex items-center justify-between text-white"
          style={{ backgroundColor: offer.universityColor }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white text-black border-2 border-black flex items-center justify-center font-black text-xs shadow-[2px_2px_0px_#000]">
              {offer.universityLogoText}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-lg tracking-tight leading-none">
                  {lang === 'zh' ? offer.universityZh : offer.university}
                </h3>
                <span className="px-2 py-0.5 bg-white/20 text-white border border-white/40 text-[10px] font-extrabold rounded-full">
                  {offer.badge}
                </span>
              </div>
              <p className="text-xs text-white/90 font-medium mt-1">
                {lang === 'zh' ? '正式留学生录取通知书原件' : 'Official International Admission Notice'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white text-black border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer shadow-[2px_2px_0px_#000]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          {/* Official Letterhead / Certificate Replica Box */}
          <div className="relative bg-[#FFFDF8] border-2 border-[#C41230] rounded-2xl p-6 sm:p-8 shadow-[4px_4px_0px_rgba(196,18,48,0.2)] overflow-hidden">
            {/* Watermark Crest */}
            <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none select-none text-[120px] font-black font-serif text-[#C41230]">
              {offer.universityLogoText}
            </div>

            {/* Certificate Header */}
            <div className="text-center space-y-2 border-b-2 border-dashed border-[#C41230]/40 pb-5 mb-5">
              <div className="inline-block px-3 py-1 bg-[#C41230] text-white text-xs font-black rounded-full uppercase tracking-widest">
                ADMISSION NOTICE · 录取通知书
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#8C0000] font-serif tracking-wide">
                {offer.universityZh}
              </h2>
              <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider font-sans">
                {offer.university}
              </p>
              <div className="text-[11px] font-mono font-bold text-gray-500 pt-1">
                NO. {offer.admissionNo}
              </div>
            </div>

            {/* Student & Degree Details */}
            <div className="space-y-4 text-xs sm:text-sm text-gray-800 leading-relaxed font-serif">
              <p className="font-bold text-base text-black">
                尊敬的 <span className="underline decoration-2 decoration-[#C41230] font-sans font-black">{offer.studentName}</span> 同学 ({offer.studentFlag} {offer.studentCountry}):
              </p>

              <p className="indent-6 leading-relaxed">
                {details?.congratulationsZh}
              </p>

              {/* Data Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 bg-white/80 border border-[#C41230]/30 rounded-xl p-4 font-sans text-xs">
                <div>
                  <span className="text-gray-500 block font-medium">录取学院 / Faculty:</span>
                  <span className="font-black text-black">{details?.facultyZh}</span>
                </div>
                <div>
                  <span className="text-gray-500 block font-medium">录取层次 / Degree:</span>
                  <span className="font-black text-black">{offer.degreeZh}</span>
                </div>
                <div>
                  <span className="text-gray-500 block font-medium">所学专业 / Major:</span>
                  <span className="font-black text-black">{offer.majorZh}</span>
                </div>
                <div>
                  <span className="text-gray-500 block font-medium">报到时间 / Registration:</span>
                  <span className="font-black text-black">{details?.reportingDate}</span>
                </div>
              </div>

              {/* Scholarship Highlight Banner */}
              <div className="bg-[#FEF2F2] border-2 border-[#C41230] rounded-xl p-4 space-y-1 font-sans">
                <div className="flex items-center gap-1.5 font-black text-xs text-[#C41230] uppercase">
                  <Award className="w-4 h-4 text-[#C41230]" />
                  <span>{lang === 'zh' ? '已获全额资助奖学金类别' : 'Granted Scholarship Award'}</span>
                </div>
                <h4 className="font-black text-sm text-black">
                  {offer.scholarshipZh}
                </h4>
                <p className="text-xs text-gray-700 font-medium">
                  {details?.scholarshipCoverageZh}
                </p>
              </div>

              {/* Official Seal / Signature Area */}
              <div className="pt-6 flex items-end justify-between border-t border-[#C41230]/30 text-xs font-sans">
                <div className="space-y-1 text-gray-500">
                  <div className="flex items-center gap-1 text-[#10B981] font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>教育部留服中心与高校官方系统可核验</span>
                  </div>
                  <div>签发日期: {details?.issueDate}</div>
                </div>

                {/* Simulated Red Ink Seal */}
                <div className="relative flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full border-2 border-[#C41230] text-[#C41230] flex items-center justify-center p-1.5 text-center font-serif text-[10px] font-black leading-tight rotate-[-8deg] shadow-xs select-none">
                    {offer.universityZh}
                    <br />
                    招生办公室
                    <br />
                    ★
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <div className="text-xs font-bold text-gray-500">
              想申请同类中国顶尖名校 CSC 全额奖学金？
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={onOpenContact}
                className="flex-1 sm:flex-initial px-5 py-2.5 bg-black text-white font-black text-xs rounded-full border-2 border-black shadow-[3px_3px_0px_#FFC01E] hover:bg-[#C41230] transition-all cursor-pointer"
              >
                {lang === 'zh' ? '咨询留学中国申请' : 'Inquire Study in China'}
              </button>

              <button
                onClick={() => alert(lang === 'zh' ? '正在准备高清通知书 PDF 预览...' : 'Preparing high-res notice preview...')}
                className="px-4 py-2.5 bg-white text-black font-black text-xs rounded-full border-2 border-black shadow-[2px_2px_0px_#000] hover:bg-gray-100 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'zh' ? '保存凭证' : 'Save'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
