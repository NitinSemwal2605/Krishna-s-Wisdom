import React from 'react';
import { Sun, Moon } from 'lucide-react';
import type { Theme } from '../types';

export function ThemeToggle({ isDark, toggle }: Theme) {
  return (
    <button
      onClick={toggle}
      className={`p-2 rounded-lg transition-colors duration-200 ${
        isDark ? 'bg-gray-700 text-yellow-300' : 'bg-purple-100 text-purple-600'
      }`}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}