import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  validationMessage?: string;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, validationMessage }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <div className="mb-6">
      <label className="block text-lg font-semibold text-orange-600 mb-2">
        {label}
      </label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={w-full p-4 border rounded-md transition duration-300 ease-in-out 
                    ${validationMessage ? 'border-red-500' : 'border-orange-300'} 
                    bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500
                    ${focused ? 'shadow-lg' : ''}}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        whileFocus={{ scale: 1.02 }}
      />
      {validationMessage && (
        <p className="text-red-500 text-sm mt-1">{validationMessage}</p>
      )}
    </div>
  );
};

export default Input;