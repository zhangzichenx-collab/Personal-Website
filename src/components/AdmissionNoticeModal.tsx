import React, { useState } from 'react';
import { X, Award, ShieldCheck, Calendar, Download, Building, CheckCircle2, Globe2, Sparkles } from 'lucide-react';
import { StudyInChinaOffer, Language } from '../types';
import { pick } from '../i18n';

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
  const [imgErrorId, setImgErrorId] = useState<string | null>(null);
  if (!offer) return null;

  const details = offer.noticeDetails;
  const showPhoto = offer.imageUrl && imgErrorId !== offer.id;

  const badgeText = pick(
    lang,
    offer.badge,
    offer.badgeEn ?? 'Fall 2026',
    offer.badgeRu ?? offer.badgeEn ?? 'Fall 2026',
  );
  const universityName = pick(
    lang,
    offer.universityZh,
    offer.university,
    offer.universityRu ?? offer.university,
  );

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
            <div className="w-10 h-10 rounded-full bg-white text-black border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000]">
              <Award className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-lg tracking-tight leading-none">
                  {pick(
                    lang,
                    '录取通知书原件',
                    'Admission Letter',
                    'Оригинал уведомления о зачислении',
                  )}
                </h3>
                <span className="px-2 py-0.5 bg-white/20 text-white border border-white/40 text-[10px] font-extrabold rounded-full">
                  {badgeText}
                </span>
              </div>
              <p className="text-xs text-white/90 font-medium mt-1">
                {offer.studentFlag} {offer.studentCountry} · {offer.year}
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
          {showPhoto ? (
            <div className="bg-[#FFFDF8] border-2 border-[#C41230] rounded-2xl p-3 shadow-[4px_4px_0px_rgba(196,18,48,0.2)]">
              <img
                src={offer.imageUrl}
                alt={`${offer.studentName} · ${universityName} ${pick(
                  lang,
                  '录取通知书原件',
                  'Admission Letter',
                  'уведомление о зачислении',
                )}`}
                className="w-full rounded-xl"
                onError={() => setImgErrorId(offer.id)}
              />
            </div>
          ) : (
          <div className="relative bg-[#FFFDF8] border-2 border-[#C41230] rounded-2xl p-6 sm:p-8 shadow-[4px_4px_0px_rgba(196,18,48,0.2)] overflow-hidden">
            {/* Watermark Crest */}
            <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none select-none text-[120px] font-black font-serif text-[#C41230]">
              {offer.universityLogoText}
            </div>

            {/* Certificate Header */}
            <div className="text-center space-y-2 border-b-2 border-dashed border-[#C41230]/40 pb-5 mb-5">
              <div className="inline-block px-3 py-1 bg-[#C41230] text-white text-xs font-black rounded-full uppercase tracking-widest">
                {pick(
                  lang,
                  'ADMISSION NOTICE · 录取通知书',
                  'ADMISSION NOTICE',
                  'УВЕДОМЛЕНИЕ О ЗАЧИСЛЕНИИ',
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#8C0000] font-serif tracking-wide">
                {universityName}
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
                {pick(
                  lang,
                  <>尊敬的 <span className="underline decoration-2 decoration-[#C41230] font-sans font-black">{offer.studentName}</span> 同学 ({offer.studentFlag} {offer.studentCountry}):</>,
                  <>Dear <span className="underline decoration-2 decoration-[#C41230] font-sans font-black">{offer.studentName}</span> ({offer.studentFlag} {offer.studentCountry}):</>,
                  <>Уважаемый(ая) <span className="underline decoration-2 decoration-[#C41230] font-sans font-black">{offer.studentName}</span> ({offer.studentFlag} {offer.studentCountry}):</>,
                )}
              </p>

              <p className="indent-6 leading-relaxed">
                {pick(
                  lang,
                  details?.congratulationsZh ?? '',
                  details?.congratulationsEn ?? '',
                  details?.congratulationsRu ?? details?.congratulationsEn ?? '',
                )}
              </p>

              {/* Data Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 bg-white/80 border border-[#C41230]/30 rounded-xl p-4 font-sans text-xs">
                <div>
                  <span className="text-gray-500 block font-medium">
                    {pick(lang, '录取学院 / Faculty:', 'Faculty:', 'Факультет:')}
                  </span>
                  <span className="font-black text-black">
                    {pick(
                      lang,
                      details?.facultyZh ?? '',
                      details?.faculty ?? '',
                      details?.facultyRu ?? details?.faculty ?? '',
                    )}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block font-medium">
                    {pick(lang, '录取层次 / Degree:', 'Degree:', 'Степень:')}
                  </span>
                  <span className="font-black text-black">
                    {pick(
                      lang,
                      offer.degreeZh,
                      offer.degree,
                      offer.degreeRu ?? offer.degree,
                    )}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block font-medium">
                    {pick(lang, '所学专业 / Major:', 'Major:', 'Специальность:')}
                  </span>
                  <span className="font-black text-black">
                    {pick(
                      lang,
                      offer.majorZh,
                      offer.major,
                      offer.majorRu ?? offer.major,
                    )}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block font-medium">
                    {pick(lang, '报到时间 / Registration:', 'Registration:', 'Регистрация:')}
                  </span>
                  <span className="font-black text-black">{details?.reportingDate}</span>
                </div>
              </div>

              {/* Scholarship Highlight Banner */}
              <div className="bg-[#FEF2F2] border-2 border-[#C41230] rounded-xl p-4 space-y-1 font-sans">
                <div className="flex items-center gap-1.5 font-black text-xs text-[#C41230] uppercase">
                  <Award className="w-4 h-4 text-[#C41230]" />
                  <span>
                    {pick(
                      lang,
                      '已获全额资助奖学金类别',
                      'Granted Scholarship Award',
                      'Присуждённая стипендия',
                    )}
                  </span>
                </div>
                <h4 className="font-black text-sm text-black">
                  {pick(
                    lang,
                    offer.scholarshipZh,
                    offer.scholarship,
                    offer.scholarshipRu ?? offer.scholarship,
                  )}
                </h4>
                <p className="text-xs text-gray-700 font-medium">
                  {pick(
                    lang,
                    details?.scholarshipCoverageZh ?? '',
                    details?.scholarshipCoverageEn ?? '',
                    details?.scholarshipCoverageRu ?? details?.scholarshipCoverageEn ?? '',
                  )}
                </p>
              </div>

              {/* Official Seal / Signature Area */}
              <div className="pt-6 flex items-end justify-between border-t border-[#C41230]/30 text-xs font-sans">
                <div className="space-y-1 text-gray-500">
                  <div className="flex items-center gap-1 text-[#10B981] font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>
                      {pick(
                        lang,
                        '教育部留服中心与高校官方系统可核验',
                        'Verifiable via MOE Service Center & official university systems',
                        'Проверяется через сервисный центр Минобразования Китая и официальные системы вуза',
                      )}
                    </span>
                  </div>
                  <div>
                    {pick(lang, '签发日期:', 'Issue Date:', 'Дата выдачи:')} {details?.issueDate}
                  </div>
                </div>

                {/* Simulated Red Ink Seal */}
                <div className="relative flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full border-2 border-[#C41230] text-[#C41230] flex items-center justify-center p-1.5 text-center font-serif text-[10px] font-black leading-tight rotate-[-8deg] shadow-xs select-none">
                    {offer.universityZh}
                    <br />
                    {pick(lang, '招生办公室', 'Admissions Office', 'Приёмная комиссия')}
                    <br />
                    ★
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <div className="text-xs font-bold text-gray-500">
              {pick(
                lang,
                '想来华留学？联系我们规划你的申请方案',
                'Want to study in China? Contact us to plan your application',
                'Хотите учиться в Китае? Напишите нам — составим план поступления',
              )}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={onOpenContact}
                className="flex-1 sm:flex-initial px-5 py-2.5 bg-black text-white font-black text-xs rounded-full border-2 border-black shadow-[3px_3px_0px_#FFC01E] hover:bg-[#C41230] transition-all cursor-pointer"
              >
                {pick(
                  lang,
                  '咨询留学中国申请',
                  'Inquire Study in China',
                  'Узнать об учёбе в Китае',
                )}
              </button>

              <button
                onClick={() =>
                  alert(
                    pick(
                      lang,
                      '正在准备高清通知书 PDF 预览...',
                      'Preparing high-res notice preview...',
                      'Готовим PDF уведомления в высоком разрешении...',
                    ),
                  )
                }
                className="px-4 py-2.5 bg-white text-black font-black text-xs rounded-full border-2 border-black shadow-[2px_2px_0px_#000] hover:bg-gray-100 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{pick(lang, '保存凭证', 'Save', 'Сохранить')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
