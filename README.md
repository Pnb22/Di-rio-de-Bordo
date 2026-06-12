# Diário de Bordo

Projeto PWA para registrar notas diárias. O objetivo deste projeto é melhorar a performance e deixar a aplicação com PWA funcional.

## O que foi feito
- Ajustei o `index.html` para incluir meta tags de PWA e SEO.
- Adicionei `defer` no script para evitar bloqueio de renderização.
- Ajustei o `style.css` para usar `box-sizing` e `contain`.
- Atualizei `script.js` para validar o formulário e remover `console.log`.
- Melhorei `service-worker.js` para cache e suporte offline.
- Criei `icons/icon-512.png` e corrigi o `manifest.json`.

## Resultados esperados
- Carregamento mais rápido.
- PWA instalável.
- Funciona offline de forma mais estável.
- Menos mudança de layout durante o carregamento.

## Arquivos alterados
- `index.html`
- `style.css`
- `script.js`
- `service-worker.js`
- `manifest.json`
- `icons/icon-512.png`

## Como testar
1. Use `http-server` ou outro servidor local.
2. Abra `http://localhost:8000`.
3. Verifique o app e o service worker no DevTools.
