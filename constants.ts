import { Author, LinkData } from './types';

export const PAPER_TITLE = "TARA: Simple and Efficient Time Aware Retrieval Adaptation of MLLMs for Video Understanding";

export const AUTHORS: Author[] = [
  {
    name: "Piyush Bagad",
    url: "https://bpiyush.github.io/",
    affiliation: "1"
  },
  {
    name: "Andrew Zisserman",
    url: "https://www.robots.ox.ac.uk/~az/",
    affiliation: "1"
  }
];

export const AFFILIATIONS = [
  "¹University of Oxford",
];

export const LINKS: LinkData[] = [
  { label: "arXiv Paper", url: "#", icon: "pdf" }, // Replace with actual arXiv link when available
  { label: "Code", url: "#", icon: "github" },
  { label: "Data", url: "#", icon: "data" },
];

export const ABSTRACT = `
Our objective is to build a general time-aware video-text embedding model for retrieval. To that end, we propose a simple and efficient recipe, dubbed TARA (Time Aware Retrieval Adaptation), to adapt Multimodal LLMs (MLLMs) to a time-aware video-text embedding model without using any video data at all. For evaluating time-awareness in retrieval, we propose a new benchmark with temporally opposite (chiral) actions as hard negatives and curated splits for chiral and non-chiral actions. We show that TARA outperforms all existing video-text models on this chiral benchmark while also achieving strong results on standard benchmarks. Furthermore, we discover additional benefits of TARA beyond time-awareness: (i) TARA embeddings are negation-aware as shown in NegBench benchmark that evaluates negation in video retrieval, (ii) TARA achieves state of the art performance on verb and adverb understanding in videos. Overall, TARA yields a strong, versatile, time-aware video-text embedding model with state of the art zero-shot performance.
`;

export const BIBTEX = `@article{bagad2025tara,
  title={TARA: Simple and Efficient Time Aware Retrieval Adaptation of MLLMs for Video Understanding},
  author={Bagad, Piyush and Zisserman, Andrew},
  journal={arXiv preprint},
  year={2025}
}`;