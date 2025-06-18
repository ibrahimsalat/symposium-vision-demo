
import React from 'react';
import { ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PaperMetadata } from '@/types/paper';

interface PaperInfoSidebarProps {
  paper: PaperMetadata;
  selectedVersion: string;
  setSelectedVersion: (version: string) => void;
  onClose: () => void;
}

const PaperInfoSidebar = ({ paper, selectedVersion, setSelectedVersion, onClose }: PaperInfoSidebarProps) => {
  const currentVersion = paper.versions.find(v => v.version === selectedVersion);

  return (
    <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto h-full shadow-lg">
      <div className="p-6">
        {/* Header with close button */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Paper Information</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X size={16} />
          </Button>
        </div>
        
        {/* Version Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Version</label>
          <select
            value={selectedVersion}
            onChange={(e) => setSelectedVersion(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-transparent"
          >
            {paper.versions.map(version => (
              <option key={version.version} value={version.version}>
                {version.version} - {version.date}
              </option>
            ))}
          </select>
          {currentVersion && (
            <p className="text-xs text-gray-500 mt-1">{currentVersion.changes}</p>
          )}
        </div>

        {/* Paper Metadata */}
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Title</h3>
            <p className="text-sm">{paper.title}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Authors</h3>
            <div className="space-y-1">
              {paper.authors.map((author, index) => (
                <div key={index} className="text-sm">
                  <span className="font-medium">{author.name}</span>
                  <span className="text-gray-500"> - {author.affiliation}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Abstract</h3>
            <p className="text-sm text-gray-600">{paper.abstract}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-1">DOI</h3>
              <a 
                href={`https://doi.org/${paper.doi}`}
                className="text-sm text-teal hover:underline flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {paper.doi}
                <ExternalLink size={12} />
              </a>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-1">Field</h3>
              <span className="text-sm text-teal bg-teal/10 px-2 py-1 rounded">
                {paper.field}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Keywords</h3>
            <div className="flex flex-wrap gap-1">
              {paper.keywords.map((keyword, index) => (
                <span 
                  key={index}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperInfoSidebar;
