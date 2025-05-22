const myLibrary = [];
// -------------------------------------------------------------------------
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

// Prototype method to toggle read status
Book.prototype.toggleReadStatus = function() {
  this.read = !this.read;
};
// -------------------------------------------------------------------------
// create new instance of books and add to mylibrary array
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  return newBook; // so we can use it immediately
}

// -------------------------------------------------------------------------
//test
addBookToLibrary("Googly Eyes", "Bib Gibson", 544, false);
addBookToLibrary("Stupid Bob Show", "Jimmy Jones foo", 23, true);
addBookToLibrary("Crucial Moment", "Lawd Mercy", 1511, false);
console.log(myLibrary);
// -------------------------------------------------------------------------
const bookContainer = document.getElementById("book-container");
// append books to #book-container //
function displayBook(book) {
  const newBookDiv = document.createElement("div");
  newBookDiv.className = "books";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "bookDelete";
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("data-id", book.id);

  
  deleteBtn.addEventListener("click", function () {
    const idToRemove = this.getAttribute("data-id");
    const index = myLibrary.findIndex((b) => b.id === idToRemove);
    if (index !== -1) {
      myLibrary.splice(index, 1);
    }
    renderBooks(); // re-render the list
  });

  newBookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Status: ${book.read ? "Read" : "Not Read"}</p>
    `;

  newBookDiv.appendChild(deleteBtn);
  bookContainer.appendChild(newBookDiv);
}

// -------------------------------------------------------------------------
function renderBooks() {
  bookContainer.innerHTML = ""; // clear existing DOM
  myLibrary.forEach(displayBook); // re-render
}


// -------------------------------------------------------------------------
const bookFormButton = document.getElementById("new-book-btn");
const bookForm = document.getElementById("book-form");

//functionality to Add Book Button when clicked
bookFormButton.addEventListener("click", function () {
  bookForm.classList.toggle("hidden");
});

// -------------------------------------------------------------------------
//functionality to form submit Button when clicked
bookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);
  renderBooks(); 
  bookForm.reset();
});

// -------------------------------------------------------------------------

renderBooks();