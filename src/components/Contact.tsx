import React, { useState } from 'react';
import { contactData } from '../data/portfolioData';
import { Phone, Mail, Users2, Send, Check, Copy, CheckCircle2, MapPin, Code2 } from 'lucide-react';

interface ContactProps {
  onShowToast: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    consent: true,
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
    if (!formData.firstName || !formData.email || !formData.message) {
      onShowToast('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast('Message sent successfully! I will reply shortly.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        consent: true,
      });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 900);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-20 md:py-28 relative overflow-hidden text-center"
    >
      {/* Massive Bold Background Typography "CONTACT" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] z-0 select-none overflow-hidden">
        <span className="font-display text-[120px] sm:text-[200px] lg:text-[280px] font-black text-white whitespace-nowrap leading-none text-center">
          CONTACT
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="space-y-4 mb-14">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ff4b22]">
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">
            Let&apos;s Build Something Great.
          </h2>

          <p className="text-sm sm:text-base text-[#e5e2e1]/75 max-w-xl mx-auto leading-relaxed">
            I&apos;m actively available for internships and full-time opportunities. Drop a message or connect directly!
          </p>
        </div>

        {/* 4 Quick Direct Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {/* Phone */}
          <div
            id="contact-card-phone"
            className="bento-card p-6 rounded-2xl flex flex-col items-center justify-center group cursor-pointer hover:border-[#ff4b22]/50"
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

          {/* Email */}
          <div
            id="contact-card-email"
            className="bento-card p-6 rounded-2xl flex flex-col items-center justify-center group cursor-pointer hover:border-[#ff4b22]/50"
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

          {/* LinkedIn */}
          <a
            id="contact-card-linkedin"
            href={contactData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="bento-card p-6 rounded-2xl flex flex-col items-center justify-center group hover:border-[#ff4b22]/50"
          >
            <div className="p-3 rounded-full bg-[#ff4b22]/10 mb-3 group-hover:scale-110 group-hover:bg-[#ff4b22]/20 transition-all">
              <Users2 className="w-6 h-6 text-[#ff4b22]" />
            </div>
            <span className="text-white font-semibold text-xs sm:text-sm tracking-wide truncate max-w-full">
              {contactData.linkedinDisplay}
            </span>
            <span className="text-[11px] text-white/40 mt-1 group-hover:text-[#ff4b22]">
              Connect on LinkedIn &rarr;
            </span>
          </a>

          {/* GitHub */}
          <a
            id="contact-card-github"
            href={contactData.github}
            target="_blank"
            rel="noreferrer"
            className="bento-card p-6 rounded-2xl flex flex-col items-center justify-center group hover:border-[#ff4b22]/50"
          >
            <div className="p-3 rounded-full bg-[#ff4b22]/10 mb-3 group-hover:scale-110 group-hover:bg-[#ff4b22]/20 transition-all">
              <Code2 className="w-6 h-6 text-[#ff4b22]" />
            </div>
            <span className="text-white font-semibold text-xs sm:text-sm tracking-wide truncate max-w-full">
              github.com/kishorkankanala
            </span>
            <span className="text-[11px] text-white/40 mt-1 group-hover:text-[#ff4b22]">
              Explore GitHub &rarr;
            </span>
          </a>
        </div>

        {/* Interactive Contact Form with Split Layout */}
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="bento-card p-8 sm:p-12 rounded-3xl text-left relative overflow-hidden"
        >
          {isSubmitted && (
            <div className="p-4 mb-6 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3 animate-fadeIn">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Thank you! Your message has been sent successfully. I will respond to your email promptly.</span>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Inputs */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-first-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    id="contact-first-name"
                    type="text"
                    required
                    placeholder="Kishor"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/25 focus:border-[#ff4b22] focus:ring-1 focus:ring-[#ff4b22] outline-none text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-last-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="contact-last-name"
                    type="text"
                    placeholder="Kankanala"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/25 focus:border-[#ff4b22] focus:ring-1 focus:ring-[#ff4b22] outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2"
                >
                  Email Address *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/25 focus:border-[#ff4b22] focus:ring-1 focus:ring-[#ff4b22] outline-none text-sm"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-3 pt-2">
                <input
                  id="contact-consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="w-4 h-4 rounded border-white/20 text-[#ff4b22] focus:ring-[#ff4b22] bg-[#080808]"
                />
                <label htmlFor="contact-consent" className="text-xs text-white/60 select-none">
                  I give permission to contact me at this email address.
                </label>
              </div>
            </div>

            {/* Right Message Box & Submit */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/25 focus:border-[#ff4b22] focus:ring-1 focus:ring-[#ff4b22] outline-none text-sm resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-[11px] text-white/40">
                  Typically replies within 12-24 hours.
                </p>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#ff4b22] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#e03a13] hover:scale-105 active:scale-95 transition-all duration-200 glow-effect flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,75,34,0.35)] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
