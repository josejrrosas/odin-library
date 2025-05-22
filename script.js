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
  return newBook; // so we can use it immediately
}

//test
addBookToLibrary("Googly Eyes", "Bib Gibson", 544, false);
addBookToLibrary("Stupid Bob Show", "Jimmy Jones foo", 23, true);
addBookToLibrary("Crucial Moment", "Lawd Mercy", 1511, false);
console.log(myLibrary);

const bookContainer = document.getElementById("book-container");

// append books to #book-container //
function displayBook(book) {
  const newBookDiv = document.createElement("div");
  const newBookBtn = document.createElement("button");

  newBookDiv.className = "books";
  newBookDiv.textContent = `${book.title} by ${book.author}, ${book.pages} pages. Read: ${book.read}`;
  bookContainer.appendChild(newBookDiv);

  newBookBtn.className = "bookDelete"
  newBookBtn.textContent = 'Delete'
  newBookDiv.appendChild(newBookBtn);
}

myLibrary.forEach(displayBook);

const bookFormButton = document.getElementById("new-book-btn");
const bookForm = document.getElementById("book-form");

//add functionality to Add Book Button when clicked
bookFormButton.addEventListener("click", function () {
  bookForm.classList.toggle("hidden");
});

//add functionality to form submit Button when clicked
bookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  const newBook = addBookToLibrary(title, author, pages, read);
  displayBook(newBook);
  bookForm.reset();
});

