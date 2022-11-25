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
        read: false,
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
        read: false,
        id: ''
    }
];

//Loop through the Array on load page - Create DIV for each element on array with createDiv()

for (i=0; i < myLibrary.length; i++) {

    myLibrary[i].id = Math.floor(Math.random()*10000);    
    createDiv(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].read, myLibrary[i].id);

}

//Event listener forEach Read Checkbox

const checkboxes = document.querySelectorAll("input[type=checkbox]")


checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function (){

        if (this.checked) {

            console.log("Checkbox is checked..");
        } 
        else {
            console.log("Checkbox is not checked..");}

    })

});


                // FUNCTIONS

//Create DIV with objects / Array and inputs

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
    if (read==true) {
        createText += '<input type="checkbox" checked>';
    }
    else {
        createText += '<input type="checkbox">';
    }
    
    createText += '<button id="deleteButton" onclick="removeBook('+id+')">Delete</button>'

    //Insert content inside DIV
    div.innerHTML = createText;

    //appendChild to div ID books
    document.getElementById("books").appendChild(div);
    
}                




//Push new Object into array - Insert object (input) on Array

function createBook(){
    
    myLibrary.push(getInput());
    createDiv(getInput().title, getInput().author, getInput().pages, getInput().read, getInput().id);

}



//Get form inputs - Transforms in object (input) (Constructor)               

function getInput(){

    const formTitle = document.querySelector('#title').value;
    const formAuthor = document.querySelector('#author').value;
    const formPages = document.querySelector('#pages').value;
    const formRead = document.querySelector('input[type=checkbox][id=read]');

    let readCheck = ''
    if (formRead.checked) {
        readCheck = true;

    } else {
        readCheck = false;
    }



    const idInput = Math.floor(Math.random()*10000);

    const input = {

        title: formTitle,
        author: formAuthor,
        pages: formPages,
        read: readCheck,
        id: idInput

    }
    return input;
}





//Remove book from DIV - Remove button

function removeBook(id) {

    const btnId = document.getElementById(id);
    btnId.parentNode.removeChild(btnId);

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