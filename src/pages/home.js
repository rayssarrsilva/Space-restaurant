// home.js
export default function loadHome() {
  const home = document.createElement("section");
  home.className = "home";

  home.innerHTML = `
    <div class="hero-glow glow-1"></div>
    <div class="hero-glow glow-2"></div>

    <div class="hero-content">

      <span class="hero-tag">
        ✦ Best Space Restaurant in the Galaxy
      </span>

      <h1 class="hero-title">
        Taste the
        <span>Future</span>
        of Bakery
      </h1>

      <p class="hero-description">
        Experience handcrafted cosmic meals, interstellar desserts,
        and unforgettable flavors served among the stars.
      </p>
      
      <div class="hero-stats">

        <div class="stat-card">
          <h3>25+</h3>
          <p>Galaxies Served</p>
        </div>

        <div class="stat-card">
          <h3>120+</h3>
          <p>Cosmic Recipes</p>
        </div>

        <div class="stat-card">
          <h3>★★★★★</h3>
          <p>Traveler Rating</p>
        </div>

      </div>

    </div>

    <div class="hero-decoration">

      <div class="planet planet-1"></div>
      <div class="planet planet-2"></div>
      <div class="planet planet-3"></div>

      <div class="orbit orbit-1"></div>
      <div class="orbit orbit-2"></div>

    </div>
  `;

  return home;
}