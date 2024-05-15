import foodImage from './food.webp';


function createHomepageContent() {
    const element = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = "An beautiful new restaurant";
    element.appendChild(heading);

    const paragraph = document.createElement('p');
    paragraph.textContent = "Delicious food and snacks";
    element.appendChild(paragraph);

    const myImage = new Image();
    myImage.src = foodImage;
    myImage.alt = "a picture of some food";
    element.appendChild(myImage);

    return element;
}

export { createHomepageContent }