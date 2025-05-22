# BuzzCreator Front

**BuzzCreator Front** é uma aplicação web desenvolvida com Next.js e TypeScript, projetada para gerenciar um catálogo de livros e facilitar a realização de pedidos em uma interface pública de e-commerce. O painel administrativo oferece funcionalidades de gestão de produtos, como cadastro, edição e exclusão de livros.

---

## Backend

Este front-end consome a API disponível no repositório: **[buzzcreator-back](https://github.com/WillianSantosC/buzzcreator-back)**

---

## Funcionalidades

- **Exibição pública** de catálogo de livros
- **Filtro** de livros por autor e título
- **Carrinho de compras** com gerenciamento de estado via Zustand
- **Fluxo de pedido** simplificado
- **Painel administrativo** para CRUD de livros
- Feedbacks de ação com **React Hot Toast**
- Layout responsivo com **PandaCSS**
- Consumo de API RESTful via **fetch**

---

## Tecnologias Utilizadas

- **Next.js** + **TypeScript** (framework e tipagem)
- **PandaCSS** (estilização)
- **Zustand** (gestão de estado do carrinho)
- **React Hook Form** (formulários, se aplicável)
- **Fetch** (consumo da API)
- **Vercel** (deploy)
- **ESLint** + **Prettier** (padronização de código)
- **Storybook** (documentação)
- **Jest** + **React Testing Library** (testes)
- **Husky** + **Lint-staged** (validação pre-commit)
- **Github Actions** (CI/CD)

---

## Arquitetura e Decisões Técnicas

- **Framework**: Optou-se por **Next.js** para aproveitar o rendering híbrido (SSG e SSR) e otimização automática de performance.
- **Tipagem**: Uso de **TypeScript** em toda a base de código para aumentar a segurança e facilitar a manutenção.
- **Estilo**: Adotado **PandaCSS** para estilização rápida, responsiva e consistente, eliminando a necessidade de arquivos CSS complexos.
- **Gerenciamento de Estado**: Utilização de **Zustand** como solução leve e eficiente para armazenar o estado global do carrinho, evitando a complexidade do Redux.
- **Organização**: Separação clara entre componentes (`components`), páginas (`templates`), configuração de estilos (`styles`), documentação (`storybook`) e lojas de estado (`store`).
- **React Hot Toast**: para fornecer notificações rápidas e amigáveis ao usuário.
- **Husky** + **Lint-staged**: utilizados para validação de código no pre-commit, garantindo qualidade e padronização.
- **Jest** + **React Testing Library**: adotados para testes de componentes, garantindo a estabilidade da aplicação.
- **Deploy**: Realizado via **Vercel**, aproveitando a integração direta com repositórios GitHub e o suporte nativo a Next.js.

---

## Scripts úteis

```bash
# Ambiente de desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Rodar a aplicação compilada
pnpm start

# Lint para checagem de estilo e erros
pnpm lint

# Executar todos os testes
pnpm test

# Rodar o Storybook para ter acesso a documentação
pnpm storybook
```

---

## Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js 22+
- PNPM (recomendado)
- Aplicação do Back-end rodando

### 1. Clonar o repositório

```bash
git clone https://github.com/WillianSantosC/buzzcreator-front.git
&&
cd buzzcreator-front
```

### 2. Instalar dependências

```bash
pnpm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto com o seguinte conteúdo:

```env
NEXT_PUBLIC_API_URL=https://buzzcreator-back.onrender.com
JWT_SECRET=chave_secreta
```

> Ajuste a variável `NEXT_PUBLIC_API_URL` conforme o ambiente: localhost ou deploy.

---

## Como Usar

1. Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

2. Acesse no navegador:

```
http://localhost:3000
```

> A aplicação será recarregada automaticamente a cada alteração nos arquivos.

---

## Documentação da API

A documentação é gerada automaticamente com Storybook e pode ser acessada em:

```
http://localhost:6006
```

---

## Deploy

O deploy deste projeto foi feito na plataforma **Vercel**.

🔗 Acesse a aplicação em produção:
**[https://buzzcreator-front.vercel.app](#)**
