import React from 'react';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  grayBackground?: boolean;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = "", grayBackground = false }) => {
  return (
    <section className={`py-12 sm:py-16 ${grayBackground ? 'bg-slate-50' : 'bg-white'}`}>
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
        {title && (
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-8 sm:mb-12">
            {title}
          </h2>
        )}
        <div className="text-base sm:text-lg leading-relaxed text-slate-700">
          {children}
        </div>
      </div>
    </section>
  );
};