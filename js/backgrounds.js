const container = document.querySelector("#background-container");

const images = ["background_0.jpg", "background_1.jpg", "background_2.jpg", "background_3.jpg", "background_4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.id = "bgImage";
bgImage.src = `img/${chosenImage}`;

container.appendChild(bgImage);