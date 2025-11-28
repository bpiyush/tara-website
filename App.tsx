import React from 'react';
import { Header } from './components/Header';
import { Teaser } from './components/Teaser';
import { Section } from './components/Section';
import { BibTeX } from './components/BibTeX';
import { ABSTRACT } from './constants';
import { Star, Clock, Zap, Target, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50">
      {/* Background decoration */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-200/20 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-[100px]" />
      </div>

      {/* Hero & Teaser Area */}
      <div className="relative z-10">
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
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Star size={16} className="fill-amber-800" />
            <span>TARA means "Star" in Sanskrit</span>
          </div>
          <p className="text-slate-600 text-lg">
            Just as the North Star guides travelers, <span className="font-bold text-slate-900">TARA</span> guides Multimodal LLMs to understand time without ever seeing a video during training.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Zap className="text-indigo-600" />
              The Challenge
            </h3>
            <p className="text-slate-600 mb-4">
              Most video-text models suffer from <strong>static bias</strong>. They focus on objects and scenes but ignore temporal dynamics. For example, they struggle to distinguish "opening a door" from "closing a door".
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
             <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Target className="text-indigo-600" />
              The Solution
            </h3>
            <p className="text-slate-600 mb-4">
              TARA adapts an MLLM using <strong>text-only contrastive learning</strong>. We engineer "time-aware" text triplets where positive sentences share actions with the anchor, but hard negatives describe temporally opposite actions (e.g., antonym verbs).
            </p>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl overflow-hidden relative">
           <div className="absolute top-0 right-0 p-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
           <h3 className="text-xl font-bold mb-6 text-center">How TARA Works</h3>
           <div className="grid md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm">
                <div className="text-indigo-400 font-mono text-xs mb-2">Step 1</div>
                <h4 className="font-bold mb-2">Mine Chiral Actions</h4>
                <p className="text-slate-400 text-sm">Extract captions with reversible actions (e.g., "folding paper") from Ego4D using LLMs.</p>
              </div>
               <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm">
                <div className="text-indigo-400 font-mono text-xs mb-2">Step 2</div>
                <h4 className="font-bold mb-2">Generate Negatives</h4>
                <p className="text-slate-400 text-sm">Use an LLM to generate the "temporal opposite" sentence (e.g., "unfolding paper") as a hard negative.</p>
              </div>
               <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm">
                <div className="text-indigo-400 font-mono text-xs mb-2">Step 3</div>
                <h4 className="font-bold mb-2">Contrastive Tuning</h4>
                <p className="text-slate-400 text-sm">Fine-tune the MLLM on these text triplets for just 1 hour to align the embedding space.</p>
              </div>
           </div>
        </div>
      </Section>

      {/* Results Section */}
      <Section title="State-of-the-Art Results" className="relative z-10">
        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
          TARA achieves state-of-the-art performance on multiple benchmarks without training on any video data.
        </p>
        
        {/* Table 2: CiA Retrieval */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-100 p-2 rounded-lg"><Clock className="text-indigo-600 w-5 h-5"/></div>
            <h3 className="text-xl font-bold text-slate-900">Time-Awareness: CiA-Retrieval Benchmark</h3>
          </div>
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
          <p className="text-xs text-slate-500 mt-2">
            Table 2 (Condensed): Performance on Chiral splits (t→v). TARA significantly outperforms baselines trained on video data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            {/* Table 3: RTime */}
            <div>
               <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 p-2 rounded-lg"><ArrowRight className="text-indigo-600 w-5 h-5"/></div>
                <h3 className="text-xl font-bold text-slate-900">ReversedInTime</h3>
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white">
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

            {/* Table 6: NegBench */}
            <div>
               <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 p-2 rounded-lg"><Zap className="text-indigo-600 w-5 h-5"/></div>
                <h3 className="text-xl font-bold text-slate-900">Negation (MSR-VTT)</h3>
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white">
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
                     <tr className="bg-indigo-50/50">
                      <td className="px-4 py-3 font-bold text-indigo-900">TARA (Ours)</td>
                      <td className="px-4 py-3 text-center font-bold text-indigo-700">69.0</td>
                    </tr>
                  </tbody>
                </table>
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