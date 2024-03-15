const container = document.querySelector("#background-container");

const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.id = "bgImage";
bgImage.src = `img/${chosenImage}`;

container.appendChild(bgImage);