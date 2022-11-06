let myLibrary = [
  {
    bookName: "Book 1",
    bookAuthor: "Auth 1",
    bookPages: 12,
  },
  {
    bookName: "Book 2",
    bookAuthor: "Auth 2",
    bookPages: 12,
  },
  {
    bookName: "Book 3",
    bookAuthor: "Auth 3",
    bookPages: 12,
  },
  {
    bookName: "Book 4",
    bookAuthor: "Auth 4",
    bookPages: 12,
  },
  {
    bookName: "Book 5",
    bookAuthor: "Auth 5",
    bookPages: 12,
  },
];
const btnAdd = document.querySelector("#btnAddBook");
const settingsRow = document.querySelector(".settings");
const settingsForm = document.querySelector("#settings-form");
const displayLib = document.querySelector(".content-main");
const bookContainer = document.querySelector(".book-container");

function addBookToLibrary(name, author, numPages) {
  if (name.length !== 0 && author.length !== 0 && numPages.length !== 0) {
    myLibrary.push({ bookName: name, bookAuthor: author, bookPages: numPages });
  } else {
    alert("Fill out all fields!");
  }
}

function book() {
  if (myLibrary.length !== 0) {
    for (let i = 0; i < myLibrary.length; i++) {
      const bookItem = document.createElement("div");
      const newButton = document.createElement("button");

      newButton.innerText = "Mark read!";
      newButton.dataset.book = `item${i}`;
      bookItem.id = `item${i}`;
      bookItem.classList.add("book-item");

      bookItem.innerHTML = "Name: " + myLibrary[i].bookName + "<br>";
      bookItem.innerHTML += "Written by : " + myLibrary[i].bookAuthor + "<br>";
      bookItem.innerHTML +=
        "Number of pages : " + myLibrary[i].bookPages + "<br><br>";
      bookItem.appendChild(newButton);
      bookContainer.appendChild(bookItem);
      const bookBtn = bookContainer.querySelectorAll("button");
      bookBtn.forEach((button) => {
        button.addEventListener("click", (e) => {
          let selItem = e.path[1];
          selItem.classList.add("isRead");
          console.log(e.path[1]);
        });
      });

      // bookBtn.addEventListener("click", (e) => {
      //   e.preventDefault();
      //   console.log(e);
      // });
    }
  }
}

btnAdd.addEventListener("click", () => {
  btnAdd.style.cssText = "display: none;";
  settingsForm.style.cssText = "display: flex";
  btnSubmit = document.querySelector("#submitBook");
  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    let bookName = document.querySelector("#bookName").value;
    let bookAuthor = document.querySelector("#bookAuthor").value;
    let bookPages = document.querySelector("#bookPages").value;
    addBookToLibrary(bookName, bookAuthor, parseInt(bookPages));
    book();
  });
});
book();
