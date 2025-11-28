import React from 'react';
import { motion } from 'framer-motion';

// Placeholder URL - In production, this would be the actual Figure 1 from the paper
const PLACEHOLDER_URL = "https://picsum.photos/1200/500"; 

export const Teaser: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-2xl overflow-hidden p-2 sm:p-4 border border-slate-100 ring-1 ring-slate-900/5"
      >
        <div className="relative aspect-[2/1] w-full bg-slate-50 overflow-hidden rounded-xl">
             <img 
                src={PLACEHOLDER_URL} 
                alt="TARA Architecture Overview" 
                className="w-full h-full object-contain"
            />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity bg-black/5">
                <span className="bg-black/75 text-white px-4 py-2 rounded text-sm font-medium backdrop-blur-sm">Replace with Figure 1 from paper</span>
            </div>
        </div>
        
        <div className="p-4 sm:p-6 bg-white">
          <p className="text-slate-600 text-sm sm:text-base text-justify leading-relaxed">
            <span className="font-bold text-slate-900">Figure 1.</span> (a) MLLMs (<span className="font-serif italic">M</span>) can be prompted to output a video embedding using Explicit One-word Limitation prompt. (b) Given that <span className="font-serif italic">M</span> projects video/text into a common space, we adapt it contrastively solely on text triplets. By including time-aware triplets (shown with a clock), we achieve strong zero-shot retrieval particularly on time-sensitive queries.
          </p>
        </div>
      </motion.div>
    </section>
  );
};