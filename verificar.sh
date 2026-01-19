#!/bin/bash

# 🥖 Script de Verificação - Landing Page Panificadora
# Este script verifica se todos os componentes estão funcionando

echo "🥖 Verificando Landing Page Panificadora..."
echo ""

# Cores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função de verificação
check() {
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓${NC} $1"
    else
        echo -e "${RED}✗${NC} $1"
    fi
}

# Verificar se node_modules existe
echo "1. Verificando dependências..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC} node_modules existe"
else
    echo -e "${YELLOW}⚠${NC} node_modules não encontrado. Execute: npm install"
fi

# Verificar arquivos principais
echo ""
echo "2. Verificando arquivos principais..."
[ -f "package.json" ] && echo -e "${GREEN}✓${NC} package.json" || echo -e "${RED}✗${NC} package.json"
[ -f "vite.config.js" ] && echo -e "${GREEN}✓${NC} vite.config.js" || echo -e "${RED}✗${NC} vite.config.js"
[ -f "postcss.config.js" ] && echo -e "${GREEN}✓${NC} postcss.config.js" || echo -e "${RED}✗${NC} postcss.config.js"
[ -f "index.html" ] && echo -e "${GREEN}✓${NC} index.html" || echo -e "${RED}✗${NC} index.html"

# Verificar arquivos src
echo ""
echo "3. Verificando arquivos src/..."
[ -f "src/main.jsx" ] && echo -e "${GREEN}✓${NC} src/main.jsx" || echo -e "${RED}✗${NC} src/main.jsx"
[ -f "src/App.jsx" ] && echo -e "${GREEN}✓${NC} src/App.jsx" || echo -e "${RED}✗${NC} src/App.jsx"
[ -f "src/index.css" ] && echo -e "${GREEN}✓${NC} src/index.css" || echo -e "${RED}✗${NC} src/index.css"
[ -f "src/data/data.json" ] && echo -e "${GREEN}✓${NC} src/data/data.json" || echo -e "${RED}✗${NC} src/data/data.json"

# Verificar componentes
echo ""
echo "4. Verificando componentes..."
[ -f "src/components/Hero.jsx" ] && echo -e "${GREEN}✓${NC} Hero.jsx" || echo -e "${RED}✗${NC} Hero.jsx"
[ -f "src/components/Benefits.jsx" ] && echo -e "${GREEN}✓${NC} Benefits.jsx" || echo -e "${RED}✗${NC} Benefits.jsx"
[ -f "src/components/Suggestions.jsx" ] && echo -e "${GREEN}✓${NC} Suggestions.jsx" || echo -e "${RED}✗${NC} Suggestions.jsx"
[ -f "src/components/Products.jsx" ] && echo -e "${GREEN}✓${NC} Products.jsx" || echo -e "${RED}✗${NC} Products.jsx"
[ -f "src/components/TrustQuality.jsx" ] && echo -e "${GREEN}✓${NC} TrustQuality.jsx" || echo -e "${RED}✗${NC} TrustQuality.jsx"
[ -f "src/components/OrderSummary.jsx" ] && echo -e "${GREEN}✓${NC} OrderSummary.jsx" || echo -e "${RED}✗${NC} OrderSummary.jsx"
[ -f "src/components/CallToAction.jsx" ] && echo -e "${GREEN}✓${NC} CallToAction.jsx" || echo -e "${RED}✗${NC} CallToAction.jsx"
[ -f "src/components/Footer.jsx" ] && echo -e "${GREEN}✓${NC} Footer.jsx" || echo -e "${RED}✗${NC} Footer.jsx"

# Verificar documentação
echo ""
echo "5. Verificando documentação..."
[ -f "README.md" ] && echo -e "${GREEN}✓${NC} README.md" || echo -e "${RED}✗${NC} README.md"
[ -f "CONFIGURACAO.md" ] && echo -e "${GREEN}✓${NC} CONFIGURACAO.md" || echo -e "${RED}✗${NC} CONFIGURACAO.md"
[ -f "STATUS.md" ] && echo -e "${GREEN}✓${NC} STATUS.md" || echo -e "${RED}✗${NC} STATUS.md"

# Verificar data.json
echo ""
echo "6. Verificando configuração do WhatsApp..."
WHATSAPP_NUMBER=$(grep -o '"whatsapp": "[^"]*"' src/data/data.json | cut -d'"' -f4)
if [ "$WHATSAPP_NUMBER" == "5548999999999" ]; then
    echo -e "${YELLOW}⚠${NC} Número do WhatsApp padrão detectado: $WHATSAPP_NUMBER"
    echo -e "${YELLOW}  ${NC} ATENÇÃO: Configure o número real em src/data/data.json"
else
    echo -e "${GREEN}✓${NC} Número do WhatsApp configurado: $WHATSAPP_NUMBER"
fi

# Contar produtos
echo ""
echo "7. Verificando produtos cadastrados..."
PRODUTO_COUNT=$(grep -c '"id":' src/data/data.json)
echo -e "${GREEN}✓${NC} Total de produtos: $PRODUTO_COUNT"

# Resumo final
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}✨ Verificação completa!${NC}"
echo ""
echo "📝 Próximos passos:"
echo "   1. Configure o número do WhatsApp em src/data/data.json"
echo "   2. Execute: npm run dev"
echo "   3. Acesse: http://localhost:3000"
echo "   4. Teste o fluxo completo de pedido"
echo ""
echo "📚 Documentação:"
echo "   - README.md        → Visão geral"
echo "   - CONFIGURACAO.md  → Guia de configuração"
echo "   - STATUS.md        → Funcionalidades implementadas"
echo ""
echo "🚀 Para iniciar o servidor: npm run dev"
echo "📦 Para fazer build:       npm run build"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
