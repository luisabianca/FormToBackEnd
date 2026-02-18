# 🚀 Cadastro de Usuários - Integração Fullstack

Projeto desenvolvido como estudo para praticar a integração entre um Frontend em **React** e um Backend em **Node.js**. O objetivo principal foi compreender o fluxo de dados, requisições HTTP e manipulação de estado.

## 📋 Funcionalidades

- **Listagem de Usuários (GET):** Carrega os usuários do banco de dados ao iniciar a aplicação.
- **Cadastro de Usuários (POST):** Envia dados (Nome, Idade, E-mail) do formulário para o banco.
- **Remoção de Usuários (DELETE):** Exclui um registro do banco e atualiza a interface automaticamente.

## 🛠️ Tecnologias Utilizadas

### Front-end

- **React**: Biblioteca para construção da interface.
- **Axios**: Para fazer as requisições HTTP ao servidor.
- **Hooks**: `useState`, `useEffect`, `useRef`.
- **React Icons**: Ícones da interface.

### Back-end

- **Node.js**: Ambiente de execução.
- **Express**: Framework para criar a API.
- **Prisma**: ORM para facilitar a comunicação com o Banco de Dados.
- **CORS**: Para permitir o acesso do front-end ao back-end.

---

## 🚀 Como Rodar o Projeto

Este projeto é dividido em duas partes: o Servidor (API) e o Cliente (Web). Você precisará de dois terminais abertos.

### 1. Configurando o Back-end (Servidor)

Entre na pasta do servidor e instale as dependências:

```bash
cd servidor
npm install
```

Configure o Prisma (caso ainda não tenha feito):

```bash
npx prisma generate
```

Inicie o servidor (rodará na porta 3000):

```bash
node server.js
# ou
npm start
```

### 2. Configurando o Front-end (Web)

Em outro terminal, entre na pasta do front-end:

```bash
cd web
npm install
```

Inicie a aplicação React:

```bash
npm run dev
```

Acesse pelo navegador (geralmente em `http://localhost:5173`).

---

## 🧠 Aprendizados

Durante o desenvolvimento deste projeto, os principais conceitos aplicados foram:

1.  **Conexão Front-Back:** Entendimento de como o erro de _CORS_ funciona e como o `axios` conecta portas diferentes.
2.  **Imutabilidade no React:** Como atualizar a lista de usuários na tela sem precisar recarregar a página (usando o estado anterior).
3.  **HTTP Verbs:** Uso prático de `GET`, `POST` e `DELETE`.
4.  **Prisma ORM:** Manipulação básica de banco de dados (Create e Delete).

---

## 📝 Licença

Este projeto é para fins de estudo.
