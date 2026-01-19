Você é um desenvolvedor frontend e designer UX/UI sênior e pode usar a imagem em anexo como referencia de layout.

Crie uma landing page completa, responsiva e moderna para uma **panificadora localizada dentro de um supermercado em uma pequena cidade do sul do Brasil (≈18 mil habitantes)**.

O objetivo da landing page é permitir que o cliente:
1. Veja os produtos da panificadora
2. Escolha itens e quantidades
3. Informe seu nome
4. Finalize o pedido enviando tudo automaticamente para um número de WhatsApp

---

## 🎯 Público-alvo
Clientes locais do supermercado:
- Pessoas simples
- Diferentes idades
- Pouca familiaridade com tecnologia
- Valorizam praticidade, clareza e atendimento humano

---

## Linguagens de Desenvolvimento
- Html
- Tailwindcss
- Java script
- Icons lucide

---

## 🧠 Tom de comunicação
- Simples
- Próximo
- Utilizar tailwindcss v4
- Acolhedor
- Regional
- Claro e direto
- Sem termos técnicos
- Usar icones do https://lucide.dev/icons/

---

## 🧩 Estrutura da Landing Page

### 1. Hero
- Título grande:
  "O jeito mais fácil de fazer seu pedido na panificadora"
- Subtítulo:
  "Escolha bolos, assados e doces fresquinhos e envie seu pedido direto pelo WhatsApp."
- Botão CTA:
  "Fazer pedido agora"

---

### 2. Lista de Produtos (Interativa)
Exibir produtos em **cards**, com:
- Nome do produto
- Categoria (Bolos, Assados, Doces, Outros)
- Preço (opcional)
- Botões:
  - ➕ Adicionar
  - ➖ Remover
- Quantidade visível

Exemplos de produtos:
- Bolo de Chocolate
- Bolo de Cenoura
- Cucas
- Pão Caseiro
- Pastel Assado
- Enroladinho
- Sonho
- Docinhos variados

---

### 3. Resumo do Pedido
- Lista dinâmica dos produtos selecionados
- Quantidade de cada item
- Campo obrigatório:
  - **Nome do cliente**
- Texto de apoio:
  "Seu pedido será enviado direto para nossa equipe no WhatsApp."

---

### 4. Botão de Finalização
Botão grande e destacado:
"Enviar pedido pelo WhatsApp"

---

## ⚙️ Comportamento JavaScript (OBRIGATÓRIO)

### Requisitos:
- O JavaScript deve:
  1. Capturar o nome do cliente
  2. Capturar os produtos selecionados e suas quantidades
  3. Montar uma mensagem formatada
  4. Redirecionar para o WhatsApp usando `https://wa.me/`

### Exemplo de mensagem enviada:
