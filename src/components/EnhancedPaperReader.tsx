
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MessageSquare, 
  Highlight, 
  Bot, 
  ThumbsUp, 
  Calendar,
  Users,
  ExternalLink,
  GitBranch,
  Badge,
  Clock
} from 'lucide-react';
import { mockPaperData, mockComments } from '@/data/mockPaperData';
import { Comment, Highlight as HighlightType } from '@/types/paper';

const EnhancedPaperReader = () => {
  const { paperId } = useParams();
  const [selectedVersion, setSelectedVersion] = useState("v3.0");
  const [selectedText, setSelectedText] = useState("");
  const [showActionPopup, setShowActionPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [highlights, setHighlights] = useState<HighlightType[]>([]);
  const [activeTab, setActiveTab] = useState("comments");

  const paper = mockPaperData;
  const currentVersion = paper.versions.find(v => v.version === selectedVersion);
  const comments = mockComments;

  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim()) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      
      setSelectedText(selection.toString());
      setPopupPosition({ 
        x: rect.left + window.scrollX, 
        y: rect.top + window.scrollY - 60 
      });
      setShowActionPopup(true);
    }
  };

  const addComment = () => {
    console.log("Adding comment for:", selectedText);
    setShowActionPopup(false);
  };

  const addHighlight = (color: 'yellow' | 'blue' | 'green' | 'red') => {
    const newHighlight: HighlightType = {
      id: Date.now().toString(),
      sectionId: "current",
      selectedText,
      color,
      userId: "current-user"
    };
    setHighlights([...highlights, newHighlight]);
    setShowActionPopup(false);
  };

  const askAI = () => {
    console.log("Asking AI about:", selectedText);
    setShowActionPopup(false);
  };

  const sortedComments = [...comments].sort((a, b) => b.likes - a.likes);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Left Sidebar - Paper Info */}
        <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Paper Information</h2>
            
            {/* Version Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Version</label>
              <select
                value={selectedVersion}
                onChange={(e) => setSelectedVersion(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-transparent"
              >
                {paper.versions.map(version => (
                  <option key={version.version} value={version.version}>
                    {version.version} - {version.date}
                  </option>
                ))}
              </select>
              {currentVersion && (
                <p className="text-xs text-gray-500 mt-1">{currentVersion.changes}</p>
              )}
            </div>

            {/* Paper Metadata */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Title</h3>
                <p className="text-sm">{paper.title}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Authors</h3>
                <div className="space-y-1">
                  {paper.authors.map((author, index) => (
                    <div key={index} className="text-sm">
                      <span className="font-medium">{author.name}</span>
                      <span className="text-gray-500"> - {author.affiliation}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Abstract</h3>
                <p className="text-sm text-gray-600">{paper.abstract}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-1">DOI</h3>
                  <a 
                    href={`https://doi.org/${paper.doi}`}
                    className="text-sm text-teal hover:underline flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {paper.doi}
                    <ExternalLink size={12} />
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-1">Field</h3>
                  <span className="text-sm text-teal bg-teal/10 px-2 py-1 rounded">
                    {paper.field}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Keywords</h3>
                <div className="flex flex-wrap gap-1">
                  {paper.keywords.map((keyword, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Paper */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow p-8 relative">
              {currentVersion && (
                <div className="prose max-w-none" onMouseUp={handleTextSelection}>
                  {currentVersion.content.map((section) => (
                    <div key={section.id} className="mb-8">
                      {section.type === 'title' && (
                        <h1 className="text-3xl font-serif font-bold mb-4">{section.content}</h1>
                      )}
                      {section.type === 'abstract' && (
                        <div>
                          <h2 className="text-xl font-serif font-semibold mb-2">Abstract</h2>
                          <p className="text-gray-700 leading-relaxed">{section.content}</p>
                        </div>
                      )}
                      {section.type !== 'title' && section.type !== 'abstract' && (
                        <div>
                          <h2 className="text-xl font-serif font-semibold mb-2 capitalize">
                            {section.type}
                          </h2>
                          <p className="text-gray-700 leading-relaxed">{section.content}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Action Popup */}
              {showActionPopup && (
                <div 
                  className="absolute z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-2 flex gap-2"
                  style={{ left: popupPosition.x, top: popupPosition.y }}
                >
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={addComment}
                    className="flex items-center gap-1"
                  >
                    <MessageSquare size={14} />
                    Comment
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => addHighlight('yellow')}
                    className="flex items-center gap-1"
                  >
                    <Highlight size={14} />
                    Highlight
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={askAI}
                    className="flex items-center gap-1"
                  >
                    <Bot size={14} />
                    Ask AI
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Comments & Tools */}
        <div className="w-96 bg-white border-l border-gray-200">
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
      </div>
    </div>
  );
};

export default EnhancedPaperReader;
