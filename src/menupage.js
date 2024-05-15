function createMenuPageContent() {
    const element = document.getElementById('content');
    element.textContent = '';

    const heading = document.createElement('h1');
    heading.textContent = "Look at our menu";
    element.appendChild(heading);

    const paragraph = document.createElement('p');
    paragraph.textContent = "Delicious food and snacks";
    element.appendChild(paragraph);

    return element;
}

export { createMenuPageContent }