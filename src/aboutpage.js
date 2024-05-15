function createAboutPageContent() {
    const element = document.getElementById('content');
    element.textContent = '';

    const heading = document.createElement('h1');
    heading.textContent = "About page";
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

export { createAboutPageContent }