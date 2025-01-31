import React, { useState } from 'react';
import { AlignLeft, AlignCenter, AlignRight, Settings, X, Wand2 } from 'lucide-react';
import type { Quote } from '../types';
import ColorPicker from './ColorPicker';
import { motion, AnimatePresence } from 'framer-motion';
import { generateQuote } from '../utils/gemini'; // Import your AI function here

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
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generatedQuote, setGeneratedQuote] = useState('');

  const handleGenerateQuote = async () => {
    try {
      setLoading(true);
      const prompt = `Create an inspiring quote about: ${quote.text}`;
      const result = await generateQuote(prompt);
      setGeneratedQuote(result); // Set the generated quote to the state
      onChange({ text: result }); // Update the quote with the generated content
    } catch (error) {
      console.error("Error generating quote:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 p-6 bg-gray-50 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Text Customizer</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transition-colors duration-200 flex items-center space-x-2"
        >
          <Wand2 className="w-5 h-5" />
          <span>Generate with AI</span>
        </motion.button>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">Quote Text</label>
        <textarea
          value={quote.text}
          onChange={(e) => onChange({ text: e.target.value })}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-200"
          rows={4}
          placeholder="Enter your quote here..."
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowAdvanced(!showAdvanced)}
        className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center space-x-2"
      >
        <Settings className="w-5 h-5" />
        <span>{showAdvanced ? 'Hide Advanced Settings' : 'Show Advanced Settings'}</span>
      </motion.button>

      <AnimatePresence>
        {showAdvanced && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 overflow-hidden"
          >
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Font Style</label>
              <select
                value={quote.font}
                onChange={(e) => onChange({ font: e.target.value })}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-200"
              >
                {fonts.map((font) => (
                  <option key={font.name} value={font.name} style={{ fontFamily: font.name }}>
                    {font.name} - {font.style}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Font Size: {quote.fontSize}px
              </label>
              <input
                type="range"
                min="16"
                max="72"
                value={quote.fontSize}
                onChange={(e) => onChange({ fontSize: Number(e.target.value) })}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>16px</span>
                <span>72px</span>
              </div>
            </div>

            <ColorPicker
              color={quote.color}
              onChange={(color) => onChange({ color })}
            />

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Text Alignment</label>
              <div className="flex space-x-2">
                {['left', 'center', 'right'].map((align) => (
                  <motion.button
                    key={align}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onChange({ alignment: align as 'left' | 'center' | 'right' })}
                    className={`p-2 rounded-md ${
                      quote.alignment === align ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {align === 'left' && <AlignLeft className="w-5 h-5" />}
                    {align === 'center' && <AlignCenter className="w-5 h-5" />}
                    {align === 'right' && <AlignRight className="w-5 h-5" />}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Text Style</label>
              <div className="flex space-x-2">
                {[
                  { key: 'bold', label: 'B' },
                  { key: 'italic', label: 'I' },
                  { key: 'underline', label: 'U' }
                ].map((style) => (
                  <motion.button
                    key={style.key}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onChange({ [style.key]: !quote[style.key as keyof Quote] })}
                    className={`p-2 rounded-md ${
                      quote[style.key as keyof Quote] ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {style.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-8 rounded-lg w-[600px] max-w-[90%] max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Generate with AI</h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              <p className="mt-2 text-sm text-gray-600">
                Can't think of a quote? We'll do the magic for you.
              </p>

              <div className="mt-4 space-y-2">
                <label className="block text-sm font-medium text-gray-700">Add description</label>
                <textarea
                  placeholder="Give some additional context on what you want out of the quote. What is the scenario? Who is the quote for?"
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-200"
                  rows={4}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGenerateQuote}
                className="mt-6 w-full px-4 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transition-colors duration-200"
              >
                {loading ? 'Generating...' : 'Generate with AI'}
              </motion.button>
              {generatedQuote && (
                <p className="mt-4 text-sm text-gray-600">Generated Quote: {generatedQuote}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}