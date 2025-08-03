'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Componente de carregamento personalizado
function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="animate-pulse text-gray-400">Carregando...</div>
    </div>
  );
}

// Importa o HomeContent diretamente sem usar dynamic com ssr: false
import HomeContent from '@/components/HomeContent';

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeContent />
    </Suspense>
  );
}
