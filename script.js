const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID();
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

// create new instance of books and add to mylibrary array
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

//test
addBookToLibrary("201", "Bib Gibson", 544, false);
addBookToLibrary("326", "Jimmy Jones foo", 23, true);
addBookToLibrary("420", "Lawd Mercy", 1511, false);
console.log(myLibrary);

// append books to #book-container //

// select where items will be displayed
const bookContainer = document.getElementById("book-container");
//loop through the myLibrary array
myLibrary.forEach((book) => {
  const newBookDiv = document.createElement("div"); //create the div for each book
  newBookDiv.className = "books"; //give each div a class
  //add the book info to the div 
  newBookDiv.textContent = `${book.title} by ${book.author}, ${book.pages} pages. Read: ${book.read}`;
  bookContainer.appendChild(newBookDiv);
});

