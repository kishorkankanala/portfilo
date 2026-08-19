import React, { useState } from 'react';
import { contactData } from '../data/portfolioData';
import { Phone, Mail, Users2, Send, Check, Copy, Sparkles, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  onShowToast: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onShowToast(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill out all fields before sending.');
      return;
    }

    setIsSubmitting(true);
    // Simulate sending email
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast('Message sent successfully! Thank you for reaching out.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-20 md:py-28 relative overflow-hidden text-center"
    >
      {/* Background Ghost Text "GET IN TOUCH" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] z-0 select-none overflow-hidden">
        <span className="font-display text-[110px] sm:text-[180px] lg:text-[230px] font-black text-white whitespace-nowrap leading-none text-center transform -rotate-2">
          GET IN TOUCH
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="space-y-4 mb-14">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ff4b22]">
            <Sparkles className="w-4 h-4" />
            <span>Connect With Me</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let&apos;s Build Something Great.
          </h2>

          <p className="text-sm sm:text-base text-[#e5e2e1]/75 max-w-xl mx-auto leading-relaxed">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>

        {/* 3 Quick Contact Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {/* Phone Card */}
          <div
            id="contact-card-phone"
            className="bento-card p-6 rounded-2xl flex flex-col items-center justify-center group relative cursor-pointer hover:border-[#ff4b22]/50"
            onClick={() => handleCopy(contactData.phone, 'Phone number')}
          >
            <div className="p-3 rounded-full bg-[#ff4b22]/10 mb-3 group-hover:scale-110 group-hover:bg-[#ff4b22]/20 transition-all">
              <Phone className="w-6 h-6 text-[#ff4b22]" />
            </div>
            <span className="text-white font-semibold text-sm tracking-wide">
              {contactData.displayPhone}
            </span>
            <span className="text-[11px] text-white/40 mt-1 flex items-center gap-1 group-hover:text-[#ff4b22]">
              {copiedField === 'Phone number' ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" /> Click to Copy / Call
                </>
              )}
            </span>
          </div>

          {/* Email Card */}
          <div
            id="contact-card-email"
            className="bento-card p-6 rounded-2xl flex flex-col items-center justify-center group relative cursor-pointer hover:border-[#ff4b22]/50"
            onClick={() => handleCopy(contactData.email, 'Email address')}
          >
            <div className="p-3 rounded-full bg-[#ff4b22]/10 mb-3 group-hover:scale-110 group-hover:bg-[#ff4b22]/20 transition-all">
              <Mail className="w-6 h-6 text-[#ff4b22]" />
            </div>
            <span className="text-white font-semibold text-xs sm:text-sm tracking-wide truncate max-w-full">
              {contactData.email}
            </span>
            <span className="text-[11px] text-white/40 mt-1 flex items-center gap-1 group-hover:text-[#ff4b22]">
              {copiedField === 'Email address' ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" /> Click to Copy
                </>
              )}
            </span>
          </div>

          {/* LinkedIn Card */}
          <a
            id="contact-card-linkedin"
            href={contactData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="bento-card p-6 rounded-2xl flex flex-col items-center justify-center group relative hover:border-[#ff4b22]/50"
          >
            <div className="p-3 rounded-full bg-[#ff4b22]/10 mb-3 group-hover:scale-110 group-hover:bg-[#ff4b22]/20 transition-all">
              <Users2 className="w-6 h-6 text-[#ff4b22]" />
            </div>
            <span className="text-white font-semibold text-xs sm:text-sm tracking-wide truncate max-w-full">
              {contactData.linkedinDisplay}
            </span>
            <span className="text-[11px] text-white/40 mt-1 group-hover:text-[#ff4b22]">
              View LinkedIn Profile &rarr;
            </span>
          </a>
        </div>

        {/* Contact Form */}
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="bento-card p-8 sm:p-10 rounded-2xl max-w-2xl mx-auto text-left space-y-5 relative"
        >
          {isSubmitted && (
            <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3 animate-fadeIn">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Thank you! Your message has been sent. I will respond to your email promptly.</span>
            </div>
          )}

          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-2"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:border-[#ff4b22] focus:ring-1 focus:ring-[#ff4b22] transition-colors outline-none text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-2"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:border-[#ff4b22] focus:ring-1 focus:ring-[#ff4b22] transition-colors outline-none text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-2"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              placeholder="Your message here..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:border-[#ff4b22] focus:ring-1 focus:ring-[#ff4b22] transition-colors outline-none text-sm resize-none"
            />
          </div>

          <button
            id="contact-submit-btn"
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#ff4b22] text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-[#e03a13] transition-all duration-300 glow-effect flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,75,34,0.35)] disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="animate-pulse">Sending message...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
