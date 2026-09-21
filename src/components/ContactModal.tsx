import React from 'react';
import { X, Mail, MessageCircle, Copy, Check } from 'lucide-react';
import { Language } from '../types';
import { pick } from '../i18n';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, lang }) => {
  const [copied, setCopied] = React.useState<'wechat' | 'email' | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, type: 'wechat' | 'email') => {
    navigator.clipboard?.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const contacts = [
    {
      type: 'wechat' as const,
      label: pick(lang, '微信', 'WeChat', 'WeChat'),
      value: 'YiChen_766',
      icon: <MessageCircle className="w-6 h-6" />,
      bg: 'bg-[#3884FF]',
      hoverBg: 'hover:bg-[#3884FF]',
    },
    {
      type: 'email' as const,
      label: pick(lang, '邮箱', 'Email', 'Email'),
      value: 'zhangzichenx@gmail.com',
      icon: <Mail className="w-6 h-6" />,
      bg: 'bg-[#FF5C67]',
      hoverBg: 'hover:bg-[#FF5C67]',
    },
  ];

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

        {/* Header */}
        <div className="mb-6">
          <div className="inline-block px-3 py-1 bg-[#FFC01E] border-2 border-black rounded-lg text-xs font-black uppercase tracking-wider mb-2">
            {pick(lang, '即刻沟通', "Let's Connect", 'На связи')}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            {pick(lang, '保持联系', 'Get in Touch', 'Связаться со мной')}
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            {pick(
              lang,
              '想聊聊产品、合作或者只是打个招呼？随时通过以下方式找到我。',
              'Want to talk product, collaboration, or just say hi? Reach out anytime through the channels below.',
              'Хотите обсудить продукт, сотрудничество или просто поздороваться? Пишите любым из способов ниже.',
            )}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-4">
          {contacts.map((c) => (
            <div
              key={c.type}
              className={`group relative flex items-center gap-4 p-4 sm:p-5 bg-gray-50 border-[2.5px] border-black rounded-2xl shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all`}
            >
              {/* Icon Badge */}
              <div
                className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${c.bg} text-white border-[2.5px] border-black flex items-center justify-center shadow-[2px_2px_0px_#000000]`}
              >
                {c.icon}
              </div>

              {/* Label + Value */}
              <div className="flex-1 min-w-0">
                <div className="text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-0.5">
                  {c.label}
                </div>
                <div className="text-base sm:text-lg font-black text-black truncate">
                  {c.value}
                </div>
              </div>

              {/* Copy Button */}
              <button
                onClick={() => handleCopy(c.value, c.type)}
                className={`flex-shrink-0 w-10 h-10 rounded-xl border-2 border-black flex items-center justify-center transition-all cursor-pointer ${
                  copied === c.type
                    ? 'bg-[#10B981] text-white'
                    : 'bg-white text-black hover:bg-black hover:text-white'
                }`}
                aria-label={`Copy ${c.label}`}
                title={`Copy ${c.label}`}
              >
                {copied === c.type ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <a
          href="mailto:zhangzichenx@gmail.com"
          className="mt-5 w-full py-3.5 bg-black text-white font-black text-base rounded-2xl border-2 border-black shadow-[4px_4px_0px_#FF5C67] hover:bg-[#FF5C67] hover:shadow-[4px_4px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Mail className="w-4 h-4" />
          <span>{pick(lang, '直接发邮件', 'Send an Email', 'Написать на почту')}</span>
        </a>

        <p className="text-center text-xs text-gray-400 mt-4 font-medium">
          {pick(
            lang,
            '通常在 24 小时内回复',
            'Usually replies within 24 hours',
            'Обычно отвечаю в течение 24 часов',
          )}
        </p>
      </div>
    </div>
  );
};
