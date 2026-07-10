import loadHome from "./pages/home.js";
import loadMenu from "./pages/menu.js";
import "./styles/home.css";
import "./styles/header.css";

function init(){
    const content = document.getElementById("content");
    content.appendChild(loadHome());
}

document.addEventListener("DOMContentLoaded", init);

const content = document.getElementById("content");

function load(pages){
    content.innerHTML = "";
    content.appendChild(pages());
}

document.getElementById("menu").addEventListener("click", () => load(loadMenu));