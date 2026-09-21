import React from 'react';
import { X, ExternalLink, Calendar, CheckCircle, Tag, Layers, Palette, ArrowRight } from 'lucide-react';
import { ProjectItem, Language } from '../types';
import { LaptopMockupVector, UiUxDesignVector, ProductDesignVector, WebDesignVector } from './Illustrations';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  lang: Language;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  lang,
  onOpenContact,
}) => {
  if (!project) return null;

  const cs = project.caseStudy;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white border-[3px] border-black rounded-3xl p-6 sm:p-10 shadow-[10px_10px_0px_#000000] my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full border-2 border-black bg-gray-100 hover:bg-[#FF5C67] hover:text-white flex items-center justify-center transition-colors cursor-pointer z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header Tag */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-black text-white text-xs font-black uppercase rounded-full tracking-wider">
            {lang === 'zh' ? project.categoryLabelZh : project.categoryLabel}
          </span>
          <span className="text-xs font-bold text-gray-500">
            {lang === 'zh' ? `客户: ${project.client}` : `Client: ${project.client}`}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-4 text-black">
          {lang === 'zh' ? project.titleZh : project.title}
        </h2>

        {/* Hero Graphic Card inside Modal */}
        <div
          className="w-full rounded-2xl border-[2.5px] border-black p-6 mb-8 flex items-center justify-center shadow-[4px_4px_0px_#000000]"
          style={{ backgroundColor: project.bgColor }}
        >
          {project.illustrationType === 'studio-laptop' ? (
            <LaptopMockupVector className="w-full max-w-md max-h-64" />
          ) : project.illustrationType === 'ecommerce-mobile' ? (
            <UiUxDesignVector className="w-full max-w-xs max-h-64" />
          ) : project.illustrationType === 'fitness-app' ? (
            <ProductDesignVector className="w-full max-w-xs max-h-64" />
          ) : (
            <WebDesignVector className="w-full max-w-md max-h-64" />
          )}
        </div>

        {/* Metrics Row */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-8">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border-2 border-black rounded-2xl p-4 text-center shadow-[3px_3px_0px_#000000]"
              >
                <div className="text-2xl sm:text-3xl font-black text-black">{metric.value}</div>
                <div className="text-xs font-bold text-gray-600 uppercase mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Case Study Details */}
        <div className="space-y-6 text-black">
          {/* Overview */}
          <div>
            <h3 className="text-lg font-black flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3884FF]" />
              {lang === 'zh' ? '项目背景与全貌' : 'Project Overview'}
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {cs ? (lang === 'zh' ? cs.overviewZh : cs.overview) : (lang === 'zh' ? project.descriptionZh : project.description)}
            </p>
          </div>

          {/* Challenge & Solution */}
          {cs && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#FFF5F5] border-2 border-black rounded-2xl p-4 shadow-[2px_2px_0px_#000000]">
                <h4 className="font-extrabold text-sm mb-1.5 text-[#E11D48] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
                  {lang === 'zh' ? '核心痛点与挑战' : 'The Challenge'}
                </h4>
                <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                  {lang === 'zh' ? cs.challengeZh : cs.challenge}
                </p>
              </div>

              <div className="bg-[#F0FDF4] border-2 border-black rounded-2xl p-4 shadow-[2px_2px_0px_#000000]">
                <h4 className="font-extrabold text-sm mb-1.5 text-[#16A34A] flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#16A34A]" />
                  {lang === 'zh' ? '设计方案与交付' : 'The Solution'}
                </h4>
                <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                  {lang === 'zh' ? cs.solutionZh : cs.solution}
                </p>
              </div>
            </div>
          )}

          {/* Design System (Colors & Fonts) */}
          {cs && cs.colors && cs.colors.length > 0 && (
            <div>
              <h3 className="text-lg font-black flex items-center gap-2 mb-3">
                <Palette className="w-4 h-4 text-[#FF5C67]" />
                {lang === 'zh' ? '设计系统规范 (Colors & Tokens)' : 'Design Tokens'}
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                {cs.colors.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-gray-50 border-2 border-black px-3 py-1.5 rounded-xl shadow-[2px_2px_0px_#000000]"
                  >
                    <div
                      className="w-5 h-5 rounded-md border border-black"
                      style={{ backgroundColor: c }}
                    />
                    <span className="font-mono text-xs font-bold text-gray-800">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 border border-black rounded-lg text-xs font-bold text-gray-800"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action CTA */}
        <div className="mt-8 pt-6 border-t-2 border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-500 font-medium">
            {cs && (lang === 'zh' ? `职责：${cs.roleZh} · 周期：${cs.timeline}` : `Role: ${cs.role} · ${cs.timeline}`)}
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-black text-white font-extrabold rounded-xl border-2 border-black shadow-[3px_3px_0px_#FFC01E] hover:bg-[#FF5C67] hover:shadow-[3px_3px_0px_#000000] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{lang === 'zh' ? '咨询类似项目' : 'Inquire Similar Project'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
