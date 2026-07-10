// home.js
export default function loadHome() {
  const container = document.createElement("div");
  container.classList.add("home");

  const title = document.createElement("h2");
  title.textContent = "Welcome to Space Bakery";

  container.appendChild(title);
  return container;
}
