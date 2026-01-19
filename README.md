# 🥖 Landing Page Panificadora - React

Landing page moderna e acolhedora para panificadora de supermercado, com sistema de pedidos via WhatsApp.

## 📋 Sobre o Projeto

Esta aplicação foi desenvolvida para facilitar pedidos de produtos da panificadora de forma simples e direta, sem necessidade de cadastro ou login. O cliente escolhe os produtos, informa seu nome e envia o pedido diretamente pelo WhatsApp.

### 🎯 Características Principais

- ✅ **Design Mobile-First**: Totalmente responsivo e otimizado para dispositivos móveis
- ✅ **Sem Cadastro**: Usuário não precisa criar conta ou fazer login
- ✅ **Pedidos via WhatsApp**: Integração direta com WhatsApp
- ✅ **Interface Acolhedora**: Design que transmite calor humano e tradição
- ✅ **Acessível**: Semântica HTML correta e contraste adequado
- ✅ **Performance**: Código otimizado e leve

## 🛠️ Stack Tecnológica

- **React.js 18** - Framework frontend
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS v4** - Estilização com design system customizado
- **Framer Motion** - Animações suaves e modernas
- **Lucide React** - Ícones SVG otimizados

## 🚀 Como Executar

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn

### Instalação

```bash
# 1. Clone ou navegue até o diretório do projeto
cd pastry-order-react

# 2. Instale as dependências
npm install

# 3. Execute o servidor de desenvolvimento
npm run dev

# 4. Abra no navegador
# A aplicação estará rodando em http://localhost:3000
```

### Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 📂 Estrutura do Projeto

```
pastry-order-react/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Hero.jsx        # Seção principal (hero)
│   │   ├── Benefits.jsx    # Benefícios do serviço
│   │   ├── Suggestions.jsx # Sugestões interativas
│   │   ├── Products.jsx    # Catálogo de produtos
│   │   ├── TrustQuality.jsx # Qualidade e confiança
│   │   ├── OrderSummary.jsx # Resumo do pedido
│   │   ├── CallToAction.jsx # CTA final
│   │   └── Footer.jsx      # Rodapé
│   ├── data/
│   │   └── data.json       # Dados dos produtos
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Entry point
│   └── index.css           # Estilos globais
├── index.html              # HTML principal
├── tailwind.config.js      # Configuração Tailwind
├── vite.config.js          # Configuração Vite
└── package.json            # Dependências
```

## 🎨 Design System

### Paleta de Cores

#### Brand (Identidade)
- `brand.chocolate` (#3B1F1A) - Títulos e textos principais
- `brand.cocoa` (#4A2A1F) - Headers e destaques
- `brand.caramel` (#EFE4D8) - Fundos quentes
- `brand.flour` (#F6EFE8) - Fundo principal

#### Accent (Ação)
- `accent.butter` (#F5C842) - Botões CTA
- `accent.butterStrong` (#FFD84D) - Hover/foco
- `accent.oven` (#F39C4A) - Ícones e detalhes

#### Support (Complementares)
- `support.mint` (#9ED6C3) - Tags e badges
- `support.sky` (#A8DADC) - Seções informativas

### Tipografia

- **Títulos**: DM Serif Display (fonte serifada para tradição)
- **Interface**: Outfit (fonte sans-serif moderna e legível)

## 📱 Funcionalidades

### 1. Catálogo de Produtos
- Visualização de produtos por categoria
- Filtros interativos (Bolos, Assados, Doces, Outros)
- Cards com informações claras (nome, preço, descrição)

### 2. Carrinho de Pedidos
- Adicionar/remover produtos com botões + e -
- Contador visual de itens
- Atualização em tempo real

### 3. Finalização
- Campo para nome do cliente (obrigatório)
- Validação de formulário
- Cálculo automático de totais
- Geração de mensagem formatada

### 4. Integração WhatsApp
- Mensagem formatada com emojis
- Lista detalhada de produtos
- Total calculado
- Redirecionamento automático

## ⚙️ Configuração

### Personalizar Número do WhatsApp

Edite o arquivo `src/data/data.json`:

```json
{
  "whatsapp": "5548999999999",  // Substitua pelo número real
  ...
}
```

### Adicionar/Editar Produtos

Edite o array `produtos` em `src/data/data.json`:

```json
{
  "id": 13,
  "nome": "Novo Produto",
  "categoria": "Bolos",
  "preco": 25.90,
  "descricao": "Descrição do produto"
}
```

### Personalizar Cores

Edite `tailwind.config.js` na seção `colors`:

```javascript
colors: {
  brand: {
    chocolate: '#SUA_COR',
    // ...
  }
}
```

## 🎯 Público-Alvo

- **Idade**: Todas as faixas etárias (jovens, adultos, idosos)
- **Perfil**: Clientes locais de cidade pequena
- **Familiaridade**: Baixa a média com tecnologia
- **Expectativas**: Interface clara, botões grandes, linguagem próxima

## 📐 Princípios de Design

1. **Mobile-First**: Projetado primeiro para dispositivos móveis
2. **Clareza Visual**: Hierarquia clara, contraste adequado
3. **Acessibilidade**: ARIA labels, semântica HTML, foco visível
4. **Performance**: Componentes otimizados, carregamento rápido
5. **Humanização**: Tom de comunicação acolhedor e regional

## 🔧 Troubleshooting

### Erro ao instalar dependências

```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Porta já em uso

```bash
# Mudar porta no vite.config.js
server: {
  port: 3001  // ou outra porta disponível
}
```

## 📄 Licença

Este projeto é proprietário e foi desenvolvido para uso exclusivo da Panificadora.

## 👥 Suporte

Para dúvidas ou suporte, entre em contato:
- 📞 WhatsApp: (48) 99999-9999
- 📧 Email: contato@panificadora.com.br

---

**Frase-guia do projeto:**
> "Precisa parecer uma padaria de verdade, não um site de tecnologia."

Desenvolvido com ❤️ para a comunidade local 🥖
