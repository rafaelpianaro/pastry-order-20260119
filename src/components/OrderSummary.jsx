import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, User, Send, X, AlertCircle } from 'lucide-react';
import data from '../data/data.json';

/**
 * Componente OrderSummary - Resumo do pedido e envio para WhatsApp
 * Coleta nome do cliente e formata mensagem
 */
const OrderSummary = ({ carrinho }) => {
  const [nomeCliente, setNomeCliente] = useState('');
  const [erro, setErro] = useState('');

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

  // Validar e enviar para WhatsApp
  const enviarParaWhatsApp = () => {
    // Validação 1: Nome não pode estar vazio
    if (!nomeCliente.trim()) {
      setErro('Por favor, digite seu nome para continuar');
      return;
    }

    // Validação 2: Carrinho não pode estar vazio
    if (produtosNoCarrinho.length === 0) {
      setErro('Adicione pelo menos um produto ao seu pedido');
      return;
    }

    // Limpar erro
    setErro('');

    // Gerar mensagem formatada
    const mensagem = gerarMensagemWhatsApp();

    // Abrir WhatsApp
    const urlWhatsApp = `https://wa.me/${data.whatsapp}?text=${encodeURIComponent(mensagem)}`;
    window.open(urlWhatsApp, '_blank');
  };

  // Gerar mensagem formatada para WhatsApp
  const gerarMensagemWhatsApp = () => {
    let mensagem = `Olá! 👋\n\n`;
    mensagem += `Meu nome é *${nomeCliente}*.\n\n`;
    mensagem += `Gostaria de fazer o seguinte pedido:\n\n`;
    mensagem += `━━━━━━━━━━━━━━━━\n`;

    produtosNoCarrinho.forEach((produto) => {
      mensagem += `🍞 *${produto.nome}*\n`;
      mensagem += `   ${produto.quantidade}x R$ ${produto.preco.toFixed(2).replace('.', ',')} = R$ ${produto.subtotal.toFixed(2).replace('.', ',')}\n\n`;
    });

    mensagem += `━━━━━━━━━━━━━━━━\n`;
    mensagem += `📦 Total de itens: *${totalItens}*\n`;
    mensagem += `💰 Valor total: *R$ ${totalValor.toFixed(2).replace('.', ',')}*\n\n`;
    mensagem += `Obrigado! 😊`;

    return mensagem;
  };

  // Remover item do carrinho (função auxiliar para o componente pai)
  const removerItem = (produtoId) => {
    // Esta função seria passada via props do componente pai
    // Por enquanto, deixamos vazia pois a lógica está no Products
  };

  return (
    <section id="resumo-pedido" className="bg-surface-card section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className=""
        >
          {/* Cabeçalho */}
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl text-text-primary">
              Seu Pedido
            </h2>
            <p className="text-lg text-text-secondary">
              Revise seus itens e finalize seu pedido
            </p>
          </div>

          {/* Card do Resumo */}
          <div className="w-full card">
            {/* Lista de Produtos */}
            {produtosNoCarrinho.length > 0 ? (
              <div className="mb-8 space-y-5">
                <div className="flex items-center gap-2 mb-6 text-lg font-semibold text-text-primary">
                  <ShoppingCart className="w-5 h-5" aria-hidden="true" />
                  <span>Itens do pedido ({totalItens})</span>
                </div>

                {produtosNoCarrinho.map((produto) => (
                  <div
                    key={produto.id}
                    className="flex items-start justify-between gap-4 p-5 rounded-lg bg-surface-muted md:items-center"
                  >
                    <div className="flex-1 min-w-0 space-y-1">
                      <h4 className="text-base font-semibold leading-relaxed text-text-primary md:text-lg">
                        {produto.nome}
                      </h4>
                      <p className="text-sm text-text-muted md:text-base">
                        {produto.quantidade}x R$ {produto.preco.toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-accent-oven md:text-xl">
                        R$ {produto.subtotal.toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Total */}
                <div className="pt-6 mt-6 border-t-2 border-surface-border">
                  <div className="flex items-center justify-between text-xl font-bold text-text-primary md:text-2xl">
                    <span>Total:</span>
                    <span className="text-2xl text-accent-oven md:text-3xl">
                      R$ {totalValor.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-12 text-center">
                <ShoppingCart
                  className="w-16 h-16 mx-auto mb-4 text-text-muted"
                  aria-hidden="true"
                />
                <p className="mb-4 text-lg text-text-muted">
                  Seu pedido está vazio
                </p>
                <button
                  onClick={() => {
                    const produtosSection = document.getElementById('produtos');
                    if (produtosSection) {
                      produtosSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="btn-primary"
                >
                  Adicionar produtos
                </button>
              </div>
            )}

            {/* Campo de Nome (só aparece se há produtos) */}
            {produtosNoCarrinho.length > 0 && (
              <div className="pt-8 space-y-6 border-t-2 border-surface-border">
                <div className="space-y-3">
                  <label
                    htmlFor="nome-cliente"
                    className="flex items-center gap-2 text-lg font-medium text-text-primary md:text-xl"
                  >
                    <User className="w-5 h-5" aria-hidden="true" />
                    Seu nome:
                  </label>
                  <input
                    id="nome-cliente"
                    type="text"
                    value={nomeCliente}
                    onChange={(e) => {
                      setNomeCliente(e.target.value);
                      setErro(''); // Limpar erro ao digitar
                    }}
                    placeholder="Digite seu nome completo"
                    className="text-base input-field md:text-lg"
                    aria-required="true"
                    aria-invalid={erro ? 'true' : 'false'}
                    aria-describedby={erro ? 'erro-mensagem' : undefined}
                  />
                  <p className="text-sm leading-relaxed text-text-muted md:text-base">
                    Seu pedido será enviado direto para nossa equipe no WhatsApp
                  </p>
                </div>

                {/* Mensagem de Erro */}
                {erro && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="erro-mensagem"
                    className="flex items-start gap-3 p-4 text-red-700 border border-red-200 rounded-lg bg-red-50"
                    role="alert"
                  >
                    <AlertCircle className="w-5 h-5 mt-0.5" aria-hidden="true" />
                    <span className="leading-relaxed">{erro}</span>
                  </motion.div>
                )}

                {/* Botão de Envio */}
                <button
                  onClick={enviarParaWhatsApp}
                  disabled={produtosNoCarrinho.length === 0 || !nomeCliente.trim()}
                  className="w-full py-4 text-base btn-primary md:text-lg md:py-5"
                  style={{
                    backgroundColor: produtosNoCarrinho.length > 0 && nomeCliente.trim() ? '#25D366' : undefined
                  }}
                >
                  <Send className="w-5 h-5" aria-hidden="true" />
                  Enviar pedido pelo WhatsApp
                </button>

                {/* Informação adicional */}
                <p className="text-sm leading-relaxed text-center text-text-muted md:text-base">
                  Ao clicar, você será redirecionado para o WhatsApp com sua mensagem pronta
                </p>
              </div>
            )}
          </div>

          {/* Informações de Horário */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="p-6 mt-8 border bg-support-sky/20 rounded-xl border-support-sky/30"
          >
            <h3 className="flex items-center gap-2 mb-3 font-semibold text-text-primary">
              <span className="text-xl" role="img" aria-label="relógio">🕐</span>
              Horários de Atendimento
            </h3>
            <div className="space-y-1 text-text-secondary">
              <p>Segunda a Sexta: {data.horarios.segunda_sexta}</p>
              <p>Sábado: {data.horarios.sabado}</p>
              <p>Domingo: {data.horarios.domingo}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderSummary;
