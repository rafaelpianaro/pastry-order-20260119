import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X } from 'lucide-react';
import { useState, useMemo } from 'react';
import data from '../data/data.json';

/**
 * Componente FloatingCart - Carrinho flutuante fixo na tela
 * Mostra resumo rápido e permite scroll para finalização
 */
const FloatingCart = ({ carrinho }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Calcular produtos no carrinho
  const produtosNoCarrinho = useMemo(() => {
    return data.produtos
      .filter((produto) => carrinho[produto.id] > 0)
      .map((produto) => ({
        ...produto,
        quantidade: carrinho[produto.id],
        subtotal: produto.preco * carrinho[produto.id],
      }));
  }, [carrinho]);

  // Calcular totais
  const { totalItens, totalValor } = useMemo(() => {
    return produtosNoCarrinho.reduce(
      (acc, produto) => ({
        totalItens: acc.totalItens + produto.quantidade,
        totalValor: acc.totalValor + produto.subtotal,
      }),
      { totalItens: 0, totalValor: 0 }
    );
  }, [produtosNoCarrinho]);

  // Scroll para resumo do pedido
  const scrollToCheckout = () => {
    const resumoSection = document.getElementById('resumo-pedido');
    if (resumoSection) {
      resumoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsExpanded(false);
  };

  // Não mostrar se carrinho vazio
  if (totalItens === 0) return null;

  return (
    <>
      {/* Botão principal do carrinho - fixo no canto inferior esquerdo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className="fixed z-40 bottom-6 left-6"
      >
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative flex items-center gap-3 px-6 py-4 text-white transition-all duration-300 shadow-2xl bg-accent-oven rounded-2xl hover:bg-accent-oven/90 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-oven/50"
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingCart className="w-6 h-6" aria-hidden="true" />
          
          {/* Badge com total de itens */}
          <motion.div
            key={totalItens}
            initial={{ scale: 1.5 }}
            animate={{ scale: 1 }}
            className="absolute flex items-center justify-center w-7 h-7 text-xs font-bold rounded-full -top-2 -right-2 bg-accent-butter text-brand-chocolate"
          >
            {totalItens}
          </motion.div>
          
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium opacity-90">Meu Pedido</span>
            <span className="text-lg font-bold">
              R$ {totalValor.toFixed(2).replace('.', ',')}
            </span>
          </div>
        </motion.button>
      </motion.div>

      {/* Modal expandido com itens do carrinho */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />

            {/* Card expandido */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed z-50 w-full max-w-md overflow-hidden shadow-2xl bottom-6 left-6 bg-surface-card rounded-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b bg-accent-oven border-accent-oven/20">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-6 h-6 text-white" aria-hidden="true" />
                  <div className="text-white">
                    <h3 className="text-lg font-bold">Meu Pedido</h3>
                    <p className="text-sm opacity-90">{totalItens} {totalItens === 1 ? 'item' : 'itens'}</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-2 text-white transition-colors rounded-lg hover:bg-white/20"
                  aria-label="Fechar carrinho"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Lista de produtos */}
              <div className="max-h-100 overflow-y-auto p-5 space-y-3">
                {produtosNoCarrinho.map((produto) => (
                  <motion.div
                    key={produto.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between gap-3 p-4 rounded-lg bg-surface-muted"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-text-primary">{produto.nome}</h4>
                      <p className="text-sm text-text-muted">
                        {produto.quantidade}x R$ {produto.preco.toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                    <div className="font-bold text-accent-oven">
                      R$ {produto.subtotal.toFixed(2).replace('.', ',')}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer com total e botão */}
              <div className="p-5 space-y-4 border-t border-surface-border">
                <div className="flex items-center justify-between text-xl font-bold text-text-primary">
                  <span>Total:</span>
                  <span className="text-2xl text-accent-oven">
                    R$ {totalValor.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                
                <button
                  onClick={scrollToCheckout}
                  className="w-full btn-primary"
                >
                  Finalizar Pedido
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingCart;
