import { useState } from 'react';
import { Send, Trash2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

// Configure o número do WhatsApp aqui (formato: 5511999999999)
const WHATSAPP_NUMBER = '5541995549171';

export default function OrderForm({ cart, setCart }) {
  const [customerName, setCustomerName] = useState('');

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const removeItem = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
    toast.success('Item removido do carrinho', {
      icon: '🗑️',
      style: {
        background: '#FEF3C7',
        color: '#92400E',
        border: '2px solid #F59E0B',
      },
    });
  };

  const sendToWhatsApp = () => {
    // Validações
    if (!customerName.trim()) {
      toast.error('Por favor, informe seu nome antes de enviar o pedido.', {
        icon: '👤',
        style: {
          background: '#FEE2E2',
          color: '#991B1B',
          border: '2px solid #DC2626',
        },
        duration: 4000,
      });
      return;
    }

    if (cart.length === 0) {
      toast.error('Seu carrinho está vazio. Adicione produtos antes de enviar o pedido.', {
        icon: '🛒',
        style: {
          background: '#FEE2E2',
          color: '#991B1B',
          border: '2px solid #DC2626',
        },
        duration: 4000,
      });
      return;
    }

    // Montar mensagem
    let message = `🛒 *Novo Pedido - Panificadora*\n\n`;
    message += `👤 *Cliente:* ${customerName}\n\n`;
    message += `📦 *Itens do Pedido:*\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Quantidade: ${item.quantity}x\n`;
      message += `   Subtotal: R$ ${(item.price * item.quantity).toFixed(2)}\n\n`;
    });

    message += `💰 *Total: R$ ${total.toFixed(2)}*\n\n`;
    message += `✅ Pedido feito pelo site da panificadora`;

    // Codificar e enviar
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Mostrar toast de sucesso
    toast.success('Redirecionando para o WhatsApp...', {
      icon: '✅',
      style: {
        background: '#D1FAE5',
        color: '#065F46',
        border: '2px solid #10B981',
      },
      duration: 2000,
    });

    // Aguardar 1 segundo antes de abrir o WhatsApp
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
    }, 1000);
  };

  if (cart.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: '',
          style: {
            fontSize: '16px',
            fontWeight: '500',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          },
        }}
      />
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="mb-8 text-3xl text-center md:text-4xl text-warm-900">
            Resumo do Pedido
          </h2>

          {/* Cart Items */}
          <div className="p-6 mb-6 rounded-lg bg-warm-50">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between py-4 border-b border-warm-200 last:border-0">
                <div className="flex-1">
                  <h3 className="font-semibold text-warm-900">{item.name}</h3>
                  <p className="text-sm text-warm-600">
                    {item.quantity}x R$ {item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-warm-900">
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 transition-colors hover:text-red-700"
                    title="Remover item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}

            <div className="pt-4 mt-6 border-t-2 border-warm-300">
              <div className="flex items-center justify-between text-xl font-bold text-warm-900">
                <span>Total:</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Customer Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-semibold text-warm-900">
              Seu nome:
            </label>
            <input
              type="text"
              id="name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Digite seu nome completo"
              className="w-full px-4 py-3 border-2 rounded-lg border-warm-200 focus:outline-none focus:border-warm-600 text-warm-900"
              required
            />
            <p className="mt-2 text-sm text-warm-600">
              Seu pedido será enviado direto para nossa equipe no WhatsApp.
            </p>
          </div>

          {/* Send Button */}
          <button
            onClick={sendToWhatsApp}
            className="flex items-center justify-center w-full gap-3 px-8 py-4 text-lg font-semibold text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
          >
            <Send className="w-6 h-6" />
            Enviar pedido pelo WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
