# ⚙️ Configuração - Landing Page Panificadora

## 📋 Checklist de Configuração Inicial

Siga estes passos para configurar a aplicação para sua panificadora:

### 1. ✅ Configurar Número do WhatsApp

Edite o arquivo `src/data/data.json` e substitua o número de telefone:

```json
{
  "whatsapp": "5548999999999",  // ← Substitua pelo número real da panificadora
  ...
}
```

**Formato do número:**
- Código do país (Brasil): 55
- DDD: 48 (exemplo)
- Número: 999999999 (9 dígitos com o 9 na frente)
- **Importante:** Sem espaços, parênteses ou hífens

### 2. 📝 Atualizar Nome da Panificadora

No mesmo arquivo `src/data/data.json`:

```json
{
  "nomePanificadora": "Panificadora do Supermercado",  // ← Seu nome aqui
  ...
}
```

### 3. 🕐 Ajustar Horários de Atendimento

```json
{
  "horarios": {
    "segunda_sexta": "07:00 - 19:00",  // ← Seus horários
    "sabado": "07:00 - 18:00",
    "domingo": "08:00 - 13:00"
  },
  ...
}
```

### 4. 🥖 Personalizar Produtos

#### Adicionar Novo Produto

```json
{
  "id": 13,                          // Próximo ID disponível
  "nome": "Pão de Mel",              // Nome do produto
  "categoria": "Doces",              // Bolos, Assados, Doces ou Outros
  "preco": 4.50,                     // Preço em reais
  "descricao": "Pão de mel recheado com doce de leite"
}
```

#### Editar Produto Existente

Encontre o produto pelo `id` e edite os campos desejados.

#### Remover Produto

Delete o objeto JSON completo do produto.

### 5. 🎨 Personalizar Cores (Opcional)

Se quiser ajustar as cores da marca, edite `tailwind.config.js`:

```javascript
colors: {
  brand: {
    chocolate: '#3B1F1A',  // ← Cor principal dos textos
    cocoa: '#4A2A1F',      // ← Cor do header/footer
    caramel: '#EFE4D8',    // ← Fundos quentes
    flour: '#F6EFE8',      // ← Fundo principal
  },
  accent: {
    butter: '#F5C842',     // ← Botões principais
    // ...
  }
}
```

### 6. 🖼️ Adicionar Logo e Imagens (Opcional)

#### Logo da Panificadora

1. Coloque o arquivo de logo na pasta `public/`
2. Edite o componente `Footer.jsx` para usar sua logo:

```jsx
<img src="/logo.png" alt="Logo Panificadora" className="h-12" />
```

#### Imagem Hero

1. Coloque a imagem na pasta `public/`
2. Edite o componente `Hero.jsx`:

```jsx
<img 
  src="/hero-image.jpg" 
  alt="Panificadora" 
  className="w-full h-full object-cover"
/>
```

### 7. 📱 Testar no Celular

#### Opção 1: Usar IP Local

```bash
# No terminal, após executar npm run dev
# Você verá algo como:
# Local:   http://localhost:3000
# Network: http://192.168.1.X:3000

# Acesse o endereço Network no seu celular
```

#### Opção 2: Usar ngrok (para testes externos)

```bash
# Instalar ngrok
npm install -g ngrok

# Executar aplicação
npm run dev

# Em outro terminal
ngrok http 3000

# Use a URL gerada para testar em qualquer lugar
```

### 8. 🚀 Deploy em Produção

#### Build para Produção

```bash
npm run build
```

Isso criará uma pasta `dist/` com os arquivos otimizados.

#### Hospedar (opções gratuitas)

**Netlify (Recomendado):**
1. Crie conta em https://netlify.com
2. Arraste a pasta `dist/` no painel
3. Pronto! URL personalizada disponível

**Vercel:**
1. Crie conta em https://vercel.com
2. Conecte seu repositório ou faça upload
3. Deploy automático

**GitHub Pages:**
```bash
# Instalar gh-pages
npm install -D gh-pages

# Adicionar no package.json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}

# Fazer deploy
npm run deploy
```

## 🔍 Testes Recomendados

### ✅ Checklist de Testes

- [ ] Adicionar produtos ao carrinho funciona
- [ ] Remover produtos do carrinho funciona
- [ ] Filtros de categoria funcionam
- [ ] Campo de nome aceita texto
- [ ] Validação impede envio sem nome
- [ ] Validação impede envio sem produtos
- [ ] Botão WhatsApp abre com mensagem correta
- [ ] Mensagem WhatsApp está formatada corretamente
- [ ] Layout responsivo em celular
- [ ] Layout responsivo em tablet
- [ ] Layout responsivo em desktop
- [ ] Todas as animações funcionam
- [ ] Scroll suave funciona
- [ ] Cores e tipografia corretas

### 🧪 Teste de Mensagem WhatsApp

1. Adicione alguns produtos
2. Digite seu nome
3. Clique em "Enviar pedido"
4. Verifique se a mensagem está formatada assim:

```
Olá! 👋

Meu nome é *João Silva*.

Gostaria de fazer o seguinte pedido:

━━━━━━━━━━━━━━━━
🍞 *Bolo de Chocolate*
   2x R$ 35,00 = R$ 70,00

🍞 *Pão Caseiro*
   1x R$ 8,00 = R$ 8,00

━━━━━━━━━━━━━━━━
📦 Total de itens: *3*
💰 Valor total: *R$ 78,00*

Obrigado! 😊
```

## 📞 Suporte

Se tiver dúvidas durante a configuração:

1. Verifique o README.md
2. Leia os comentários nos arquivos de código
3. Entre em contato com o desenvolvedor

## 🎯 Próximos Passos

Após configuração básica:

1. [ ] Testar fluxo completo
2. [ ] Pedir feedback de usuários reais
3. [ ] Ajustar produtos conforme necessário
4. [ ] Fazer deploy em produção
5. [ ] Divulgar para clientes
6. [ ] Monitorar pedidos

---

**Lembre-se:** Mantenha o arquivo `data.json` sempre atualizado com produtos e preços corretos! 🥖
