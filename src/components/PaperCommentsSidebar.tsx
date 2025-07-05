import React from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ThumbsUp, Bot, GitBranch, Badge, X } from 'lucide-react';
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

        <TabsContent value="ai" className="flex-1">
          <div className="p-4">
            <h3 className="font-medium mb-4">AI Insights</h3>
            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Bot size={14} />
                    Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    This paper presents a quantum-enhanced neural network approach that claims exponential speedup over classical methods. Key innovations include amplitude encoding and variational quantum circuits.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Strengths</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Novel quantum encoding approach</li>
                    <li>• Solid experimental validation</li>
                    <li>• Clear performance improvements</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Areas for Improvement</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Limited discussion of noise effects</li>
                    <li>• Scalability concerns not addressed</li>
                    <li>• Need more diverse benchmarks</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
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
