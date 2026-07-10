import cupcake1 from "../assets/images/cupcake1.png";
import cupcake2 from "../assets/images/cupcake2.png";
import cupcake3 from "../assets/images/cupcake3.png";

export default function loadMenu() {
    const menu = document.createElement("section");
    menu.className = "menu";

    menu.innerHTML = `
        <div class="menu-header">
            <p class="menu-subtitle">Mission Menu</p>
            <h2>Space Cupcakes</h2>
            <p class="menu-description">
                Crafted for explorers, baked among the stars.
            </p>
        </div>

        <div class="menu-grid">

            <article class="menu-card">
                <img src="${cupcake1}" alt="Galaxy Cupcake">
                <h3>Galaxy Cupcake</h3>
                <p>Chocolate cake, cosmic cream and edible stardust.</p>
                <span>$12</span>
            </article>

            <article class="menu-card">
                <img src="${cupcake2}" alt="Nebula Cupcake">
                <h3>Nebula Cupcake</h3>
                <p>Vanilla sponge with blueberry filling.</p>
                <span>$14</span>
            </article>

            <article class="menu-card">
                <img src="${cupcake3}" alt="Mars Cupcake">
                <h3>Mars Cupcake</h3>
                <p>Red velvet topped with strawberry mousse.</p>
                <span>$15</span>
            </article>

        </div>
    `;

    return menu;
}