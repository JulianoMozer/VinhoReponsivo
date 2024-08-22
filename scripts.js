// script.js

let index = 0;

function moveCarrossel(step) {
    const carrossel = document.querySelector('.carrossel');
    const totalItems = carrossel.children.length;
    index = (index + step + totalItems) % totalItems;
    carrossel.style.transform = `translateX(-${index * 300}px)`;
}

document.querySelector('.botao-carrossel.prev').addEventListener('click', () => moveCarrossel(-1));
document.querySelector('.botao-carrossel.next').addEventListener('click', () => moveCarrossel(1));
