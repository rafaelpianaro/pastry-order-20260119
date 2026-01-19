# 🚀 Início Rápido - Landing Page Panificadora

## ⚡ Para começar AGORA (3 passos)

### 1. Configure o WhatsApp (OBRIGATÓRIO)

Edite `src/data/data.json`:

```json
"whatsapp": "5548999999999"  ← Coloque seu número real aqui
```

**Formato:** 55 + DDD + número (sem espaços ou caracteres especiais)

### 2. Inicie o servidor

```bash
npm run dev
```

### 3. Abra no navegador

Acesse: **http://localhost:3000**

---

## 🎯 Teste Rápido do Fluxo

1. ✅ Scroll na página - todas as seções devem aparecer
2. ✅ Clique em "Fazer pedido agora" - deve rolar até produtos
3. ✅ Clique nos filtros (Bolos, Assados, etc.) - produtos devem filtrar
4. ✅ Clique nos botões + e - - quantidade deve mudar
5. ✅ Adicione alguns produtos ao carrinho
6. ✅ Role até "Seu Pedido"
7. ✅ Digite seu nome
8. ✅ Clique em "Enviar pedido pelo WhatsApp"
9. ✅ Verifique se o WhatsApp abre com a mensagem formatada

---

## ✏️ Personalizações Básicas

### Mudar nome da panificadora

`src/data/data.json`:
```json
"nomePanificadora": "Seu Nome Aqui"
```

### Ajustar horários

`src/data/data.json`:
```json
"horarios": {
  "segunda_sexta": "07:00 - 19:00",
  "sabado": "07:00 - 18:00", 
  "domingo": "08:00 - 13:00"
}
```

### Adicionar novo produto

`src/data/data.json`, array `produtos`:
```json
{
  "id": 13,
  "nome": "Pão de Mel",
  "categoria": "Doces",
  "preco": 4.50,
  "descricao": "Pão de mel recheado"
}
```

---

## 📦 Build para Produção

```bash
npm run build
```

Arquivos otimizados estarão em `dist/`

---

## 🌐 Deploy Online (Grátis)

### Opção 1: Netlify (Mais fácil)

1. Faça o build: `npm run build`
2. Acesse: https://netlify.com
3. Arraste a pasta `dist/` na tela
4. Pronto! Link funcionando em segundos

### Opção 2: Vercel

1. Acesse: https://vercel.com
2. Importe o projeto
3. Deploy automático

---

## 🐛 Problemas Comuns

### Porta 3000 já em uso

```bash
# Mude a porta no vite.config.js
server: {
  port: 3001  // ou outra porta
}
```

### Erro ao fazer build

```bash
# Limpe e reinstale
rm -rf node_modules package-lock.json
npm install
```

### WhatsApp não abre

- Verifique se o número está correto
- Formato: 55 + DDD + número (apenas números)
- Teste em um celular com WhatsApp instalado

---

## 📖 Mais Informações

- `README.md` - Documentação completa
- `CONFIGURACAO.md` - Guia detalhado de personalização
- `STATUS.md` - Lista de todas as funcionalidades
- `verificar.sh` - Script de verificação

---

## ✨ Pronto!

Sua landing page está funcionando! 🎉

**Dicas:**
- Teste sempre em celular real
- Mantenha os produtos atualizados
- Monitore os pedidos que chegam no WhatsApp

**Precisa de ajuda?**
- Leia os arquivos de documentação
- Verifique os comentários no código

---

**"Precisa parecer uma padaria de verdade, não um site de tecnologia."** ✓

Boas vendas! 🥖
