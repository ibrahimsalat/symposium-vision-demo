
import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare } from 'lucide-react';

type Comment = {
  id: number;
  author: {
    name: string;
    initials: string;
    affiliation: string;
  };
  text: string;
  timestamp: string;
  paragraphId: number;
};

type Paragraph = {
  id: number;
  text: string;
  isHighlighted: boolean;
};

const PaperReader = () => {
  // Mock paper data with paragraphs
  const paperTitle = "Quantum Computing and Neural Networks: A Novel Approach to Machine Learning";
  const paperAuthors = "Zhang, L., Patel, S., Johnson, M., & Rodriguez, A.";
  const paperJournal = "Journal of Quantum Information Science";
  const paperDate = "May 2025";
  
  const [paragraphs, setParagraphs] = useState<Paragraph[]>([
    {
      id: 1,
      text: "Abstract: In this paper, we explore the intersection of quantum computing and neural networks, proposing a novel framework for quantum-enhanced machine learning algorithms. We demonstrate that quantum neural networks can exponentially accelerate certain learning tasks compared to their classical counterparts, particularly in high-dimensional feature spaces.",
      isHighlighted: false
    },
    {
      id: 2,
      text: "Introduction: Machine learning algorithms have transformed numerous fields, from computer vision to natural language processing. However, as datasets grow in size and complexity, classical computing architectures face significant limitations. Quantum computing offers a promising avenue to overcome these challenges through its unique computational properties, including superposition and entanglement.",
      isHighlighted: false
    },
    {
      id: 3,
      text: "Recent advances in quantum hardware have made it increasingly feasible to implement quantum neural networks (QNNs) that leverage these properties. Unlike classical neural networks, QNNs can process vast amounts of information simultaneously through quantum parallelism, potentially enabling more efficient learning on complex datasets.",
      isHighlighted: false
    },
    {
      id: 4,
      text: "Our approach builds upon previous work by Schuld et al. (2020) and Havlíček et al. (2019), extending their quantum kernel methods to incorporate adaptive learning mechanisms. Specifically, we introduce a hybrid quantum-classical architecture that optimizes quantum circuit parameters via gradient-based learning while maintaining quantum advantage.",
      isHighlighted: false
    },
    {
      id: 5,
      text: "Methodology: We implemented our quantum neural network framework using a 27-qubit superconducting quantum processor. The quantum circuit consists of three main components: an encoding layer that maps classical data into the quantum Hilbert space, a variational quantum circuit with learnable parameters, and a measurement scheme that extracts the output probability distribution.",
      isHighlighted: false
    },
    {
      id: 6,
      text: "For the encoding layer, we employed amplitude encoding to represent classical data vectors as quantum states. This approach allows us to encode 2^n classical data points using only n qubits, providing an exponential advantage in representation capacity compared to classical neural networks.",
      isHighlighted: false
    },
    {
      id: 7,
      text: "Results: Our experiments demonstrate that the proposed quantum neural network architecture achieves a 15-20% performance improvement over state-of-the-art classical models on several benchmark datasets, including MNIST and CIFAR-10. Notably, the quantum advantage becomes more pronounced as the dimensionality of the data increases.",
      isHighlighted: false
    },
    {
      id: 8,
      text: "Discussion: These results suggest that quantum neural networks may offer significant advantages for machine learning tasks involving high-dimensional data. However, several challenges remain, including quantum decoherence, circuit depth limitations, and the need for error correction. Future work will focus on addressing these challenges and scaling our approach to larger quantum systems.",
      isHighlighted: false
    },
    {
      id: 9,
      text: "Conclusion: We have presented a novel quantum neural network framework that demonstrates superior performance on standard machine learning benchmarks. Our work contributes to the growing field of quantum machine learning and highlights the potential for quantum computing to revolutionize artificial intelligence applications in the coming decades.",
      isHighlighted: false
    }
  ]);
  
  // Mock comments data
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: {
        name: "Dr. Emma Chen",
        initials: "EC",
        affiliation: "MIT"
      },
      text: "Have you considered how quantum error correction might affect the scalability of your approach? Current NISQ devices have significant noise limitations.",
      timestamp: "3 days ago",
      paragraphId: 5
    },
    {
      id: 2,
      author: {
        name: "Prof. David Williams",
        initials: "DW",
        affiliation: "Oxford University"
      },
      text: "I'm skeptical about the claimed 15-20% improvement. Could this be due to the specific nature of the test datasets rather than a general quantum advantage?",
      timestamp: "2 days ago",
      paragraphId: 7
    },
    {
      id: 3,
      author: {
        name: "Dr. Alexandra Martinez",
        initials: "AM",
        affiliation: "Google Quantum AI"
      },
      text: "Interesting approach with the amplitude encoding. Have you explored other encoding schemes like basis encoding or quantum feature maps?",
      timestamp: "1 day ago",
      paragraphId: 6
    }
  ]);
  
  const [selectedParagraph, setSelectedParagraph] = useState<number | null>(null);
  const [newComment, setNewComment] = useState('');
  
  const toggleHighlight = (id: number) => {
    setParagraphs(paragraphs.map(p => ({
      ...p,
      isHighlighted: p.id === id ? !p.isHighlighted : p.isHighlighted
    })));
    setSelectedParagraph(id);
  };
  
  const addComment = () => {
    if (!selectedParagraph || !newComment.trim()) return;
    
    const newCommentObj: Comment = {
      id: comments.length + 1,
      author: {
        name: "You",
        initials: "YS",
        affiliation: "Your Institution"
      },
      text: newComment,
      timestamp: "Just now",
      paragraphId: selectedParagraph
    };
    
    setComments([...comments, newCommentObj]);
    setNewComment('');
  };

  const filteredComments = selectedParagraph 
    ? comments.filter(c => c.paragraphId === selectedParagraph) 
    : comments;
  
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Paper Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-8">
              <h1 className="text-2xl font-serif font-bold mb-2">{paperTitle}</h1>
              <p className="text-gray-600 mb-2">{paperAuthors}</p>
              <p className="text-sm text-gray-500 mb-6">{paperJournal} • {paperDate}</p>
              
              <div className="prose max-w-none">
                {paragraphs.map((paragraph) => (
                  <div 
                    key={paragraph.id} 
                    className={`mb-6 p-2 rounded transition-colors ${paragraph.isHighlighted ? 'bg-teal/10 border-l-4 border-teal' : ''}`}
                    onClick={() => toggleHighlight(paragraph.id)}
                  >
                    <p>{paragraph.text}</p>
                    {paragraph.isHighlighted && (
                      <div className="mt-2 flex justify-end">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="text-xs flex items-center gap-1 text-teal border-teal"
                        >
                          <MessageSquare size={12} />
                          {comments.filter(c => c.paragraphId === paragraph.id).length} Comments
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Comments Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow h-full">
              <div className="p-6 border-b">
                <h2 className="text-xl font-medium">
                  {selectedParagraph 
                    ? `Comments on Paragraph ${selectedParagraph}` 
                    : "All Comments"}
                </h2>
                {selectedParagraph && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="mt-2 text-gray-500"
                    onClick={() => setSelectedParagraph(null)}
                  >
                    View all comments
                  </Button>
                )}
              </div>
              
              <ScrollArea className="h-[500px]">
                <div className="p-6 space-y-6">
                  {filteredComments.length > 0 ? (
                    filteredComments.map(comment => (
                      <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-0">
                        <div className="flex items-start space-x-3">
                          <Avatar className="h-8 w-8 bg-teal/20 text-teal">
                            <span className="text-xs font-medium">{comment.author.initials}</span>
                          </Avatar>
                          <div>
                            <div className="flex justify-between">
                              <div>
                                <p className="font-medium text-sm">{comment.author.name}</p>
                                <p className="text-xs text-gray-500">{comment.author.affiliation}</p>
                              </div>
                              <span className="text-xs text-gray-400">{comment.timestamp}</span>
                            </div>
                            <p className="mt-2 text-sm">{comment.text}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm italic">No comments yet. Click on a paragraph to start the discussion.</p>
                  )}
                </div>
              </ScrollArea>
              
              {selectedParagraph && (
                <div className="p-6 border-t">
                  <h3 className="text-sm font-medium mb-2">Add a comment</h3>
                  <textarea 
                    className="w-full border rounded-md p-2 text-sm min-h-[100px]"
                    placeholder="Share your thoughts on this section..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  ></textarea>
                  <Button 
                    className="mt-2 bg-teal hover:bg-teal-light"
                    onClick={addComment}
                    disabled={!newComment.trim()}
                  >
                    Post Comment
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperReader;
