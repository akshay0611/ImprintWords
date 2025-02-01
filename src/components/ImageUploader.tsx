// src/components/ImageUploader.tsx
import React, { useRef, useState } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';
import { fetchStockPhotos, triggerDownload } from '../utils/stockPhotoAPI';

interface ImageUploaderProps {
  onImageSelect: (imageUrl: string, attribution?: string) => void; // Add attribution to the callback
}

export default function ImageUploader({ onImageSelect }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showStockPhotos, setShowStockPhotos] = useState(false);
  const [stockPhotos, setStockPhotos] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onImageSelect(imageUrl);
    }
  };

  const handleStockPhotoSearch = async () => {
    const photos = await fetchStockPhotos(searchQuery);
    setStockPhotos(photos);
  };

  const handlePhotoSelect = async (photo: any) => {
    const attribution = `Photo by ${photo.user.name} on Unsplash`;
    onImageSelect(photo.urls.regular, attribution); // Pass attribution to the parent component
    setShowStockPhotos(false);
    await triggerDownload(photo.id); // Trigger download event
  };

  return (
    <div className="mt-4 space-y-4">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="w-full flex items-center justify-center px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 transition-colors"
      >
        <Upload className="w-5 h-5 mr-2" />
        <span>Upload Custom Background</span>
      </button>

      <button
        onClick={() => setShowStockPhotos(true)}
        className="w-full flex items-center justify-center px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 transition-colors"
      >
        <ImageIcon className="w-5 h-5 mr-2" />
        <span>Choose from Stock Photos</span>
      </button>

      {showStockPhotos && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center gap-2 mb-4">
              <input
                type="text"
                placeholder="Search for stock photos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 border rounded-lg"
              />
              <button
                onClick={handleStockPhotoSearch}
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
              >
                Search
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stockPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:shadow-lg"
                  onClick={() => handlePhotoSelect(photo)}
                >
                  <img
                    src={photo.urls.small}
                    alt={photo.description}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowStockPhotos(false)}
              className="mt-4 w-full px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}