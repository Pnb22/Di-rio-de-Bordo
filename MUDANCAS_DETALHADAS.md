# Detalhes das mudanças

## index.html
- Adicionei meta tags de descrição e PWA.
- Incluí link para ícone 192x192 e 512x512.
- Usei `defer` no script.

## style.css
- Adicionei `box-sizing: border-box`.
- Usei `contain: layout style paint`.
- Ajustei fontes e transições.

## script.js
- Validei o formulário antes de salvar.
- Removi `console.log` desnecessários.
- Mantive a lógica do install prompt.

## service-worker.js
- Atualizei o nome do cache.
- Adicionei `skipWaiting()` e `clients.claim()`.
- Limpei caches antigos no `activate`.
- Fiz o fetch usar cache e fallback offline.

## manifest.json
- Adicionei o ícone 512x512.
- Mantive os ícones existentes.

## icons
- Criei `icons/icon-512.png`.
- Verifiquei que o manifest aponta para ele.
