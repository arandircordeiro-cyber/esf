'use client';

import dynamic from 'next/dynamic';

// Carrega os componentes dinamicamente, desativando SSR para evitar problemas de hidratação
const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const AboutSection = dynamic(() => import('@/components/AboutSection'), { ssr: false });
const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: false });

export default function HomeContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Cabeçalho */}
      <Header />

      {/* Conteúdo Principal */}
      <div className="pt-20">
        <HeroSection />

        {/* Seção Sobre */}
        <AboutSection />
      </div>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
