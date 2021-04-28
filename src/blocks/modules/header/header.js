import "../../components/burger-menu/burger-menu.js";
import burgerButton from "../../components/burger-menu/burger-menu.js";

// UI Elements
const navMenu = document.querySelector(".nav-list");

// Event Listeners
burgerButton.addEventListener("click", function openMenu() {
    navMenu.classList.toggle("mobile");
});
