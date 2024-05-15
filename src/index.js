import './style.css';
import { createHomePageContent } from './homepage.js';
import { createMenuPageContent } from './menupage.js';
import { createAboutPageContent } from './aboutpage.js';

document.body.appendChild(createHomePageContent());

const homeButton = document.getElementById('homeButton');
homeButton.addEventListener('click', () => {
    document.body.appendChild(createHomePageContent()
)});

const menuButton = document.getElementById('menuButton');
menuButton.addEventListener('click', () => {
    document.body.appendChild(createMenuPageContent()
)});

const aboutButton = document.getElementById('aboutButton');
aboutButton.addEventListener('click', () => {
    document.body.appendChild(createAboutPageContent()
)});