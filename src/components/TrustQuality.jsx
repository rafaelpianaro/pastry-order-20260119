import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import data from '../data/data.json';

/**
 * Componente TrustQuality - Qualidade e confiança
 * Layout: 2 colunas (texto + lista de benefícios)
 * Background: Texturizado #F3EFE8
 */
const TrustQuality = () => {
  return (
    <section className="bg-brand-caramel bg-texture section">
      <div className="container-custom">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Coluna 1: Título e Introdução */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl text-brand-chocolate">
              Qualidade e confiança que você já conhece
            </h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              Nossa panificadora faz parte da sua rotina e da sua família.
              Mantemos o mesmo carinho e dedicação de sempre, agora com ainda
              mais praticidade para você.
            </p>

            {/* Elemento decorativo */}
            <div className="flex items-center gap-4 mt-8">
              <div className="w-16 h-1 rounded-full bg-accent-butter"></div>
              <span className="text-4xl" role="img" aria-label="pão">🥖</span>
              <div className="w-16 h-1 rounded-full bg-accent-butter"></div>
            </div>
          </motion.div>

          {/* Coluna 2: Lista de Benefícios */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {data.confianca.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-start gap-4 p-6 transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg"
              >
                {/* Ícone de Check */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-oven/10 text-accent-oven">
                  <CheckCircle2
                    className="w-6 h-6"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </div>

                {/* Texto */}
                <p className="flex-1 text-base font-medium leading-relaxed md:text-lg text-brand-chocolate">
                  {item.texto}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Seção adicional de depoimento/mensagem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="p-8 mt-12 text-center bg-white shadow-lg rounded-2xl"
        >
          <div className="mb-4 text-4xl" role="img" aria-label="coração">❤️</div>
          <p className="font-serif text-xl italic leading-relaxed md:text-2xl text-brand-chocolate">
            "Feito com carinho, como se fosse para nossa própria família"
          </p>
          <p className="mt-4 text-text-secondary">
            — Equipe da Panificadora
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustQuality;
