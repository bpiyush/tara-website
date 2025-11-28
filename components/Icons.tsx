import React from 'react';
import { FileText, Github, Database, PlayCircle, Star, Sparkles } from 'lucide-react';

export const PdfIcon = ({ className }: { className?: string }) => <FileText className={className} />;
export const GithubIcon = ({ className }: { className?: string }) => <Github className={className} />;
export const DataIcon = ({ className }: { className?: string }) => <Database className={className} />;
export const VideoIcon = ({ className }: { className?: string }) => <PlayCircle className={className} />;
export const StarIcon = ({ className }: { className?: string }) => <Star className={className} />;
export const SparklesIcon = ({ className }: { className?: string }) => <Sparkles className={className} />;

export const getIcon = (type: string, className?: string) => {
  switch (type) {
    case 'pdf': return <PdfIcon className={className} />;
    case 'github': return <GithubIcon className={className} />;
    case 'data': return <DataIcon className={className} />;
    case 'video': return <VideoIcon className={className} />;
    case 'star': return <StarIcon className={className} />;
    case 'sparkles': return <SparklesIcon className={className} />;
    default: return null;
  }
};