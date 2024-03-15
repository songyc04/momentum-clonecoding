const quotes = [
  {
    quote: "When you have faults, do not fear to abandon them.",
    author: "Confucius"
  },
  {
    quote: "This too shall pass.",
    author: "Et hoc transibit"
  },
  {
    quote: "Being happy never goes out of style.",
    author: "Lilly Pulitzer"
  },
  {
    quote: "Despite the forecast, live like it's spring.",
    author: "Lilly Pulitzer"
  },
  {
    quote: "Change the world by being yourself.",
    author: "Amy Poehler"
  },
  {
    quote: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau"
  },
  {
    quote: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill"
  },
  {
    quote: "But I know, somehow, that only when it is dark enough can you see the stars.",
    author: "Martin Luther King, Jr"
  },
  {
    quote: "The road to success and the road to failure are almost exactly the same.",
    author: "Colin R. Davis"
  },
  {
    quote: "There are better starters than me but I'm a strong finisher.",
    author: "Usain Bolt"
  }
];

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(todaysQuote);

quote.innerText = todaysQuote.quote;
author.innerText = `ㅡ ${todaysQuote.author}`;
