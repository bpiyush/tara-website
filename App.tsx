import React from 'react';
import { Header } from './components/Header';
import { Teaser } from './components/Teaser';
import { Section } from './components/Section';
import { BibTeX } from './components/BibTeX';
import { ABSTRACT } from './constants';
import { Sparkles, Clock, Zap, Target, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50 relative overflow-hidden">
      {/* Flowing wave background - inspired by temporal flow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top flowing waves */}
        <div className="absolute top-0 left-0 w-full h-[600px] opacity-30">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="none">
            <path d="M0,200 C240,100 480,300 720,200 C960,100 1200,300 1440,200 L1440,0 L0,0 Z" fill="url(#grad1)" opacity="0.3"/>
            <path d="M0,300 C240,400 480,200 720,300 C960,400 1200,200 1440,300 L1440,0 L0,0 Z" fill="url(#grad2)" opacity="0.2"/>
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#818cf8', stopOpacity: 0.3}} />
                <stop offset="100%" style={{stopColor: '#f59e0b', stopOpacity: 0.3}} />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#fbbf24', stopOpacity: 0.2}} />
                <stop offset="100%" style={{stopColor: '#818cf8', stopOpacity: 0.2}} />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Subtle gradient orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-200/20 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-[100px]" />
        
        {/* Bottom flowing waves */}
        <div className="absolute bottom-0 left-0 w-full h-[400px] opacity-20">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="none">
            <path d="M0,150 C360,250 720,50 1080,150 C1200,180 1320,120 1440,150 L1440,400 L0,400 Z" fill="url(#grad3)" opacity="0.4"/>
            <defs>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#60a5fa', stopOpacity: 0.2}} />
                <stop offset="100%" style={{stopColor: '#c084fc', stopOpacity: 0.2}} />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
      </div>

      {/* Hero & Teaser Area */}
      <div className="relative z-10">
        {/* Clock positioned behind header - LEFT side */}
        <div className="absolute left-0 w-full flex justify-start pointer-events-none" style={{top: '-4px'}}>
          <img 
            src="/clock.gif" 
            alt="" 
            className="w-[500px] h-auto object-contain opacity-25 mix-blend-multiply"
          />
        </div>
        {/* Clock positioned behind header - RIGHT side */}
        <div className="absolute right-0 w-full flex justify-end pointer-events-none" style={{top: '-4px'}}>
          <img 
            src="/clock.gif" 
            alt="" 
            className="w-[500px] h-auto object-contain opacity-25 mix-blend-multiply"
          />
        </div>
        <Header />
        <Teaser />
      </div>

      {/* Abstract Section */}
      <Section title="Abstract" className="relative z-10">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-justify text-slate-700 leading-relaxed text-lg">{ABSTRACT}</p>
        </div>
      </Section>

      {/* Overview / Method Section */}
      <Section title="Overview: The TARA Recipe" grayBackground className="relative z-10">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 text-amber-900 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
            <Sparkles size={18} className="text-amber-500 fill-amber-400" />
            <span>TARA means "Star" in Sanskrit</span>
            <Clock size={18} className="text-indigo-500" />
          </div>
          <p className="text-slate-600 text-lg">
            Just as the North Star guides travelers through <span className="font-bold text-indigo-600">time</span>, <span className="font-bold text-slate-900">TARA</span> guides Multimodal LLMs to understand <span className="font-bold text-indigo-600">temporal dynamics</span> without ever seeing a video during training.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Clock className="text-indigo-600" />
              The Challenge
            </h3>
            <p className="text-slate-600 mb-4">
              Most video-text models suffer from <strong>static bias</strong>. They focus on objects and scenes but ignore <strong className="text-indigo-600">temporal dynamics</strong>. For example, they struggle to distinguish "opening a door" from "closing a door" — actions that differ only in <strong className="text-amber-600">time direction</strong>.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
             <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Target className="text-amber-600" />
              The Solution
            </h3>
            <p className="text-slate-600 mb-4">
              TARA adapts an MLLM using <strong>text-only contrastive learning</strong>. We engineer <strong className="text-indigo-600">"time-aware"</strong> text triplets where positive sentences share actions with the anchor, but hard negatives describe <strong className="text-amber-600">temporally opposite</strong> actions (e.g., antonym verbs).
            </p>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl overflow-hidden relative">
           <div className="absolute top-0 right-0 p-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
           <div className="absolute top-0 left-0 p-32 bg-amber-500/10 rounded-full blur-3xl"></div>
           <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
             <Clock className="text-amber-400" size={24} />
             How TARA Works
             <Sparkles className="text-amber-400" size={24} />
           </h3>
           <div className="grid md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300">
                <div className="text-indigo-400 font-mono text-xs mb-2 flex items-center gap-1">
                  <Clock size={12} />
                  Step 1
                </div>
                <h4 className="font-bold mb-2">Mine Chiral Actions</h4>
                <p className="text-slate-400 text-sm">Extract captions with <span className="text-amber-300">reversible actions</span> (e.g., "folding paper") from Ego4D using LLMs.</p>
              </div>
               <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300">
                <div className="text-amber-400 font-mono text-xs mb-2 flex items-center gap-1">
                  <ArrowRight size={12} />
                  Step 2
                </div>
                <h4 className="font-bold mb-2">Generate Negatives</h4>
                <p className="text-slate-400 text-sm">Use an LLM to generate the <span className="text-indigo-300">"temporal opposite"</span> sentence (e.g., "unfolding paper") as a hard negative.</p>
              </div>
               <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm hover:border-violet-500/50 transition-all duration-300">
                <div className="text-violet-400 font-mono text-xs mb-2 flex items-center gap-1">
                  <Zap size={12} />
                  Step 3
                </div>
                <h4 className="font-bold mb-2">Contrastive Tuning</h4>
                <p className="text-slate-400 text-sm">Fine-tune the MLLM on these text triplets for just <span className="text-amber-300">1 hour</span> to align the embedding space.</p>
              </div>
           </div>
        </div>
      </Section>

      {/* Results Section */}
      <Section title="Key Results" className="relative z-10">
        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16">
          TARA achieves state-of-the-art performance on multiple benchmarks without training on any video data.
        </p>
        
        {/* 1. TARA is Time-Aware */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-indigo-500 to-violet-600 p-2.5 rounded-xl shadow-lg">
              <Clock className="text-white w-6 h-6"/>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">1. TARA is Time-Aware</h3>
          </div>
          <p className="text-slate-600 text-lg mb-8 ml-12 leading-relaxed">
            <strong className="text-indigo-600">Key Takeaway:</strong> TARA produces time-sensitive video-text embeddings as demonstrated by strong zero-shot performance on two benchmarks: our proposed CiA-Retrieval and Reversed in Time.
          </p>
          
          {/* CiA-Retrieval Table */}
          <div className="mb-8 ml-12">
            <h4 className="text-lg font-semibold text-slate-800 mb-4">CiA-Retrieval Benchmark</h4>
            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Model</th>
                    <th className="px-4 py-3 text-center font-semibold text-slate-900 border-l border-slate-100">SSv2 Chiral (mAP)</th>
                    <th className="px-4 py-3 text-center font-semibold text-slate-900 border-l border-slate-100">EPIC Chiral (mAP)</th>
                    <th className="px-4 py-3 text-center font-semibold text-slate-900 border-l border-slate-100">Charades Chiral (mAP)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-600">Qwen2VL-7B</td>
                    <td className="px-4 py-3 text-center text-slate-600 border-l border-slate-50">60.2</td>
                    <td className="px-4 py-3 text-center text-slate-600 border-l border-slate-50">53.7</td>
                    <td className="px-4 py-3 text-center text-slate-600 border-l border-slate-50">55.9</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-600">CaRe</td>
                    <td className="px-4 py-3 text-center text-slate-600 border-l border-slate-50">66.4</td>
                    <td className="px-4 py-3 text-center text-slate-600 border-l border-slate-50">62.3</td>
                    <td className="px-4 py-3 text-center text-slate-600 border-l border-slate-50">56.1</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-600">Qwen2.5VL-ArrowRL</td>
                    <td className="px-4 py-3 text-center text-slate-600 border-l border-slate-50">67.5</td>
                    <td className="px-4 py-3 text-center text-slate-600 border-l border-slate-50">55.7</td>
                    <td className="px-4 py-3 text-center text-slate-600 border-l border-slate-50">57.1</td>
                  </tr>
                  <tr className="bg-indigo-50/50">
                    <td className="px-4 py-3 font-bold text-indigo-900 flex items-center gap-2">
                      TARA (Ours) <span className="text-[10px] bg-indigo-200 px-1.5 py-0.5 rounded text-indigo-800">SOTA</span>
                    </td>
                    <td className="px-4 py-3 text-center font-bold text-indigo-700 border-l border-indigo-100">85.1</td>
                    <td className="px-4 py-3 text-center font-bold text-indigo-700 border-l border-indigo-100">77.3</td>
                    <td className="px-4 py-3 text-center font-bold text-indigo-700 border-l border-indigo-100">71.8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Reversed in Time Table */}
          <div className="ml-12">
            <h4 className="text-lg font-semibold text-slate-800 mb-4">Reversed in Time Benchmark</h4>
            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white max-w-md">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Method</th>
                    <th className="px-4 py-3 text-center font-semibold text-slate-900">T2V Accuracy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr><td className="px-4 py-3 text-slate-600">InternVideo2-1B</td><td className="px-4 py-3 text-center text-slate-600">50.0</td></tr>
                  <tr><td className="px-4 py-3 text-slate-600">Qwen2VL</td><td className="px-4 py-3 text-center text-slate-600">56.3</td></tr>
                  <tr><td className="px-4 py-3 text-slate-600">Tarsier (Base)</td><td className="px-4 py-3 text-center text-slate-600">64.9</td></tr>
                  <tr className="bg-indigo-50/50">
                    <td className="px-4 py-3 font-bold text-indigo-900">TARA (Ours)</td>
                    <td className="px-4 py-3 text-center font-bold text-indigo-700">71.6</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 2. Negation Understanding */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-2.5 rounded-xl shadow-lg">
              <Zap className="text-white w-6 h-6"/>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">2. Negation Understanding</h3>
          </div>
          <p className="text-slate-600 text-lg mb-8 ml-12 leading-relaxed">
            <strong className="text-amber-600">Key Takeaway:</strong> TARA shows strong negation understanding on NegBench even outperforming fine-tuned models.
          </p>
          
          <div className="ml-12">
            <h4 className="text-lg font-semibold text-slate-800 mb-4">NegBench (MSR-VTT)</h4>
            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white max-w-md">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Model</th>
                    <th className="px-4 py-3 text-center font-semibold text-slate-900">R@5</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr><td className="px-4 py-3 text-slate-600">CLIP</td><td className="px-4 py-3 text-center text-slate-600">50.6</td></tr>
                  <tr><td className="px-4 py-3 text-slate-600">NegCLIP</td><td className="px-4 py-3 text-center text-slate-600">53.7</td></tr>
                  <tr><td className="px-4 py-3 text-slate-600">Tarsier (Base)</td><td className="px-4 py-3 text-center text-slate-600">55.7</td></tr>
                  <tr className="bg-amber-50/50">
                    <td className="px-4 py-3 font-bold text-amber-900">TARA (Ours)</td>
                    <td className="px-4 py-3 text-center font-bold text-amber-700">69.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 3. Verb and Adverb Sensitivity */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-violet-500 to-purple-600 p-2.5 rounded-xl shadow-lg">
              <Target className="text-white w-6 h-6"/>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">3. Verb and Adverb Sensitivity</h3>
          </div>
          <p className="text-slate-600 text-lg mb-8 ml-12 leading-relaxed">
            <strong className="text-violet-600">Key Takeaway:</strong> TARA shows strong zero-shot ability to recognize verbs and adverbs which often require time-sensitive understanding (e.g., in distinguishing "walking slowly/quickly").
          </p>
          
          <div className="ml-12">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm max-w-2xl">
              <p className="text-slate-600 text-sm italic">
                Detailed results demonstrate TARA's superior performance on verb and adverb recognition tasks across multiple datasets.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Standard Benchmarks */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2.5 rounded-xl shadow-lg">
              <Sparkles className="text-white w-6 h-6"/>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">4. Standard Benchmarks</h3>
          </div>
          <p className="text-slate-600 text-lg mb-8 ml-12 leading-relaxed">
            <strong className="text-emerald-600">Key Takeaway:</strong> On the video classification and retrieval subsets of the MMEB-v2 benchmark, TARA outperforms all competing models.
          </p>
          
          <div className="ml-12">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm max-w-2xl">
              <p className="text-slate-600 text-sm italic">
                TARA achieves state-of-the-art results on MMEB-v2, demonstrating strong generalization beyond time-aware tasks.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Citation Section */}
      <Section title="Citation" grayBackground className="relative z-10">
        <div className="max-w-3xl mx-auto">
          <p className="mb-6 text-slate-600 text-center">
            If you find TARA useful in your research, please cite our paper:
          </p>
          <BibTeX />
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 mt-12 relative z-10">
        <div className="max-w-5xl mx-auto px-4 text-center text-slate-400">
          <p className="mb-2">© 2025 TARA Project.</p>
          <p className="text-sm">
            University of Oxford • Visual Geometry Group
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;