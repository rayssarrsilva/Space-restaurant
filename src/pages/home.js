// src/home.js
export default function loadHome() {
  const container = document.createElement("div");
  container.classList.add("home");

  const title = document.createElement("h2");
  title.textContent = "Bem-vindo ao Restaurante da Rayssa";

  const description = document.createElement("p");
  description.textContent = "Aqui você encontra pratos deliciosos e um ambiente acolhedor.";

  const image = document.createElement("img");
  image.src = "https://via.placeholder.com/300x200"; // pode trocar por uma imagem real
  image.alt = "Foto do restaurante";

  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(image);

  return container;
}
