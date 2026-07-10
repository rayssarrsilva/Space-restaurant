import loadHome from "./pages/home.js";
import "./styles/home.css";
import "./styles/header.css";

function init(){
    const content = document.getElementById("content");
    content.appendChild(loadHome());
}

document.addEventListener("DOMContentLoaded", init);
