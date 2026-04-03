const form = document.getElementById("form");
const lista = document.getElementById("lista");
let entradas = JSON.parse(localStorage.getItem("entradas")) || [];

function salvarLocal() {
  localStorage.setItem("entradas", JSON.stringify(entradas));
}

function renderizar() {
  lista.innerHTML = "";
  entradas.forEach((entrada, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${entrada.titulo}</strong><br>
      ${entrada.descricao}<br>
      <small>${entrada.data}</small><br>
      <button onclick="remover(${index})">Excluir</button>
    `;
    lista.appendChild(li);
  });
}

function remover(index) {
  entradas.splice(index, 1);
  salvarLocal();
  renderizar();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const novaEntrada = {
    titulo: document.getElementById("titulo").value,
    descricao: document.getElementById("descricao").value,
    data: document.getElementById("data").value
  };
  entradas.push(novaEntrada);
  salvarLocal();
  renderizar();
  form.reset();
});

// Inicializar a lista
renderizar();

// Evento para instalação PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});