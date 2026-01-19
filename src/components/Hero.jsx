import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * Componente Hero - Seção principal de destaque
 * Layout 2 colunas: Texto + Imagem
 * Background: #FFFFFF
 */
const Hero = () => {
  const scrollToProdutos = () => {
    const produtosSection = document.getElementById('produtos');
    if (produtosSection) {
      produtosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white section">
      <div className="container-custom">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Coluna 1: Conteúdo de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Título Principal */}
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-brand-chocolate">
              O jeito mais fácil de fazer seu pedido na panificadora
            </h1>

            {/* Subtítulo */}
            <p className="text-lg leading-relaxed md:text-xl text-text-secondary">
              Nosso assistente ajuda você a escolher bolos, assados, doces e produtos
              fresquinhos da panificadora do supermercado — de forma rápida, simples e
              sem complicação.
            </p>

            {/* Call to Action */}
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <button
                onClick={scrollToProdutos}
                className="btn-primary group"
                aria-label="Fazer pedido agora"
              >
                Fazer pedido agora
                <ChevronDown
                  className="w-5 h-5 transition-transform group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Indicadores de benefícios rápidos */}
            <div className="flex flex-wrap gap-4 pt-4 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <span className="text-accent-oven">✓</span>
                <span>Sem cadastro</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-oven">✓</span>
                <span>Direto pelo WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-oven">✓</span>
                <span>Produtos fresquinhos</span>
              </div>
            </div>
          </motion.div>

          {/* Coluna 2: Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden shadow-xl rounded-2xl">
              {/* Imagem de fundo */}
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop"
                alt="Variedade de pães frescos e produtos de panificadora"
                className="absolute inset-0 object-cover w-full h-full"
                loading="lazy"
              />

              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-brand-chocolate/60"></div>

              {/* Conteúdo de texto sobre a imagem */}
              <div className="relative flex items-center justify-center aspect-square">
                <div className="p-8 text-center">
                  <span className="text-6xl md:text-8xl">🍞</span>
                  <p className="mt-4 font-serif text-xl md:text-2xl text-brand-flour">
                    Panificadora Acolhedora
                  </p>
                  <p className="mt-2 text-text-inverse/90">
                    Produtos fresquinhos feitos diariamente
                  </p>
                </div>
              </div>

              {/* Badge de destaque */}
              <div className="absolute px-4 py-2 text-sm font-semibold rounded-full shadow-lg top-4 right-4 bg-accent-butter text-brand-chocolate">
                Produtos Frescos
              </div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute w-24 h-24 rounded-full -bottom-4 -left-4 bg-support-mint/20 blur-2xl -z-10"></div>
            <div className="absolute w-32 h-32 rounded-full -top-4 -right-4 bg-accent-oven/20 blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
