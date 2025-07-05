import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { ThumbsUp, Bot, GitBranch, Badge, X, Send, MessageCircle, Copy } from 'lucide-react';
import { Comment, Highlight, PaperMetadata } from '@/types/paper';
interface PaperCommentsSidebarProps {
  comments: Comment[];
  highlights: Highlight[];
  paper: PaperMetadata;
  selectedVersion: string;
  setSelectedVersion: (version: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onClose: () => void;
}
const PaperCommentsSidebar = ({
  comments,
  highlights,
  paper,
  selectedVersion,
  setSelectedVersion,
  activeTab,
  setActiveTab,
  onClose
}: PaperCommentsSidebarProps) => {
  const sortedComments = [...comments].sort((a, b) => b.likes - a.likes);

  // AI Chat state
  interface ChatMessage {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
  }
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([{
    id: '1',
    role: 'assistant',
    content: 'Hello! I\'m your AI research assistant. I\'ve analyzed this paper and I\'m ready to help you understand its key concepts, methodology, and implications. What would you like to know?',
    timestamp: new Date().toLocaleTimeString()
  }]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestedQuestions = ["What's the main contribution of this paper?", "Can you explain the methodology?", "What are the key findings?", "How does this compare to previous work?"];

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [chatMessages]);
  const simulateAIResponse = (userMessage: string) => {
    setIsTyping(true);
    setTimeout(() => {
      let response = '';
      if (userMessage.toLowerCase().includes('contribution') || userMessage.toLowerCase().includes('main')) {
        response = 'The main contribution of this paper is a novel quantum-enhanced neural network architecture that achieves exponential speedup over classical methods.';
      } else if (userMessage.toLowerCase().includes('methodology') || userMessage.toLowerCase().includes('method')) {
        response = 'The methodology combines quantum amplitude encoding with variational quantum circuits in a hybrid classical-quantum approach.';
      } else if (userMessage.toLowerCase().includes('findings') || userMessage.toLowerCase().includes('results')) {
        response = 'Key findings include: 1) 10x speedup on classification tasks, 2) Better noise resilience than expected, 3) Scalability up to 50 qubits demonstrated.';
      } else {
        response = 'That\'s an interesting question! Based on my analysis of the paper, I can provide more specific insights if you could clarify what aspect you\'d like me to focus on.';
      }
      setChatMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'assistant' as const,
        content: response,
        timestamp: new Date().toLocaleTimeString()
      }]);
      setIsTyping(false);
    }, 1500);
  };
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    const userMessage = {
      id: Date.now().toString(),
      role: 'user' as const,
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString()
    };
    setChatMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    simulateAIResponse(inputMessage);
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  const handleSuggestedQuestion = (question: string) => {
    setInputMessage(question);
    inputRef.current?.focus();
  };
  return <div className="w-96 bg-background border-l border-border h-full shadow-lg flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border flex-shrink-0">
        <h2 className="text-lg font-semibold">Discussions</h2>
        <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
          <X size={16} />
        </Button>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col min-h-0">
        <TabsList className="grid w-full grid-cols-4 rounded-none border-b border-border flex-shrink-0">
          <TabsTrigger value="comments" className="text-xs">Comments</TabsTrigger>
          <TabsTrigger value="highlights" className="text-xs">Highlights</TabsTrigger>
          <TabsTrigger value="ai" className="text-xs">AI Chat</TabsTrigger>
          <TabsTrigger value="versions" className="text-xs">Versions</TabsTrigger>
        </TabsList>

        {/* Comments Tab */}
        <TabsContent value="comments" className="flex-1 flex flex-col min-h-0 m-0">
          <div className="p-4 border-b border-border flex-shrink-0">
            <h3 className="font-medium">Comments ({sortedComments.length})</h3>
            <p className="text-sm text-muted-foreground">Sorted by importance</p>
          </div>
          
          <ScrollArea className="flex-1 min-h-0">
            <div className="p-4 space-y-4">
              {sortedComments.map(comment => <div key={comment.id} className="border border-border rounded-lg p-4 hover:shadow-sm transition-all">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8 bg-primary/10 text-primary">
                      <span className="text-xs font-medium">{comment.author.initials}</span>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{comment.author.name}</span>
                        {comment.author.isVerified && <Badge size={12} className="text-primary" />}
                        <span className="text-xs text-muted-foreground">Rep: {comment.author.reputation}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{comment.author.affiliation}</p>
                      
                      {comment.selectedText && <div className="bg-muted border-l-4 border-primary p-3 rounded-r text-xs mb-3">
                          <span className="font-medium">Selected text: </span>
                          <span>"{comment.selectedText}"</span>
                        </div>}
                      
                      <p className="text-sm mb-3 leading-relaxed">{comment.text}</p>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                          <ThumbsUp size={12} />
                          {comment.likes}
                        </button>
                        <span>{comment.timestamp}</span>
                        <button className="hover:text-primary transition-colors">Reply</button>
                      </div>
                    </div>
                  </div>
                </div>)}
              
              {sortedComments.length === 0 && <div className="text-center py-8 text-muted-foreground">
                  <MessageCircle size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="text-sm">No comments yet</p>
                  <p className="text-xs">Be the first to start a discussion!</p>
                </div>}
            </div>
          </ScrollArea>
        </TabsContent>

        {/* Highlights Tab */}
        

        {/* AI Chat Tab */}
        

        {/* Versions Tab */}
        
      </Tabs>
    </div>;
};
export default PaperCommentsSidebar;