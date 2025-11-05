# 🌿 Agro Fatec — Plataforma Web com Payload CMS

Este Projeto é uma consultoria onde tentamos seguir um prototipo do figma para aprender novas tecnologias.
Ele utiliza **Next.js** para o frontend e **Payload CMS** para gerenciamento dinâmico de conteúdo.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia                     | Função                                           |
| ------------------------------ | -------------------------------------------------- |
| **Next.js (App Router)** | Renderização do site e navegação               |
| **React**                | Componentização da interface                     |
| **Payload CMS**          | Painel administrativo e gerenciamento de conteúdo |
| **TypeScript**           | Tipagem estática para melhor manutençã          |
| **FIgma**                | Prototipagem                                       |
| **MUI (Material UI)**    | Biblioteca de UI para componentes visuais          |

---

## ✨ Funcionalidades

- Interface profissional
- Painel administrativo acessível via `/admin`
- Criação e gerenciamento de conteúdo sem editar código
- Upload e gerenciamento de imagens
- Seções dinâmicas atualizadas pelo Payload CMS
- **Métricas da seção “Sobre” atualizadas automaticamente**, como:
  - Número de propriedades atendidas
  - Porcentagem de aumento de produtividade
  - Porcentagem de satisfação dos clientes

---

## 🧭 Como Rodar o Projeto Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/Endrewmarra/agro-fatec
cd agro-fatec
```

### 2. Configure variáveis de ambiente

```bash
cp .env.example .env
```

Edite o arquivo `.env` e configure sua variável `MONGODB_URI`.

### 3. Instale dependências e execute o projeto

```bash
npm install
npm run dev
```

Acesse:

```
http://localhost:3000
```

---

## 🔐 Acessando o Painel Administrativo

```
http://localhost:3000/admin
```

No primeiro acesso, será solicitado criar um usuário administrador.
Caso encontre problemas, exclua os dados de usario em agro-course.db

---

## 🎯 Objetivo do Projeto

Conhecer ferramentas e ter contato com tecnologias utilizadas para desenvolvimento web

---

## 📄 Licença

Este projeto tem finalidade acadêmica e demonstrativa.
