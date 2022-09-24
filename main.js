// see https://repl.it/@Dotdash/Goodreads-Server-Express for implementation details
// const apiUrl = `https://goodreads-server-express--dotdash.repl.co/search/${term}`;

//TODO: create sliding effect in CSS? and use set timeout to create the 8sec delay before disappearing
const popUpThanks = document.querySelector(".thanks-pu");
const popUpCB = document.querySelector(".come-back-pu");
const thanksButton = document.querySelector(".accept");
const comeBackButton = document.querySelector(".cancel");

thanksButton.addEventListener("click", () => popUpThanks.classList.toggle("hide"));
comeBackButton.addEventListener("click", () => popUpCB.classList.toggle("hide"));

