import React from 'react';
import { templates } from '../data/templates';
import type { Template } from '../types';
import ImageUploader from './ImageUploader';

interface TemplateSelectorProps {
  onSelect: (template: Template) => void;
  onCustomImageSelect: (imageUrl: string) => void;
  selectedId: string;
}

export default function TemplateSelector({ onSelect, onCustomImageSelect, selectedId }: TemplateSelectorProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Select a Page template:</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => onSelect(template)}
              className={`relative aspect-[4/3] overflow-hidden rounded-lg transition-all ${
                selectedId === template.id ? 'ring-2 ring-indigo-500' : ''
              } hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-indigo-500`}
            >
              <img
                src={template.preview}
                alt={template.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                <span className="text-white text-sm font-medium">{template.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Custom Background</label>
        <ImageUploader onImageSelect={onCustomImageSelect} />
      </div>
    </div>
  );
}