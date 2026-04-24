import React, { useState, useEffect } from 'react';
import { AUTHORS, AFFILIATIONS, LINKS, PAPER_TITLE, ABSTRACT, BIBTEX } from './constants';

// ── Icons ──────────────────────────────────────────────────────────────────

const PdfIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6 2h8l6 6v14H6zm7 1.5V9h5.5zM9 13h2.5a2.5 2.5 0 010 5H10v3H9zm1 1v3h1.5a1.5 1.5 0 000-3zm5 0c1.66 0 3 1.34 3 3v1c0 1.66-1.34 3-3 3h-2v-7zm-1 1v5h1a2 2 0 002-2v-1a2 2 0 00-2-2zm-8 0h2v1H7v1h1v1H7v2H6z" />
  </svg>
);

const ArxivIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 6.5C10.27 5.57 8.3 5 6 5a4 4 0 00-4 4v9a1 1 0 001.45.89C5.05 18.09 6.39 17.75 8 17.75c1.82 0 3.54.43 4 1 .46-.57 2.18-1 4-1 1.61 0 2.95.34 4.55 1.14A1 1 0 0022 18V9a4 4 0 00-4-4c-2.3 0-4.27.57-6 1.5M4 9a2 2 0 012-2c2.04 0 3.79.53 5 1.33v8.2c-1.3-.5-2.67-.78-4-.78-1.03 0-2.03.14-3 .42zm16 7.17c-.97-.28-1.97-.42-3-.42-1.33 0-2.7.28-4 .78v-8.2c1.21-.8 2.96-1.33 5-1.33a2 2 0 012 2z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5A12 12 0 008.2 23.9c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.73.08-.72.08-.72 1.2.09 1.84 1.22 1.84 1.22 1.08 1.82 2.82 1.3 3.5.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.32-5.47-5.86 0-1.3.47-2.37 1.24-3.21-.13-.3-.54-1.5.12-3.13 0 0 1.01-.32 3.3 1.23A11.6 11.6 0 0112 6.6c1.02 0 2.05.14 3.01.4 2.29-1.55 3.29-1.23 3.29-1.23.67 1.63.26 2.83.13 3.13.77.84 1.23 1.91 1.23 3.21 0 4.55-2.8 5.55-5.48 5.85.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58A12 12 0 0012 .5" />
  </svg>
);

const DataIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 3C7 3 3 5.24 3 8v12c0 2.76 4 5 9 5s9-2.24 9-5V8c0-2.76-4-5-9-5m0 2c4.42 0 7 1.79 7 3s-2.58 3-7 3-7-1.79-7-3 2.58-3 7-3M5 12.35C6.44 13.38 9.04 14 12 14s5.56-.62 7-1.65V14c0 1.21-2.58 3-7 3s-7-1.79-7-3v-1.65m0 4C6.44 17.38 9.04 18 12 18s5.56-.62 7-1.65V18c0 1.21-2.58 3-7 3s-7-1.79-7-3v-1.65" />
  </svg>
);

const UpArrowIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 5l-7 7 1.41 1.41L11 8.83V19h2V8.83l4.59 4.58L19 12z" />
  </svg>
);

const ChevronDownIcon = ({ className = '' }) => (
  <svg className={`w-4 h-4 ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7 10l5 5 5-5z" />
  </svg>
);

const CopyIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 1H4a2 2 0 00-2 2v12h2V3h12zm3 4H8a2 2 0 00-2 2v14a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2m0 16H8V7h11z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

// ── Helpers ────────────────────────────────────────────────────────────────

function getLinkIcon(icon: string) {
  switch (icon) {
    case 'github': return <GithubIcon />;
    case 'data': return <DataIcon />;
    default: return <PdfIcon />;
  }
}

// ── Components ─────────────────────────────────────────────────────────────

const PublicationLink: React.FC<{ label: string; url: string; icon: string }> = ({ label, url, icon }) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
  >
    {getLinkIcon(icon)}
    <span>{label}</span>
  </a>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 text-center">{children}</h2>
);

const KeyNumber: React.FC<{ value: string; unit?: string; vs?: string; label: string; context: string }> = ({
  value, unit, vs, label, context
}) => (
  <div className="text-center px-4">
    <div className="text-4xl font-extrabold text-gray-900 mb-1">
      {value}
      {unit && <span className="text-2xl font-bold text-gray-500">{unit}</span>}
      {vs && <span className="text-xl font-semibold text-gray-400 ml-2">{vs}</span>}
    </div>
    <div className="text-sm font-semibold text-gray-700 mb-1">{label}</div>
    <div className="text-xs text-gray-500">{context}</div>
  </div>
);

// Result table cell helpers
const Best: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-bold">{children}</span>
);
const Second: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="underline">{children}</span>
);

const ExpandableSection: React.FC<{ buttonLabel: string; children: React.ReactNode }> = ({
  buttonLabel, children
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
        aria-expanded={open}
      >
        <span>{open ? `Hide ${buttonLabel}` : `Show ${buttonLabel}`}</span>
        <ChevronDownIcon className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="mt-4 overflow-x-auto">
          {children}
        </div>
      )}
    </div>
  );
};

// ── Main App ───────────────────────────────────────────────────────────────

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyBibTeX = () => {
    navigator.clipboard.writeText(BIBTEX);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors"
          aria-label="Scroll to top"
        >
          <UpArrowIcon />
        </button>
      )}

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="pt-16 pb-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="inline-block bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            arXiv 2026
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-3">
            {PAPER_TITLE}
          </h1>

          {/* Authors */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mt-8 mb-3 text-base sm:text-lg text-gray-700">
            {AUTHORS.map((author, i) => (
              <span key={i}>
                {author.url ? (
                  <a
                    href={author.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-indigo-600 transition-colors border-b border-gray-300 hover:border-indigo-600"
                  >
                    {author.name}
                  </a>
                ) : (
                  <span>{author.name}</span>
                )}
                {author.affiliation && (
                  <sup className="ml-0.5 text-xs text-gray-400">{author.affiliation}</sup>
                )}
                {i < AUTHORS.length - 1 && <span className="text-gray-400">,</span>}
              </span>
            ))}
          </div>

          {/* Affiliations */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-gray-500 mb-8">
            {AFFILIATIONS.map((aff) => (
              <span key={aff.id}>
                <sup className="mr-0.5 text-gray-400">{aff.id}</sup>{aff.name}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-3">
            {LINKS.map((link, i) => (
              <PublicationLink key={i} {...link} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TEASER / KEY IDEA ──────────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 border-t border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <figure className="mb-8 mx-auto max-w-3xl">
            <img
              src="/figures/teaser.png"
              alt="TARA teaser figure with text-video embedding intuition and tSNE visualization."
              className="w-full rounded-xl border border-gray-200 shadow-sm bg-white"
            />
          </figure>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="text-4xl font-extrabold text-gray-900 mb-1">20K</div>
              <div className="text-sm font-semibold text-gray-700 mb-1">Text-only training samples</div>
              <div className="text-xs text-gray-500">No video data used — ever</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="text-4xl font-extrabold text-gray-900 mb-1">&lt;1 hr</div>
              <div className="text-sm font-semibold text-gray-700 mb-1">Training time</div>
              <div className="text-xs text-gray-500">On 8× RTX A6000 GPUs</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="text-4xl font-extrabold text-gray-900 mb-1">SOTA</div>
              <div className="text-sm font-semibold text-gray-700 mb-1">All nuanced benchmarks</div>
              <div className="text-xs text-gray-500">Temporal · Negation · Multimodal</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABSTRACT / TL;DR ──────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6" id="abstract">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Abstract</SectionTitle>
          <p className="text-gray-700 leading-relaxed text-[1.05rem] text-center">{ABSTRACT}</p>
        </div>
      </section>

      {/* ── METHOD ────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 bg-gray-50 border-t border-b border-gray-100" id="method">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Method: The TARA Recipe</SectionTitle>
          <p className="text-gray-700 leading-relaxed mb-8 text-[1.05rem] text-center">
            <strong>TARA</strong> (Text Adapted Retrieval Alignment) repurposes a Multimodal LLM as a joint video-text embedding model. We extract embeddings via an "Explicit One-word Limitation" (EOL) prompt — e.g., <em>"&lt;video&gt;: Summarize the video in one word:"</em> — and use the final hidden state as the embedding. We then fine-tune with a contrastive loss on text triplets with carefully engineered hard negatives. This text-only training <em>reduces the modality gap</em> between video and text embeddings, which explains its surprising effectiveness.
          </p>

          <figure className="mb-8 mx-auto max-w-3xl">
            <img
              src="/figures/text-proc.png"
              alt="Text processing and embedding extraction pipeline for TARA."
              className="w-full rounded-xl border border-gray-200 shadow-sm bg-white"
            />
          </figure>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              {
                step: 'A. Temporal Nuance',
                color: 'indigo',
                body: 'Extract chiral verb-object pairs from Ego4D. Generate temporally antonymous sentences (e.g., "closes the box" → "opens the box") using an LLM as hard negatives.',
              },
              {
                step: 'B. Negation Nuance',
                color: 'amber',
                body: 'Filter NLI triplets where the hard-negative uses explicit negation operators (not, never, none…), training the model to precisely understand what is absent.',
              },
              {
                step: 'C. Multimodal Nuance',
                color: 'violet',
                body: 'Translate Composed Video Retrieval to a text task: anchor = source caption + edit instruction, positive = edited caption, negative = original (unedited) caption.',
              },
            ].map(({ step, color, body }) => (
              <div
                key={step}
                className={`bg-white rounded-xl border p-5 shadow-sm ${
                  color === 'indigo' ? 'border-indigo-200' :
                  color === 'amber' ? 'border-amber-200' : 'border-violet-200'
                }`}
              >
                <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${
                  color === 'indigo' ? 'text-indigo-500' :
                  color === 'amber' ? 'text-amber-500' : 'text-violet-500'
                }`}>{step}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <figure className="mb-8 mx-auto max-w-3xl">
            <img
              src="/figures/nli-nuance.png"
              alt="NLI-Nuance dataset construction showing temporal, negation and multimodal triplets."
              className="w-full rounded-xl border border-gray-200 shadow-sm bg-white"
            />
          </figure>

          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm text-center">
            <p className="text-sm text-gray-600 leading-relaxed">
              The resulting dataset <strong>NLI-Nuance</strong> has just <strong>20,000 text triplets</strong> (8K from NLI + 1K temporal + 1K negation + 10K multimodal). Fine-tuning only the LLM weights (vision encoder frozen) for 2 epochs takes <strong>less than one hour</strong> on 8 RTX A6000 GPUs.
            </p>
          </div>
        </div>
      </section>

      {/* ── RESULTS: TEMPORAL ─────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6" id="temporal">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Results: Temporal Nuance</SectionTitle>
          <p className="text-gray-700 mb-2 text-[1.05rem] text-center">
            <strong className="text-indigo-600">Key Takeaway:</strong> TARA achieves state-of-the-art on the CiA-Retrieval benchmark across all three datasets and all difficulty settings (Chiral, Static, All), while being fine-tuned on text alone.
          </p>

          {/* CiA Retrieval Table */}
          <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3 text-center">CiA-Retrieval (mAP ↑)</h3>
          <p className="text-sm text-gray-500 mb-4 text-center">
            <em>Chiral</em>: gallery has only the correct + temporal-opposite action.
            <em> Static</em>: gallery has correct + temporally irrelevant actions.
            <em> All</em>: full gallery. Higher is better.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mx-auto">
            <table className="min-w-full text-sm results-table">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left" rowSpan={2}>Method</th>
                  <th className="px-3 py-2 text-xs text-center" rowSpan={2}>Data (K)</th>
                  <th className="px-3 py-2 text-xs text-center border-l border-gray-200" colSpan={3}>SSv2</th>
                  <th className="px-3 py-2 text-xs text-center border-l border-gray-200" colSpan={3}>EPIC</th>
                  <th className="px-3 py-2 text-xs text-center border-l border-gray-200" colSpan={3}>Charades</th>
                </tr>
                <tr>
                  {['Chiral','Static','All','Chiral','Static','All','Chiral','Static','All'].map((h,i) => (
                    <th key={i} className={`px-3 py-2 text-xs text-center ${i%3===0 ? 'border-l border-gray-200':''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'CLIP (avg.)', data: '-', vals: [52.0,18.3,12.7,51.0,12.0,7.0,48.4,13.2,6.5] },
                  { name: 'InternVideo 2', data: '-', vals: [52.5,35.7,20.6,48.3,22.1,8.8,50.7,11.9,11.9] },
                  { name: 'VLM2Vec-V2 (multimodal)', data: '1700', vals: [58.8,27.8,15.9,49.4,25.4,12.9,53.5,18.8,10.5] },
                  { name: 'CaRe', data: '275', vals: [66.4,46.2,23.7,62.3,25.0,16.9,56.1,25.2,12.9] },
                  { name: 'ArrowRL', data: '25', vals: [67.5,33.8,22.5,55.7,12.4,9.6,57.1,18.6,12.2] },
                  { name: 'Qwen3VL-Emb.', data: 'NA', vals: [72.0,43.4,31.8,62.1,28.6,20.6,65.3,37.3,26.1] },
                  { name: 'Tarsier 2 (base)', data: '-', vals: [77.7,26.9,24.0,67.4,22.0,15.3,60.5,13.4,9.2] },
                ].map(row => (
                  <tr key={row.name} className="hover:bg-gray-50">
                    <td className="px-4 py-2.5 font-medium text-gray-700">{row.name}</td>
                    <td className="px-3 py-2.5 text-center text-gray-500">{row.data}</td>
                    {row.vals.map((v,i) => (
                      <td key={i} className={`px-3 py-2.5 text-center ${i%3===0?'border-l border-gray-100':''} text-gray-600`}>{v.toFixed(1)}</td>
                    ))}
                  </tr>
                ))}
                {/* TARA row highlighted */}
                <tr className="ours-row">
                  <td className="px-4 py-2.5 font-semibold text-indigo-900">Tarsier 2 + TARA (Ours)</td>
                  <td className="px-3 py-2.5 text-center font-semibold text-indigo-700">20</td>
                  {[88.9,66.7,58.6,81.1,45.6,38.9,71.4,38.6,29.0].map((v,i) => (
                    <td key={i} className={`px-3 py-2.5 text-center font-bold text-indigo-700 ${i%3===0?'border-l border-indigo-100':''}`}>{v.toFixed(1)}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* RTime */}
          <figure className="mt-10 mb-8 mx-auto max-w-3xl">
            <img
              src="/figures/qual-results.png"
              alt="Qualitative retrieval examples for temporal, negation and multimodal settings."
              className="w-full rounded-xl border border-gray-200 shadow-sm bg-white"
            />
          </figure>

          <h3 className="text-lg font-semibold text-gray-800 mt-10 mb-3 text-center">Reversed in Time (RTime) — R@1 ↑</h3>
          <p className="text-sm text-gray-500 mb-4 text-center">Arrow-of-time benchmark: given a video, choose the correct vs. time-reversed caption (T2V) and vice versa (V2T). TARA outperforms methods fine-tuned on the RTime training set.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm max-w-sm mx-auto">
            <table className="min-w-full text-sm results-table">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left">Method</th>
                  <th className="px-4 py-3 text-center">T2V</th>
                  <th className="px-4 py-3 text-center">V2T</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'Singularity (zero-shot)', t2v: 48.7, v2t: 49.9 },
                  { name: 'InternVideo2-1B (zero-shot)', t2v: 50.0, v2t: 51.0 },
                  { name: 'Qwen2.5VL (zero-shot)', t2v: 53.4, v2t: 66.6 },
                  { name: 'Tarsier 2 (zero-shot)', t2v: 58.8, v2t: 59.5 },
                  { name: '— fine-tuned on RTime —', t2v: null, v2t: null, divider: true },
                  { name: 'CLIP4Clip', t2v: 49.8, v2t: 49.8 },
                  { name: 'UMT-Neg', t2v: 54.5, v2t: 54.2 },
                  { name: 'ArrowRL-Qwen2.5', t2v: 55.6, v2t: 69.6 },
                ].map(row => (
                  <tr key={row.name} className={row.divider ? 'bg-gray-50' : 'hover:bg-gray-50'}>
                    <td className="px-4 py-2.5 text-gray-600 text-xs italic">{row.name}</td>
                    <td className="px-4 py-2.5 text-center text-gray-600">{row.t2v ?? '—'}</td>
                    <td className="px-4 py-2.5 text-center text-gray-600">{row.v2t ?? '—'}</td>
                  </tr>
                ))}
                <tr className="ours-row">
                  <td className="px-4 py-2.5 font-semibold text-indigo-900">Tarsier 2 + TARA (Ours)</td>
                  <td className="px-4 py-2.5 text-center font-bold text-indigo-700">67.2</td>
                  <td className="px-4 py-2.5 text-center font-bold text-indigo-700">77.9</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── RESULTS: NEGATION ─────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 bg-gray-50 border-t border-b border-gray-100" id="negation">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Results: Negation Nuance</SectionTitle>
          <p className="text-gray-700 mb-2 text-[1.05rem] text-center">
            <strong className="text-amber-600">Key Takeaway:</strong> TARA (zero-shot) dramatically outperforms all CLIP- and NegCLIP-based models fine-tuned on negation-augmented caption data, on both image (COCO) and video (MSR-VTT) retrieval.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3 text-center">NegBench — R@5 ↑</h3>
          <p className="text-sm text-gray-500 mb-4 text-center">
            <em>Std.</em>: standard queries. <em>Neg.</em>: negation queries (e.g., "a dog but not on grass"). Higher is better.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mx-auto">
            <table className="min-w-full text-sm results-table">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left" rowSpan={2}>Method</th>
                  <th className="px-4 py-3 text-xs text-left" rowSpan={2}>Fine-tuning data</th>
                  <th className="px-4 py-3 text-xs text-center border-l border-gray-200" colSpan={2}>COCO</th>
                  <th className="px-4 py-3 text-xs text-center border-l border-gray-200" colSpan={2}>MSR-VTT</th>
                </tr>
                <tr>
                  <th className="px-4 py-2 text-xs text-center border-l border-gray-200">Std.</th>
                  <th className="px-4 py-2 text-xs text-center">Neg.</th>
                  <th className="px-4 py-2 text-xs text-center border-l border-gray-200">Std.</th>
                  <th className="px-4 py-2 text-xs text-center">Neg.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'CLIP (none)', data: 'None', vals: [54.8,48.0,50.6,45.8] },
                  { name: 'CLIP (CC)', data: 'CC (img+txt)', vals: [58.8,54.5,53.7,49.9] },
                  { name: 'NegCLIP (none)', data: 'None', vals: [68.7,64.4,53.7,51.0] },
                  { name: 'NegCLIP (CC-NegCap)', data: 'CC-NegCap', vals: [68.6,67.5,56.5,54.6] },
                  { name: 'Tarsier 2 (base)', data: 'None', vals: [33.3,21.5,25.6,18.9] },
                ].map(row => (
                  <tr key={row.name} className="hover:bg-gray-50">
                    <td className="px-4 py-2.5 font-medium text-gray-700">{row.name}</td>
                    <td className="px-4 py-2.5 text-gray-500 text-xs">{row.data}</td>
                    {row.vals.map((v,i) => (
                      <td key={i} className={`px-4 py-2.5 text-center ${i%2===0?'border-l border-gray-100':''} text-gray-600`}>{v.toFixed(1)}</td>
                    ))}
                  </tr>
                ))}
                <tr className="ours-row">
                  <td className="px-4 py-2.5 font-semibold text-indigo-900">Tarsier 2 + TARA (Ours)</td>
                  <td className="px-4 py-2.5 text-indigo-700 text-xs font-medium">NLI-Nuance (text only)</td>
                  {[76.7,73.6,65.1,65.0].map((v,i) => (
                    <td key={i} className={`px-4 py-2.5 text-center font-bold text-indigo-700 ${i%2===0?'border-l border-indigo-100':''}`}>{v.toFixed(1)}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Adverb */}
          <h3 className="text-lg font-semibold text-gray-800 mt-10 mb-3 text-center">Adverb Recognition — Accuracy ↑</h3>
          <p className="text-sm text-gray-500 mb-4 text-center">
            Given a video and an action verb, select the correct adverb between two choices (e.g., "slowly" vs. "quickly"). TARA zero-shot exceeds semi-supervised models trained specially for this task.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm max-w-lg mx-auto">
            <table className="min-w-full text-sm results-table">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left">Method</th>
                  <th className="px-4 py-3 text-center">VATEX</th>
                  <th className="px-4 py-3 text-center">MSRVTT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'Chance', v: 50.0, m: 50.0 },
                  { name: 'Action Modifiers (semi-supervised)', v: 64.2, m: null },
                  { name: 'AM + Pseudo-labels', v: 67.5, m: 70.5 },
                  { name: 'Tarsier 2 (base)', v: 57.4, m: 56.6 },
                ].map(row => (
                  <tr key={row.name} className="hover:bg-gray-50">
                    <td className="px-4 py-2.5 text-gray-600">{row.name}</td>
                    <td className="px-4 py-2.5 text-center text-gray-600">{row.v ?? '—'}</td>
                    <td className="px-4 py-2.5 text-center text-gray-600">{row.m ?? '—'}</td>
                  </tr>
                ))}
                <tr className="ours-row">
                  <td className="px-4 py-2.5 font-semibold text-indigo-900">Tarsier 2 + TARA (Ours)</td>
                  <td className="px-4 py-2.5 text-center font-bold text-indigo-700">74.8</td>
                  <td className="px-4 py-2.5 text-center font-bold text-indigo-700">76.8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── RESULTS: MULTIMODAL ───────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6" id="multimodal">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Results: Multimodal Nuance</SectionTitle>
          <p className="text-gray-700 mb-2 text-[1.05rem] text-center">
            <strong className="text-violet-600">Key Takeaway:</strong> TARA handles queries composed of a video + a text edit instruction (Composed Video Retrieval). It outperforms even methods fine-tuned directly on the WebVid-CoVR dataset, using only text during training.
          </p>

          <figure className="mt-8 mb-8 mx-auto max-w-3xl">
            <img
              src="/figures/line-search.png"
              alt="Supplementary line search for mixture coefficient alpha."
              className="w-full rounded-xl border border-gray-200 shadow-sm bg-white"
            />
          </figure>

          <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3 text-center">WebVid-CoVR ↑</h3>
          <p className="text-sm text-gray-500 mb-4 text-center">Query = source video + text edit instruction. Goal: retrieve the edited video. Evaluated on 2,556 query-video pairs.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm max-w-md mx-auto">
            <table className="min-w-full text-sm results-table">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left">Method</th>
                  <th className="px-4 py-3 text-center">R@1</th>
                  <th className="px-4 py-3 text-center">R@5</th>
                  <th className="px-4 py-3 text-center">R@10</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50"><td colSpan={4} className="px-4 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Zero-shot</td></tr>
                {[
                  { name: 'BLIP (V+T)', r1: 45.5, r5: 70.5, r10: 79.5 },
                  { name: 'CLIP (V+T)', r1: 44.4, r5: 69.1, r10: 77.6 },
                ].map(r => (
                  <tr key={r.name} className="hover:bg-gray-50">
                    <td className="px-4 py-2.5 text-gray-600">{r.name}</td>
                    <td className="px-4 py-2.5 text-center text-gray-600">{r.r1}</td>
                    <td className="px-4 py-2.5 text-center text-gray-600">{r.r5}</td>
                    <td className="px-4 py-2.5 text-center text-gray-600">{r.r10}</td>
                  </tr>
                ))}
                <tr className="ours-row">
                  <td className="px-4 py-2.5 font-semibold text-indigo-900">Tarsier 2 + TARA (Ours)</td>
                  <td className="px-4 py-2.5 text-center font-bold text-indigo-700">66.3</td>
                  <td className="px-4 py-2.5 text-center font-bold text-indigo-700">86.7</td>
                  <td className="px-4 py-2.5 text-center font-bold text-indigo-700">91.5</td>
                </tr>
                <tr className="bg-gray-50"><td colSpan={4} className="px-4 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Fine-tuned on CoVR data</td></tr>
                {[
                  { name: 'CLIP (V+T)', r1: 50.6, r5: 77.1, r10: 85.1 },
                  { name: 'Ventura et al.', r1: 53.1, r5: 79.9, r10: 86.9 },
                  { name: 'Ventura et al. (v2)', r1: 59.8, r5: 83.8, r10: 91.3 },
                ].map(r => (
                  <tr key={r.name} className="hover:bg-gray-50">
                    <td className="px-4 py-2.5 text-gray-600">{r.name}</td>
                    <td className="px-4 py-2.5 text-center text-gray-600">{r.r1}</td>
                    <td className="px-4 py-2.5 text-center text-gray-600">{r.r5}</td>
                    <td className="px-4 py-2.5 text-center text-gray-600">{r.r10}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── RESULTS: STANDARD BENCHMARKS ─────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 bg-gray-50 border-t border-b border-gray-100" id="standard">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Results: Standard Benchmarks (MMEB-V2)</SectionTitle>
          <p className="text-gray-700 mb-2 text-[1.05rem] text-center">
            <strong className="text-emerald-600">Key Takeaway:</strong> Text-only fine-tuning does not hurt standard video understanding. TARA comprehensively improves upon Tarsier 2 and is competitive with models trained on orders of magnitude more multimodal data.
          </p>
          <p className="text-sm text-gray-500 mb-6 text-center">
            Video classification and retrieval tasks from MMEB-V2. TARA ⊕ Q3VLE = ensemble of TARA and Qwen3VL-Embedding, which outperforms both on average.
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mx-auto">
            <table className="min-w-full text-sm results-table">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left" rowSpan={2}>Method</th>
                  <th className="px-3 py-2 text-xs text-center border-l border-gray-200" colSpan={5}>Video Classification</th>
                  <th className="px-3 py-2 text-xs text-center border-l border-gray-200" colSpan={5}>Video Retrieval</th>
                </tr>
                <tr>
                  {['UCF','HMDB','K700','BF','SSv2'].map(h => (
                    <th key={h} className={`px-3 py-2 text-xs text-center ${h==='UCF'?'border-l border-gray-200':''}`}>{h}</th>
                  ))}
                  {['MSR','MSVD','DDMo','YC2','VTX'].map(h => (
                    <th key={h} className={`px-3 py-2 text-xs text-center ${h==='MSR'?'border-l border-gray-200':''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'VLM2Vec-V2 (multimodal)', cls: [60.0,40.9,38.0,14.8,42.8], ret: [28.3,48.1,30.4,10.6,26.5] },
                  { name: 'LamRA-Qwen2', cls: [60.4,40.5,42.3,16.9,36.3], ret: [22.1,46.1,24.8,9.2,19.1] },
                  { name: 'TTE-7B', cls: [78.6,63.9,55.6,34.2,55.3], ret: [39.5,59.4,36.3,20.3,32.6] },
                  { name: 'Tarsier 2 (base)', cls: [37.9,17.4,29.6,36.1,15.9], ret: [9.5,39.8,12.2,3.9,16.6] },
                ].map(row => (
                  <tr key={row.name} className="hover:bg-gray-50">
                    <td className="px-4 py-2.5 font-medium text-gray-700">{row.name}</td>
                    {row.cls.map((v,i) => (
                      <td key={i} className={`px-3 py-2.5 text-center ${i===0?'border-l border-gray-100':''} text-gray-600`}>{v.toFixed(1)}</td>
                    ))}
                    {row.ret.map((v,i) => (
                      <td key={i} className={`px-3 py-2.5 text-center ${i===0?'border-l border-gray-100':''} text-gray-600`}>{v.toFixed(1)}</td>
                    ))}
                  </tr>
                ))}
                <tr className="ours-row">
                  <td className="px-4 py-2.5 font-semibold text-indigo-900">Tarsier 2 + TARA (Ours)</td>
                  {[80.3,69.0,59.4,45.6,76.4].map((v,i) => (
                    <td key={i} className={`px-3 py-2.5 text-center font-bold text-indigo-700 ${i===0?'border-l border-indigo-100':''}`}>{v.toFixed(1)}</td>
                  ))}
                  {[40.7,82.2,36.8,16.7,53.2].map((v,i) => (
                    <td key={i} className={`px-3 py-2.5 text-center font-bold text-indigo-700 ${i===0?'border-l border-indigo-100':''}`}>{v.toFixed(1)}</td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2.5 font-medium text-gray-700">Qwen3VL-Embedding</td>
                  {[94.6,77.5,71.2,67.2,76.9].map((v,i) => (
                    <td key={i} className={`px-3 py-2.5 text-center ${i===0?'border-l border-gray-100':''} text-gray-600`}>{v.toFixed(1)}</td>
                  ))}
                  {[53.8,87.2,56.1,32.8,64.8].map((v,i) => (
                    <td key={i} className={`px-3 py-2.5 text-center ${i===0?'border-l border-gray-100':''} text-gray-600`}>{v.toFixed(1)}</td>
                  ))}
                </tr>
                <tr style={{ background: '#f0fdf4' }}>
                  <td className="px-4 py-2.5 font-semibold text-emerald-900">TARA ⊕ Qwen3VL-Emb. (Ensemble)</td>
                  {[94.3,78.3,70.0,68.6,81.4].map((v,i) => (
                    <td key={i} className={`px-3 py-2.5 text-center font-bold text-emerald-700 ${i===0?'border-l border-emerald-100':''}`}>{v.toFixed(1)}</td>
                  ))}
                  {[54.5,88.4,56.1,32.1,66.2].map((v,i) => (
                    <td key={i} className={`px-3 py-2.5 text-center font-bold text-emerald-700 ${i===0?'border-l border-emerald-100':''}`}>{v.toFixed(1)}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Same base model controlled comparison */}
          <ExpandableSection buttonLabel="controlled comparison (same base model)">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Controlled comparison: all methods use Qwen2VL-7B as base model</h4>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="min-w-full text-sm results-table">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left">Method</th>
                    <th className="px-4 py-3 text-xs text-center">Fine-tuning modality</th>
                    <th className="px-4 py-3 text-center">CiA-SSv2 Chiral</th>
                    <th className="px-4 py-3 text-center">RTime T2V</th>
                    <th className="px-4 py-3 text-center">RTime V2T</th>
                    <th className="px-4 py-3 text-center">CoVR R@1</th>
                    <th className="px-4 py-3 text-center font-bold">Avg.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { name: 'Base (Qwen2VL-7B)', mod: '—', vals: [60.2,59.9,64.7,15.5,40.0] },
                    { name: 'ArrowRL', mod: 'video+text', vals: [67.5,57.1,68.8,41.8,51.3] },
                    { name: 'CaRe (Stage 2)', mod: 'video+text', vals: [66.4,59.8,69.9,35.6,51.9] },
                    { name: 'LAMRA', mod: 'image+text', vals: [55.3,57.9,63.9,31.5,41.1] },
                    { name: 'VLM2Vec-2.0', mod: 'video+image+text', vals: [58.8,54.3,61.8,42.9,46.9] },
                  ].map(row => (
                    <tr key={row.name} className="hover:bg-gray-50">
                      <td className="px-4 py-2.5 text-gray-700">{row.name}</td>
                      <td className="px-4 py-2.5 text-center text-xs text-gray-500">{row.mod}</td>
                      {row.vals.map((v,i) => (
                        <td key={i} className="px-4 py-2.5 text-center text-gray-600">{v.toFixed(1)}</td>
                      ))}
                    </tr>
                  ))}
                  <tr className="ours-row">
                    <td className="px-4 py-2.5 font-semibold text-indigo-900">Base + TARA (Ours)</td>
                    <td className="px-4 py-2.5 text-center text-xs font-medium text-indigo-700">text only</td>
                    {[72.7,65.9,73.8,44.8,56.8].map((v,i) => (
                      <td key={i} className="px-4 py-2.5 text-center font-bold text-indigo-700">{v.toFixed(1)}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </ExpandableSection>
        </div>
      </section>

      {/* ── ANALYSIS: MODALITY GAP ────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6" id="analysis">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Analysis: Why Does Text-Only Training Work?</SectionTitle>
          <p className="text-gray-700 leading-relaxed mb-6 text-[1.05rem] text-center">
            We study the <strong>modality gap</strong> — the systematic offset between video and text embeddings in the shared embedding space. Despite sharing an LLM backbone, MLLMs exhibit a clear modality gap because video and text tokens arrive through different pathways (vision encoder + MLP projection vs. learned text embeddings). This gap wastes representational capacity and skews cosine similarities, hurting retrieval.
          </p>
          <figure className="mb-8 mx-auto max-w-3xl">
            <img
              src="/figures/modgap-main.png"
              alt="Main paper modality gap visualization comparing methods."
              className="w-full rounded-xl border border-gray-200 shadow-sm bg-white"
            />
          </figure>
          <figure className="mb-8 mx-auto max-w-3xl">
            <img
              src="/figures/tarsier2-modgap.png"
              alt="Supplementary modality gap plot for Tarsier2."
              className="w-full rounded-xl border border-gray-200 shadow-sm bg-white"
            />
          </figure>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
              <h4 className="font-semibold text-gray-800 mb-2">EOL prompt alone is insufficient</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                While Jiang et al. showed EOL prompts dissolve the modality gap for <em>images</em> with LLaVA-NeXT, we find this does not generalize to <em>video</em>-text pairs for Qwen2VL, InternVL3, Tarsier, and Qwen3VL. The gap persists at ‖Δ<sub>gap</sub>‖ ≈ 0.35–0.68.
              </p>
            </div>
            <div className="bg-indigo-50 rounded-xl border border-indigo-200 p-5">
              <h4 className="font-semibold text-indigo-900 mb-2">Text-only TARA closes the gap</h4>
              <p className="text-sm text-indigo-800 leading-relaxed">
                TARA reduces ‖Δ<sub>gap</sub>‖ from 0.49 → <strong>0.20</strong> for Tarsier 2 via the <em>uniformity pressure</em> of contrastive training: text embeddings spread on the hypersphere, pulling both modality centroids toward the origin and closer to each other.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <h4 className="font-semibold text-gray-800 mb-3">Modality Gap Measurements (‖Δ<sub>gap</sub>‖ — lower is better)</h4>
            <div className="overflow-x-auto max-w-2xl mx-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500">Model</th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-gray-500">No EOL</th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-gray-500">With EOL</th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-gray-500">After TARA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { m: 'Qwen2VL-7B', no: 0.39, eol: 0.35, tara: 0.20 },
                    { m: 'Tarsier 2', no: 0.49, eol: 0.51, tara: 0.20 },
                    { m: 'InternVL3-8B', no: 0.43, eol: 0.68, tara: '—' },
                    { m: 'Qwen3VL-8B', no: 0.56, eol: 0.62, tara: '—' },
                  ].map(r => (
                    <tr key={r.m} className="hover:bg-gray-50">
                      <td className="px-4 py-2.5 text-gray-700">{r.m}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600">{r.no}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600">{r.eol}</td>
                      <td className="px-4 py-2.5 text-center font-semibold text-indigo-700">{r.tara}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── BIBTEX ────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 bg-gray-50 border-t border-gray-100" id="citation">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <SectionTitle>BibTeX</SectionTitle>
          </div>
          <p className="text-gray-600 mb-6">
            If you find TARA useful in your research, please cite:
          </p>
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
            <div className="flex justify-between items-center px-4 py-2 bg-black/30 border-b border-gray-700">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">BibTeX</span>
              <button
                onClick={handleCopyBibTeX}
                className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-gray-700 text-xs"
              >
                {copied ? <><CheckIcon /> <span>Copied!</span></> : <><CopyIcon /> <span>Copy</span></>}
              </button>
            </div>
            <pre className="p-5 overflow-x-auto custom-scrollbar">
              <code className="text-sm font-mono text-gray-300 block leading-relaxed whitespace-pre">
                {BIBTEX}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────── */}
      <footer className="bg-white border-t border-gray-200 py-10 px-4">
        <div className="max-w-4xl mx-auto text-center text-gray-400 text-sm">
          <p className="mb-1">
            <a href="https://www.robots.ox.ac.uk/~vgg/" target="_blank" rel="noreferrer" className="hover:text-gray-600 transition-colors">Visual Geometry Group</a>
            {' · '}
            <a href="https://www.ox.ac.uk/" target="_blank" rel="noreferrer" className="hover:text-gray-600 transition-colors">University of Oxford</a>
          </p>
          <p className="text-xs text-gray-300 mt-2">
            Website design inspired by the{' '}
            <a href="https://github.com/eliahuhorwitz/Academic-project-page-template" target="_blank" rel="noreferrer" className="underline hover:text-gray-500">Academic Project Page Template</a>.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;
