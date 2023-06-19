import control from "./control";
import Header from "./header";
import "./style.css";

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
const navChildren = nav.children;
for (const elements of navChildren) {
    elements.addEventListener("click", switchView)
}

//render home
control.displayHome()
highlightCurrentMenu();


//event handler for menu
function switchView(event) {
    //prevent current page from rerendering if clicked
    if (control.getCurrentPage() === event.target.textContent ) {
        return 
    }
    else if (event.target.textContent === "HOME") {
        control.displayHome();
    }
    else if (event.target.textContent === "MENU") {
        control.displayMenu();
     }
    else  {
         control.displayContact();
     }
     highlightCurrentMenu()
}
 
function highlightCurrentMenu() {
    const menuList = [...navChildren];
    const prevMenu = document.getElementById("current-menu-highlight");
    if (prevMenu) {
        prevMenu.removeAttribute("id", "current-menu-highlight");
    }
    const currMenu = menuList.find((menu) => menu.textContent === control.getCurrentPage());
    currMenu.setAttribute("id", "current-menu-highlight");
}