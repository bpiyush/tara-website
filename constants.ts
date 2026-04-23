import { Author, LinkData } from './types';

export const PAPER_TITLE = "Adapting MLLMs for Nuanced Video Retrieval";
export const PAPER_SUBTITLE = "TARA: Text Adapted Retrieval Alignment";

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
  { id: "1", name: "Visual Geometry Group, University of Oxford" },
];

export const LINKS: LinkData[] = [
  { label: "Paper", url: "https://arxiv.org/pdf/2512.13511", icon: "pdf" },
  { label: "arXiv", url: "https://arxiv.org/abs/2512.13511", icon: "pdf" },
  { label: "Code", url: "https://github.com/bpiyush/TARA", icon: "github" },
  { label: "Dataset", url: "https://huggingface.co/datasets/bpiyush/chirality-in-action", icon: "data" },
];

export const ABSTRACT = `Our objective is to build an embedding model that captures the nuanced relationship between a search query and candidate videos. We cover three aspects of nuanced retrieval: (i) temporal, (ii) negation, and (iii) multimodal. For temporal nuance, we consider chiral actions that need distinguishing between temporally opposite actions like "opening a door" vs. "closing a door". For negation, we consider queries with negators such as "not", "none" that allow users to specify what they do not want. For multimodal nuance, we consider the task of composed retrieval where the query comprises a video along with a text edit instruction. To that end, we repurpose a Multimodal Large Language Model (MLLM) trained to generate text into an embedding model. We fine-tune it with a contrastive loss on text alone with carefully sampled hard negatives that instill the desired nuances in the learned embedding space. Despite the text-only training, our method achieves state of the art performance on all benchmarks for nuanced video retrieval. We also show that text-only training reduces the modality gap between text and video embeddings, leading to better organization of the embedding space.`;

export const BIBTEX = `@article{bagad2026tara,
  title   = {Adapting MLLMs for Nuanced Video Retrieval},
  author  = {Bagad, Piyush and Zisserman, Andrew},
  journal = {arXiv preprint arXiv:2512.13511},
  year    = {2026}
}`;
