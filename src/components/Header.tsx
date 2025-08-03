'use client';

import dynamic from 'next/dynamic';

// Carrega o ThemeToggle dinamicamente para evitar problemas de hidratação
const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), { ssr: false });

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">ESF</span>
          <span className="text-gray-600 dark:text-gray-300 text-sm hidden sm:inline">Evangelho Sem Frescura</span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
