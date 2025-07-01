
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
      <section className="py-20 bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Problems We're Solving</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-navy/50 p-8 rounded-lg border border-white/10 hover:border-teal/50 transition-colors">
                <h3 className="text-xl font-medium mb-4">Unfair Compensation</h3>
                <p className="text-gray-300">
                  Researchers aren't paid for their papers or reviews, while publishers profit immensely from their work.
                </p>
              </div>
              
              <div className="bg-navy/50 p-8 rounded-lg border border-white/10 hover:border-teal/50 transition-colors">
                <h3 className="text-xl font-medium mb-4">Centralized Control</h3>
                <p className="text-gray-300">
                  Peer review is centralized and lacks transparency, creating bottlenecks and potential bias in research evaluation.
                </p>
              </div>
              
              <div className="bg-navy/50 p-8 rounded-lg border border-white/10 hover:border-teal/50 transition-colors">
                <h3 className="text-xl font-medium mb-4">Fragmented Collaboration</h3>
                <p className="text-gray-300">
                  Collaboration across institutions is fragmented and rare, limiting the potential for groundbreaking research.
                </p>
              </div>
            </div>
            
            <div className="bg-teal p-8 md:p-12 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl md:text-3xl font-bold">Academia is broken. Symposium is the fix.</h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section ref={featuresRef} className="py-20 md:py-32" id="features">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Key Features</h2>
          
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-navy">For You Feed</h3>
              <p className="text-gray-600 mb-4 text-lg">
                A personalized feed of research updates, posts, and ideas tailored to your academic interests and network.
              </p>
              <p className="text-gray-700 mb-6">
                Researchers can post hot takes, share exciting trends, and spark open discussion without the constraints of formal publication.
              </p>
              <Button asChild variant="outline" className="border-teal text-teal hover:bg-teal/5">
                <Link to="/feed">Explore the Feed</Link>
              </Button>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-navy">Decentralized Peer-to-Peer Checking</h3>
              <p className="text-gray-600 mb-4 text-lg">
                Comment directly on specific sections of scientific papers with a collaborative annotation system.
              </p>
              <p className="text-gray-700 mb-6">
                A new way to discuss, critique, and collaboratively improve science — like Google Docs for academic research.
              </p>
              <Button asChild variant="outline" className="border-teal text-teal hover:bg-teal/5">
                <Link to="/papers">See it in Action</Link>
              </Button>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-navy">Events & Workshops</h3>
              <p className="text-gray-600 mb-4 text-lg">
                Host and discover academic events, panels, and workshops within your research community.
              </p>
              <p className="text-gray-700 mb-6">
                Promote knowledge sharing and community-driven learning across institutional boundaries.
              </p>
              <Button asChild variant="outline" className="border-teal text-teal hover:bg-teal/5">
                <Link to="/events">Discover Events</Link>
              </Button>
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
