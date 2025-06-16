
import React from 'react';
import { useParams } from 'react-router-dom';
import PaperLibrary from '@/components/PaperLibrary';
import EnhancedPaperReader from '@/components/EnhancedPaperReader';

const PaperReader = () => {
  const { paperId } = useParams();

  // If no paperId, show the library
  if (!paperId) {
    return <PaperLibrary />;
  }

  // If paperId exists, show the individual paper reader
  return <EnhancedPaperReader />;
};

export default PaperReader;
