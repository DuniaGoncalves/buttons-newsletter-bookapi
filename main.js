// see https://repl.it/@Dotdash/Goodreads-Server-Express for implementation details
// const apiUrl = `https://goodreads-server-express--dotdash.repl.co/search/${term}`;

//TODO: create sliding effect in CSS? and use set timeout to create the 8sec delay before disappearing
const popUpThanks = document.querySelector(".thanks-pu");
const popUpCB = document.querySelector(".come-back-pu");
const thanksButton = document.querySelector(".accept");
const comeBackButton = document.querySelector(".cancel");

thanksButton.addEventListener("click", () => popUpThanks.classList.toggle("hide"));
comeBackButton.addEventListener("click", () => popUpCB.classList.toggle("hide"));


// BOOK API

const searchBtn = document.querySelector('.search-btn').addEventListener('click', apiRequest);
const bookInfo = document.querySelector('.book-info');

async function apiRequest() {
  const term = document.querySelector('.search-input').value
  try {
    const response = await fetch(`https://goodreads-server-express--dotdash.repl.co/search/${term}`);
    const data = await response.json(); 
    console.log(data);

    const bookArray = data.list;
    console.log(bookArray);

    bookArray.forEach(function (book) {
      bookInfo.innerHTML += `
        <div class="book">
          <img src="${book.imageUrl}" />                                    
          <h6>${book.title}</h6>
          <p>${book.authorName}</p>
        </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}
