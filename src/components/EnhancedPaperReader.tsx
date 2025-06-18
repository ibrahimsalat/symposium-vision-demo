
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockPaperData, mockComments } from '@/data/mockPaperData';
import { Comment, Highlight as HighlightType } from '@/types/paper';
import PaperInfoSidebar from './PaperInfoSidebar';
import PaperContent from './PaperContent';
import PaperCommentsSidebar from './PaperCommentsSidebar';

const EnhancedPaperReader = () => {
  const { paperId } = useParams();
  const [selectedVersion, setSelectedVersion] = useState("v3.0");
  const [selectedText, setSelectedText] = useState("");
  const [showActionPopup, setShowActionPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [highlights, setHighlights] = useState<HighlightType[]>([]);
  const [activeTab, setActiveTab] = useState("comments");
  
  // New state for sidebar visibility
  const [showInfoSidebar, setShowInfoSidebar] = useState(false);
  const [showCommentsSidebar, setShowCommentsSidebar] = useState(false);

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

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Info Sidebar - slides in from left */}
      {showInfoSidebar && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setShowInfoSidebar(false)}
          />
          <div className="fixed left-0 top-0 h-full z-50 animate-slide-in-left">
            <PaperInfoSidebar 
              paper={paper}
              selectedVersion={selectedVersion}
              setSelectedVersion={setSelectedVersion}
              onClose={() => setShowInfoSidebar(false)}
            />
          </div>
        </>
      )}

      {/* Comments Sidebar - slides in from right */}
      {showCommentsSidebar && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setShowCommentsSidebar(false)}
          />
          <div className="fixed right-0 top-0 h-full z-50 animate-slide-in-right">
            <PaperCommentsSidebar
              comments={comments}
              highlights={highlights}
              paper={paper}
              selectedVersion={selectedVersion}
              setSelectedVersion={setSelectedVersion}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onClose={() => setShowCommentsSidebar(false)}
            />
          </div>
        </>
      )}

      {/* Main Content - now full width */}
      <PaperContent
        currentVersion={currentVersion}
        onTextSelection={handleTextSelection}
        showActionPopup={showActionPopup}
        popupPosition={popupPosition}
        selectedText={selectedText}
        onAddComment={addComment}
        onAddHighlight={addHighlight}
        onAskAI={askAI}
        onToggleInfo={() => setShowInfoSidebar(!showInfoSidebar)}
        onToggleComments={() => setShowCommentsSidebar(!showCommentsSidebar)}
        commentsCount={comments.length}
      />
    </div>
  );
};

export default EnhancedPaperReader;
