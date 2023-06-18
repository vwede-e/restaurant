import myImage from "../Images/Menu.jpg";
import "../style.css";

export default function Menu() {
    const main = document.createElement("main");

    //hero section
    const heroSection = document.createElement("section");
    heroSection.classList.add("hero-section");

    // hero image
    const heroImage = new Image();
    heroImage.src = myImage;
    heroImage.classList.add("hero-image");
    heroSection.appendChild(heroImage);

    // hero text 
    const heroText = document.createElement("div");
    heroText.classList.add("hero-text");
    const heading1 = document.createElement("h1");
    const paragraph1 = document.createElement("p");
    heading1.textContent = "MENU";
    paragraph1.textContent = "DINE, DRINK, AND CELEBRATE WITH US";
    heroText.appendChild(heading1);
    heroText.appendChild(paragraph1); 
    heroSection.appendChild(heroText);

    main.appendChild(heroSection);

    //second section
    const secondSection = document.createElement("section");
    secondSection.classList.add("second-section");
    
    //second section text
    const secondSectionText = document.createElement("div");
    secondSectionText.classList.add("second-section-text");
    
    const h2 = document.createElement("h2");
    h2.textContent = "MENU";
    const p2 = document.createElement("p");
    p2.textContent = "Serving up steaks and authentic Italian dishes from fresh pizza to indulgent pasta dishes. Marco’s friends also feature and inspire the menu. This includes Koffmann chips & fries, Frankie Dettori’s favourite Margherita pizza and Alex James’s Blue Monday pizza.";
    p2.style.fontWeight = "bolder";
    const p3 = document.createElement("p");
    p3.textContent = "The restaurant has an array of gin and classic cocktails and is the very first location to serve Mr. White’s London Dry Gin.";
    const p4 = document.createElement("p");
    p4.textContent = "Dine, Drink & Celebrate with us.";
    const foodMenuContainer = document.createElement("div");
    foodMenuContainer.innerHTML = "<div><div>MAIN MENU</div></div> <div><div>DESSERT MENU</div></div> <div><div>SUNDAY ROAST MENU</div></div> <div><div>AFTERNOON TEA MENU</div></div> <div><div>SET MENU</div></div> <div><div>STEAK NIGHT MENU</div></div> <div><div>DRINKS MENU</div></div> <div><div>KIDS MENU</div></div>"
    foodMenuContainer.classList.add("food-menu-container");
    
    secondSectionText.appendChild(h2);
    secondSectionText.appendChild(p2)
    secondSectionText.appendChild(p3)
    secondSectionText.appendChild(p4)
    secondSectionText.appendChild(foodMenuContainer)

    secondSection.appendChild(secondSectionText);
    main.appendChild(secondSection);

    return main;
}