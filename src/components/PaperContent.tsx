
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
  
  const renderEquation = (equation: string) => {
    return (
      <div className="paper-equation">
        {equation}
      </div>
    );
  };

  const processContent = (content: string) => {
    // Split content by equations and render them specially
    const parts = content.split(/(\*\*Equation \d+:\*\*[^*]+\*[^*]+\*)/g);
    
    return parts.map((part, index) => {
      if (part.match(/\*\*Equation \d+:\*\*/)) {
        const equationMatch = part.match(/\*\*Equation \d+:\*\*\s*([^*]+)\s*\*([^*]+)\*/);
        if (equationMatch) {
          const [, title, equation] = equationMatch;
          return (
            <div key={index}>
              <div className="font-semibold text-sm mb-1">{title.trim()}</div>
              {renderEquation(equation.trim())}
            </div>
          );
        }
      }
      
      // Process other formatting
      const formattedContent = part
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/¹(\d)/g, '<sup>$1</sup>')
        .replace(/₂/g, '<sub>2</sub>')
        .replace(/ᵢ/g, '<sub>i</sub>')
        .replace(/⟩/g, '⟩')
        .replace(/⟨/g, '⟨')
        .replace(/∘/g, '∘')
        .replace(/Σ/g, 'Σ')
        .replace(/ℝ/g, 'ℝ')
        .replace(/π/g, 'π')
        .replace(/α/g, 'α')
        .replace(/β/g, 'β')
        .replace(/θ/g, 'θ')
        .replace(/φ/g, 'φ')
        .split('\n')
        .map((paragraph, pIndex) => {
          if (paragraph.trim()) {
            return (
              <p key={pIndex} className="mb-3" dangerouslySetInnerHTML={{__html: paragraph}} />
            );
          }
          return null;
        })
        .filter(Boolean);
      
      return <div key={index}>{formattedContent}</div>;
    });
  };

  return (
    <div className="w-full min-h-screen">
      {/* Top Toolbar */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-8 py-4">
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
        <div className="p-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow p-8 relative">
            {currentVersion && (
              <div className="paper-content" onMouseUp={onTextSelection}>
                {currentVersion.content.map((section, sectionIndex) => (
                  <div key={section.id} className="mb-8">
                    {section.type === 'title' && (
                      <div className="paper-single-column mb-8">
                        <h1 className="text-2xl font-serif font-bold text-center mb-2">
                          {section.content}
                        </h1>
                        <div className="text-center text-sm text-gray-600 mb-4">
                          Published in Nature • Volume 621 • 15 May 2025 • DOI: 10.1038/s41586-025-07123-4
                        </div>
                      </div>
                    )}
                    
                    {section.type === 'abstract' && (
                      <div className="paper-single-column mb-8">
                        <h2 className="paper-section-title">Abstract</h2>
                        <div className="text-sm leading-relaxed font-medium bg-gray-50 p-4 rounded border-l-4 border-blue-500">
                          {processContent(section.content)}
                        </div>
                      </div>
                    )}
                    
                    {section.type !== 'title' && section.type !== 'abstract' && (
                      <div className={sectionIndex === currentVersion.content.length - 1 ? "paper-single-column" : "paper-two-column"}>
                        <h2 className="paper-section-title text-center mb-4 uppercase tracking-wide" style={{columnSpan: 'all'}}>
                          {section.type === 'methodology' ? 'Methods' : section.type}
                        </h2>
                        <div className="text-sm leading-relaxed">
                          {processContent(section.content)}
                        </div>
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
