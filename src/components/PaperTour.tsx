import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface TourStep {
  id: string;
  title: string;
  content: string;
  target: string;
  position: 'top' | 'bottom' | 'left' | 'right';
}

const tourSteps: TourStep[] = [
  {
    id: 'search',
    title: 'Search & Filter Papers',
    content: 'Find papers by title, author, or field. Use the filter dropdown to narrow results by research area.',
    target: '[data-tour="search"]',
    position: 'bottom'
  },
  {
    id: 'paper-card',
    title: 'Paper Cards',
    content: 'Each paper shows key information including authors, abstract, publication date, and comment count.',
    target: '[data-tour="paper-card"]',
    position: 'top'
  },
  {
    id: 'read-paper',
    title: 'Interactive Reading',
    content: 'Click "Read Paper" to view the full text with collaborative annotation features.',
    target: '[data-tour="read-paper"]',
    position: 'top'
  },
  {
    id: 'comments',
    title: 'Peer Review Comments',
    content: 'See real-time comments from other researchers and add your own insights directly on paper sections.',
    target: '[data-tour="comments"]',
    position: 'left'
  }
];

interface PaperTourProps {
  isActive: boolean;
  onComplete: () => void;
}

const PaperTour = ({ isActive, onComplete }: PaperTourProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsVisible(true);
      setCurrentStep(0);
    }
  }, [isActive]);

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeTour();
    }
  };

  const completeTour = () => {
    setIsVisible(false);
    onComplete();
  };

  if (!isVisible || !isActive) return null;

  const step = tourSteps[currentStep];

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" />
      
      {/* Tour popup */}
      <Card className="fixed z-50 w-80 animate-in fade-in-0 slide-in-from-bottom-2" 
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={completeTour}
              className="h-8 w-8 p-0"
            >
              <X size={16} />
            </Button>
          </div>
          
          <p className="text-gray-600 mb-6">{step.content}</p>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              Step {currentStep + 1} of {tourSteps.length}
            </span>
            <Button onClick={nextStep} className="bg-teal hover:bg-teal-light">
              {currentStep === tourSteps.length - 1 ? 'Finish' : 'Next'}
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PaperTour;