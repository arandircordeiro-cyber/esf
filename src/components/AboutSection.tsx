'use client';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Sobre o ESF
          </h2>
          <div className="prose prose-lg text-gray-700 dark:text-gray-300 max-w-none">
            <p className="mb-4">
              O ESF - Evangelho Sem Frescura nasceu da necessidade de compartilhar a palavra de Deus de forma clara, objetiva e sem rodeios.
            </p>
            <p className="mb-4">
              Acreditamos que o evangelho é simples e poderoso, e nossa missão é apresentá-lo de maneira acessível a todos.
            </p>
            <p>
              Seja bem-vindo a essa jornada de fé e verdade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
