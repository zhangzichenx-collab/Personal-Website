import React, { useState } from 'react';
import { X, Send, CheckCircle2, Mail, User, MessageSquare, Briefcase } from 'lucide-react';
import { Language } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'UI/UX Design',
    budget: '$5k - $10k',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white border-[3px] border-black rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_#000000] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full border-2 border-black bg-gray-100 hover:bg-[#FF5C67] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#ECFDF5] border-2 border-[#10B981] flex items-center justify-center mb-4 text-[#10B981]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black mb-2">
              {lang === 'zh' ? '消息已送达！' : 'Message Sent Successfully!'}
            </h3>
            <p className="text-gray-600 text-sm max-w-xs">
              {lang === 'zh'
                ? '感谢你的来信，我会在 24 小时内回复你的邮件。'
                : 'Thank you for reaching out! John will get back to you within 24 hours.'}
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-[#FFC01E] border-2 border-black rounded-lg text-xs font-black uppercase tracking-wider mb-2">
                {lang === 'zh' ? '即刻沟通' : 'Let’s Collaborate'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                {lang === 'zh' ? '开启你的新项目' : 'Get in touch'}
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                {lang === 'zh'
                  ? '有关于产品设计、品牌重塑或团队咨询的想法？填写下方表单，我们即刻展开讨论。'
                  : 'Have a project in mind or just want to say hi? Drop a message below.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold uppercase mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  {lang === 'zh' ? '你的称呼' : 'Your Name'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={lang === 'zh' ? '例如：张先生 / Sarah' : 'e.g. Sarah Jenkins'}
                  className="w-full px-4 py-2.5 bg-gray-50 border-2 border-black rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_#000000] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  {lang === 'zh' ? '工作邮箱' : 'Email Address'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 bg-gray-50 border-2 border-black rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_#000000] transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold uppercase mb-1.5 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    {lang === 'zh' ? '项目类型' : 'Project Scope'}
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3 py-2.5 bg-gray-50 border-2 border-black rounded-xl text-xs font-bold focus:outline-none focus:bg-white"
                  >
                    <option value="UI/UX Design">{lang === 'zh' ? 'UI/UX 交互设计' : 'UI/UX Design'}</option>
                    <option value="Web Design">{lang === 'zh' ? '网页设计与搭建' : 'Web Design'}</option>
                    <option value="Product Strategy">{lang === 'zh' ? '产品全流程策略' : 'Product Strategy'}</option>
                    <option value="Design System">{lang === 'zh' ? '设计系统构建' : 'Design System'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase mb-1.5">
                    {lang === 'zh' ? '预算范围' : 'Budget Expectation'}
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 py-2.5 bg-gray-50 border-2 border-black rounded-xl text-xs font-bold focus:outline-none focus:bg-white"
                  >
                    <option value="< $5k">&lt; $5,000</option>
                    <option value="$5k - $10k">$5,000 - $10,000</option>
                    <option value="$10k - $25k">$10,000 - $25,000</option>
                    <option value="$25k+">$25,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  {lang === 'zh' ? '项目简述' : 'Project Details'}
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={lang === 'zh' ? '请简要说明项目目标与预期交付时间...' : 'Briefly describe your goals, timeline, and deliverables...'}
                  className="w-full px-4 py-2.5 bg-gray-50 border-2 border-black rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_#000000] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-black text-white font-black text-base rounded-2xl border-2 border-black shadow-[4px_4px_0px_#FF5C67] hover:bg-[#FF5C67] hover:shadow-[4px_4px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'zh' ? '发送咨询信息' : 'Send Message'}</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
