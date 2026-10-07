# Teste local com Docker

Antes de enviar alterações para a `main`, valide a aplicação localmente em container.

## Pré-requisitos

- Docker Desktop ou Docker Engine
- Docker Compose v2

## Subir o ambiente

Na raiz do projeto:

```bash
docker compose up --build -d
```

Acesse:

```text
http://localhost:8080
```

## Verificar container

```bash
docker ps
docker logs self-hosted-portfolio
```

## Teste de saúde

```bash
curl http://localhost:8080
```

No PowerShell:

```powershell
Invoke-WebRequest http://localhost:8080
```

## Encerrar

```bash
docker compose down
```

## Reconstruir após alterações

```bash
docker compose down
docker compose up --build -d
```

## Fluxo recomendado antes da produção

```text
feature/*
   ↓
PR para dev
   ↓
CI verde
   ↓
teste local via Docker
   ↓
homologação visual
   ↓
PR dev -> main
   ↓
deploy automático
```

A imagem Docker é multi-stage:

1. `node:22-alpine` compila o React/Vite;
2. `caddy:2-alpine` serve apenas o conteúdo estático da pasta `dist`.

Isso aproxima o teste local do comportamento do servidor final sem precisar instalar Node.js no runtime.
