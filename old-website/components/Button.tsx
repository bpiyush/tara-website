import React from 'react';
import { getIcon } from './Icons';

interface ButtonProps {
  label: string;
  url: string;
  iconType: string;
}

export const Button: React.FC<ButtonProps> = ({ label, url, iconType }) => {
  return (
    <a
      href={url}
      className="inline-flex items-center px-5 py-2.5 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-sm sm:text-base gap-2"
    >
      {getIcon(iconType, "w-4 h-4 sm:w-5 sm:h-5")}
      <span>{label}</span>
    </a>
  );
};