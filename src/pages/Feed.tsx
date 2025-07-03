
import React, { useState } from 'react';
import { MessageSquare, Repeat, Heart, Share, BookmarkPlus, Hash, TrendingUp, Users, FileText, Quote, ExternalLink, Sparkles, UserPlus, Eye, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

// Mock feed data with diverse post types
const feedPosts = [
  {
    id: 1,
    type: 'paper_annotation',
    author: {
      name: 'Dr. Eleanor Fisher',
      avatar: null,
      initials: 'EF',
      affiliation: 'University of Cambridge',
      role: 'Professor of Cognitive Science'
    },
    paper: {
      title: 'Attention Mechanisms in Deep Learning: A Survey',
      journal: 'Nature Machine Intelligence',
      excerpt: 'Self-attention mechanisms have become the cornerstone of modern transformer architectures, enabling models to weigh the importance of different input elements dynamically.',
      highlightedText: 'enabling models to weigh the importance of different input elements dynamically',
      comment: 'This is exactly what we see in human cognitive processes! The parallel between artificial attention and biological attention is fascinating.'
    },
    content: 'Just annotated this incredible survey on attention mechanisms. The connection to human cognition is mind-blowing!',
    timestamp: '2 hours ago',
    likes: 34,
    comments: 12,
    reposts: 8,
    tags: ['#AttentionMechanisms', '#CognitiveScience', '#DeepLearning']
  },
  {
    id: 2,
    type: 'arxiv_preview',
    author: {
      name: 'Dr. Alejandro Reyes',
      avatar: null,
      initials: 'AR',
      affiliation: 'Stanford University',
      role: 'Associate Professor of Environmental Studies'
    },
    paper: {
      title: 'Accelerated Arctic Permafrost Thawing: New Climate Model Projections',
      url: 'https://arxiv.org/abs/2304.12345',
      abstract: 'Our updated climate model reveals that permafrost thawing in the Arctic could accelerate 3x faster than current projections under existing emission scenarios. This has significant implications for methane release and global warming feedback loops.',
      figure: 'Figure 3: Permafrost temperature projections 2020-2100'
    },
    content: 'Our new preprint is out! Challenging the established consensus on permafrost thawing rates. The implications are concerning but we need to face the reality.',
    timestamp: '4 hours ago',
    likes: 156,
    comments: 43,
    reposts: 67,
    tags: ['#ClimateChange', '#Arctic', '#Permafrost', '#ClimateModeling']
  },
  {
    id: 3,
    type: 'collaboration',
    author: {
      name: 'Sarah Chen, PhD',
      avatar: null,
      initials: 'SC',
      affiliation: 'MIT Media Lab',
      role: 'Research Scientist'
    },
    content: 'Looking for collaborators on a project combining LLMs with robotics for human-robot interaction. Particularly interested in researchers working on embodied AI, natural language processing, or behavioral psychology. Let\'s build the future together!',
    timestamp: '6 hours ago',
    likes: 89,
    comments: 28,
    reposts: 45,
    tags: ['#Collaboration', '#Robotics', '#LLMs', '#HRI']
  },
  {
    id: 4,
    type: 'public_notes',
    author: {
      name: 'Prof. Michael Okafor',
      avatar: null,
      initials: 'MO',
      affiliation: 'University College London',
      role: 'Chair of Quantum Computing'
    },
    paper: {
      title: 'Quantum Error Correction: A Topological Approach',
      notes: [
        'Key insight: Topological qubits are inherently more stable due to their anyonic nature',
        'The 30% improvement in coherence time could be game-changing for NISQ devices',
        'Still need to address the scalability challenges - current setup limited to 5 qubits'
      ]
    },
    content: 'My takeaways from our latest quantum error correction paper. The topological approach shows real promise, but scalability remains the challenge.',
    timestamp: '8 hours ago',
    likes: 67,
    comments: 19,
    reposts: 23,
    tags: ['#QuantumComputing', '#ErrorCorrection', '#Topology']
  },
  {
    id: 5,
    type: 'discussion',
    author: {
      name: 'Dr. Juliette Moreau',
      avatar: null,
      initials: 'JM',
      affiliation: 'Institut Pasteur',
      role: 'Virology Researcher'
    },
    content: 'Hot take: We need to fundamentally rethink how we approach zoonotic disease surveillance. Current methods are too reactive. What if we used AI to predict spillover events before they happen? Thoughts?',
    timestamp: '12 hours ago',
    likes: 234,
    comments: 78,
    reposts: 91,
    tags: ['#Virology', '#AI', '#PublicHealth', '#Zoonoses']
  }
];

const trendingTopics = [
  { tag: '#LLMs', posts: 1247 },
  { tag: '#ClimateScience', posts: 892 },
  { tag: '#QuantumComputing', posts: 567 },
  { tag: '#Neuroscience', posts: 445 },
  { tag: '#MachineLearning', posts: 1089 }
];

const topContributors = [
  { name: 'Dr. Sarah Kim', specialty: 'AI Ethics', followers: '12.4K' },
  { name: 'Prof. James Wright', specialty: 'Climate Physics', followers: '8.9K' },
  { name: 'Dr. Maria Santos', specialty: 'Genomics', followers: '7.2K' }
];

const recommendedPapers = [
  {
    title: 'Emergent Abilities of Large Language Models',
    authors: 'Wei et al.',
    journal: 'arXiv',
    relevance: '95% match to your interests'
  },
  {
    title: 'Graph Neural Networks for Scientific Discovery',
    authors: 'Hamilton et al.',
    journal: 'Nature',
    relevance: '87% match to your interests'
  }
];

const Feed = () => {
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [followedPapers, setFollowedPapers] = useState(new Set());

  const handleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleFollowPaper = (postId: number) => {
    setFollowedPapers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const renderPost = (post: any) => {
    const isLiked = likedPosts.has(post.id);
    const isPaperFollowed = followedPapers.has(post.id);

    return (
      <Card key={post.id} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-teal/50">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <Avatar className="h-12 w-12 bg-gradient-to-br from-teal/20 to-teal/40 text-teal border-2 border-teal/20">
              <span className="font-semibold">{post.author.initials}</span>
            </Avatar>
            
            <div className="flex-1 space-y-4">
              {/* Author info */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                  <p className="text-sm text-gray-600">{post.author.role} at {post.author.affiliation}</p>
                </div>
                <span className="text-sm text-gray-500">{post.timestamp}</span>
              </div>

              {/* Post content based on type */}
              {post.type === 'paper_annotation' && (
                <div className="space-y-3">
                  <p className="text-gray-800">{post.content}</p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <div className="flex items-start gap-2 mb-2">
                      <Quote className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                      <div>
                        <h4 className="font-medium text-blue-900 text-sm">{post.paper.title}</h4>
                        <p className="text-xs text-blue-700">{post.paper.journal}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {post.paper.excerpt.replace(post.paper.highlightedText, '')}
                      <mark className="bg-yellow-200 px-1 rounded">{post.paper.highlightedText}</mark>
                    </p>
                    <div className="mt-3 p-3 bg-white rounded border-l-2 border-teal">
                      <p className="text-sm text-gray-700 italic">"{post.paper.comment}"</p>
                    </div>
                  </div>
                </div>
              )}

              {post.type === 'arxiv_preview' && (
                <div className="space-y-3">
                  <p className="text-gray-800">{post.content}</p>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 p-4 rounded-lg">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="w-4 h-4 text-purple-600" />
                          <h4 className="font-semibold text-purple-900">{post.paper.title}</h4>
                          <ExternalLink className="w-3 h-3 text-purple-600" />
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed mb-3">{post.paper.abstract}</p>
                        {post.paper.figure && (
                          <div className="bg-white p-2 rounded border border-purple-200 text-xs text-purple-700">
                            📊 {post.paper.figure}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {post.type === 'collaboration' && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-green-700 mb-2">
                    <UserPlus className="w-4 h-4" />
                    <span className="text-sm font-medium">Looking for collaborators</span>
                  </div>
                  <p className="text-gray-800">{post.content}</p>
                </div>
              )}

              {post.type === 'public_notes' && (
                <div className="space-y-3">
                  <p className="text-gray-800">{post.content}</p>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <h4 className="font-medium text-amber-900 mb-3 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      {post.paper.title}
                    </h4>
                    <div className="space-y-2">
                      {post.paper.notes.map((note: string, index: number) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                          <p className="text-sm text-gray-700">{note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {post.type === 'discussion' && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-orange-700 mb-2">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm font-medium">Discussion</span>
                  </div>
                  <p className="text-gray-800">{post.content}</p>
                </div>
              )}

              {/* Tags */}
              {post.tags && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-teal/10 text-teal-700 hover:bg-teal/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex space-x-6">
                  <button 
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center space-x-2 transition-colors ${
                      isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                    <span className="text-sm">{post.likes + (isLiked ? 1 : 0)}</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                    <MessageSquare className="w-5 h-5" />
                    <span className="text-sm">{post.comments}</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                    <Repeat className="w-5 h-5" />
                    <span className="text-sm">{post.reposts}</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-500 transition-colors">
                    <Share className="w-5 h-5" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
                
                {(post.type === 'paper_annotation' || post.type === 'arxiv_preview') && (
                  <button 
                    onClick={() => handleFollowPaper(post.id)}
                    className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm transition-colors ${
                      isPaperFollowed 
                        ? 'bg-teal text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-teal/10 hover:text-teal'
                    }`}
                  >
                    <BookmarkPlus className="w-4 h-4" />
                    <span>{isPaperFollowed ? 'Following' : 'Follow Paper'}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-3">
            <div className="max-w-4xl">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-teal" />
                  For You Feed
                </h1>
                <Button variant="outline" className="border-teal text-teal hover:bg-teal/5">
                  <Eye className="w-4 h-4 mr-2" />
                  Customize Feed
                </Button>
              </div>
              
              {/* Post Composer */}
              <Card className="mb-8 border-2 border-dashed border-gray-200 hover:border-teal/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex space-x-4">
                    <Avatar className="h-12 w-12 bg-gradient-to-br from-teal to-teal-light text-white">
                      <span className="font-semibold">YS</span>
                    </Avatar>
                    <div className="flex-1">
                      <textarea 
                        placeholder="Share your research insights, ask questions, or start a discussion..." 
                        className="w-full border border-gray-200 rounded-lg p-4 min-h-[120px] focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors resize-none"
                      />
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" className="text-gray-500">
                            <FileText className="w-4 h-4 mr-1" />
                            Add Paper
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-500">
                            <Hash className="w-4 h-4 mr-1" />
                            Tag
                          </Button>
                        </div>
                        <Button className="bg-gradient-to-r from-teal to-teal-light hover:from-teal-light hover:to-teal">
                          Post
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Feed Posts */}
              <div className="space-y-6">
                {feedPosts.map(renderPost)}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recommended Papers */}
            <Card>
              <CardHeader className="pb-3">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-teal" />
                  Recommended for You
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {recommendedPapers.map((paper, index) => (
                  <div key={index} className="p-3 bg-teal/5 rounded-lg hover:bg-teal/10 transition-colors cursor-pointer">
                    <h4 className="font-medium text-sm text-gray-900 mb-1">{paper.title}</h4>
                    <p className="text-xs text-gray-600 mb-2">{paper.authors} • {paper.journal}</p>
                    <p className="text-xs text-teal-600 font-medium">{paper.relevance}</p>
                  </div>
                ))}
                <Button variant="ghost" size="sm" className="w-full justify-between text-teal">
                  View All
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card>
              <CardHeader className="pb-3">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-orange-500" />
                  Trending Topics
                </h3>
              </CardHeader>
              <CardContent className="space-y-2">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded transition-colors cursor-pointer">
                    <span className="font-medium text-teal-700">{topic.tag}</span>
                    <span className="text-xs text-gray-500">{topic.posts} posts</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardHeader className="pb-3">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-500" />
                  Top Contributors
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 bg-gradient-to-br from-purple-400 to-purple-600 text-white">
                        <span className="text-xs font-medium">{contributor.name.split(' ').map(n => n[0]).join('')}</span>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{contributor.name}</p>
                        <p className="text-xs text-gray-500">{contributor.specialty}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{contributor.followers}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
