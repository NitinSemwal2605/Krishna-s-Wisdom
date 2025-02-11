import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled: boolean;
  isDark: boolean;
}

export function ChatInput({ onSend, disabled, isDark }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask Lord Krishna for guidance..."
        className={`flex-1 p-3 rounded-lg transition-colors duration-200 ${
          isDark 
            ? 'bg-gray-800 text-white border-gray-700 focus:ring-purple-500 placeholder-gray-400' 
            : 'bg-white text-gray-900 border-gray-300 focus:ring-purple-500'
        } border focus:outline-none focus:ring-2`}
        disabled={disabled}
      />
      <button
        type="submit"
        disabled={disabled || !input.trim()}
        className={`px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 ${
          isDark 
            ? 'bg-purple-600 hover:bg-purple-700' 
            : 'bg-purple-600 hover:bg-purple-700'
        } text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
      >
        <Send size={20} />
      </button>
    </form>
  );
}