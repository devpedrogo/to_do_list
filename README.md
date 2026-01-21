📝 TaskFlow - Gerenciador de Tarefas
O TaskFlow é um gerenciador de listas (To-Do List) moderno e minimalista construído com React. A aplicação foi projetada para ajudar na organização diária, garantindo que suas tarefas não se percam, mesmo que você feche o navegador.

🔗 Demonstração Online
Acesse o projeto pronto para uso aqui:

👉 [Link para o seu GitHub Pages aqui]

✨ Funcionalidades Principais
Persistência Automática: Utiliza a API do Local Storage para manter seus dados salvos localmente no navegador.

Gestão de Estado: Adição, conclusão e exclusão de tarefas em tempo real.

Interface Limpa: Design focado na experiência do usuário e na facilidade de leitura.

Hospedagem CI/CD: Implantado automaticamente via GitHub Actions/Pages.

🛠️ Tecnologias e Conceitos
React JS: Componentização e Hooks (useState, useEffect).

JavaScript (ES6+): Manipulação de arrays e objetos.

CSS3: Estilização responsiva e estados de hover/foco.

Local Storage: Persistência de dados sem necessidade de um banco de dados externo.

🧠 Como o Local Storage é aplicado?
Diferente de apps que perdem os dados ao atualizar a página (F5), este projeto utiliza um ciclo de persistência simples:

Leitura Inicial: Ao carregar o app, o React verifica se existe a chave tasks no navegador.

Sincronização: Sempre que o estado da lista muda, o useEffect dispara uma atualização para o armazenamento local.

JavaScript

// Exemplo da lógica utilizada
useEffect(() => {
  localStorage.setItem('minhas-tarefas', JSON.stringify(tarefas));
}, [tarefas]);
