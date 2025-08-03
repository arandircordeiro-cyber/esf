import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo e Título */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              ESF
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              Evangelho Sem Frescura
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto my-6 rounded-full"></div>
          </div>

          {/* Mensagem Principal */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Uma abordagem direta e autêntica do evangelho de Cristo, sem rodeios e com verdade.
            </p>
            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                "Conhecereis a verdade, e a verdade vos libertará."
              </p>
              <p className="text-gray-500 dark:text-gray-500">
                João 8:32
              </p>
            </div>
          </div>

          {/* Botão de Ação */}
          <div className="mt-12">
            <a
              href="#sobre"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </main>

      {/* Seção Sobre */}
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

      {/* Rodapé */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} ESF - Evangelho Sem Frescura. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
