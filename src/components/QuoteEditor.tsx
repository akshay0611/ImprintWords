import React, { useState, useRef } from 'react';
import { Download} from 'lucide-react';
import * as htmlToImage from 'html-to-image';
import type { Quote } from '../types';
import TemplateSelector from './TemplateSelector';
import TextCustomizer from './TextCustomizer';

import { templates } from '../data/templates';

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



  const quoteRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (quoteRef.current) {
      const dataUrl = await htmlToImage.toPng(quoteRef.current);
      const link = document.createElement('a');
      link.download = `custom-quote.png`;
      
      link.href = dataUrl;
      link.click();
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
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-8 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
            <TextCustomizer
              quote={quote}
              onChange={handleQuoteUpdate}
            />

            <TemplateSelector
              onSelect={handleTemplateSelect}
              onCustomImageSelect={handleCustomImageSelect}
              selectedId={templates.find(t => t.background === quote.background)?.id || ''}
            />
          </div>

          {/* Preview */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center justify-between p-4">
              <h2 className="text-lg font-semibold">Preview</h2>
              <button
                onClick={handleDownload}
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </button>
            </div>
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
                    cursor: 'grab',
                    whiteSpace: 'pre-wrap',
                    wordWrap: 'break-word'
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
    </div>
  );
}