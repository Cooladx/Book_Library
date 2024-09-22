
// Where books will be stored as objects in this array. Will loop through the array and display each book on the page through a table.
const myLibrary = [];


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
};

// Selects the add book button
let addBook = document.querySelector("button")

// On click from the user, run the addBookToLibrary function
addBook.onclick = () =>
{
    addBookToLibrary();
}

// This function will prompt user to add book and then send that book to myLibrary to be stored as an object in the array. 
// It can run more than once for the user if they wish to add more books.
function addBookToLibrary() 
{
// Listens for user input by setting up listener event to track when they click
// Prompts user to add a book
    

    addBook.addEventListener("click", () =>
    {
    
     if (!authorName)
        {
            addBookToLibrary();
        }
    else
        {
            
        }
    
    });


    // 

}

console.log("hello")


// IN PRODUCTION FOR WHAT TO FINISH

// Add a button on each book's display to remove book from library

// I'll need to figure out the DOM elements with the actual book objects in some way
// One ez solution is to give each BOOK a data-attribute that corresponds TO THEIR INDEX of the libratry array
// This button just like the ADD BOOK button will also go into a function which
// Will be called removeBookFromLibrary



// Add a button on each book's display to change their read status
// Add a function for each book cover that will toggle their READ status on the book prototype instance


