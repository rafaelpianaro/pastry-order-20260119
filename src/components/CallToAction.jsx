import { motion } from 'framer-motion';
import { ShoppingBag, CheckCircle } from 'lucide-react';

/**
 * Componente CallToAction - CTA final antes do footer
 * Background: #F6D8AE (tom quente)
 */
const CallToAction = () => {
  const scrollToProdutos = () => {
    const produtosSection = document.getElementById('produtos');
    if (produtosSection) {
      produtosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToResumo = () => {
    const resumoSection = document.getElementById('resumo-pedido');
    if (resumoSection) {
      resumoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section" style={{ backgroundColor: '#F6D8AE' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Ícone decorativo */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent-butter shadow-xl"
          >
            <ShoppingBag 
              className="w-10 h-10 text-brand-chocolate" 
              strokeWidth={2}
              aria-hidden="true"
            />
          </motion.div>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-chocolate mb-6 leading-tight">
            Seu pedido pronto, do jeito que você gosta
          </h2>

          {/* Descrição */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-3 text-lg text-brand-chocolate">
              <CheckCircle className="w-6 h-6 text-accent-oven flex-shrink-0" aria-hidden="true" />
              <span>Escolha seus produtos favoritos</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg text-brand-chocolate">
              <CheckCircle className="w-6 h-6 text-accent-oven flex-shrink-0" aria-hidden="true" />
              <span>Faça encomendas para festas e datas especiais</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg text-brand-chocolate">
              <CheckCircle className="w-6 h-6 text-accent-oven flex-shrink-0" aria-hidden="true" />
              <span>Retire no supermercado com comodidade</span>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToProdutos}
              className="btn-primary"
            >
              <ShoppingBag className="w-5 h-5" aria-hidden="true" />
              Fazer pedido agora
            </button>
            
            <button
              onClick={scrollToResumo}
              className="btn-secondary"
            >
              Ver meu pedido
            </button>
          </div>

          {/* Informação adicional */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 text-text-secondary"
          >
            💬 Seu pedido será enviado diretamente para nosso WhatsApp
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
