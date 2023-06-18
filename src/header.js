import "./style.css";
import Logo from "./Images/Logo.png";

export default function Header() {
    const header = document.createElement("header");
    
    const nav = document.createElement("nav");
    const home = document.createElement("div");
    home.textContent = "HOME";

    const menu = document.createElement("div");
    menu.textContent = "MENU";

    const contact = document.createElement("div");
    contact.textContent = "CONTACT";

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    
    const logoContainer = document.createElement("div");
    const logo = new Image();
    logo.classList.add("mobile-logo");
    logo.src = Logo;
    logoContainer.appendChild(logo);

    header.appendChild(logoContainer);
    header.appendChild(nav);
    return header;
}