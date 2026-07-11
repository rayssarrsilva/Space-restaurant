import loadHome from "./pages/home.js";
import loadMenu from "./pages/menu.js";
import loadReservation from "./pages/reservation.js";

import "./styles/home.css";
import "./styles/menu.css";
import "./styles/reservation.css";
import "./styles/header.css";

const content = document.getElementById("content");

function render(page) {
    content.innerHTML = "";
    content.appendChild(page());
}

document.addEventListener("DOMContentLoaded", () => {

    render(loadHome);

    document
        .getElementById("home")
        .addEventListener("click", () => render(loadHome));

    document
        .getElementById("menu")
        .addEventListener("click", () => render(loadMenu));

    document
        .getElementById("reservation")
        .addEventListener("click", () => render(loadReservation));

});