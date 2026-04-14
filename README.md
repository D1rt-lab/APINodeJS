# 📝 API To-Do List com Node.js (HTTP Puro)

## 👨‍💻 Autor

Iago Guimarães Campos
2°DS MANHÃ
TURMA A

## 📌 Descrição do Projeto

Este projeto consiste no desenvolvimento de uma API REST de gerenciamento de tarefas (To-Do List), construída utilizando **Node.js puro**, sem o uso de frameworks como Express.

O principal objetivo é compreender o funcionamento interno de uma API HTTP, implementando manualmente o roteamento, manipulação de requisições e organização em camadas (**Routes, Controller, Service e Model**).

---

## 🎯 Objetivos

* Entender o funcionamento do protocolo HTTP
* Criar uma API sem frameworks
* Aplicar arquitetura em camadas
* Manipular requisições e respostas manualmente
* Implementar operações CRUD completas

---

## 🛠️ Tecnologias Utilizadas

* Node.js
* Módulo nativo `http`
* Sistema de módulos CommonJS (`require` / `module.exports`)
* Módulo `fs` (persistência em arquivo JSON)

---

## 📁 Estrutura do Projeto

```
api-todo-node/
│
├── app.js
├── package.json
│
└── src/
    ├── controllers/
    ├── services/
    ├── models/
    ├── routes/
    └── data/
        └── tasks.json
```

---

## 🧱 Arquitetura da Aplicação

A aplicação foi organizada seguindo o padrão em camadas:

### 🔹 Routes

Responsável por receber as requisições HTTP e direcioná-las para o controller correto.

### 🔹 Controller

Responsável por:

* Receber os dados da requisição
* Validar entradas
* Chamar o service
* Retornar a resposta ao cliente

### 🔹 Service

Camada responsável pela lógica de negócio:

* Criação, atualização e remoção de tarefas
* Manipulação dos dados

### 🔹 Model

Define a estrutura das tarefas:

* `id`
* `title`
* `completed`

---

## ⚙️ Funcionalidades da API

* Criar tarefa
* Listar tarefas
* Buscar tarefa por ID
* Atualizar tarefa
* Deletar tarefa
* Tratamento de erros (404 e validações)

---

## 🚀 Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd api-todo-node
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Executar o servidor

```bash
node app.js
```

O servidor estará disponível em:

```
http://localhost:3000
```

---

## 🔗 Endpoints da API

### ➤ Criar tarefa

```
POST /tasks
```

Body:

```json
{
  "title": "Estudar Node.js"
}
```

---

### ➤ Listar tarefas

```
GET /tasks
```

---

### ➤ Buscar tarefa por ID

```
GET /tasks/:id
```

---

### ➤ Atualizar tarefa

```
PUT /tasks/:id
```

Body:

```json
{
  "title": "Novo título",
  "completed": true
}
```

---

### ➤ Deletar tarefa

```
DELETE /tasks/:id
```

---

## 🧪 Testes da API

A API pode ser testada utilizando:

* cURL (terminal)
* Postman
* Insomnia
* Thunder Client (VSCode)

Exemplo com cURL:

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Estudar Node.js"}'
```

---

## 💾 Persistência de Dados (Nível Sênior)

Os dados das tarefas são armazenados em um arquivo JSON:

```
src/data/tasks.json
```

* As tarefas são salvas automaticamente ao criar, atualizar ou deletar
* Os dados são carregados ao iniciar o servidor

---

## 📊 Status HTTP Utilizados

* `200 OK` → Sucesso
* `201 Created` → Recurso criado
* `400 Bad Request` → Erro de requisição
* `404 Not Found` → Recurso não encontrado

---

## 🧠 Desafios Implementados

### ✅ Nível Júnior

* Adição do campo `completed`
* Atualização do status da tarefa

### ✅ Nível Pleno

* Implementação do endpoint:

  ```
  GET /tasks/:id
  ```

### ✅ Nível Sênior

* Persistência de dados em arquivo JSON utilizando `fs`

---

## 📹 Demonstração

O projeto inclui um vídeo demonstrando:

* Criação de tarefas
* Listagem
* Atualização
* Remoção
* Tratamento de erros

---

## 📌 Considerações Finais

Este projeto foi essencial para compreender o funcionamento interno de APIs REST, desde o tratamento de requisições HTTP até a organização do código em camadas.

A implementação sem frameworks proporcionou um entendimento mais profundo do backend, preparando o caminho para o uso de ferramentas como Express e bancos de dados em projetos futuros.

---
