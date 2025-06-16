
import { PaperMetadata, PaperVersion, Comment } from '@/types/paper';

export const mockPaperData: PaperMetadata = {
  id: "1",
  title: "Quantum Computing and Neural Networks: A Novel Approach to Machine Learning",
  authors: [
    { name: "Dr. Li Zhang", affiliation: "MIT", email: "l.zhang@mit.edu" },
    { name: "Dr. Sanjay Patel", affiliation: "MIT", email: "s.patel@mit.edu" },
    { name: "Dr. Michael Johnson", affiliation: "Stanford University", email: "m.johnson@stanford.edu" },
    { name: "Dr. Ana Rodriguez", affiliation: "UC Berkeley", email: "a.rodriguez@berkeley.edu" }
  ],
  abstract: "In this paper, we explore the intersection of quantum computing and neural networks, proposing a novel framework for quantum-enhanced machine learning algorithms. We demonstrate that quantum neural networks can exponentially accelerate certain learning tasks compared to their classical counterparts, particularly in high-dimensional feature spaces.",
  keywords: ["quantum computing", "neural networks", "machine learning", "quantum algorithms", "NISQ"],
  doi: "10.1038/s41586-025-07123-4",
  publishDate: "2025-05-15",
  field: "Quantum Computing",
  journal: "Nature",
  currentVersion: "v3.0",
  versions: [
    {
      id: "v1",
      version: "v1.0",
      date: "2025-03-15",
      changes: "Initial submission",
      content: [
        {
          id: "title-1",
          type: "title",
          content: "Quantum Computing and Neural Networks: A Basic Approach to Machine Learning"
        },
        {
          id: "abstract-1",
          type: "abstract",
          content: "This paper explores quantum computing applications in neural networks, proposing a framework for quantum-enhanced machine learning algorithms."
        }
      ]
    },
    {
      id: "v2",
      version: "v2.0", 
      date: "2025-04-10",
      changes: "Added experimental results, improved methodology section",
      content: [
        {
          id: "title-2",
          type: "title",
          content: "Quantum Computing and Neural Networks: An Enhanced Approach to Machine Learning"
        },
        {
          id: "abstract-2",
          type: "abstract",
          content: "In this paper, we explore the intersection of quantum computing and neural networks, proposing a novel framework for quantum-enhanced machine learning algorithms. We demonstrate significant improvements over classical approaches."
        }
      ]
    },
    {
      id: "v3",
      version: "v3.0",
      date: "2025-05-15", 
      changes: "Final version with peer review feedback, added exponential acceleration claims with proof",
      content: [
        {
          id: "title-3",
          type: "title",
          content: "Quantum Computing and Neural Networks: A Novel Approach to Machine Learning"
        },
        {
          id: "abstract-3",
          type: "abstract",
          content: "In this paper, we explore the intersection of quantum computing and neural networks, proposing a novel framework for quantum-enhanced machine learning algorithms. We demonstrate that quantum neural networks can exponentially accelerate certain learning tasks compared to their classical counterparts, particularly in high-dimensional feature spaces."
        },
        {
          id: "intro-3",
          type: "introduction",
          content: "Machine learning algorithms have transformed numerous fields, from computer vision to natural language processing. However, as datasets grow in size and complexity, classical computing architectures face significant limitations. Quantum computing offers a promising avenue to overcome these challenges through its unique computational properties, including superposition and entanglement."
        },
        {
          id: "method-3",
          type: "methodology", 
          content: "We implemented our quantum neural network framework using a 27-qubit superconducting quantum processor. The quantum circuit consists of three main components: an encoding layer that maps classical data into the quantum Hilbert space, a variational quantum circuit with learnable parameters, and a measurement scheme that extracts the output probability distribution."
        },
        {
          id: "results-3",
          type: "results",
          content: "Our experiments demonstrate that the proposed quantum neural network architecture achieves a 15-20% performance improvement over state-of-the-art classical models on several benchmark datasets, including MNIST and CIFAR-10. Notably, the quantum advantage becomes more pronounced as the dimensionality of the data increases."
        },
        {
          id: "conclusion-3",
          type: "conclusion",
          content: "We have presented a novel quantum neural network framework that demonstrates superior performance on standard machine learning benchmarks. Our work contributes to the growing field of quantum machine learning and highlights the potential for quantum computing to revolutionize artificial intelligence applications in the coming decades."
        }
      ]
    }
  ]
};

export const mockComments: Comment[] = [
  {
    id: "1",
    author: {
      name: "Dr. Emma Chen",
      initials: "EC", 
      affiliation: "MIT",
      isVerified: true,
      reputation: 89
    },
    text: "Have you considered how quantum error correction might affect the scalability of your approach? Current NISQ devices have significant noise limitations that could impact the claimed exponential advantage.",
    timestamp: "3 days ago",
    sectionId: "method-3",
    selectedText: "27-qubit superconducting quantum processor",
    likes: 24,
    replies: [
      {
        id: "1-1",
        author: {
          name: "Dr. Li Zhang",
          initials: "LZ",
          affiliation: "MIT",
          isVerified: true,
          reputation: 95
        },
        text: "Great point! We address this in our error analysis section. While NISQ limitations exist, our results show the advantage persists even with current noise levels.",
        timestamp: "2 days ago",
        sectionId: "method-3",
        selectedText: "",
        likes: 12,
        replies: []
      }
    ],
    isHighlighted: true
  },
  {
    id: "2",
    author: {
      name: "Prof. David Williams",
      initials: "DW",
      affiliation: "Oxford University", 
      isVerified: true,
      reputation: 92
    },
    text: "I'm skeptical about the claimed 15-20% improvement. Could this be due to the specific nature of the test datasets rather than a general quantum advantage? Have you tested on more diverse datasets?",
    timestamp: "2 days ago",
    sectionId: "results-3", 
    selectedText: "15-20% performance improvement",
    likes: 18,
    replies: [],
    isHighlighted: true
  },
  {
    id: "3",
    author: {
      name: "Dr. Alexandra Martinez",
      initials: "AM",
      affiliation: "Google Quantum AI",
      isVerified: true,
      reputation: 87
    },
    text: "Interesting approach with the amplitude encoding. Have you explored other encoding schemes like basis encoding or quantum feature maps? The choice of encoding can significantly impact performance.",
    timestamp: "1 day ago",
    sectionId: "method-3",
    selectedText: "encoding layer that maps classical data into the quantum Hilbert space",
    likes: 15,
    replies: []
  }
];
