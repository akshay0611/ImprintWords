import React, { useState } from 'react';
import { AlignLeft, AlignCenter, AlignRight, Settings, X } from 'lucide-react'; // Import the Close (X) icon
import type { Quote } from '../types';
import ColorPicker from './ColorPicker';

const fonts = [
  { name: 'Playfair Display', category: 'Serif', style: 'Classic' },
  { name: 'Inter', category: 'Sans Serif', style: 'Modern' },
  { name: 'Cormorant Garamond', category: 'Serif', style: 'Elegant' },
  { name: 'Merriweather', category: 'Serif', style: 'Traditional' },
  { name: 'Lora', category: 'Serif', style: 'Literary' },
  { name: 'Montserrat', category: 'Sans Serif', style: 'Contemporary' },
  { name: 'Crimson Text', category: 'Serif', style: 'Book Style' },
  { name: 'Source Serif Pro', category: 'Serif', style: 'Academic' },
  { name: 'Roboto', category: 'Sans Serif', style: 'Modern' },
  { name: 'Oswald', category: 'Sans Serif', style: 'Bold' },
  { name: 'Raleway', category: 'Sans Serif', style: 'Elegant' },
  { name: 'Georgia', category: 'Serif', style: 'Classic' },
  { name: 'Poppins', category: 'Sans Serif', style: 'Contemporary' }
];

interface TextCustomizerProps {
  quote: Quote;
  onChange: (updates: Partial<Quote>) => void;
}

export default function TextCustomizer({ quote, onChange }: TextCustomizerProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to toggle modal visibility

  return (
    <div className="space-y-6">
      {/* Button Container */}
      <div className="flex justify-end">
        {/* Generate with AI Button */}
        <button
          onClick={() => setShowModal(true)} // Open modal when clicked
          className="mt-4 p-2 bg-purple-600 text-white rounded flex items-center"
        >
          Generate with AI
        </button>
      </div>

      {/* Text Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Quote Text</label>
        <textarea
          value={quote.text}
          onChange={(e) => onChange({ text: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows={4}
          placeholder="Enter your quote here..."
        />
      </div>

      {/* Show Advanced Settings Button */}
      <button
        onClick={() => setShowAdvanced(!showAdvanced)}
        className="mt-4 p-2 bg-indigo-600 text-white rounded flex items-center"
      >
        <Settings className="w-4 h-4 mr-2" />
        {showAdvanced ? 'Hide Advanced Settings' : 'Show Advanced Settings'}
      </button>

      {/* Advanced Settings */}
      {showAdvanced && (
        <>
          {/* Font Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Font Style</label>
            <select
              value={quote.font}
              onChange={(e) => onChange({ font: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              {fonts.map((font) => (
                <option key={font.name} value={font.name} style={{ fontFamily: font.name }}>
                  {font.name} - {font.style}
                </option>
              ))}
            </select>
          </div>

          {/* Font Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Font Size: {quote.fontSize}px
            </label>
            <input
              type="range"
              min="16"
              max="72"
              value={quote.fontSize}
              onChange={(e) => onChange({ fontSize: Number(e.target.value) })}
              className="w-full mt-2"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>16px</span>
              <span>72px</span>
            </div>
          </div>

          {/* Text Color */}
          <ColorPicker
            color={quote.color}
            onChange={(color) => onChange({ color })}
          />

          {/* Text Alignment */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
            <div className="flex space-x-2">
              <button
                onClick={() => onChange({ alignment: 'left' })}
                className={`p-2 rounded ${
                  quote.alignment === 'left' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <AlignLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => onChange({ alignment: 'center' })}
                className={`p-2 rounded ${
                  quote.alignment === 'center' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <AlignCenter className="w-5 h-5" />
              </button>
              <button
                onClick={() => onChange({ alignment: 'right' })}
                className={`p-2 rounded ${
                  quote.alignment === 'right' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <AlignRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Text Style Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Text Style</label>
            <div className="flex space-x-2">
              <button
                onClick={() => onChange({ bold: !quote.bold })}
                className={`p-2 rounded ${quote.bold ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                B
              </button>
              <button
                onClick={() => onChange({ italic: !quote.italic })}
                className={`p-2 rounded ${quote.italic ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                I
              </button>
              <button
                onClick={() => onChange({ underline: !quote.underline })}
                className={`p-2 rounded ${quote.underline ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                U
              </button>
            </div>
          </div>
        </>
      )}

      {/* AI Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-[600px] h-[500px]"> {/* Increased modal width and height */}
            {/* Modal Header with Close Icon */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Generate with AI</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-800">
                <X className="w-6 h-6" /> {/* Close Icon */}
              </button>
            </div>

            {/* Modal Body */}
            <p className="mt-2 text-sm text-gray-600">
              Can't think of a quote? We'll do the magic for you.
            </p>

            {/* Additional Context Input */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Add description</label>
              <textarea
                placeholder="Give some additional context on what you want out of the quote/story. What is the scenario? Who is the quote/story for?"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                rows={4}
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={() => {/* Add AI generation logic here */}}
              className="mt-4 w-full p-2 bg-purple-600 text-white rounded"
            >
              Generate with AI
            </button>
          </div>
        </div>
      )}
    </div>
  );
}