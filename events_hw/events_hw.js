// // завдання 1
// const openModalButton = document.querySelector('[data-action="open-modal"]');
// const closeModalButton = document.querySelector('[data-action="close-modal"]');
// const backdrop = document.querySelector(`.backdrop`);
// const modal = document.getElementById("modal");


// const closeModal = () => {
//     document.body.classList.remove("show-modal");
//   };
  
//   const openModal = (event) => {
//     document.body.classList.add("show-modal");
//   };

// openModalButton.addEventListener("click", openModal);
// closeModalButton.addEventListener("click", closeModal);
// // завдання 2

// const backdropClose = (event) => {
//     if (event.target === event.currentTarget) {
//       closeModal();
//     }
//   };

//     backdrop.addEventListener("click", backdropClose);


// // завдання 3
// const red = document.getElementById("red");
// const white = document.getElementById("white");
// const green = document.getElementById("green");


// red.addEventListener("click", () => {
//     document.body.style.background = "red";
// });

// white.addEventListener("click", () => {
//     document.body.style.background = "white";
// });

// green.addEventListener("click", () => {
//     document.body.style.background = "green";
// });

// // завдання 4

// const nameOutput = document.getElementById("name-output");
// const nameInput = document.getElementById("name-input");
// const validationInput = document.getElementById("validation-input");

// nameInput.addEventListener("change", () => {
//   nameOutput.textContent = nameInput.value || "незнайомець";
// });

// validationInput.addEventListener("blur", () => {
//   const validation = validationInput.value.length;

//   if(validation === 6){
//     validationInput.classList.remove("invalid");
//     validationInput.classList.add("valid");
//   } else {
//     validationInput.classList.remove("valid");
//     validationInput.classList.add("invalid");
//   }
// });

// завдання 5

const inputFontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

inputFontSizeControl.addEventListener("input", () => {
  const size = inputFontSizeControl.value;
  text.style.fontSize = `${size}px`;
});