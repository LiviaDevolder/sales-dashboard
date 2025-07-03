# Sales Dashboard

Um dashboard de vendas interativo construído com React, TypeScript, Chakra UI v3 e Recharts, seguindo os princípios de design atômico.

## 🚀 Funcionalidades

- **Selects Dependentes**: Sistema de 3 selects hierárquicos (Categoria → Produto → Marca)
- **Gráfico Interativo**: Visualização de vendas mensais usando Recharts
- **Design Responsivo**: Interface adaptável para desktop e mobile
- **Dados Mockados**: Simulação de API com dados JSON estruturados
- **TypeScript**: Tipagem completa para melhor desenvolvimento
- **Design Atômico**: Arquitetura de componentes escalável

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Chakra UI v3** - Sistema de design e componentes
- **Recharts** - Biblioteca de gráficos
- **Bun** - Runtime e gerenciador de pacotes
- **Vite** - Build tool e dev server
- **ESLint + Prettier** - Qualidade e formatação de código

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── atoms/          # Componentes básicos (Select, Text, Chart)
│   ├── molecules/      # Combinações de átomos (SelectField, ChartSection)
│   ├── organisms/      # Componentes complexos (FilterPanel, Header)
│   └── templates/      # Layouts de página (DashboardTemplate)
├── data/
│   └── mockData.json   # Dados mockados da API
├── hooks/
│   ├── useData.ts      # Hook para gerenciar dados
│   └── useFilters.ts   # Hook para lógica de filtros
├── types/
│   └── index.ts        # Definições de tipos TypeScript
├── App.tsx             # Componente principal
└── main.tsx           # Ponto de entrada
```

## 🎯 Como Usar

1. **Selecione uma Categoria**: Escolha entre Comida, Bebida ou Eletrônicos
2. **Escolha um Produto**: O select será populado baseado na categoria selecionada
3. **Selecione uma Marca**: O select será populado baseado no produto selecionado
4. **Visualize o Gráfico**: O gráfico de vendas aparecerá automaticamente

## 📊 Dados Disponíveis

### Categorias

- **Comida**: Fruta, Verdura, Carne
- **Bebida**: Refrigerante, Suco, Água
- **Eletrônicos**: Smartphone, Laptop, Tablet

### Marcas (exemplos)

- **Frutas**: Goiaba, Manga, Laranja
- **Refrigerantes**: Coca-Cola, Pepsi, Guaraná
- **Smartphones**: Apple, Samsung, Xiaomi

## 🚀 Comandos Disponíveis

```bash
# Desenvolvimento
bun run dev

# Build para produção
bun run build

# Linting
bun run lint
bun run lint:fix

# Formatação
bun run format
bun run format:check

# Verificação de tipos
bun run type-check

# Preview da build
bun run preview
```

## 🎨 Design System

O projeto utiliza design atômico com a seguinte hierarquia:

- **Átomos**: Componentes básicos reutilizáveis
- **Moléculas**: Combinações simples de átomos
- **Organismos**: Componentes complexos de interface
- **Templates**: Estruturas de layout de página

## 📱 Responsividade

A aplicação é totalmente responsiva, adaptando-se a diferentes tamanhos de tela:

- Desktop: Layout em grid de 3 colunas
- Tablet/Mobile: Layout empilhado verticalmente

## 🔧 Configuração de Desenvolvimento

O projeto está configurado com:

- **ESLint**: Regras de qualidade de código
- **Prettier**: Formatação automática
- **TypeScript**: Verificação de tipos
- **Vite**: Hot reload e build otimizada

## 📈 Performance

- Componentes otimizados com React.memo quando necessário
- Hooks personalizados para lógica reutilizável
- Lazy loading de dados baseado na seleção
- Build otimizada com tree-shaking
