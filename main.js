
// Where books will be stored as objects in this array. Will loop through the array and display each book on the page through a table.
const myLibrary = [];



// Function to display each book on the page. Created through the DOM as they are since the books
// will be created through their own div on flexbox to ensure they are centered and flexiable.
// Loops through the array of myLibrary, taking those object books and sents it to a div.

function displayBook ()
{
    // Loops through myLibrary which will 
    for (i = 0; i < myLibrary.length; i++)
    {

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
};

// Selects the add book button
let addBook = document.querySelector("button")

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
// Listens for user input by setting up listener event to track when they click
// Prompts user to add a book
    
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
     // Check for which status button was chosen to then pik that one for putting into the object
            // depending on if book was read or not
            // Iterate through the group1 name attribute to determine which radio button was selected
            // Yes read or haven't read.
               
    else if(onlineStatus.checked) 
    {
        status = true;
    }
        
    else
    {
        status = false;
    }
    myLibrary.push(new Book( bookTitle.value, authorName.value, numofPages.value, status));
        
}











// IN PRODUCTION FOR WHAT TO FINISH

// Add a button on each book's display to remove book from library

// I'll need to figure out the DOM elements with the actual book objects in some way
// One ez solution is to give each BOOK a data-attribute that corresponds TO THEIR INDEX of the libratry array
// This button just like the ADD BOOK button will also go into a function which
// Will be called removeBookFromLibrary



// Add a button on each book's display to change their read status
// Add a function for each book cover that will toggle their READ status on the book prototype instance


