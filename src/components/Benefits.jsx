import { motion } from 'framer-motion';
import { Store, Clock, MessageCircle } from 'lucide-react';
import data from '../data/data.json';

/**
 * Componente Benefits - Por que usar nosso assistente
 * Layout: 3 cards em grid responsivo
 * Background: #FFFFFF
 */
const Benefits = () => {
  // Mapear ícones dinamicamente
  const iconMap = {
    Store: Store,
    Clock: Clock,
    MessageCircle: MessageCircle,
  };

  // Animação de entrada para os cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="bg-surface-card section">
      <div className="container-custom">
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl text-text-primary">
            Por que usar nosso assistente?
          </h2>
          <p className="mx-auto text-lg text-text-secondary">
            Facilitamos seu dia a dia com praticidade e atendimento de qualidade
          </p>
        </motion.div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {data.beneficios.map((beneficio, index) => {
            const IconComponent = iconMap[beneficio.icone];

            return (
              <motion.div
                key={beneficio.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="card hover-lift group"
              >
                {/* Ícone */}
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 transition-all duration-300 rounded-2xl bg-accent-oven/10 text-accent-oven group-hover:bg-accent-oven group-hover:text-white">
                  {IconComponent && (
                    <IconComponent
                      className="w-8 h-8"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Título */}
                <h3 className="mb-3 text-xl font-semibold md:text-2xl text-text-primary">
                  {beneficio.titulo}
                </h3>

                {/* Descrição */}
                <p className="text-base leading-relaxed text-text-secondary">
                  {beneficio.descricao}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mensagem adicional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="italic text-text-muted">
            Feito com carinho para tornar seu dia mais prático e gostoso 🥖
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
