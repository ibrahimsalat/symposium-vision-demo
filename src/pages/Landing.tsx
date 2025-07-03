
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SignupDialog from '@/components/SignupDialog';

const Landing = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-white to-lightgray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Symposium: The Social Network for Scientists
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-600 animate-fade-in">
              We're reimagining academia — with community, collaboration, and fair recognition at its core.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <SignupDialog>
                <Button className="btn-primary text-lg h-12">
                  Sign Up for Early Access
                </Button>
              </SignupDialog>
              <Button asChild
                variant="outline" 
                className="flex items-center justify-center gap-2 btn-secondary text-lg h-12"
              >
                <Link to="/papers?tour=true">
                  <Play size={18} />
                  Watch the Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Problem We're Solving */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy to-teal text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-y-1"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-teal bg-clip-text text-transparent">
                The Problems We're Solving
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Academia needs a revolution. Here's what we're changing.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-teal/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Unfair Compensation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Researchers aren't paid for their papers or reviews, while publishers profit immensely from their work.
                </p>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-teal/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Centralized Control</h3>
                <p className="text-gray-300 leading-relaxed">
                  Peer review is centralized and lacks transparency, creating bottlenecks and potential bias in research evaluation.
                </p>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-teal/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Fragmented Collaboration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Collaboration across institutions is fragmented and rare, limiting the potential for groundbreaking research.
                </p>
              </div>
            </div>
            
            <div className="relative group animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-teal via-teal-light to-teal rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-teal to-teal-light p-8 md:p-12 rounded-2xl shadow-2xl text-center transform group-hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl md:text-4xl font-bold mb-4">Academia is broken. Symposium is the fix.</h3>
                <p className="text-lg opacity-90">Join the movement to democratize scientific knowledge</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section ref={featuresRef} className="py-20 md:py-32 bg-gradient-to-br from-lightgray via-white to-teal/5 relative overflow-hidden" id="features">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-teal/5 to-transparent -skew-y-1"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-navy/5 rounded-full blur-2xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-navy to-teal bg-clip-text text-transparent">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools designed to transform how scientists collaborate and share knowledge
            </p>
          </div>
          
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-navy">For You Feed</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                A personalized feed of research updates, posts, and ideas tailored to your academic interests and network.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Researchers can post hot takes, share exciting trends, and spark open discussion without the constraints of formal publication.
              </p>
              <Button asChild variant="outline" className="border-teal text-teal hover:bg-teal/10 hover:border-teal/70 transition-all duration-300">
                <Link to="/feed">Explore the Feed</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 animate-fade-in">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-200/50 shadow-lg">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-700">Personalized Research Feed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
            <div className="animate-fade-in">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-green-200/50 shadow-lg">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-700">Collaborative Annotations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-navy">Decentralized Peer-to-Peer Checking</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                Comment directly on specific sections of scientific papers with a collaborative annotation system.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A new way to discuss, critique, and collaboratively improve science — like Google Docs for academic research.
              </p>
              <Button asChild variant="outline" className="border-teal text-teal hover:bg-teal/10 hover:border-teal/70 transition-all duration-300">
                <Link to="/papers">See it in Action</Link>
              </Button>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-navy">Events & Workshops</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                Host and discover academic events, panels, and workshops within your research community.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Promote knowledge sharing and community-driven learning across institutional boundaries.
              </p>
              <Button asChild variant="outline" className="border-teal text-teal hover:bg-teal/10 hover:border-teal/70 transition-all duration-300">
                <Link to="/events">Discover Events</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 animate-fade-in">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-200/50 shadow-lg">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-700">Academic Events Hub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-lightgray">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">What Researchers Are Saying</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-6 text-lg italic">
                "This feels like what academia should have always been — open, connected, and rewarding."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center text-teal font-serif font-bold text-lg">LC</div>
                <div className="ml-4">
                  <p className="font-medium">Dr. Leila Cheng</p>
                  <p className="text-gray-500 text-sm">Neuroscientist</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-6 text-lg italic">
                "Finally, a place where we can talk science outside the walls of paywalled journals."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center text-teal font-serif font-bold text-lg">AB</div>
                <div className="ml-4">
                  <p className="font-medium">Prof. Ahmed Badawi</p>
                  <p className="text-gray-500 text-sm">Climate Researcher</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-6 text-lg italic">
                "The peer-to-peer checking feature is brilliant. Transparent, fast, and community-driven."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center text-teal font-serif font-bold text-lg">SH</div>
                <div className="ml-4">
                  <p className="font-medium">Sophie Hall</p>
                  <p className="text-gray-500 text-sm">PhD Student</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-6 text-lg italic">
                "Symposium isn't just a product, it's a movement."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center text-teal font-serif font-bold text-lg">RN</div>
                <div className="ml-4">
                  <p className="font-medium">Dr. Rachel Novak</p>
                  <p className="text-gray-500 text-sm">Astrophysicist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Early Access */}
      <section id="early-access" className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Be the First to Join the Scientific Movement</h2>
            <p className="text-gray-600 mb-8">
              Get notified about product launches, updates, and behind-the-scenes development.
            </p>
            
            <SignupDialog>
              <Button className="bg-teal hover:bg-teal-light text-lg px-8 py-3">
                Sign Up for Early Access
              </Button>
            </SignupDialog>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
