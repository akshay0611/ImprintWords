import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

export default function ColorPicker({ color, onChange }: ColorPickerProps) {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setShowPicker(!showPicker)}
          className="w-10 h-10 rounded-md border border-gray-300 shadow-sm"
          style={{ backgroundColor: color }}
        />
        <span className="text-sm text-gray-600 uppercase">{color}</span>
      </div>
      
      {showPicker && (
        <div className="absolute z-10 mt-2">
          <div className="fixed inset-0" onClick={() => setShowPicker(false)} />
          <div className="relative">
            <HexColorPicker color={color} onChange={onChange} />
          </div>
        </div>
      )}
    </div>
  );
}