import { Check } from 'lucide-react';

export default function TrustSection() {
  return (
    <>
      {/* Trust Section */}
      <section className="py-16 bg-gradient-to-br from-warm-100 to-warm-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-warm-900 mb-6">
                Qualidade e confiança que você já conhece
              </h2>
            </div>
            <div className="space-y-4">
              {[
                'Produtos feitos diariamente na nossa panificadora',
                'Ingredientes selecionados e receitas tradicionais',
                'Retirada direto no supermercado, com praticidade',
                'Atendimento local, feito por quem conhece você'
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-warm-800">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-warm-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-warm-900 mb-6">
            Seu pedido pronto, do jeito que você gosta
          </h2>
          <div className="max-w-2xl mx-auto mb-8">
            <ul className="text-lg text-warm-800 space-y-2">
              <li>✓ Escolha seus produtos favoritos</li>
              <li>✓ Faça encomendas para festas e datas especiais</li>
              <li>✓ Retire no supermercado com comodidade</li>
            </ul>
          </div>
          <button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-warm-900 hover:bg-warm-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Fazer pedido agora
          </button>
        </div>
      </section>
    </>
  );
}
