import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-30 backdrop-blur-md">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <h2 className="text-2xl font-bold text-orange-500 mb-4 text-center">
          {title}
        </h2>
        <p className="text-gray-700 mb-4 text-center">
          {content}
        </p>
        <div className="flex justify-center">
          <button
            className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-md transition-transform transform hover:scale-105"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;