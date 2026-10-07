# Self-Hosted Portfolio

Portfólio profissional de **Rômulo Pereira**, desenvolvido em React e publicado em infraestrutura própria ARM64.

## Objetivo

O projeto foi criado para apresentar experiência profissional, formação, stack técnica e projetos, ao mesmo tempo em que demonstra na prática um fluxo completo de engenharia:

- React + TypeScript;
- Vite;
- testes automatizados;
- lint;
- GitHub Actions;
- estratégia de branches;
- deploy via SSH/rsync;
- hospedagem self-hosted;
- Caddy como web server.

## Stack

- React
- TypeScript
- Vite
- Lucide React
- Vitest
- Testing Library
- ESLint
- Prettier
- GitHub Actions
- Caddy

## Estrutura

```text
.
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── docs/
│   └── DEPLOYMENT.md
├── src/
│   ├── data/
│   │   └── portfolio.ts
│   ├── test/
│   │   └── setup.ts
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── Caddyfile.example
├── index.html
└── package.json
```

## Desenvolvimento local

Requisitos:

- Node.js 22+
- npm

Instale:

```bash
npm install
```

Execute:

```bash
npm run dev
```

A aplicação ficará disponível no endereço informado pelo Vite.

## Scripts

```bash
npm run dev
npm run lint
npm run test
npm run test:watch
npm run coverage
npm run build
npm run preview
npm run check
npm run format
npm run format:check
```

O comando recomendado antes de abrir um pull request é:

```bash
npm run check
```

## Testes

Os testes atuais cobrem pontos essenciais da homepage:

- posicionamento profissional;
- renderização dos programas da SoulCode Academy;
- presença do projeto Portfolio Self-Hosted.

A suíte usa **Vitest + Testing Library**.

## Estratégia de branches

```text
feature/* -> dev -> main
```

### `feature/*`

Desenvolvimento isolado de funcionalidades.

### `dev`

Branch de integração e homologação.

Pushes e pull requests executam o workflow de CI.

### `main`

Produção.

Todo push em `main` executa a validação e, se aprovada, o deploy automático no servidor.

## CI

O workflow `.github/workflows/ci.yml` executa:

1. instalação de dependências;
2. lint;
3. testes;
4. build de produção.

Ele roda em:

- pull requests para `dev` e `main`;
- pushes em `dev`.

## CD

O workflow `.github/workflows/deploy.yml` roda em todo push na `main`.

Fluxo:

```text
main
  ↓
GitHub Actions
  ↓
npm install
  ↓
lint + testes + build
  ↓
dist/
  ↓
SSH + rsync
  ↓
Servidor ARM64
  ↓
Caddy
```

O servidor não precisa executar Node.js em produção. Apenas os arquivos estáticos gerados pelo Vite são publicados.

Consulte [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) para preparação do servidor e configuração dos secrets.

## Secrets necessários

Configure em **Settings > Secrets and variables > Actions**:

- `SERVER_HOST`
- `SERVER_USER`
- `SERVER_SSH_KEY`
- `SERVER_KNOWN_HOSTS`
- `SERVER_PORT`
- `SERVER_PATH`

Nenhum segredo deve ser versionado no repositório.

## Conteúdo do portfólio

A aplicação contém:

- hero profissional;
- áreas de atuação;
- experiência profissional;
- SoulCode Academy separada por programa/curso;
- projetos;
- stack técnica;
- formação;
- contato.

## Foto profissional

O código procura a imagem em:

```text
public/profile.jpg
```

Enquanto o arquivo não existir, usa o avatar público do GitHub como fallback.

Antes do deploy final, adicione a foto profissional escolhida com exatamente esse nome.

## Currículo

O botão de currículo aponta para:

```text
public/curriculo.pdf
```

Adicione o PDF antes de publicar a versão final.

## Contato

Os links de GitHub já estão configurados.

Antes da publicação, substitua os placeholders de LinkedIn e e-mail em `src/App.tsx`.

## Servidor

Arquitetura esperada:

```text
Internet
   ↓
DNS / domínio
   ↓
Servidor ARM64
   ↓
Caddy
   ↓
/var/www/portfolio
   ↓
React build estático
```

A hospedagem foi pensada para um servidor Linux minimalista, adequado inclusive a hardware ARM64 com recursos limitados.

## Segurança

Recomendações:

- usar usuário exclusivo de deploy;
- não utilizar root no GitHub Actions;
- usar chave SSH exclusiva para CI/CD;
- validar manualmente `known_hosts`;
- proteger `main` e `dev`;
- exigir CI aprovado antes de merge;
- manter o sistema e o Caddy atualizados.

## Licença

Definir antes da publicação pública do projeto.


## Teste local com Docker

Antes do merge para `main`, valide a aplicação localmente:

```bash
docker compose up --build -d
```

Abra:

```text
http://localhost:8080
```

Para encerrar:

```bash
docker compose down
```

Consulte [docs/DOCKER_TEST.md](docs/DOCKER_TEST.md) para o procedimento completo.
