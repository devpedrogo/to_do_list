# 📝 TaskFlow - Gerenciador de Tarefas

O **TaskFlow** é um gerenciador de listas (To-Do List) moderno e minimalista construído com **React**. A aplicação foi projetada para ajudar na organização diária, garantindo que suas tarefas permaneçam salvas mesmo após fechar o navegador ou atualizar a página.

## 🔗 Demonstração Online

Acesse o projeto em tempo real aqui:  
👉 **[CLIQUE AQUI PARA ACESSAR O APP](https://devpedrogo.github.io/to_do_list/)**

---

## ✨ Funcionalidades

* **Adicionar Tarefas:** Crie novos itens rapidamente com um campo de entrada intuitivo.
* **Concluir Tarefas:** Marque as atividades finalizadas para manter o controle visual.
* **Remover Tarefas:** Exclua itens da lista individualmente.
* **Persistência com Local Storage:** Suas tarefas ficam guardadas no seu navegador, sem necessidade de banco de dados externo.
* **Design Responsivo:** Interface otimizada para desktops e dispositivos móveis.

## 🛠️ Tecnologias e Conceitos

* **React JS:** Biblioteca principal para construção da interface.
* **Hooks (useState, useEffect):** Gerenciamento de estado e efeitos colaterais.
* **JavaScript (ES6+):** Manipulação de listas (map, filter) e objetos.
* **CSS3:** Estilização moderna e layout flexível.
* **Local Storage API:** Persistência de dados localmente.

## 🧠 Como funciona a Persistência?

A aplicação utiliza o ciclo de vida do React para garantir que os dados nunca sejam perdidos:

1.  **Carregamento:** Ao iniciar, o app lê os dados salvos em `localStorage`.
2.  **Sincronização:** Toda vez que uma tarefa é criada, editada ou removida, o `useEffect` atualiza automaticamente o banco de dados local do navegador.

```javascript
// Exemplo da lógica de persistência
useEffect(() => {
  localStorage.setItem('task-list-data', JSON.stringify(tasks));
}, [tasks]);
