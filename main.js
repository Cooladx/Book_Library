
// Where books will be stored as objects in this array. Will loop through the array and display each book on the page through a table.
const myLibrary = [];



// Function to display each book on the page. Created through the DOM as they are since the books
// will be created through their own div on flexbox to ensure they are centered and flexiable.
// Loops through the array of myLibrary, taking those object books and sents it to a div.

function displayBook ()
{
    let container = document.querySelector("#container");

    console.log(container);

    container.textContent = '';

    // Loops through myLibrary which will check in the myLibrary index and will create a new DIV for the book contents to be displayed on.
    for (i = 0; i < myLibrary.length; i++)
    {
        let table = document.createElement("table");
        table.setAttribute("data-index", i);
        table.classList.add("bookTable");
        container.appendChild(table);
        table.textContent = myLibrary[i].info();

        let authorField = document.createElement("td");
        table.appendChild(authorField)
        authorField.textContent = myLibrary[i].author; //getAuthor();

        // Create toggle button for each book line
        let toggleButton = document.createElement("button");
        toggleButton.setAttribute("data-index", i);
        toggleButton.classList.add ("toggleBook");
        table.appendChild(toggleButton);
        toggleButton.textContent = "TOGGLE"

       // Creates delete button for each book line
        let delButton = document.createElement("button");
        delButton.setAttribute("data-index", i);
        delButton.classList.add ("removeBook");
        table.appendChild(delButton);
        delButton.textContent = "DELETE"

    }

};


// the constructor to create books for the user depending on their input data
function Book (title, author, pageNumber, status) 
{
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.status = () => 
     {
        if (status === true)
        {
            return "have read";
        }

        else
        {
            return "have not read"
        }
    

     }

     // Displays the contents of a given book.
     this.info = () =>
        {
            return [this.title, this.author, this.pageNumber, this.status()];
        }
    
    this.getTitle = () =>
    {
        return this.title;
    }

    this.getAuthor = () =>
    {
        return this.author;
    }
};

// Selects the add book button
let addBook = document.querySelector(".addBook")

// On click from the user, run the addBookToLibrary function and sent event as a parameter
// for event.preventDefault
addBook.onclick = (event) =>
{
    addBookToLibrary(event);
}

// This function will prompt user to add book and then send that book to myLibrary to be stored as an object in the array. 
// It can run more than once for the user if they wish to add more books.
function addBookToLibrary(event) 
{
// Allows data to be flowed in through javascript and not the server automatically.
    event.preventDefault()
  
    
    const bookTitle = document.querySelector("#bookName");
    const authorName = document.querySelector("#authorName");
    const numofPages = document.querySelector("#numOfpages");
    const onlineStatus = document.querySelector("#Online");
    const offlineStatus = document.querySelector("#Offline");

    let status = false;
        
    if (!bookTitle.value || !authorName.value || !numofPages.value || (!onlineStatus.checked && !offlineStatus.checked)) 
    {
        return console.log("Warning: you have not entered all inputs in the form. Please try again");
   
    }
     // Check for which status button was chosen to then pick that one for putting into the object
    // depending on if book was read or not
    else if(onlineStatus.checked) 
    {
        status = true;
    }
        
    else
    {
        status = false;
    }
    // After all data is grabbed via DOM and status has been determined, this new book 
    // will be pushed onto the end of the array for myLibrary
    let pushBook = myLibrary.push(new Book(bookTitle.value, authorName.value, numofPages.value, status));
    
    // Take the book that has been constructored with user's input and send it to displayBook function
    displayBook();
        
}







// IN PRODUCTION FOR WHAT TO FINISH

// Add a button on each book's display to remove book from library

// I'll need to figure out the DOM elements with the actual book objects in some way
// One ez solution is to give each BOOK a data-attribute that corresponds TO THEIR INDEX of the libratry array
// This button just like the ADD BOOK button will also go into a function which
// Will be called removeBookFromLibrary



// Add a button on each book's display to change their read status
// Add a function for each book cover that will toggle their READ status on the book prototype instance


