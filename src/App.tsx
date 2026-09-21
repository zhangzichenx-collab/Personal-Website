import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { TabType, Language, ProjectItem, ArticleItem, VideoItem, StudyInChinaOffer } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeTab } from './components/HomeTab';
import { AboutTab } from './components/AboutTab';
import { PortfolioTab } from './components/PortfolioTab';
import { ArticlesTab } from './components/ArticlesTab';
import { VideosTab } from './components/VideosTab';
import { ProductsTab } from './components/ProductsTab';
import { StudyChinaTab } from './components/StudyChinaTab';
import { ContactModal } from './components/ContactModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ArticleModal } from './components/ArticleModal';
import { VibeFoodBlindboxModal } from './components/VibeFoodBlindboxModal';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { AdmissionNoticeModal } from './components/AdmissionNoticeModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [lang, setLang] = useState<Language>('zh');
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  // New states for Vibe Products, Videos, and Study in China
  const [isFoodModalOpen, setIsFoodModalOpen] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedOffer, setSelectedOffer] = useState<StudyInChinaOffer | null>(null);

  const handleNavigate = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F6F6F6] text-black font-sans flex flex-col selection:bg-[#FFC01E] selection:text-black">
      {/* Top Floating Navigation */}
      <div className="pt-4 sm:pt-6">
        <Navbar
          activeTab={activeTab}
          setActiveTab={handleNavigate}
          lang={lang}
          setLang={setLang}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </div>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <HomeTab
                onNavigate={handleNavigate}
                lang={lang}
                onOpenContact={() => setIsContactOpen(true)}
                onOpenArticle={(article) => setSelectedArticle(article)}
                onOpenVideo={(video) => setSelectedVideo(video)}
                onOpenFoodModal={() => setIsFoodModalOpen(true)}
                onOpenAdmissionOffer={(offer) => setSelectedOffer(offer)}
              />
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <AboutTab
                onNavigate={handleNavigate}
                lang={lang}
                onOpenContact={() => setIsContactOpen(true)}
              />
            </motion.div>
          )}

          {activeTab === 'articles' && (
            <motion.div
              key="articles"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <ArticlesTab
                lang={lang}
                onOpenArticle={(article) => setSelectedArticle(article)}
              />
            </motion.div>
          )}

          {activeTab === 'videos' && (
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <VideosTab
                onNavigate={handleNavigate}
                lang={lang}
                onOpenVideo={(video) => setSelectedVideo(video)}
              />
            </motion.div>
          )}

          {activeTab === 'products' && (
            <motion.div
              key="products"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <ProductsTab
                onNavigate={handleNavigate}
                lang={lang}
                onOpenProduct={(product) => {
                  if (product.id === 'what-to-eat') {
                    setIsFoodModalOpen(true);
                  } else {
                    // For other products, open contact or preview
                    setIsFoodModalOpen(true);
                  }
                }}
              />
            </motion.div>
          )}

          {activeTab === 'study-china' && (
            <motion.div
              key="study-china"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <StudyChinaTab
                onNavigate={handleNavigate}
                lang={lang}
                onOpenAdmissionOffer={(offer) => setSelectedOffer(offer)}
                onOpenContact={() => setIsContactOpen(true)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Footer with Newsletter Banner & Navigation */}
      <Footer
        onNavigate={handleNavigate}
        lang={lang}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        lang={lang}
      />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        lang={lang}
      />

      {/* Vibe Coding Product 1 Modal: 等会儿吃啥？ */}
      <VibeFoodBlindboxModal
        isOpen={isFoodModalOpen}
        onClose={() => setIsFoodModalOpen(false)}
        lang={lang}
      />

      {/* Video Player Modal with Bullet Danmaku */}
      <VideoPlayerModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        lang={lang}
      />

      {/* Study in China Admission Letter Inspector Modal */}
      <AdmissionNoticeModal
        offer={selectedOffer}
        onClose={() => setSelectedOffer(null)}
        lang={lang}
        onOpenContact={() => {
          setSelectedOffer(null);
          setIsContactOpen(true);
        }}
      />
    </div>
  );
}
