import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import data from '../data/data.json';

/**
 * Componente Products - Catálogo de produtos com filtros e carrinho
 * Gerencia estado do carrinho e quantidades
 */
const Products = ({ onCartUpdate }) => {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [carrinho, setCarrinho] = useState({});

  // Filtrar produtos por categoria
  const produtosFiltrados = useMemo(() => {
    if (categoriaAtiva === 'Todos') {
      return data.produtos;
    }
    return data.produtos.filter((p) => p.categoria === categoriaAtiva);
  }, [categoriaAtiva]);

  // Atualizar quantidade de um produto
  const atualizarQuantidade = (produtoId, incremento) => {
    setCarrinho((prevCarrinho) => {
      const quantidadeAtual = prevCarrinho[produtoId] || 0;
      const novaQuantidade = Math.max(0, quantidadeAtual + incremento);

      const novoCarrinho = {
        ...prevCarrinho,
        [produtoId]: novaQuantidade,
      };

      // Remover do carrinho se quantidade for 0
      if (novaQuantidade === 0) {
        delete novoCarrinho[produtoId];
      }

      // Notificar componente pai sobre mudança no carrinho
      if (onCartUpdate) {
        onCartUpdate(novoCarrinho);
      }

      return novoCarrinho;
    });
  };

  // Calcular total de itens no carrinho
  const totalItens = useMemo(() => {
    return Object.values(carrinho).reduce((acc, qtd) => acc + qtd, 0);
  }, [carrinho]);

  return (
    <section id="produtos" className="bg-surface-background section">
      <div className="container-custom">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl text-text-primary">
            Nossos Produtos Fresquinhos
          </h2>
          <p className="mx-auto text-lg text-text-secondary">
            Escolha seus produtos favoritos e adicione ao pedido
          </p>
        </motion.div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setCategoriaAtiva('Todos')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              categoriaAtiva === 'Todos'
                ? 'bg-accent-butter text-brand-chocolate shadow-md'
                : 'bg-surface-card text-text-secondary border border-surface-border hover:border-accent-oven'
            }`}
          >
            Todos
          </button>
          {data.categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaAtiva(categoria)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                categoriaAtiva === categoria
                  ? 'bg-accent-butter text-brand-chocolate shadow-md'
                  : 'bg-surface-card text-text-secondary border border-surface-border hover:border-accent-oven'
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Indicador de itens no carrinho */}
        {totalItens > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="flex items-center gap-2 px-6 py-3 text-white rounded-full shadow-lg bg-accent-oven">
              <ShoppingCart className="w-5 h-5" aria-hidden="true" />
              <span className="font-semibold">
                {totalItens} {totalItens === 1 ? 'item' : 'itens'} no pedido
              </span>
            </div>
          </motion.div>
        )}

        {/* Grid de Produtos */}
        <AnimatePresence mode="wait">
          <motion.div
            key={categoriaAtiva}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {produtosFiltrados.map((produto) => {
              const quantidade = carrinho[produto.id] || 0;

              return (
                <motion.div
                  key={produto.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="card hover-lift"
                >
                  {/* Badge de Categoria */}
                  <div className="mb-3">
                    <span className="badge">{produto.categoria}</span>
                  </div>

                  {/* Nome do Produto */}
                  <h3 className="mb-2 text-xl font-bold text-text-primary">
                    {produto.nome}
                  </h3>

                  {/* Descrição */}
                  <p className="mb-4 text-sm text-text-secondary line-clamp-2">
                    {produto.descricao}
                  </p>

                  {/* Preço */}
                  <div className="mb-4 text-2xl font-bold text-accent-oven">
                    R$ {produto.preco.toFixed(2).replace('.', ',')}
                  </div>

                  {/* Controles de Quantidade */}
                  <div className="flex items-center justify-between gap-3">
                    {/* Botão Diminuir */}
                    <button
                      onClick={() => atualizarQuantidade(produto.id, -1)}
                      disabled={quantidade === 0}
                      className="flex items-center justify-center w-12 h-12 transition-all duration-200 rounded-xl bg-surface-muted text-text-primary hover:bg-accent-butter disabled:opacity-30 disabled:cursor-not-allowed"
                      aria-label={`Diminuir quantidade de ${produto.nome}`}
                    >
                      <Minus className="w-5 h-5" aria-hidden="true" />
                    </button>

                    {/* Quantidade Atual */}
                    <div className="flex-1 text-center">
                      <span className="text-2xl font-bold text-text-primary">
                        {quantidade}
                      </span>
                    </div>

                    {/* Botão Aumentar */}
                    <button
                      onClick={() => atualizarQuantidade(produto.id, 1)}
                      className="flex items-center justify-center w-12 h-12 transition-all duration-200 shadow-md rounded-xl bg-accent-butter text-brand-chocolate hover:bg-accent-butterStrong hover:shadow-lg"
                      aria-label={`Aumentar quantidade de ${produto.nome}`}
                    >
                      <Plus className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Mensagem se nenhum produto encontrado */}
        {produtosFiltrados.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-text-muted">
              Nenhum produto encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
