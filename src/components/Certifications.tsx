import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { certificationsList } from '../data/portfolioData';
import { Certification } from '../types';
import { Award, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section
      id="certifications"
      aria-label="Professional Certifications"
      className="py-20 md:py-28 relative"
    >
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ff4b22]">
          <ShieldCheck className="w-4 h-4" />
          <span>Verified Credentials</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Certifications
        </h2>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-center">
        {certificationsList.map((cert) => (
          <div
            key={cert.id}
            id={`cert-card-${cert.id}`}
            onClick={() => setSelectedCert(cert)}
            className="bento-card cert-card p-6 sm:p-7 rounded-2xl flex flex-col items-center justify-center group cursor-pointer relative overflow-hidden"
          >
            {/* Ambient Badge Icon */}
            <div className="p-3.5 rounded-full bg-[#ff4b22]/10 border border-[#ff4b22]/20 mb-4 group-hover:bg-[#ff4b22]/20 group-hover:scale-110 transition-all duration-300">
              <Award className="w-8 h-8 text-[#ff4b22]" />
            </div>

            {/* Title */}
            <h3 className="font-display text-base font-semibold text-white group-hover:text-[#ff4b22] transition-colors leading-snug">
              {cert.title}
            </h3>

            {/* Issuer */}
            <p className="text-xs text-[#e5e2e1]/60 mt-2 font-medium">
              {cert.issuer}
            </p>

            {/* Verified Badge */}
            <div className="mt-4 pt-3 border-t border-white/5 w-full flex items-center justify-center gap-1 text-[11px] text-[#ff4b22] font-semibold uppercase tracking-wider opacity-80 group-hover:opacity-100">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified</span>
            </div>
          </div>
        ))}
      </div>

      {/* Certification Details Modal */}
      {selectedCert &&
        createPortal(
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="bg-[#141414] border border-[#ff4b22]/40 rounded-2xl p-7 max-w-md w-full text-left shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-[#ff4b22]/15 border border-[#ff4b22]/30">
                  <Award className="w-7 h-7 text-[#ff4b22]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-[#ff4b22] font-semibold">
                    {selectedCert.issuer}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-white/70 py-2 border-y border-white/10 my-4">
                <div className="flex justify-between">
                  <span className="text-white/40">Credential Status:</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified & Completed
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Issued By:</span>
                  <span className="text-white font-medium">{selectedCert.issuer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Recipient:</span>
                  <span className="text-white font-medium">Karthik Venkat Bhavani Kishor</span>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};
