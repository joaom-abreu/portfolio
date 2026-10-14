# 💼 Portfólio

> [!WARNING]
> 🚧 Projeto em desenvolvimento.

🔗 **Site publicado:** [joaomario.dev](https://joaomario.dev)

---

## ✨ Funcionalidades Previstas

- 🧭 **Navegação por seções:** Sobre mim, Projetos, Experiência e Contato em uma página única, com destaque da seção atual no menu.
- 🌗 **Tema claro e escuro:** segue a preferência do sistema e guarda a escolha no navegador.
- 🌐 **Internacionalização (i18n):** site inteiro em português e inglês, com `?lang=en` na URL.
- 🪪 **Hero com card de API:** foto, redes e um card que consome a API do próprio portfólio.
- 🗓️ **Linha do tempo de projetos:** do mais antigo ao mais recente, com mídia, tags e links.
- 📈 **Atividade no GitHub:** calendário de contribuições, último commit e repositórios recentes.
- 🎓 **Experiência e formação:** atuação, formação e o próximo capítulo.
- 📨 **Contato:** links diretos e formulário com validação, com envio por e-mail e cópia para quem escreveu.
- 📄 **Currículo em PDF:** leitura em um modal, em português e inglês, com download.
- 👀 **Contador de visitas:** total e últimos 30 dias no rodapé, sem guardar o IP de quem visita.
- 🎨 **Página do design system:** rota `/design` com cores, tipografia, espaçamento e componentes.
- 📱 **Layout responsivo e acessível:** do celular ao desktop, com navegação por teclado e foco sempre visível.

---

## 🛠 Tecnologias Previstas

React, Vite, ESLint e Prettier já estão instalados. As demais tecnologias entram nas próximas etapas.

### 💻 Front-end

- **Framework/Biblioteca:** React 19
- **Linguagem:** JavaScript
- **Build Tool:** Vite 8
- **Rotas:** React Router
- **Estilização:** CSS Modules com design tokens em variáveis CSS
- **Internacionalização:** i18next e react-i18next
- **Formulário e e-mail:** React Hook Form e EmailJS
- **Ícones:** Lucide e React Icons
- **Qualidade de código:** ESLint e Prettier

### 🖥️ Back-end

- **Linguagem/Runtime:** Node.js 22
- **API:** Vercel Functions
- **Banco de Dados:** Supabase (PostgreSQL)
- **Integrações:** GitHub API
- **Testes:** Vitest

### ⚙️ Infraestrutura & DevOps

- **Cloud:** Vercel
- **Containerização:** Docker e Docker Compose, com Nginx e Express
- **CI/CD:** GitHub Actions

---

## 🗄️ Banco de Dados

O contador de visitas usa uma tabela no Supabase. O navegador nunca acessa o banco: só as funções de `api/` leem e gravam, com a chave de servidor.

### Passo a passo

1. Crie um projeto em [supabase.com](https://supabase.com). Escolha a região mais próxima das funções da Vercel (por padrão, Leste dos EUA).
2. No painel do projeto, abra o **SQL Editor**, cole o conteúdo de [`db/migrations/001_page_views.sql`](./db/migrations/001_page_views.sql) e clique em **Run**. O arquivo pode ser executado mais de uma vez.
3. Confira o resultado rodando `select * from public.daily_views(7);`. Devem voltar 7 linhas, uma por dia, com `views` igual a 0.
4. Em **Project Settings → API**, copie o endereço do projeto e a chave de servidor (`service_role` ou secret key).
5. Gere o sal do hash dos visitantes com `openssl rand -hex 32`.
6. Cadastre as três variáveis na Vercel, em Production e Preview, e no seu `.env.local`:

| Variável                    | Valor                               |
| --------------------------- | ----------------------------------- |
| `SUPABASE_URL`              | Endereço do projeto                 |
| `SUPABASE_SERVICE_ROLE_KEY` | Chave de servidor                   |
| `VIEWS_SALT`                | Resultado do `openssl rand -hex 32` |

> [!IMPORTANT]
> A chave de servidor ignora o RLS e dá acesso total ao banco. Ela nunca recebe o prefixo `VITE_`, nunca vai para o Git e só é lida em `api/`.

### O que a migration cria

- **`page_views`:** uma linha por visitante por dia, com a data e um hash. O IP não é salvo.
- **RLS ligado e sem políticas:** a chave pública do Supabase não lê nem grava nada na tabela.
- **`daily_views(days)`:** função que devolve as visitas dos últimos dias, com zero nos dias sem visita.

---

## 📂 Estrutura Inicial

```
.
├── docs/
│   └── wireframes/      # 🖼️ Telas inteiras usadas como referência visual.
├── src/
│   ├── App.jsx          # 🧱 Componente raiz, ainda vazio.
│   └── main.jsx         # 🚪 Ponto de entrada do React.
├── .editorconfig        # ✍️ Padronização de estilo de código.
├── .gitignore           # 🧹 Arquivos e pastas não versionados.
├── .nvmrc               # 🟢 Versão do Node.js.
├── .prettierignore      # 🎨 Arquivos que o Prettier não formata.
├── .prettierrc.json     # 🎨 Configuração do Prettier.
├── eslint.config.js     # ✨ Regras do ESLint.
├── index.html           # 📄 HTML de entrada do Vite.
├── LICENSE              # ⚖️ Licença do projeto.
├── package.json         # 📦 Dependências e scripts.
├── package-lock.json    # 🔒 Lockfile das dependências.
├── README.md            # 📘 Documentação principal do projeto.
└── vite.config.js       # ⚡ Configuração do Vite.
```

---

## 🎨 Wireframes

Protótipo no Figma: [abrir o arquivo do portfólio](https://www.figma.com/design/CZNCwLiWEEIQhAxpMmIzC2/portfolio)

As telas abaixo estão em [`docs/wireframes/`](./docs/wireframes) e servem de referência visual para a implementação.

### Página principal

|                                        Desktop · tema escuro                                        |                                        Mobile · tema claro                                        |
| :-------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: |
| <img src="./docs/wireframes/desktop.png" alt="Página completa no desktop, tema escuro" width="520"> | <img src="./docs/wireframes/mobile.png" alt="Página completa no celular, tema claro" width="200"> |

### Menu mobile e modal do currículo

|                                       Menu mobile aberto                                        |                                     Modal do currículo                                     |
| :---------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: |
| <img src="./docs/wireframes/mobile-menu.png" alt="Menu mobile aberto, tema escuro" width="200"> | <img src="./docs/wireframes/curriculo.png" alt="Modal do currículo com o PDF" width="520"> |

### Página do design system

|                                           Rota `/design`                                           |
| :------------------------------------------------------------------------------------------------: |
| <img src="./docs/wireframes/design.png" alt="Página do design system na rota /design" width="520"> |
