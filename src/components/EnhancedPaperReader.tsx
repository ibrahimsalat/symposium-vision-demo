
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
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        <PaperInfoSidebar 
          paper={paper}
          selectedVersion={selectedVersion}
          setSelectedVersion={setSelectedVersion}
        />
        
        <PaperContent
          currentVersion={currentVersion}
          onTextSelection={handleTextSelection}
          showActionPopup={showActionPopup}
          popupPosition={popupPosition}
          selectedText={selectedText}
          onAddComment={addComment}
          onAddHighlight={addHighlight}
          onAskAI={askAI}
        />

        <PaperCommentsSidebar
          comments={comments}
          highlights={highlights}
          paper={paper}
          selectedVersion={selectedVersion}
          setSelectedVersion={setSelectedVersion}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
};

export default EnhancedPaperReader;
