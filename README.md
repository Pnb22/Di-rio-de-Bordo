# Diário de Bordo

Um aplicativo web progressivo (PWA) para registro de atividades diárias.

## Funcionalidades

- Criar entradas com título, descrição e data
- Listar entradas registradas
- Remover entradas
- Funciona offline
- Instalável na tela inicial
- Dados persistidos localmente com localStorage
- Design responsivo

## Como usar

1. Abra o `index.html` em um navegador.
2. Preencha o formulário e clique em "Adicionar".
3. As entradas aparecerão na lista abaixo.
4. Para remover, clique em "Excluir".

## PWA

- O app pode ser instalado na tela inicial.
- Funciona offline graças ao service worker.

## Teste

Use o Lighthouse do Chrome DevTools para verificar se é reconhecido como PWA.

## Ícones

Adicione os ícones `icon-192.png` e `icon-512.png` na pasta `icons/`. Você pode gerar ícones simples ou usar ferramentas online para criar ícones para PWA.

## Estrutura do projeto

- `index.html`: Estrutura da página
- `style.css`: Estilos
- `script.js`: Lógica JavaScript
- `manifest.json`: Manifesto PWA
- `service-worker.js`: Service Worker para cache
- `icons/`: Pasta com ícones