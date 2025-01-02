import React from 'react';
import { Twitter, Facebook, Linkedin, X } from 'lucide-react';
import { generateShareUrl, openShareWindow, SocialPlatform } from '../utils/sharing';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  quote: string;
}

export default function ShareModal({ isOpen, onClose, imageUrl, quote }: ShareModalProps) {
  if (!isOpen) return null;

  const handleShare = (platform: SocialPlatform) => {
    const url = generateShareUrl(platform, imageUrl, quote);
    openShareWindow(url);
  };

  return (
    <div 
      role="dialog" 
      aria-hidden={!isOpen}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Share Quote</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleShare('twitter')}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a8cd8] transition-colors"
          >
            <Twitter className="w-5 h-5" />
            Share on Twitter
          </button>

          <button
            onClick={() => handleShare('facebook')}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#166fe5] transition-colors"
          >
            <Facebook className="w-5 h-5" />
            Share on Facebook
          </button>

          <button
            onClick={() => handleShare('linkedin')}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#0958a8] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            Share on LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}
