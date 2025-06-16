
export type PaperVersion = {
  id: string;
  version: string;
  date: string;
  changes: string;
  content: PaperSection[];
};

export type PaperSection = {
  id: string;
  type: 'title' | 'abstract' | 'introduction' | 'methodology' | 'results' | 'discussion' | 'conclusion';
  content: string;
};

export type Comment = {
  id: string;
  author: {
    name: string;
    initials: string;
    affiliation: string;
    isVerified: boolean;
    reputation: number;
  };
  text: string;
  timestamp: string;
  sectionId: string;
  selectedText: string;
  likes: number;
  replies: Comment[];
  isHighlighted?: boolean;
};

export type Highlight = {
  id: string;
  sectionId: string;
  selectedText: string;
  color: 'yellow' | 'blue' | 'green' | 'red';
  userId: string;
  note?: string;
};

export type PaperMetadata = {
  id: string;
  title: string;
  authors: Array<{
    name: string;
    affiliation: string;
    email?: string;
  }>;
  abstract: string;
  keywords: string[];
  doi?: string;
  publishDate: string;
  field: string;
  journal?: string;
  versions: PaperVersion[];
  currentVersion: string;
};
