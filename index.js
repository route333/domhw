const body = document.querySelector("body");
// завдання 1
const btn = document.querySelector("button");
btn.textContent = document.querySelector("p").textContent;

// завдання 2

const img = document.querySelector("img");
img.src =
  "https://play-lh.googleusercontent.com/ZrNeuKthBirZN7rrXPN1JmUbaG8ICy3kZSHt-WgSnREsJzo2txzCzjIoChlevMIQEA";

// завдання 3

const a = document.querySelector("a");
a.href = "https://www.youtube.com/";
const pic = document.querySelector("img");
pic.alt = "gmail";

// завдання 4

const list = document.createElement("ul");

const li1 = document.createElement("li");
li1.textContent = "a";

const li2 = document.createElement("li");
li2.textContent = "aa";

const li3 = document.createElement("li");
li3.textContent = "aaa";

list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);

document.body.appendChild(list);

list.firstElementChild.textContent = "aaaa";

console.log(body);
