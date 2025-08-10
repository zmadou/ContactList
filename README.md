Lista de Contatos — React + Redux Toolkit + Styled Components
Aplicação simples para gerenciar uma lista de contatos com nome completo, e‑mail e telefone.
Permite adicionar, editar e remover contatos.

Tecnologias
React 18 + TypeScript

Redux Toolkit (estado global)

Styled Components (estilização)

Jest + Testing Library (tests)

Requisitos
Node.js LTS (>= 18) e npm

Como Rodar:
# instalar dependências
npm install

# ambiente de desenvolvimento
npm start
# http://localhost:3000

Scripts disponíveis
npm start — inicia em modo desenvolvimento

npm test — executa os testes em watch mode

npm run build — gera build de produção

npm run lint — (se configurado) verifica o lint

npm run format — (se configurado) formata o código

Estrutura principal

src/
  app/
    store.ts           # configuração do Redux
  features/
    contacts/
      contactsSlice.ts # reducers e actions (add, update, remove)
  components/
    ContactForm.tsx    # formulário de adição
    ContactList.tsx    # listagem + edição/remoção
  styles.ts            # estilos globais e componentes base
  App.tsx              # montagem da UI
  index.tsx            # bootstrap do React

Funcionalidades
Adicionar contato com validação básica de e‑mail

Editar contato inline

Remover contato da lista

