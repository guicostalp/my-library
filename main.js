let myLibrary = [
    {
        title: "The Hobbit" ,
        author: "Tolkien" ,
        pages: 1258 ,
        read: true,
        index: 0
    },

    {
        title: "Alice in Wonderland" ,
        author: "Lewis Carol" ,
        pages: 359 ,
        read: true,
        index: 1
    },

    {
        title: "Game of Thrones" ,
        author: "George Martin" ,
        pages: 978 ,
        read: false,
        index: 2
    },

    {
        title: "The Archer" ,
        author: "Bernard Cornwell" ,
        pages: 453 ,
        read: true,
        index: 3
    },

    {
        title: "Excalibur" ,
        author: "Bernard Cornwell" ,
        pages: 689 ,
        read: true,
        index: 4
    }

];


//Create new Object on array - Insert object (input) on Array

function createBook(){

    
    myLibrary.push(getInput());
    console.log(myLibrary)
    createDiv(getInput().title, getInput().author, getInput().pages, getInput().read, getInput().index);

}

//Loop through the Array - Load page

for (i=0; i < myLibrary.length; i++) {


    index = myLibrary.indexOf(i);
    createDiv(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].read, myLibrary[i].index);

}


                // FUNCTIONS


//Get form inputs - Transforms in object (input)                

function getInput(){

    const formTitle = document.querySelector('#title').value;
    const formAuthor = document.querySelector('#author').value;
    const formPages = document.querySelector('#pages').value;
    const formRead = document.querySelector('#read').value;

    const indexInput = myLibrary.length - 1;


    const input = {

        title: formTitle,
        author: formAuthor,
        pages: formPages,
        read: formRead,
        index: indexInput

    }


    return input;

}




//Create DIV for each element on array

function createDiv (title, author, pages, read, index) {

    const div = document.createElement("div"); //create tag
    div.setAttribute("id", "book"); //set ID
    div.setAttribute("class", "books"); //set CLASS



    //Create DIV Content
    let createText = '';

    createText += '<p>Title: '+title+'</p>';
    createText += '<p>Author: '+author+'</p>';
    createText += '<p>Pages: '+pages+'</p>';
    createText += '<p>Read?: '+read+'</p>';
    createText += '<p>Index #: '+index+'</p>';
    createText += '<button class="deleteBtn">Delete</button>'

    //Insert content inside DIV
    div.innerHTML = createText;

    //appendChield to div ID books
    document.getElementById("books").appendChild(div);
    
}

//Use Constructor Book to create newBook input

function addBook(title, author, pages, read){


    const newBook = new Book(title, author, pages, read)

    //Push newBook to the Array
    myLibrary.push(newBook);

}

//Constructor Book

function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function (){

        return title +" by "+ author +", " + pages+", " + read

    }

}

//Form visibility

const btn = document.getElementById('show-form');


btn.addEventListener('click', () => {
    const form = document.getElementById('main-form');

    //checks if form is visible or not
    if (form.style.display === 'none') {
        // 👇️ this SHOWS the form
        form.style.display = 'block';
      } else {
        // 👇️ this HIDES the form
        form.style.display = 'none';
      }


})





