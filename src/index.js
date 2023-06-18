import control from "./control";
import Header from "./header";

//render header 
const header = Header();
document.body.appendChild(header);

//adjust header bgcolor based on scroll position
let currentScrollHeight = window.scrollY;
window.addEventListener("scroll", checkHeight);

function checkHeight() {
    const newScrollHeight = window.scrollY;
    if (newScrollHeight > currentScrollHeight) {
        header.style.backgroundColor = "green";
    }
    else {
        header.style.backgroundColor = "rgb(0,0,0,0)";
    }
    currentScrollHeight = newScrollHeight;
}

//add event listeners to menu
const nav = document.querySelector("nav");
nav.addEventListener("click", switchView);

//render home
control.displayHome()

//event handler for menu
function switchView(event) {
    if (control.getCurrentPage() === event.target.textContent ) {
        return 
    }
    if (event.target.textContent === "HOME") {
        control.displayHome();
        return
    }
    if (event.target.textContent === "MENU") {
        control.displayMenu();
        return
     }
    if (event.target.textContent === "CONTACT") {
         control.displayContact();
         return;
     }
    }