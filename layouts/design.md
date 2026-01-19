# Documentação da Landing Page - Panificadora Local

Esta página foi construída com foco em **UX (User Experience)** para um público de cidade pequena, priorizando clareza, calor humano e facilidade de uso.

## 🎨 Art Direction & Visual Prompting

Para alcançar o visual "artesanal e acolhedor", utilizamos inteligência artificial para gerar ativos visuais exclusivos. Abaixo estão os detalhes dos prompts e a lógica de design:

### 1. Hero Image (Imagem de Destaque)
**Prompt:**
> *"Cozy bakery counter inside a small town supermarket, warm lighting, display case full of fresh breads and cakes, friendly atmosphere, photorealistic, high quality, soft focus background"*

**Lógica:** Buscamos uma imagem que gerasse identificação imediata. O termo "warm lighting" (iluminação quente) cria a sensação de aconchego, enquanto "soft focus background" mantém o foco no balcão de produtos, sem distrair o usuário.

### 2. Texture Background (Textura de Fundo)
**Prompt:**
> *"Top view of a rustic wooden table with light flour dusting, baking ingredients in corners, large negative space in center for text, warm natural lighting, cozy bakery vibe"*

**Lógica:** Usada de forma sutil (baixa opacidade) na seção de produtos para dar profundidade e textura de "cozinha real", fugindo do visual puramente digital e frio.

---

## 🛠️ Stack Tecnológica

- **Framework:** React com Vite
- **Estilização:** Tailwind CSS v4 (com paleta personalizada de tons terrosos)
- **Ícones:** Lucide React (stroke-width: 2 para melhor leitura)
- **Animações:** Framer Motion (para transições suaves entre categorias)
- **Tipografia:**
  - `DM Serif Display`: Para títulos, remetendo à tradição e jornais locais.
  - `Outfit`: Para interface e textos, garantindo legibilidade moderna.

---

## 🧠 Lógica de Funcionalidade (JavaScript)

1. **Estado do Carrinho:** Gerenciado via React State, permitindo adição e remoção instantânea.
2. **Filtros Dinâmicos:** Filtra produtos por categoria sem recarregar a página.
3. **Validação de Envio:**
   - Verifica se o nome foi preenchido.
   - Verifica se há itens no carrinho.
4. **Formatação WhatsApp:**
   - Transforma o objeto do carrinho em uma string formatada com emojis e negrito (`*`).
   - Calcula o subtotal e total automaticamente.
   - Utiliza `encodeURIComponent` para garantir que caracteres especiais (R$, acentos) cheguem corretamente ao destinatário.

---

## 📱 Responsividade (Mobile-First)

A página foi desenhada primeiro para o celular, já que 90% dos pedidos via WhatsApp em cidades pequenas costumam vir de dispositivos móveis. Os botões de quantidade possuem áreas de clique generosas para evitar erros de toque.
