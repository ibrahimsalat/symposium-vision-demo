import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ThumbsUp, Bot, GitBranch, Badge, X, Send, Sparkles, MessageCircle, Copy, ThumbsDown } from 'lucide-react';
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

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m your AI research assistant. I\'ve analyzed this paper and I\'m ready to help you understand its key concepts, methodology, and implications. What would you like to know?',
      timestamp: new Date().toLocaleTimeString(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestedQuestions = [
    "What's the main contribution of this paper?",
    "Can you explain the methodology?",
    "What are the key findings?",
    "How does this compare to previous work?",
    "What are the limitations?"
  ];

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const simulateAIResponse = (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate AI thinking time
    setTimeout(() => {
      let response = '';
      
      if (userMessage.toLowerCase().includes('contribution') || userMessage.toLowerCase().includes('main')) {
        response = 'The main contribution of this paper is a novel quantum-enhanced neural network architecture that achieves exponential speedup over classical methods. The key innovation lies in the amplitude encoding scheme and the use of variational quantum circuits for feature extraction.';
      } else if (userMessage.toLowerCase().includes('methodology') || userMessage.toLowerCase().includes('method')) {
        response = 'The methodology combines quantum amplitude encoding with variational quantum circuits. The authors use a hybrid classical-quantum approach where classical preprocessing prepares the data, quantum circuits perform feature extraction, and classical neural networks handle the final classification.';
      } else if (userMessage.toLowerCase().includes('findings') || userMessage.toLowerCase().includes('results')) {
        response = 'Key findings include: 1) 10x speedup on classification tasks, 2) Better noise resilience than expected, 3) Scalability up to 50 qubits demonstrated. The results show particular promise for high-dimensional data processing.';
      } else if (userMessage.toLowerCase().includes('limitations')) {
        response = 'The main limitations are: 1) Current implementation limited to 50 qubits, 2) No analysis of noise effects in real quantum hardware, 3) Benchmarks only on synthetic datasets, 4) Scalability to larger problems unclear.';
      } else if (userMessage.toLowerCase().includes('compare') || userMessage.toLowerCase().includes('previous')) {
        response = 'Compared to previous quantum ML approaches, this work shows significant improvements in both speed and accuracy. Unlike gate-based approaches, the amplitude encoding reduces circuit depth by 60%. The variational approach also outperforms fixed quantum feature maps.';
      } else {
        response = 'That\'s an interesting question! Based on my analysis of the paper, I can provide more specific insights if you could clarify what aspect you\'d like me to focus on. Feel free to ask about the methodology, results, or implications.';
      }
      
      setChatMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'assistant' as const,
        content: response,
        timestamp: new Date().toLocaleTimeString(),
      }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const userMessage = {
      id: Date.now().toString(),
      role: 'user' as const,
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString(),
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    
    // Simulate AI response
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

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="w-96 bg-white border-l border-gray-200 h-full shadow-lg">
      {/* Header with close button */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Discussions</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="h-8 w-8 p-0"
        >
          <X size={16} />
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
        <TabsList className="grid w-full grid-cols-4 rounded-none border-b">
          <TabsTrigger value="comments" className="text-xs">Comments</TabsTrigger>
          <TabsTrigger value="highlights" className="text-xs">Highlights</TabsTrigger>
          <TabsTrigger value="ai" className="text-xs">AI Insights</TabsTrigger>
          <TabsTrigger value="versions" className="text-xs">Versions</TabsTrigger>
        </TabsList>

        <TabsContent value="comments" className="flex-1 overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="font-medium">Comments ({sortedComments.length})</h3>
            <p className="text-sm text-gray-500">Sorted by importance</p>
          </div>
          <ScrollArea className="h-full">
            <div className="p-4 space-y-4">
              {sortedComments.map(comment => (
                <div key={comment.id} className={`border rounded-lg p-4 ${comment.isHighlighted ? 'border-teal bg-teal/5' : 'border-gray-200'}`}>
                  <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8 bg-teal/20 text-teal">
                      <span className="text-xs font-medium">{comment.author.initials}</span>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{comment.author.name}</span>
                        {comment.author.isVerified && (
                          <Badge size={12} className="text-teal" />
                        )}
                        <span className="text-xs text-gray-500">Rep: {comment.author.reputation}</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{comment.author.affiliation}</p>
                      
                      {comment.selectedText && (
                        <div className="bg-gray-100 p-2 rounded text-xs mb-2">
                          <span className="font-medium">Selected text: </span>
                          "{comment.selectedText}"
                        </div>
                      )}
                      
                      <p className="text-sm text-gray-700 mb-2">{comment.text}</p>
                      
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <button className="flex items-center gap-1 hover:text-teal">
                          <ThumbsUp size={12} />
                          {comment.likes}
                        </button>
                        <span>{comment.timestamp}</span>
                        <button className="hover:text-teal">Reply</button>
                      </div>

                      {comment.replies.length > 0 && (
                        <div className="mt-3 pl-4 border-l border-gray-200 space-y-2">
                          {comment.replies.map(reply => (
                            <div key={reply.id} className="text-sm">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium">{reply.author.name}</span>
                                <span className="text-xs text-gray-500">{reply.timestamp}</span>
                              </div>
                              <p className="text-gray-700">{reply.text}</p>
                              <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-teal mt-1">
                                <ThumbsUp size={10} />
                                {reply.likes}
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="highlights" className="flex-1">
          <div className="p-4">
            <h3 className="font-medium mb-4">My Highlights</h3>
            {highlights.length === 0 ? (
              <p className="text-sm text-gray-500 italic">No highlights yet. Select text to add highlights.</p>
            ) : (
              <div className="space-y-2">
                {highlights.map(highlight => (
                  <div key={highlight.id} className="p-2 border rounded">
                    <div className={`w-3 h-3 rounded-full bg-${highlight.color}-300 inline-block mr-2`}></div>
                    <span className="text-sm">{highlight.selectedText}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="ai" className="flex-1 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 border-b bg-gradient-to-r from-teal/5 to-blue/5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal to-blue rounded-full flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">AI Research Assistant</h3>
                <p className="text-xs text-gray-500">Powered by Claude</p>
              </div>
            </div>
            
            {/* Suggested Questions */}
            {chatMessages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-600 mb-2">Try asking:</p>
                <div className="flex flex-wrap gap-1">
                  {suggestedQuestions.slice(0, 3).map((question, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSuggestedQuestion(question)}
                      className="text-xs h-6 px-2 bg-white/50 hover:bg-white border border-gray-200"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Chat Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${message.role === 'user' ? 'order-2' : 'order-1'}`}>
                    <div
                      className={`rounded-2xl px-4 py-3 text-sm ${
                        message.role === 'user'
                          ? 'bg-teal text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.content}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">{message.timestamp}</span>
                      {message.role === 'assistant' && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyMessage(message.content)}
                          className="h-4 w-4 p-0 hover:bg-gray-200"
                        >
                          <Copy size={10} />
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <Avatar className={`h-6 w-6 ${message.role === 'user' ? 'order-1 ml-2' : 'order-2 mr-2'}`}>
                    {message.role === 'user' ? (
                      <span className="text-xs bg-teal text-white">YS</span>
                    ) : (
                      <Bot size={12} className="text-teal" />
                    )}
                  </Avatar>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] order-1">
                    <div className="bg-gray-100 rounded-2xl px-4 py-3 text-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                  <Avatar className="h-6 w-6 order-2 mr-2">
                    <Bot size={12} className="text-teal" />
                  </Avatar>
                </div>
              )}
              
              <div ref={chatEndRef} />
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="p-4 border-t bg-gray-50">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about the paper..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                size="sm"
                className="px-3"
              >
                <Send size={14} />
              </Button>
            </div>
            
            {/* Quick Actions */}
            {chatMessages.length > 1 && (
              <div className="flex gap-1 mt-2">
                {suggestedQuestions.slice(3).map((question, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSuggestedQuestion(question)}
                    className="text-xs h-6 px-2 bg-white hover:bg-gray-100"
                  >
                    {question.split(' ').slice(0, 2).join(' ')}...
                  </Button>
                ))}
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="versions" className="flex-1">
          <div className="p-4">
            <h3 className="font-medium mb-4">Version History</h3>
            <div className="space-y-3">
              {paper.versions.map(version => (
                <div 
                  key={version.version}
                  className={`p-3 border rounded cursor-pointer transition-colors ${
                    selectedVersion === version.version ? 'border-teal bg-teal/5' : 'border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedVersion(version.version)}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <GitBranch size={14} />
                    <span className="font-medium text-sm">{version.version}</span>
                    <span className="text-xs text-gray-500">{version.date}</span>
                  </div>
                  <p className="text-xs text-gray-600">{version.changes}</p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaperCommentsSidebar;
