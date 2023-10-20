// завдання 1
// const categoriesList = document.getElementById("categories");
// // console.log(categoriesList);
// const categories = categoriesList.querySelectorAll("h2");
// console.log(`У списку ${categories.length} категорії.`);

// categories.forEach(ctgry => {
//     const ctgryText = ctgry.textContent;
//     // console.log(ctgryText);
//     const ctgryLength = ctgry.nextElementSibling.querySelectorAll("li").length;
//     // console.log(ctgryLength);
//     console.log(`Категорія: ${ctgryText}`);
//     console.log(`Кількість елементів: ${ctgryLength}`);
// });



// завдання 2

// const ingredientsUl = document.querySelector("ul");

// const ingredients = [
//     'Картопля',
//     'Гриби',
//     'Часник',
//     'Помідори',
//     'Зелень',
//     'Приправи',
//   ];

// const list = ingredients.forEach(item => {
//     const galleryItem = document.createElement("li");
//     ingresientsItem.textContent = item;
//     ingredientsUl.appendChild(ingresientsItem);
// });

// console.log(ingredientsUl);

// завдання 3

// const galleryUl = document.querySelector("ul");

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const galleryList = images.forEach(img => {
//     galleryUl.insertAdjacentHTML("afterbegin", `<li><img src="${img.url}" alt="${img.alt}"></li>`);
// });

// console.log(galleryUl);


//  завдання 4

// const btnRemove = document.querySelector("[data-action='decrement']");
// const btnAdd = document.querySelector("[data-action='increment']");
// let num = 0;
// const span = document.getElementById("value");
// span.textContent = num;

// btnAdd.addEventListener("click", () => {
//     num += 1;
//     span.textContent = num;
// });

// btnRemove.addEventListener("click", () => {
//     num -= 1;
//     span.textContent = num;
// });