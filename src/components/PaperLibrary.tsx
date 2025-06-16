
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Paper = {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  field: string;
  publishDate: string;
  versions: number;
  commentsCount: number;
  doi?: string;
  organization: string;
};

const mockPapers: Paper[] = [
  {
    id: "1",
    title: "Quantum Computing and Neural Networks: A Novel Approach to Machine Learning",
    authors: ["Zhang, L.", "Patel, S.", "Johnson, M.", "Rodriguez, A."],
    abstract: "In this paper, we explore the intersection of quantum computing and neural networks, proposing a novel framework for quantum-enhanced machine learning algorithms.",
    field: "Quantum Computing",
    publishDate: "2025-05-15",
    versions: 3,
    commentsCount: 24,
    doi: "10.1038/s41586-025-07123-4",
    organization: "MIT"
  },
  {
    id: "2", 
    title: "CRISPR-Cas9 Applications in Neurodegenerative Disease Treatment",
    authors: ["Williams, R.", "Chen, A.", "Davis, K."],
    abstract: "We present a comprehensive analysis of CRISPR-Cas9 gene editing applications for treating Alzheimer's and Parkinson's diseases.",
    field: "Biotechnology",
    publishDate: "2025-04-22",
    versions: 2,
    commentsCount: 18,
    doi: "10.1016/j.cell.2025.03.012",
    organization: "Stanford University"
  },
  {
    id: "3",
    title: "Climate Change Impact on Arctic Biodiversity: A 10-Year Study",
    authors: ["Martinez, S.", "Thompson, J.", "Lee, H.", "Brown, M."],
    abstract: "Our decade-long research reveals significant shifts in Arctic ecosystems due to climate change, with implications for global biodiversity.",
    field: "Climate Science",
    publishDate: "2025-03-10", 
    versions: 4,
    commentsCount: 31,
    doi: "10.1126/science.abcd1234",
    organization: "University of Copenhagen"
  },
  {
    id: "4",
    title: "Artificial General Intelligence: Theoretical Foundations and Practical Implications",
    authors: ["Kumar, A.", "O'Brien, P.", "Nakamura, T."],
    abstract: "This paper establishes theoretical foundations for AGI development and discusses the societal implications of artificial general intelligence.",
    field: "Artificial Intelligence",
    publishDate: "2025-02-28",
    versions: 1,
    commentsCount: 42,
    organization: "DeepMind"
  }
];

const PaperLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState('All Fields');
  
  const fields = ['All Fields', 'Quantum Computing', 'Biotechnology', 'Climate Science', 'Artificial Intelligence'];
  
  const filteredPapers = mockPapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesField = selectedField === 'All Fields' || paper.field === selectedField;
    return matchesSearch && matchesField;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold mb-2">Paper Library</h1>
          <p className="text-gray-600">Discover and explore cutting-edge research papers</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search papers, authors, or keywords..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-transparent"
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
              >
                {fields.map(field => (
                  <option key={field} value={field}>{field}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPapers.map(paper => (
            <Card key={paper.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium text-teal bg-teal/10 px-2 py-1 rounded">
                    {paper.field}
                  </span>
                  <span className="text-xs text-gray-500">{paper.versions} versions</span>
                </div>
                <CardTitle className="text-lg leading-tight">
                  <Link 
                    to={`/papers/${paper.id}`}
                    className="hover:text-teal transition-colors"
                  >
                    {paper.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 line-clamp-3">{paper.abstract}</p>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Users size={12} />
                      <span>{paper.authors.length} authors</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{new Date(paper.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText size={12} />
                      <span>{paper.commentsCount} comments</span>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Authors:</span> {paper.authors.join(', ')}
                    </p>
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Organization:</span> {paper.organization}
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <Button asChild size="sm" className="w-full bg-teal hover:bg-teal-light">
                      <Link to={`/papers/${paper.id}`}>Read Paper</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPapers.length === 0 && (
          <div className="text-center py-12">
            <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No papers found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaperLibrary;
