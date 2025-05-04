
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Landing from './Landing';

const Index = () => {
  const navigate = useNavigate();

  // If we're at the root, render the Landing component directly
  return <Landing />;
};

export default Index;
