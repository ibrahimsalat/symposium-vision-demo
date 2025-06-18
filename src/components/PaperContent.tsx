
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Highlighter, Bot, Info } from 'lucide-react';
import { PaperVersion } from '@/types/paper';

interface PaperContentProps {
  currentVersion: PaperVersion | undefined;
  onTextSelection: () => void;
  showActionPopup: boolean;
  popupPosition: { x: number; y: number };
  selectedText: string;
  onAddComment: () => void;
  onAddHighlight: (color: 'yellow' | 'blue' | 'green' | 'red') => void;
  onAskAI: () => void;
  onToggleInfo: () => void;
  onToggleComments: () => void;
  commentsCount: number;
}

const PaperContent = ({
  currentVersion,
  onTextSelection,
  showActionPopup,
  popupPosition,
  selectedText,
  onAddComment,
  onAddHighlight,
  onAskAI,
  onToggleInfo,
  onToggleComments,
  commentsCount
}: PaperContentProps) => {
  return (
    <div className="w-full min-h-screen">
      {/* Top Toolbar */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={onToggleInfo}
                className="flex items-center gap-2"
              >
                <Info size={16} />
                Paper Info
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={onToggleComments}
                className="flex items-center gap-2"
              >
                <MessageSquare size={16} />
                Comments ({commentsCount})
              </Button>
            </div>
            
            <div className="text-sm text-gray-500">
              Enhanced Paper Reader
            </div>
          </div>
        </div>
      </div>

      {/* Paper Content */}
      <div className="overflow-y-auto">
        <div className="p-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow p-8 relative">
            {currentVersion && (
              <div className="prose max-w-none" onMouseUp={onTextSelection}>
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
                  onClick={onAddComment}
                  className="flex items-center gap-1"
                >
                  <MessageSquare size={14} />
                  Comment
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => onAddHighlight('yellow')}
                  className="flex items-center gap-1"
                >
                  <Highlighter size={14} />
                  Highlight
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={onAskAI}
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
    </div>
  );
};

export default PaperContent;
