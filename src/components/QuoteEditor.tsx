import React, { useState, useRef } from 'react';
import { Download, Share } from 'lucide-react'; // Import Share icon
import * as htmlToImage from 'html-to-image';
import type { Quote } from '../types';
import TemplateSelector from './TemplateSelector';
import TextCustomizer from './TextCustomizer';
import ShareModal from './ShareModal'; // Import ShareModal
import { uploadImage } from '../utils/uploadImage'; // Import the upload function

import { templates } from '../data/templates';

import Draggable from 'react-draggable';

export default function QuoteEditor() {
  const [quote, setQuote] = useState<Quote>({
    text: 'Enter your quote here...',
    font: 'Playfair Display',
    fontSize: 24,
    color: '#1a1a1a',
    alignment: 'center',
    background: templates[0].background,
  });

  const [attribution, setAttribution] = useState<string>(''); // State for attribution
  const [showShareModal, setShowShareModal] = useState(false); // State for ShareModal
  const [imageUrl, setImageUrl] = useState<string>(''); // State for generated image URL

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

  const handleShare = async () => {
    if (quoteRef.current) {
      const dataUrl = await htmlToImage.toPng(quoteRef.current);
  
      try {
        // Upload the image to Cloudinary
        const imageUrl = await uploadImage(dataUrl);
        setImageUrl(imageUrl); // Set the uploaded image URL
        setShowShareModal(true); // Open the ShareModal
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Failed to upload image. Please try again.');
      }
    }
  };

  const handleTemplateSelect = (template: typeof templates[0]) => {
    setQuote((prev) => ({
      ...prev,
      background: template.background,
      font: template.font,
    }));
    setAttribution(''); // Clear attribution when a template is selected
  };

  const handleCustomImageSelect = (imageUrl: string, attributionText?: string) => {
    setQuote((prev) => ({
      ...prev,
      background: imageUrl,
    }));
    setAttribution(attributionText || ''); // Set attribution for stock photos
  };

  const handleQuoteUpdate = (updates: Partial<Quote>) => {
    setQuote((prev) => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Editor Controls */}
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
            <TextCustomizer quote={quote} onChange={handleQuoteUpdate} />

            <TemplateSelector
              onSelect={handleTemplateSelect}
              onCustomImageSelect={handleCustomImageSelect}
              selectedId={templates.find((t) => t.background === quote.background)?.id || ''}
            />
          </div>

          {/* Preview */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Preview</h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleDownload}
                  className="flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download
                </button>
                <button
                  onClick={handleShare}
                  className="flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
                >
                  <Share className="w-5 h-5 mr-2" />
                  Share
                </button>
              </div>
            </div>
            <div className="p-8">
              <div
                ref={quoteRef}
                className="relative w-full aspect-[3/4] bg-cover bg-center rounded-xl shadow-2xl overflow-hidden"
                style={{ backgroundImage: `url(${quote.background})` }}
              >
                <div className="absolute inset-0 bg-black/20" />
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
                      wordWrap: 'break-word',
                    }}
                  >
                    {quote.text}
                  </div>
                </Draggable>
                {/* Attribution */}
                {attribution && (
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {attribution}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <ShareModal
          imageUrl={imageUrl}
          onClose={() => setShowShareModal(false)}
        />
      )}
    </div>
  );
}