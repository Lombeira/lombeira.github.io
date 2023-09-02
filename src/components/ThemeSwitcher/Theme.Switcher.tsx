'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonStarIcon, Sun } from 'lucide-react';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`p-2 rounded-md transition-all bg-black opacity-primary dark:hover:bg-opacity-30`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <Sun className='text-primary w-5 h-5' />
      ) : (
        <MoonStarIcon className='text-primary w-5 h-5' />
      )}
    </button>
  );
};
