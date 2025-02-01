// src/components/ShareModal.tsx
import React from 'react';
import { shareToFacebook, shareToTwitter, shareToInstagram } from '../utils/sharing';

interface ShareModalProps {
  imageUrl: string;
  onClose: () => void;
}

export default function ShareModal({ imageUrl, onClose }: ShareModalProps) {
  const handleShareToFacebook = () => {
    shareToFacebook(imageUrl);
  };

  const handleShareToTwitter = () => {
    const text = "✨ Just created this stunning design with ImprintWords! 🎨💬 Design your own custom quotes and posters effortlessly. Try it now: https://imprint-words.vercel.app/"; // Customize the tweet text here
    shareToTwitter(imageUrl, text);
  };

  const handleShareToInstagram = () => {
    shareToInstagram();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Share to Social Media</h2>
        <div className="space-y-4">
          <button
            onClick={handleShareToFacebook}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Share on Facebook
          </button>
          <button
            onClick={handleShareToTwitter}
            className="w-full px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500"
          >
            Share on Twitter
          </button>
          <button
            onClick={handleShareToInstagram}
            className="w-full px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
          >
            Share on Instagram
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          Close
        </button>
      </div>
    </div>
  );
}