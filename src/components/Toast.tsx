import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div
      id="app-toast"
      className="fixed bottom-6 right-6 z-50 max-w-sm bg-[#161616] border border-[#ff4b22]/40 rounded-xl p-4 shadow-2xl flex items-center gap-3 text-white animate-fadeIn"
      role="alert"
    >
      <div className="p-1.5 rounded-lg bg-[#ff4b22]/20 text-[#ff4b22] shrink-0">
        <CheckCircle2 className="w-4 h-4" />
      </div>
      <p className="text-xs sm:text-sm font-medium flex-1 text-white/90">
        {message}
      </p>
      <button
        onClick={onClose}
        aria-label="Dismiss notification"
        className="text-white/40 hover:text-white transition-colors p-1"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
