# 📘 Guia de Versionamento e Organização do Projeto — PoupeFácil

Este guia explica **como organizar, versionar e subir diariamente** o projeto PoupeFácil no GitHub usando **branches**, **commits estruturados**, **pull requests** e **tags de versão**.

---

# 🔧 1. Estrutura do Repositório

```
poupefacil/
│
├── docs/              → Wireframes, mockups, requisitos
├── src/               → Código do app
│   ├── frontend/
│   └── backend/
├── database/          → Scripts SQL / protótipos
├── tests/             → Testes futuros
├── README.md
└── CHANGELOG.md
```

---

# 🌿 2. Padrão Oficial de Branches

## **main**

- Código estável
- Recebe versões oficiais

## **develop**

- Onde as features são integradas

## **feature/**

Branches específicas por tarefa:

Exemplos:

```
feature/wireframes
feature/login-ui
feature/dashboard-ui
feature/add-goal
feature/responsive
feature/backend-auth
feature/database-setup
feature/api-endpoints
feature/percentage-logic
```

---

# 🚀 3. Fluxo Diário de Trabalho

## **1. Atualize o repositório**

```
git checkout develop
git pull origin develop
```

## **2. Crie a branch da tarefa do dia**

```
git checkout -b feature/nome-da-tarefa
```

---

# 🧱 4. Commits Organizados (Padrão Oficial)

### Tipos recomendados:

```
feat: nova funcionalidade
fix: correção de bug
docs: documentação
style: layout / css
refactor: melhoria no código
chore: tarefas diversas
```

### Exemplos reais:

```
feat: tela inicial da dashboard
style: ajustes de espaçamento no login
feat: cálculo automático de porcentagem
fix: validação de campos no cadastro
docs: wireframes adicionados ao README
```

---

# 📤 5. Como Enviar o Trabalho do Dia

```
git add .
git commit -m "feat: criação da tela de dashboard"
git push origin feature/nome-da-tarefa
```

---

# 🔃 6. Criando Pull Requests (PR)

1. No GitHub, abrir PR:
   **feature → develop**
2. Descrever brevemente:

   - O que foi feito
   - O que falta
   - Screenshots (se tiver)

### Modelo:

```
## O que foi feito
- Estrutura inicial da dashboard
- Adicionado card de saldo total
- Criado layout dos gastos futuros

## Próximos passos
- Implementar lógica dos valores reais
- Integrar com backend futuramente
```

3. Fazer o merge
4. Deletar a branch feature

---

# 🏷️ 7. Versões Oficiais com Tags

### Recomendações de versões:

```
v0.1.0 → wireframes + estrutura inicial
v0.2.0 → login + dashboard estática
v0.3.0 → lógica financeira
v0.4.0 → backend inicial\Nv1.0.0 → MVP completo
```

### Como criar uma tag:

```
git checkout main
git pull origin main
git tag -a v0.1.0 -m "Primeira versão com wireframes"
git push origin v0.1.0
```

---

# 📝 8. Modelo de CHANGELOG.md

```
# Changelog

## v0.1.0 - 2025-02-10
- Adicionados wireframes iniciais
- Estrutura inicial do README
- Definição da arquitetura

## v0.2.0 - 2025-02-12
- Criada tela de login
- Criada estrutura do dashboard
```

---

# 🗓️ 9. Rotina Diária Completa

### **1. Criar branch**

```
git checkout develop
git pull
git checkout -b feature/login-ui
```

### **2. Trabalhar normalmente**

### **3. Commitar**

```
git add .
git commit -m "feat: tela de login responsiva"
```

### **4. Subir**

```
git push origin feature/login-ui
```

### **5. Abrir PR**

- feature/login-ui → develop
- Revisar
- Merge

### **6. Atualizar CHANGELOG (opcional)**

---

# ✔️ Pronto!

Esse guia pode ser atualizado conforme o projeto evolui.
Se quiser, posso gerar também um **README completo** para colocar no repositório.
