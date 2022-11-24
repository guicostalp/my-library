let myLibrary = [
    {
        title: "The Hobbit" ,
        author: "Tolkien" ,
        pages: 1258 ,
        read: true,
        id: ''
    },

    {
        title: "Alice in Wonderland" ,
        author: "Lewis Carol" ,
        pages: 359 ,
        read: true,
        id: ''
    },

    {
        title: "Game of Thrones" ,
        author: "George Martin" ,
        pages: 978 ,
        read: false,
        id: ''
    },

    {
        title: "The Archer" ,
        author: "Bernard Cornwell" ,
        pages: 453 ,
        read: true,
        id: ''
    },

    {
        title: "Excalibur" ,
        author: "Bernard Cornwell" ,
        pages: 689 ,
        read: true,
        id: ''
    }

];


//Create new Object on array - Insert object (input) on Array

function createBook(){

    
    myLibrary.push(getInput());

    createDiv(getInput().title, getInput().author, getInput().pages, getInput().read, getInput().id);

}

//Loop through the Array - Load page

for (i=0; i < myLibrary.length; i++) {


    myLibrary[i].id = Math.floor(Math.random()*10000);
    
    createDiv(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].read, myLibrary[i].id);

}


                // FUNCTIONS


//Get form inputs - Transforms in object (input)                

function getInput(){

    const formTitle = document.querySelector('#title').value;
    const formAuthor = document.querySelector('#author').value;
    const formPages = document.querySelector('#pages').value;
    const formRead = document.querySelector('#read').value;

    const idInput = Math.floor(Math.random()*10000);


    const input = {

        title: formTitle,
        author: formAuthor,
        pages: formPages,
        read: formRead,
        id: idInput

    }


    return input;

}




//Create DIV for each element on array

function createDiv (title, author, pages, read, id) {

    const div = document.createElement("div"); //create tag
    div.setAttribute("id", id); //set ID
    div.setAttribute("class", "book"); //set CLASS



    //Create DIV Content
    let createText = '';

    createText += '<p>Title: '+title+'</p>';
    createText += '<p>Author: '+author+'</p>';
    createText += '<p>Pages: '+pages+'</p>';
    createText += '<p>Read?: '+read+'</p>';
    createText += '<p>Id #: '+id+'</p>';
    createText += '<button id="deleteButton" onclick="removeBook('+id+')">Delete</button>'

    //Insert content inside DIV
    div.innerHTML = createText;

    //appendChield to div ID books
    document.getElementById("books").appendChild(div);
    
}

//Remove book from DIV

function removeBook(id) {

    const btnId = document.getElementById(id);
    btnId.parentNode.removeChild(btnId);



    console.log(btnId);
    



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





