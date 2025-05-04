
import React from 'react';
import { MessageSquare, Repeat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

// Mock feed data
const feedPosts = [
  {
    id: 1,
    author: {
      name: 'Dr. Eleanor Fisher',
      avatar: null,
      initials: 'EF',
      affiliation: 'University of Cambridge',
      role: 'Professor of Cognitive Science'
    },
    content: "Just published my research on neural networks and decision-making processes. The results suggest a surprising link between attention mechanisms and cognitive biases. Check it out in the latest issue of Neuroscience Today!",
    timestamp: '2 hours ago',
    likes: 34,
    comments: 12,
    reposts: 8
  },
  {
    id: 2,
    author: {
      name: 'Dr. Alejandro Reyes',
      avatar: null,
      initials: 'AR',
      affiliation: 'Stanford University',
      role: 'Associate Professor of Environmental Studies'
    },
    content: "Our team's climate model projections for the Arctic just got accepted! Challenging the established consensus, we found that permafrost thawing might accelerate 3x faster than previously thought under current emissions scenarios. Implications for global methane release are concerning. Thoughts?",
    timestamp: '4 hours ago',
    likes: 56,
    comments: 23,
    reposts: 15
  },
  {
    id: 3,
    author: {
      name: 'Sarah Chen, PhD',
      avatar: null,
      initials: 'SC',
      affiliation: 'MIT Media Lab',
      role: 'Research Scientist'
    },
    content: "Hot take: Most academic conferences should be virtual by default with in-person options, not the other way around. More accessibility, lower carbon footprint, and frankly, better use of research funds. What do you think?",
    timestamp: '6 hours ago',
    likes: 128,
    comments: 45,
    reposts: 32
  },
  {
    id: 4,
    author: {
      name: 'Prof. Michael Okafor',
      avatar: null,
      initials: 'MO',
      affiliation: 'University College London',
      role: 'Chair of Quantum Computing'
    },
    content: "Exciting breakthrough in quantum error correction! Our lab has achieved a 30% improvement in qubit coherence time using a novel topological approach. Preprint available on arXiv: https://arxiv.org/abs/2304.12345",
    timestamp: '12 hours ago',
    likes: 89,
    comments: 16,
    reposts: 28
  },
  {
    id: 5,
    author: {
      name: 'Dr. Juliette Moreau',
      avatar: null,
      initials: 'JM',
      affiliation: 'Institut Pasteur',
      role: 'Virology Researcher'
    },
    content: "Looking for collaborators on a new study examining zoonotic disease transmission patterns in Southeast Asia. Particularly interested in connecting with ecologists and epidemiologists with fieldwork experience in the region. DM me if interested!",
    timestamp: '1 day ago',
    likes: 42,
    comments: 8,
    reposts: 15
  }
];

const Feed = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-serif font-bold mb-8">For You Feed</h1>
          
          {/* New post composer */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="flex space-x-4">
              <Avatar className="h-12 w-12 bg-teal text-white">
                <span className="font-medium">YS</span>
              </Avatar>
              <div className="flex-1">
                <textarea 
                  placeholder="Share your research, ideas, or ask a question..." 
                  className="w-full border rounded-lg p-3 min-h-[120px] focus:ring-1 focus:ring-teal focus:outline-none"
                />
                <div className="flex justify-end mt-4">
                  <Button className="bg-teal hover:bg-teal-light">Post</Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feed posts */}
          <div className="space-y-6">
            {feedPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12 bg-teal/20 text-teal">
                    <span className="font-medium">{post.author.initials}</span>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{post.author.name}</h3>
                        <p className="text-sm text-gray-500">{post.author.role} at {post.author.affiliation}</p>
                      </div>
                      <span className="text-sm text-gray-400">{post.timestamp}</span>
                    </div>
                    <p className="my-4">{post.content}</p>
                    <div className="flex space-x-6 text-gray-500">
                      <button className="flex items-center space-x-1 hover:text-teal">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-teal">
                        <MessageSquare className="w-5 h-5" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-teal">
                        <Repeat className="w-5 h-5" />
                        <span>{post.reposts}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
