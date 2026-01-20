import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Suggestions from './components/Suggestions';
import Products from './components/Products';
import TrustQuality from './components/TrustQuality';
import CallToAction from './components/CallToAction';
import OrderSummary from './components/OrderSummary';
import Footer from './components/Footer';
import data from './data/data.json';

/**
 * App Principal - Landing Page Panificadora
 * Gerencia estado global do carrinho e coordena componentes
 */
function App() {
  // Estado do carrinho: { produtoId: quantidade }
  const [carrinho, setCarrinho] = useState({});
  
  // Estado para filtro externo (vindo de Suggestions)
  const [filtroExterno, setFiltroExterno] = useState(null);
  
  // Estado para produtos destacados
  const [destacarProdutos, setDestacarProdutos] = useState([]);

  // Callback para atualizar carrinho do componente Products
  const handleCartUpdate = (novoCarrinho) => {
    setCarrinho(novoCarrinho);
  };

  // Callback para aplicar sugestão (filtro + destaque + scroll)
  const handleSugestaoClick = (acao) => {
    if (!acao) return;

    // Aplicar filtro
    if (acao.categoria) {
      setFiltroExterno(acao.categoria);
    }

    // Destacar produtos específicos
    if (acao.destacar === 'maisVendido') {
      const produtosMaisVendidos = data.produtos
        .filter((p) => p.maisVendido && p.categoria === acao.categoria)
        .map((p) => p.id);
      setDestacarProdutos(produtosMaisVendidos);
    } else {
      setDestacarProdutos([]);
    }

    // Scroll suave para produtos
    setTimeout(() => {
      const produtosSection = document.getElementById('produtos');
      if (produtosSection) {
        produtosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        {/* Header fixo opcional (pode ser adicionado depois) */}
        
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Benefits (Por que usar) */}
        <Benefits />

        {/* Section 3: Suggestions (Sugestões interativas) */}
        <Suggestions onSugestaoClick={handleSugestaoClick} />

        {/* Section 4: Products (Catálogo) */}
        <Products 
          onCartUpdate={handleCartUpdate} 
          filtroExterno={filtroExterno}
          destacarProdutos={destacarProdutos}
        />

        {/* Section 5: Trust & Quality */}
        <TrustQuality />

        {/* Section 6: Order Summary (Resumo e Finalização) */}
        <OrderSummary carrinho={carrinho} />

        {/* Section 7: Call to Action */}
        <CallToAction />

        {/* Section 8: Footer */}
        <Footer />

        {/* Theme Toggle Button */}
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
