import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { BIBTEX } from '../constants';

export const BibTeX: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(BIBTEX);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 relative group">
      <div className="flex justify-between items-center px-4 py-2 bg-slate-900/50 border-b border-slate-700">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">BibTeX</span>
        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-white transition-colors p-1 rounded-md hover:bg-slate-700"
          aria-label="Copy BibTeX"
        >
          {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="p-4 sm:p-6 overflow-x-auto custom-scrollbar">
        <code className="text-sm sm:text-base font-mono text-slate-300 block leading-relaxed whitespace-pre">
          {BIBTEX}
        </code>
      </pre>
    </div>
  );
};