import render from "./render";

const control = (function() {
    let currentPage = "HOME";

    function getCurrentPage() {
        return currentPage;
    }

    function setCurrentPage(newPage) {
        currentPage = newPage;
    }

    function displayHome() {
        render.renderHome();
        setCurrentPage("HOME");
    }

    function displayMenu() {
        render.renderMenu();
        setCurrentPage("MENU");
    }

    function displayContact() {
        render.renderContact();
        setCurrentPage("CONTACT");
    }

    return {displayHome, displayMenu, displayContact, getCurrentPage}
})()

export default control