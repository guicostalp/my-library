let myLibrary = [
    {
        title: "The Hobbit" ,
        author: "Tolkien" ,
        pages: 1258 ,
        read: true
    },

    {
        title: "Alice in Wonderland" ,
        author: "Lewis Carol" ,
        pages: 359 ,
        read: true
    },

    {
        title: "Game of Thrones" ,
        author: "George Martin" ,
        pages: 978 ,
        read: false
    },

    {
        title: "The Archer" ,
        author: "Bernard Cornwell" ,
        pages: 453 ,
        read: true
    },

    {
        title: "Excalibur" ,
        author: "Bernard Cornwell" ,
        pages: 689 ,
        read: true
    }

];


//Create new Object on array - Insert object (input) on Array

function createBook(){

    
    myLibrary.push(getInput());

    createDiv(getInput().title, getInput().author, getInput().pages, getInput().read);

}

//Loop through the Array - Load page

for (i=0; i < myLibrary.length; i++) {

    createDiv(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].read);

}


                // FUNCTIONS


//Get form inputs - Transforms in object (input)                

function getInput(){

    const formTitle = document.querySelector('#title').value;
    const formAuthor = document.querySelector('#author').value;
    const formPages = document.querySelector('#pages').value;
    const formRead = document.querySelector('#read').value;

    const input = {

        title: formTitle,
        author: formAuthor,
        pages: formPages,
        read: formRead

    }

    return input;

}




//Create DIV for each element on array

function createDiv (title, author, pages, read) {

    const div = document.createElement("div"); //create tag
    div.setAttribute("id", "book"); //set ID
    div.setAttribute("class", "books"); //set CLASS

    //Create DIV Content
    let createText = '';

    createText += '<p>Title: '+title+'</p>';
    createText += '<p>Author: '+author+'</p>';
    createText += '<p>Pages: '+pages+'</p>';
    createText += '<p>Read?: '+read+'</p>';


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





