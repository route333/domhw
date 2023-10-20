// завдання 1
const galleryItems = document.querySelectorAll("li");
const images = document.querySelectorAll(".image");
let index = 0;
let galleryOn = false;

function toggleImage(item, image) {
    item.classList.toggle("full-image-container");
    image.classList.toggle("full-image");
}

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", (event) => {
        event.currentTarget.parentElement.classList.toggle("full-image-container");
        event.currentTarget.classList.toggle("full-image");
        index = i;
        galleryOn = true;
    });
}

window.addEventListener("keydown", (event) => {
    if (galleryOn === true) {
        if (event.code === "ArrowRight") {
            toggleImage(galleryItems[index], images[index]);
            index = (index + 1) % images.length;
            toggleImage(galleryItems[index], images[index]);
        }
        if (event.code === "ArrowLeft") {
            toggleImage(galleryItems[index], images[index]);
            index = (index - 1 + images.length) % images.length;
            toggleImage(galleryItems[index], images[index]);
        }
        if (event.code === "Escape") {
            toggleImage(galleryItems[index], images[index]);
            galleryOn = false;
        }
    }
});

// завдання 2

const btnCreate = document.querySelector(`[data-action="render"]`);
const btnRemove = document.querySelector(`[data-action="destroy"]`);
const number = document.querySelector("input");
const boxes = document.querySelector("#boxes");
let size = 30;
const array = [];

const create = () => {
    createBoxes(number.value);
    number.value = "";
};

const remove =  () => {
    removeBoxes(number.value);
    number.value = "";
}

btnCreate.addEventListener("click", create);

btnRemove.addEventListener("click", remove);

function createBoxes(num) {
    for (let i = 0; i < num; i++) {
        const box = document.createElement("div");
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        const red = Math.random() * (255 - 0) + 0;
        const green = Math.random() * (255 - 0) + 0;
        const blue = Math.random() * (255 - 0) + 0;
        box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        array.push(box);
        size += 10;
    }
    boxes.append(...array);
}

function removeBoxes(e){
    array.splice((array.length - e), e);
    size -= e * 10;
    size = size < 30 ? 30 : size;
    boxes.innerHTML = "";
    boxes.append(...array);
}