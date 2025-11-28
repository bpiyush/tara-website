export interface Author {
  name: string;
  url?: string;
  affiliation?: string;
  isCorresponding?: boolean;
}

export interface LinkData {
  label: string;
  url: string;
  icon: 'pdf' | 'github' | 'video' | 'data';
}

export interface Section {
  id: string;
  title: string;
  content?: string;
}
