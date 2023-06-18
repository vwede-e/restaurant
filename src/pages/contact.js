import myImage from "../Images/Contact.jpg";
import "../style.css";

export default function Contact() {
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
    heading1.textContent = "CONTACT US";
    heroText.appendChild(heading1);
    heroSection.appendChild(heroText);

    main.appendChild(heroSection);

    //second section
    const secondSection = document.createElement("section");
    secondSection.classList.add("second-section");
    
    //second section text
    const secondSectionText = document.createElement("div");
    secondSectionText.classList.add("second-section-text");
    
    const h2 = document.createElement("h2");
    h2.textContent = "CONTACT DETAILS";
    const p2 = document.createElement("p");
    p2.textContent = "20/21 LEICESTER SQUARE, LONDON, WC2H 7LE";
    const p3 = document.createElement("p");
    p3.textContent = "info@mrwhiteslondon.com (020) 3141 9994";
    const p4 = document.createElement("p");
    p4.textContent = "Restaurant Monday - Saturday | 12pm - 10pm Sunday | 12pm - 9pm";
    
    secondSectionText.appendChild(h2);
    secondSectionText.appendChild(p2)
    secondSectionText.appendChild(p3)
    secondSectionText.appendChild(p4)

    secondSection.appendChild(secondSectionText);
    main.appendChild(secondSection);

    return main;
}