import React from 'react';
import { motion } from 'framer-motion';
import { AUTHORS, AFFILIATIONS, LINKS } from '../constants';
import { Button } from './Button';
import { Sparkles, Clock } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative z-10">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight"
      >
        💫 <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">TARA</span>: Simple and Efficient Time Aware Retrieval Adaptation of MLLMs for Video Understanding
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 text-lg sm:text-xl text-indigo-600 font-medium"
      >
        {AUTHORS.map((author, index) => (
          <span key={index} className="flex items-center group">
            <a 
              href={author.url} 
              className="group-hover:text-indigo-800 transition-colors border-b border-transparent group-hover:border-indigo-800"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {author.name}
            </a>
            {author.affiliation && (
              <sup className="ml-1 text-sm text-slate-400 font-semibold group-hover:text-slate-600 transition-colors">{author.affiliation}</sup>
            )}
          </span>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 text-sm sm:text-base text-slate-500 mb-10"
      >
        {AFFILIATIONS.map((aff, index) => (
          <span key={index} className="block">{aff}</span>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {LINKS.map((link, index) => (
          <Button key={index} {...link} iconType={link.icon} />
        ))}
      </motion.div>
    </header>
  );
};