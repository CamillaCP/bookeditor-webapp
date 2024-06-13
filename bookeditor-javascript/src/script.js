const books = [
    {id: 1, name: "Gulliver's Travels", author: "Jonathan Swift" },
    {id: 2, name: "Robinson Crusoe", author: "Daniel Defoe" },
    {id: 3, name: "A Christmas Carol", author: "Charles Dickens" },
    {id: 4, name: "Sherlock Holmes", author: "Arthur Conan Doyle" },
    {id: 5, name: "Treasure Island", author: "Robert Louis Stevenson" },
    {id: 6, name: "Dubliners", author: "James Joyce" },
    {id: 7, name: "Oliver Twist", author: "Charles Dickens" },
    {id: 8, name: "Pride And Prejudice", author: "Jane Austen" }
];

var messageList = new Array();

function navigate(path) {
    window.location.href = path;
}

function getBooks() {
    return books;
}

function getNames() {
    var list = books.map((book) => (
        (book.name)
    ));
    return list;
}

function addLinks() {
    var id;
    var bookNames = getNames();
    var container = document.getElementById('book-list');
    for(var i = 1; i < 5; i++) {
        id = ((i)+1);
        container.innerHTML += `<a class="top-books" href="book-detail.html?id=${id}">${bookNames[i]}</a>`;
    }
    messageList.push("BookService - Fetched Books");
    printMessages();
}

function getID() {
    let searchQuery = window.location.search;
    const searchArray = searchQuery.split("="); 
    let id = searchArray[1];
    return id;
}

function getBookByID() {
    let id = getID();
    let index = ((id)-1); 
    return books[index];
}

function getIDByName(title) {
    for (var i=0; i<books.length; i++) {
        if (books[i].name === title) {
            return id = ((i)+1);
        }
    }
}

function bookDetails() {
    var container = document.getElementById('book-details');
    var messageContainer = document.getElementById('message-list');
    container.innerHTML += `"${getBookByID().name}" Details`;
    var idSlot = document.getElementById('id-slot');
    idSlot.innerHTML += `<label for="id">ID: </label>${getID()}`;
    var nameSlot = document.getElementById('name');
    nameSlot.innerHTML += `<input class="name-form" id="book-name" type="text" placeholder="Name" value="${getBookByID().name}"/>`;
    var authorSlot = document.getElementById('author');
    authorSlot.innerHTML += `<input class="author-form" id="author-name" type="text" placeholder="Author" value="${getBookByID().author}"/>`;

    messageList.push(`BookService - Fetched book with ID=${getID()}`);
    printMessages();
}


function handleSave() {
    var id = getID();
    var index = ((id)-1); 
    var currentBook = getBookByID();
    var container = document.getElementById('book-details');
    var messageContainer = document.getElementById('message-list');
    var newName = document.querySelector('.name-form').value;
    var newAuthor = document.querySelector('.author-form').value;
    if (newName != (currentBook.name)) {
        books[index].name = newName;
    }
    if (newAuthor != (currentBook.author)) {
        books[index].author = newAuthor;
    }
    container.innerHTML = `"${newName}" Details`;

    messageList.push(`BookService - Updated book with ID=${getID()}`);
    printMessages();
}

function filteredSearch() {
    let searchable = getNames();
    const messageContainer = document.getElementById('message-list');
    const searchInput = document.getElementById('search');
    const searchWrapper = document.querySelector('.wrapper');
    const resultsWrapper = document.querySelector('.results');

    searchInput.addEventListener('keyup', () => {
        let results = [];
        let input = searchInput.value;
        if (input.length) {
          results = searchable.filter((item) => {
            return item.toLowerCase().includes(input.toLowerCase());
          });
        }
        renderResults(results);
      });
      
      function renderResults(results) {
        if (!results.length) {
            messageList.push(`BookService - No books matching "${searchInput.value}"`);
            printMessages();
            return searchWrapper.classList.remove('show');
        }

        messageList.push(`BookService - Found books matching "${searchInput.value}"`);
        printMessages();

        const content = results
          .map((item) => {
            return `<li><a href="book-detail.html?id=${getIDByName(item)}">${item}</a></li>`;
          })
          .join('');
      
        searchWrapper.classList.add('show');
        resultsWrapper.innerHTML = `<ul class="search-result">${content}</ul>`;
      }
}

function handleAdd() {
    var newTitle = document.querySelector('.add-book-title').value;
    var lastBook = books[(books.length)-1];
    var newID = (lastBook.id + 1);
    var bookTable = document.getElementById('book-table');
    books.push({id: newID, name: newTitle}); 

    while (bookTable.hasChildNodes()) {
        bookTable.removeChild(bookTable.firstChild);
    }

    for (var i=0; i<books.length; i++) {
        bookTable.innerHTML += `<li><a href="book-detail.html?id=${i+1}">${books[i].id}) ${books[i].name}</a>
                                <button type="button" class="delete" title="Delete this book" onclick="handleRemove(${books[i].id})">
                                X</button></li>`;    
    }  

    messageList.push(`BookService - Added book with ID=${newID}`);
    printMessages();
}

function handleRemove(ID) {
    let index = (ID - 1);
    var bookTable = document.getElementById('book-table');
    books.splice(index, 1);
    if (bookTable.hasChildNodes()) {
        bookTable.removeChild(bookTable.children[index]);
      } 

    messageList.push(`BookService - Deleted book with ID=${ID}`);
    printMessages();
}

function bookTable() {
    var bookTable = document.getElementById('book-table');
    for (var i=0; i<books.length; i++) {
        bookTable.innerHTML += `<li><a href="book-detail.html?id=${i+1}">${books[i].id}) ${books[i].name}</a>
                                <button type="button" class="delete" title="Delete this book" onclick="handleRemove(${books[i].id})">
                                X</button></li>`;    
    }    
    messageList.push(`BookService - Fetched Books`);
    printMessages();
}

function printMessages() {
    const messageContainer = document.getElementById("message-list");
    while (messageContainer.hasChildNodes()) {
        messageContainer.removeChild(messageContainer.firstChild);
    }

    for (var i=0; i<messageList.length; i++) {
        document.getElementById("message-list").innerHTML +=  `<li>${messageList[i]}</li> `;
    }
}

