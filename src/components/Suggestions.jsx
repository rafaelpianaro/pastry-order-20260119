import { motion } from 'framer-motion';
import { Cake, Clock, Star, Calendar, MessageSquare } from 'lucide-react';
import data from '../data/data.json';

/**
 * Componente Suggestions - Sugestões de perguntas interativas
 * Cards com animações de hover
 */
const Suggestions = () => {
  // Mapear ícones dinamicamente
  const iconMap = {
    cake: Cake,
    clock: Clock,
    star: Star,
    calendar: Calendar,
  };

  // Animação de hover para os cards
  const cardHover = {
    scale: 1.05,
    transition: { duration: 0.3, ease: 'easeOut' },
  };

  return (
    <section className="bg-brand-caramel section">
      <div className="container-custom">
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl text-brand-chocolate">
            O que você gostaria de saber?
          </h2>
          <p className="mx-auto text-lg text-text-secondary">
            Clique em uma sugestão ou faça seu pedido direto
          </p>
        </motion.div>

        {/* Grid de Sugestões */}
        <div className="grid max-w-4xl grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:gap-6">
          {data.sugestoes.map((sugestao, index) => {
            const IconComponent = iconMap[sugestao.icone];

            return (
              <motion.div
                key={sugestao.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={cardHover}
                className="p-6 transition-colors duration-300 bg-white border-2 border-transparent shadow-md cursor-pointer rounded-xl group hover:border-accent-oven"
              >
                <div className="flex items-start gap-4">
                  {/* Ícone */}
                  <div className="flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-xl bg-support-sky/20 text-accent-oven group-hover:bg-accent-oven group-hover:text-white">
                    {IconComponent && (
                      <IconComponent
                        className="w-6 h-6"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Texto */}
                  <div className="flex-1">
                    <p className="text-base font-medium leading-snug transition-colors duration-300 md:text-lg text-brand-chocolate group-hover:text-accent-oven">
                      {sugestao.texto}
                    </p>
                  </div>

                  {/* Ícone de mensagem (indicador visual) */}
                  <div className="transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <MessageSquare
                      className="w-5 h-5 text-accent-oven"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-text-secondary">
            Não encontrou o que procura? Faça seu pedido personalizado!
          </p>
          <button
            onClick={() => {
              const produtosSection = document.getElementById('produtos');
              if (produtosSection) {
                produtosSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-secondary"
          >
            Ver todos os produtos
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Suggestions;
