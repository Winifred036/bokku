const slides = document.querySelector(".slides");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

next.onclick = () => {
    index = (index + 1) % 5;
    slides.style.transform = `translateX(-${index * 100}%)`;
};

prev.onclick = () => {
    index = (index - 1 + 5) % 5;
    slides.style.transform = `translateX(-${index * 100}%)`;
};