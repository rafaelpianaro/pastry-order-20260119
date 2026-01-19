import { useState } from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Suggestions from './components/Suggestions';
import Products from './components/Products';
import TrustQuality from './components/TrustQuality';
import CallToAction from './components/CallToAction';
import OrderSummary from './components/OrderSummary';
import Footer from './components/Footer';

/**
 * App Principal - Landing Page Panificadora
 * Gerencia estado global do carrinho e coordena componentes
 */
function App() {
  // Estado do carrinho: { produtoId: quantidade }
  const [carrinho, setCarrinho] = useState({});

  // Callback para atualizar carrinho do componente Products
  const handleCartUpdate = (novoCarrinho) => {
    setCarrinho(novoCarrinho);
  };

  return (
    <div className="min-h-screen">
      {/* Header fixo opcional (pode ser adicionado depois) */}
      
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Benefits (Por que usar) */}
      <Benefits />

      {/* Section 3: Suggestions (Sugestões interativas) */}
      <Suggestions />

      {/* Section 4: Products (Catálogo) */}
      <Products onCartUpdate={handleCartUpdate} />

      {/* Section 5: Trust & Quality */}
      <TrustQuality />

      {/* Section 6: Order Summary (Resumo e Finalização) */}
      <OrderSummary carrinho={carrinho} />

      {/* Section 7: Call to Action */}
      <CallToAction />

      {/* Section 8: Footer */}
      <Footer />
    </div>
  );
}

export default App;
