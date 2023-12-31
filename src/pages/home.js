import myImage from "../Images/Home.jpg";
import "../style.css";

export default function Home() {
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
    heading1.textContent = "SUNDAY ROAST";
    paragraph1.textContent = "\'PROBABLY THE BEST SUNDAY ROAST ON THE SQUARE\'";
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
    h2.textContent = "WELCOME";
    const p2 = document.createElement("p");
    p2.textContent = "MARCO PIERRE WHITE HAS RETURNED TO THE CAPITAL'S WEST END - THE FIRST TIME IN OVER 10 YEARS.";
    p2.style.fontWeight = "bolder";
    const p3 = document.createElement("p");
    p3.textContent = "Located in Leicester Square, Mr. White's is now serving succulent steaks, authentic Italian pizza and Mr. White’s very own London Dry Gin in a vibrant and lively restaurant & bar.";
    const p4 = document.createElement("p");
    p4.textContent = "For enquiries of tables of 12 and above please contact our reservations team on reservations@mrwhiteslondon.com.";
    const p5 = document.createElement("p");
    p5.innerHTML = "If you have a dream, you owe it to yourself to make it come true at all costs no matter what. </br> <span>- MARCO PIERRE WHITE</span>";
    p5.classList.add("quote");

    secondSectionText.appendChild(h2);
    secondSectionText.appendChild(p2)
    secondSectionText.appendChild(p3)
    secondSectionText.appendChild(p4)
    secondSectionText.appendChild(p5)

    secondSection.appendChild(secondSectionText);
    main.appendChild(secondSection);

    return main;
}