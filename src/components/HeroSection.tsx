'use client';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50 dark:from-amber-900 dark:via-amber-800 dark:to-amber-900 px-4 py-16 md:py-24">
      {/* Fundo sutil com padrão de textura */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d=%22M54.627%200H5.373L0%205.373v49.254L5.373%2060h49.254L60%2054.627V5.373L54.627%200zM21%206l3.666%204.3L21%2014.6%2017.333%2010.3%2021%206zm-9%2050l-3.666-4.3L12%2045.4l3.667%204.3L12%2056zm45-5.373L54.627%2056H48l-6-7h13.254v-1.254zM54.627%204L56%205.373v8.254L50%2019v-6h-6l5.373-5.373L54.627%204zM6%205.373L7.373%204%2010%206.627%208.627%208%206%205.373zM56%2054.627L54.627%2056l-2.627-2.627L54.627%2050H56v4.627zM7.373%2056L6%2054.627V50h1.373L12%2054.627%207.373%2056zM32%2013l9%2010.5-9%2010.5-9-10.5L32%2013zm20%202v12h-8l4-4-4-4h8zm-30%200h8l-4%204%204%204h-8v-8zm-2%2030l-9-10.5L22%2032l9%2010.5-9%2010.5zm-9-16.5l-3%203.5%203%203.5v-7zm12%200v7l3-3.5-3-3.5zm-6-17.5l-3-3.5-3%203.5%203%203.5%203-3.5zm18%200l3-3.5-3-3.5-3%203.5%203%203.5zM35%206l3%203.5-3%203.5-3-3.5L35%206zm-9%2048l-3-3.5-3%203.5%203%203.5%203-3.5zm9%200l3-3.5-3-3.5-3%203.5%203%203.5z%22%20fill=%22%23b45309%22%20fill-opacity=%220.2%22%20fill-rule=%22evenodd%22/%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Logo ESF */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-800 dark:text-amber-200 mb-2">ESF</h1>
          <div className="w-24 h-1 bg-amber-600 dark:bg-amber-400 mx-auto my-4 rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-semibold text-amber-700 dark:text-amber-300">Evangelho Sem Frescura</h2>
        </div>

        {/* Imagem da Cruz */}
        <div className="relative mx-auto w-64 h-80 mb-12 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full relative">
              <Image
                src="/cuz.jpeg"
                alt="Cruz decorativa"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          {/* Efeito de brilho suave */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-amber-400/10 dark:from-amber-600/10 dark:to-amber-800/5 rounded-full blur-xl opacity-70"></div>
        </div>

        {/* Mensagem Principal */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-100 dark:border-amber-900/50">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-sm font-semibold px-4 py-1 rounded-full whitespace-nowrap shadow-md">
              João 8:32
            </div>
            <p className="text-xl md:text-2xl text-amber-800 dark:text-amber-100 italic leading-relaxed">
              &ldquo;Conhecereis a verdade, e a verdade vos libertará.&rdquo;
            </p>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a
            href="#sobre"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-200/30 dark:shadow-amber-800/30"
          >
            <span>Conheça Nossa Missão</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-amber-800 dark:text-amber-200 bg-white/80 dark:bg-gray-700/80 hover:bg-white dark:hover:bg-gray-600/80 transition-all duration-300 transform hover:scale-105 border border-amber-200 dark:border-amber-800 shadow-lg hover:shadow-amber-200/20 dark:shadow-amber-800/20"
          >
            <span>Entre em Contato</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        {/* Rodapé da seção */}
        <div className="pt-8 border-t border-amber-200 dark:border-amber-800/50">
          <p className="text-amber-700/80 dark:text-amber-300/80 text-sm">
            Uma jornada de fé, verdade e libertação
          </p>
        </div>
      </div>
    </main>
  );
}
