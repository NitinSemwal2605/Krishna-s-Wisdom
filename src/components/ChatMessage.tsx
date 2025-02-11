import React from 'react';
import { Bot as Lotus, User } from 'lucide-react';
import type { Message } from '../types';

interface ChatMessageProps {
  message: Message;
  isDark: boolean;
}

export function ChatMessage({ message, isDark }: ChatMessageProps) {
  const isKrishna = message.role === 'assistant';

  return (
    <div 
      className={`flex gap-4 p-4 rounded-lg transform opacity-0 translate-y-4 animate-message ${
        isKrishna 
          ? isDark 
            ? 'bg-gray-800' 
            : 'bg-purple-50' 
          : isDark 
            ? 'bg-gray-900' 
            : 'bg-white'
      }`}
    >
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        isKrishna 
          ? isDark 
            ? 'bg-purple-900 text-purple-200' 
            : 'bg-purple-200 text-purple-600'
          : isDark 
            ? 'bg-blue-900 text-blue-200' 
            : 'bg-blue-200 text-blue-600'
      }`}>
        {isKrishna ? <Lotus size={20} /> : <User size={20} />}
      </div>
      <div className="flex-1">
        <p className={`font-medium mb-1 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
          {isKrishna ? 'Lord Krishna' : 'You'}
        </p>
        <p className={`whitespace-pre-wrap ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {message.content}
        </p>
      </div>
    </div>
  );
}