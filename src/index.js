import loadHome from './pages/home.js';
import loadMenu from './pages/menu.js';

const content = document.getElementById("content");

// função para trocar páginas
function setPage(pageLoader) {
  content.innerHTML = ""; // limpa antes
  content.appendChild(pageLoader());
}

// carrega a Home por padrão
setPage(loadHome);

document.getElementById("menu").addEventListener("click", () => setPage(loadMenu));
document.getElementById("home").addEventListener("click", () => setPage(loadHome));
