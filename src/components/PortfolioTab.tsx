import React, { useState } from 'react';
import { ArrowRight, Filter, Sparkles, Layers, Eye } from 'lucide-react';
import { Language, ProjectItem } from '../types';
import { projectsData } from '../data/portfolioData';
import {
  LaptopMockupVector,
  UiUxDesignVector,
  ProductDesignVector,
  WebDesignVector,
} from './Illustrations';

interface PortfolioTabProps {
  lang: Language;
  onOpenProject: (project: ProjectItem) => void;
  onOpenContact: () => void;
}

export const PortfolioTab: React.FC<PortfolioTabProps> = ({
  lang,
  onOpenProject,
  onOpenContact,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelEn: 'All works', labelZh: '全部作品' },
    { id: 'uiux', labelEn: 'UI/UX Design', labelZh: '界面交互' },
    { id: 'mobile', labelEn: 'Mobile App', labelZh: '移动端' },
    { id: 'product', labelEn: 'Product Design', labelZh: '硬件与穿戴' },
    { id: 'saas', labelEn: 'SaaS Platform', labelZh: 'B端看板' },
    { id: 'web', labelEn: 'Web & Systems', labelZh: '设计系统' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 1. PORTFOLIO HERO (Exact match to Image 7) */}
      <section className="pt-6 sm:pt-10 text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block px-3.5 py-1.5 bg-[#FFC01E] border-2 border-black rounded-full shadow-[3px_3px_0px_#000000] text-xs font-black uppercase tracking-wider text-black">
          {lang === 'zh' ? '作品集 PORTFOLIO' : 'SELECTED WORKS'}
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-black">
          {lang === 'zh' ? '设计作品集' : 'Portfolio'}
        </h1>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto font-normal">
          {lang === 'zh'
            ? '聚焦真实业务指标与极致美学平衡。这里汇集了从数百万用户量级的消费级 App 到高精尖工业数据中台的深度设计实践。'
            : 'Lorem ipsum dolor sit amet dolor consectetur adipiscing elit ectus felis aliquet cursus magnaol dolori montes augue donec cras.'}
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-black border-2 border-black transition-all cursor-pointer ${
                  isActive
                    ? 'bg-black text-white shadow-[3px_3px_0px_#FF5C67] -translate-y-0.5'
                    : 'bg-white text-black hover:bg-gray-100 shadow-[2px_2px_0px_#000000]'
                }`}
              >
                {lang === 'zh' ? cat.labelZh : cat.labelEn}
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. PROJECTS LIST / GRID */}
      <section className="space-y-10">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="bg-white border-[2.5px] border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] transition-all"
          >
            {/* Visual Container */}
            <div
              className="w-full rounded-2xl border-[2.5px] border-black p-4 sm:p-10 flex items-center justify-center mb-8 cursor-pointer group"
              style={{ backgroundColor: project.bgColor }}
              onClick={() => onOpenProject(project)}
            >
              <div className="group-hover:scale-[1.02] transition-transform duration-300 w-full max-w-xl">
                {project.illustrationType === 'studio-laptop' ? (
                  <LaptopMockupVector />
                ) : project.illustrationType === 'ecommerce-mobile' ? (
                  <UiUxDesignVector />
                ) : project.illustrationType === 'fitness-app' ? (
                  <ProductDesignVector />
                ) : (
                  <WebDesignVector />
                )}
              </div>
            </div>

            {/* Bottom Info Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 bg-black text-white text-xs font-black rounded-full uppercase">
                    {lang === 'zh' ? project.categoryLabelZh : project.categoryLabel}
                  </span>
                  <span className="text-xs font-bold text-gray-500">
                    {lang === 'zh' ? `客户: ${project.client}` : `Client: ${project.client}`}
                  </span>
                  {project.metrics && project.metrics[0] && (
                    <span className="text-xs font-extrabold text-[#10B981] bg-[#ECFDF5] px-2.5 py-0.5 rounded-md border border-[#10B981]">
                      {project.metrics[0].label}: {project.metrics[0].value}
                    </span>
                  )}
                </div>

                <h3
                  onClick={() => onOpenProject(project)}
                  className="text-2xl sm:text-3xl font-black text-black tracking-tight hover:text-[#3884FF] transition-colors cursor-pointer"
                >
                  {lang === 'zh' ? project.titleZh : project.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {lang === 'zh' ? project.descriptionZh : project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-2.5 py-1 bg-gray-100 border border-black rounded-md text-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="lg:col-span-4 flex lg:justify-end">
                <button
                  onClick={() => onOpenProject(project)}
                  className="w-full sm:w-auto px-7 py-3.5 bg-black text-white font-black text-sm rounded-full border-2 border-black shadow-[4px_4px_0px_#FFC01E] hover:bg-[#3884FF] hover:shadow-[4px_4px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{lang === 'zh' ? '查看案例全解' : 'View case study'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom Inquire Box */}
      <section className="bg-[#FFC01E] border-[2.5px] border-black rounded-3xl p-8 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
        <h3 className="text-2xl sm:text-4xl font-black text-black tracking-tight">
          {lang === 'zh' ? '有想要一起实现的想法？' : 'Have an ambitious project in mind?'}
        </h3>
        <p className="text-gray-900 font-medium text-sm sm:text-base max-w-xl mx-auto">
          {lang === 'zh'
            ? '从 0 到 1 产品孵化、改版升级或设计系统统一，我都期待与你携手打造卓越体验。'
            : 'From zero-to-one product design to complete system overhaul, let’s build something users will truly love.'}
        </p>
        <div className="pt-2">
          <button
            onClick={onOpenContact}
            className="px-8 py-3.5 bg-black text-white font-black text-base rounded-full border-2 border-black shadow-[4px_4px_0px_#FFFFFF] hover:bg-[#FF5C67] hover:border-black active:translate-x-0.5 active:translate-y-0.5 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>{lang === 'zh' ? '预约项目档期' : 'Book a Consultation'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
