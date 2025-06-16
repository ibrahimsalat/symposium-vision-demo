
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Highlighter, Bot } from 'lucide-react';
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
}

const PaperContent = ({
  currentVersion,
  onTextSelection,
  showActionPopup,
  popupPosition,
  selectedText,
  onAddComment,
  onAddHighlight,
  onAskAI
}: PaperContentProps) => {
  return (
    <div className="flex-1 overflow-y-auto">
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
  );
};

export default PaperContent;
