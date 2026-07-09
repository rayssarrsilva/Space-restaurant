// src/menu.js
export default function loadMenu() {
  const container = document.createElement("div");
  container.classList.add("menu");

  const title = document.createElement("h2");
  title.textContent = "Nosso Menu";

  const item1 = document.createElement("p");
  item1.textContent = "🍕 Pizza Margherita";

  const item2 = document.createElement("p");
  item2.textContent = "🍝 Spaghetti Carbonara";

  container.appendChild(title);
  container.appendChild(item1);
  container.appendChild(item2);

  return container;
}
