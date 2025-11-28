import React from 'react';
import { motion } from 'framer-motion';
import { AUTHORS, AFFILIATIONS, LINKS } from '../constants';
import { Button } from './Button';
import { SparklesIcon } from './Icons';

export const Header: React.FC = () => {
  return (
    <header className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="flex justify-center mb-10"
      >
        <div className="relative group cursor-default">
          <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
          <div className="relative bg-gradient-to-tr from-slate-900 to-indigo-900 p-5 rounded-2xl shadow-2xl ring-1 ring-white/10 group-hover:-translate-y-1 transition-transform duration-300">
            <SparklesIcon className="w-12 h-12 text-indigo-200 fill-indigo-500/30" />
          </div>
        </div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-8 leading-tight"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 filter drop-shadow-sm">TARA</span>
        <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-slate-700 mt-6 leading-normal tracking-normal">
            Simple and Efficient Time Aware Retrieval Adaptation of MLLMs for Video Understanding
        </span>
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