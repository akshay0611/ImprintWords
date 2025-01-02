import React, { useState, useRef } from 'react';
import { Download, Share2 } from 'lucide-react';
import * as htmlToImage from 'html-to-image';
import type { Quote } from '../types';
import TemplateSelector from './TemplateSelector';
import TextCustomizer from './TextCustomizer';
import ShareModal from './ShareModal';
import { templates } from '../data/templates';
import { jsPDF } from 'jspdf';
import Draggable from 'react-draggable';

export default function QuoteEditor() {
  const [quote, setQuote] = useState<Quote>({
    text: 'Enter your quote here...',
    font: 'Playfair Display',
    fontSize: 24,
    color: '#1a1a1a',
    alignment: 'center',
    background: templates[0].background
  });

  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [shareImageUrl, setShareImageUrl] = useState('');
  const quoteRef = useRef<HTMLDivElement>(null);
  const [exportFormat, setExportFormat] = useState<'png' | 'jpeg' | 'pdf'>('png');
  const [resolution, setResolution] = useState<'720p' | '1080p' | '4K'>('1080p');

  const handleDownload = async () => {
    if (quoteRef.current) {
      const dataUrl = await htmlToImage.toPng(quoteRef.current);
      const link = document.createElement('a');
      link.download = `custom-quote.${exportFormat}`;
      
      if (exportFormat === 'pdf') {
        const pdf = new jsPDF();
        const imgData = await htmlToImage.toPng(quoteRef.current);
        pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
        pdf.save('custom-quote.pdf');
        return;
      }

      link.href = dataUrl;
      link.click();
    }
  };

  const handleShare = async () => {
    if (quoteRef.current) {
      const dataUrl = await htmlToImage.toPng(quoteRef.current);
      setShareImageUrl(dataUrl);
      setShareModalOpen(true);
    }
  };

  const handleTemplateSelect = (template: typeof templates[0]) => {
    setQuote(prev => ({
      ...prev,
      background: template.background,
      font: template.font
    }));
  };

  const handleCustomImageSelect = (imageUrl: string) => {
    setQuote(prev => ({
      ...prev,
      background: imageUrl
    }));
  };

  const handleQuoteUpdate = (updates: Partial<Quote>) => {
    setQuote(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Editor Controls */}
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-8">
            <TextCustomizer
              quote={quote}
              onChange={handleQuoteUpdate}
            />

            <TemplateSelector
              onSelect={handleTemplateSelect}
              onCustomImageSelect={handleCustomImageSelect}
              selectedId={templates.find(t => t.background === quote.background)?.id || ''}
            />

            <div className="flex space-x-4">
              <select value={exportFormat} onChange={(e) => setExportFormat(e.target.value as 'png' | 'jpeg' | 'pdf')}>
                <option value="png">PNG</option>
                <option value="jpeg">JPEG</option>
                <option value="pdf">PDF</option>
              </select>
              <select value={resolution} onChange={(e) => setResolution(e.target.value as '720p' | '1080p' | '4K')}>
                <option value="720p">720p</option>
                <option value="1080p">1080p</option>
                <option value="4K">4K</option>
              </select>
              <button
                onClick={handleDownload}
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </button>
              <button
                onClick={handleShare}
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div
              ref={quoteRef}
              className="relative w-full aspect-[3/4] bg-cover bg-center p-12 flex items-center justify-center"
              style={{ backgroundImage: `url(${quote.background})` }}
            >
              <Draggable>
                <div
                  className="relative z-10 w-full max-w-xl"
                  style={{
                    fontFamily: quote.font,
                    fontSize: `${quote.fontSize}px`,
                    color: quote.color,
                    textAlign: quote.alignment as 'left' | 'center' | 'right',
                    fontWeight: quote.bold ? 'bold' : 'normal',
                    fontStyle: quote.italic ? 'italic' : 'normal',
                    textDecoration: quote.underline ? 'underline' : 'none',
                    position: 'absolute',
                    left: '5%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    cursor: 'grab'
                  }}
                >
                  {quote.text}
                </div>
              </Draggable>
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </div>
      </div>

      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        imageUrl={shareImageUrl}
        quote={quote.text}
      />
    </div>
  );
}