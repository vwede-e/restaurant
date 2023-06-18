import Home from "./pages/home";
import Menu from "./pages/menu";
import Contact from "./pages/contact";

const render = (function() {
    function renderHome() {
        const main = document.querySelector("main");
        if (main) {
            document.body.removeChild(main);
        }
        document.body.appendChild(Home());
    }

    function renderMenu() {
        const main = document.querySelector("main");
        if (main) {
            document.body.removeChild(main);
        }
        document.body.appendChild(Menu());
    }

    function renderContact() {
        const main = document.querySelector("main");
        if (main) {
            document.body.removeChild(main);
        }
        document.body.appendChild(Contact());
    }
    return {renderHome, renderMenu, renderContact}
})()

export default render