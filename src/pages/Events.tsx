
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

type Event = {
  id: number;
  title: string;
  host: string;
  hostInstitution: string;
  dateTime: string;
  location: string;
  type: 'online' | 'in-person' | 'hybrid';
  description: string;
  tags: string[];
  attendees: number;
};

const EventCard = ({ event }: { event: Event }) => {
  const toast = useToast();
  
  const handleRegister = () => {
    toast.toast({
      title: "Registration successful!",
      description: `You've registered for "${event.title}"`,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold">{event.title}</h3>
          <span className={`text-xs px-2 py-1 rounded ${
            event.type === 'online' ? 'bg-blue-100 text-blue-600' : 
            event.type === 'in-person' ? 'bg-green-100 text-green-600' : 
            'bg-purple-100 text-purple-600'
          }`}>
            {event.type === 'online' ? 'Online' : 
             event.type === 'in-person' ? 'In-Person' : 
             'Hybrid'}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">Hosted by {event.host} • {event.hostInstitution}</p>
        <div className="my-3 text-sm">
          <div className="flex items-center mb-1">
            <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span>{event.dateTime}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>{event.location}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-3 line-clamp-2">{event.description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {event.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="border-t px-6 py-4 flex items-center justify-between">
        <span className="text-xs text-gray-500">{event.attendees} attendees</span>
        <Button onClick={handleRegister}>Register</Button>
      </div>
    </div>
  );
};

const Events = () => {
  const toast = useToast();
  
  // Mock events data
  const events: Event[] = [
    {
      id: 1,
      title: "Quantum Computing for Climate Science Workshop",
      host: "Dr. Maria Rodriguez",
      hostInstitution: "Princeton University",
      dateTime: "June 15, 2025 • 10:00 AM EST",
      location: "Virtual Event",
      type: "online",
      description: "In this workshop, we explore how quantum computing algorithms can be applied to climate modeling to improve prediction accuracy and computational efficiency. Speakers from quantum computing research and climate science will present cutting-edge approaches and collaborations.",
      tags: ["Quantum Computing", "Climate Science", "Workshop"],
      attendees: 156
    },
    {
      id: 2,
      title: "Neuromorphic Computing Conference",
      host: "Prof. James Chen",
      hostInstitution: "Stanford University",
      dateTime: "July 8-10, 2025 • All Day",
      location: "Stanford Campus, CA",
      type: "in-person",
      description: "The annual conference on brain-inspired computing architectures. Join us for three days of keynotes, research presentations, and hands-on demonstrations exploring the latest advances in neuromorphic chips and algorithms.",
      tags: ["AI", "Neuromorphic", "Hardware", "Conference"],
      attendees: 324
    },
    {
      id: 3,
      title: "CRISPR Ethics Panel Discussion",
      host: "Dr. Sarah Novak",
      hostInstitution: "Johns Hopkins University",
      dateTime: "June 25, 2025 • 3:00 PM EST",
      location: "Baltimore + Live Stream",
      type: "hybrid",
      description: "A panel of bioethicists, researchers, and policy experts discuss the ethical implications of recent advances in CRISPR gene editing technology and proposed regulatory frameworks.",
      tags: ["Bioethics", "CRISPR", "Panel"],
      attendees: 89
    },
    {
      id: 4,
      title: "Dark Matter Research Symposium",
      host: "Prof. David Williams",
      hostInstitution: "CERN",
      dateTime: "August 3-5, 2025 • All Day",
      location: "Geneva, Switzerland",
      type: "in-person",
      description: "This symposium brings together physicists, astronomers, and cosmologists to discuss latest findings, methodologies, and theories related to dark matter research. Includes poster sessions and networking events.",
      tags: ["Physics", "Dark Matter", "Symposium"],
      attendees: 213
    },
    {
      id: 5,
      title: "Sustainable Materials Innovation Hackathon",
      host: "Dr. Priya Patel",
      hostInstitution: "MIT",
      dateTime: "July 18-19, 2025 • All Day",
      location: "Virtual Event",
      type: "online",
      description: "A 48-hour hackathon focused on developing new sustainable materials and processes. Participants will work in interdisciplinary teams to create innovative solutions to reduce environmental impact in manufacturing and construction.",
      tags: ["Sustainability", "Materials Science", "Hackathon"],
      attendees: 178
    },
    {
      id: 6,
      title: "Neuroscience and AI Integration Workshop",
      host: "Dr. Amanda Johnson",
      hostInstitution: "University of California, Berkeley",
      dateTime: "September 12, 2025 • 9:00 AM PST",
      location: "Berkeley, CA + Live Stream",
      type: "hybrid",
      description: "This workshop explores bidirectional insights between neuroscience and artificial intelligence, with a focus on how brain research can inform better AI architectures and how AI can help us understand brain function.",
      tags: ["Neuroscience", "AI", "Workshop"],
      attendees: 145
    }
  ];
  
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
                         
    const matchesTab = activeTab === 'all' || event.type === activeTab;
    
    return matchesSearch && matchesTab;
  });
  
  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    toast.toast({
      title: "Event creation successful!",
      description: "Your event has been submitted for review.",
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-serif font-bold">Academic Events</h1>
            <p className="text-gray-600">Discover and join events from researchers around the world</p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-teal hover:bg-teal-light">Create Event</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create a New Event</DialogTitle>
                <DialogDescription>
                  Fill out the form below to create your academic event. All events are subject to review.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleCreateEvent} className="space-y-4 mt-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-1">Event Title</label>
                    <Input id="title" placeholder="Enter event title" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium mb-1">Date</label>
                      <Input id="date" type="date" />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium mb-1">Time</label>
                      <Input id="time" type="time" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium mb-1">Event Type</label>
                    <select id="type" className="w-full border rounded-md p-2">
                      <option value="online">Online</option>
                      <option value="in-person">In-person</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-1">Location</label>
                    <Input id="location" placeholder="Virtual or physical location" />
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
                    <textarea 
                      id="description" 
                      className="w-full border rounded-md p-2 min-h-[100px]"
                      placeholder="Describe your event, topics, speakers, etc."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="tags" className="block text-sm font-medium mb-1">Tags</label>
                    <Input id="tags" placeholder="Add tags separated by commas" />
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2 pt-4">
                  <DialogTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogTrigger>
                  <Button type="submit" className="bg-teal hover:bg-teal-light">Create Event</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-grow">
            <Input 
              placeholder="Search events by title, description, or tags..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white"
            />
          </div>
          <Tabs defaultValue="all" onValueChange={(value) => setActiveTab(value)} className="md:w-[400px]">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="online">Online</TabsTrigger>
              <TabsTrigger value="in-person">In-Person</TabsTrigger>
              <TabsTrigger value="hybrid">Hybrid</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No events found matching your criteria.</p>
              <Button variant="outline" className="mt-4" onClick={() => {
                setSearchTerm('');
                setActiveTab('all');
              }}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
