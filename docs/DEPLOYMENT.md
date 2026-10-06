# Deploy self-hosted

## Visão geral

O deploy de produção acontece somente quando uma alteração chega à branch `main`.

```text
feature/* -> dev -> pull request -> main -> GitHub Actions -> servidor ARM64 -> Caddy
```

O React é compilado no GitHub Actions. O servidor recebe apenas os arquivos estáticos de `dist/`, portanto Node.js não precisa ficar executando na TV Box.

## Estrutura recomendada do servidor

- Debian/Armbian minimal ARM64
- OpenSSH
- Tailscale (opcional para administração)
- Caddy
- diretório do site: `/var/www/portfolio`

### Preparação

```bash
sudo apt update
sudo apt install -y caddy rsync
sudo mkdir -p /var/www/portfolio
sudo chown -R deploy:www-data /var/www/portfolio
```

Crie um usuário específico de deploy em vez de utilizar root.

## Secrets do GitHub

Em **Settings > Secrets and variables > Actions**, configure:

| Secret | Conteúdo |
| --- | --- |
| `SERVER_HOST` | IP ou hostname do servidor |
| `SERVER_USER` | usuário sem privilégios usado pelo deploy |
| `SERVER_SSH_KEY` | chave SSH privada dedicada ao GitHub Actions |
| `SERVER_KNOWN_HOSTS` | linha de host gerada com `ssh-keyscan` e conferida manualmente |
| `SERVER_PORT` | porta SSH, geralmente 22 |
| `SERVER_PATH` | por exemplo `/var/www/portfolio` |

### Chave SSH dedicada

No computador administrativo:

```bash
ssh-keygen -t ed25519 -C "github-actions-portfolio" -f ./portfolio_deploy
```

Adicione **somente a chave pública** ao `~/.ssh/authorized_keys` do usuário de deploy.

A chave privada `portfolio_deploy` vira o secret `SERVER_SSH_KEY`.

## Caddy

Copie `Caddyfile.example` e substitua o domínio:

```bash
sudo cp Caddyfile.example /etc/caddy/Caddyfile
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

## Estratégia de branches

- `main`: produção; todo push dispara deploy.
- `dev`: integração/homologação.
- `feature/*`: desenvolvimento de funcionalidades.

Fluxo:

```bash
git checkout dev
git pull
git checkout -b feature/minha-feature

# trabalho

git push -u origin feature/minha-feature
```

Abra PR para `dev`. Após validação, abra PR de `dev` para `main`.

## Proteção recomendada

No GitHub, proteja `main` e `dev` exigindo:
- pull request;
- workflow de CI aprovado;
- branch atualizada antes do merge;
- impedir force push em `main`.

## Rollback

Como o site é estático, o rollback pode ser feito revertendo o commit em `main`. O novo commit de revert dispara o mesmo workflow de deploy.
