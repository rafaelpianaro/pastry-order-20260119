import { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

const products = [
  { id: 1, name: 'Bolo de Chocolate', category: 'Bolos', price: 35.00 },
  { id: 2, name: 'Bolo de Cenoura', category: 'Bolos', price: 30.00 },
  { id: 3, name: 'Bolo de Fubá', category: 'Bolos', price: 28.00 },
  { id: 4, name: 'Cuca de Banana', category: 'Assados', price: 25.00 },
  { id: 5, name: 'Cuca de Uva', category: 'Assados', price: 25.00 },
  { id: 6, name: 'Pão Caseiro', category: 'Assados', price: 8.00 },
  { id: 7, name: 'Pastel Assado', category: 'Assados', price: 5.00 },
  { id: 8, name: 'Enroladinho', category: 'Assados', price: 4.50 },
  { id: 9, name: 'Sonho', category: 'Doces', price: 6.00 },
  { id: 10, name: 'Brigadeiro', category: 'Doces', price: 3.00 },
  { id: 11, name: 'Beijinho', category: 'Doces', price: 3.00 },
  { id: 12, name: 'Bem-casado', category: 'Doces', price: 4.00 },
];

const categories = ['Todos', 'Bolos', 'Assados', 'Doces'];

export default function ProductList({ cart, setCart }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        toast.success(`+1 ${product.name}`, {
          icon: '➕',
          style: {
            background: '#D1FAE5',
            color: '#065F46',
            border: '2px solid #10B981',
          },
          duration: 2000,
        });
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      toast.success(`${product.name} adicionado!`, {
        icon: '🎉',
        style: {
          background: '#D1FAE5',
          color: '#065F46',
          border: '2px solid #10B981',
        },
        duration: 2000,
      });
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing && existing.quantity > 1) {
        toast(`-1 ${existing.name}`, {
          icon: '➖',
          style: {
            background: '#FEF3C7',
            color: '#92400E',
            border: '2px solid #F59E0B',
          },
          duration: 1500,
        });
        return prev.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      toast.success(`${existing.name} removido`, {
        icon: '🗑️',
        style: {
          background: '#FEE2E2',
          color: '#991B1B',
          border: '2px solid #DC2626',
        },
        duration: 2000,
      });
      return prev.filter(item => item.id !== productId);
    });
  };

  const getQuantity = (productId) => {
    const item = cart.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <section id="products" className="py-16 bg-surface-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center text-text-primary mb-8">
          Nossos Produtos
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-accent-butter text-brand-chocolate'
                  : 'bg-surface-card text-text-secondary hover:bg-surface-muted border border-surface-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProducts.map(product => {
              const quantity = getQuantity(product.id);
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-surface-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-text-secondary mb-2">{product.category}</p>
                    <p className="text-2xl font-bold text-accent-oven">
                      R$ {product.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    {quantity === 0 ? (
                      <button
                        onClick={() => addToCart(product)}
                        className="flex-1 bg-accent-butter hover:bg-accent-butterStrong text-brand-chocolate px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                      >
                        <Plus className="w-5 h-5" />
                        Adicionar
                      </button>
                    ) : (
                      <div className="flex-1 flex items-center justify-between bg-surface-muted rounded-lg p-2">
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="bg-surface-card hover:bg-surface-background p-2 rounded-lg transition-colors"
                        >
                          <Minus className="w-5 h-5 text-text-primary" />
                        </button>
                        <span className="text-xl font-bold text-text-primary px-4">
                          {quantity}
                        </span>
                        <button
                          onClick={() => addToCart(product)}
                          className="bg-surface-card hover:bg-surface-background p-2 rounded-lg transition-colors"
                        >
                          <Plus className="w-5 h-5 text-text-primary" />
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Cart Summary Badge */}
        {cart.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-6 right-6 bg-accent-oven text-white rounded-full p-4 shadow-lg"
          >
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-6 h-6" />
              <span className="font-bold text-lg">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
