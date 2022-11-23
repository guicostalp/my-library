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

//Form visibility

const btn = document.getElementById('show-form');

console.log(btn);

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

//Loop through the Array

for (i=0; i < myLibrary.length; i++) {

    createDiv();

}


function createDiv () {

    const div = document.createElement("div"); //create tag
    div.setAttribute("id", "book"); //set ID
    div.setAttribute("class", "books"); //set CLASS

    //Create DIV Content
    let createText = '';

    createText += '<p>Title: '+myLibrary[i].title+'</p>';
    createText += '<p>Author: '+myLibrary[i].author+'</p>';
    createText += '<p>Pages: '+myLibrary[i].pages+'</p>';
    createText += '<p>Read?: '+myLibrary[i].read+'</p>';


    //Insert content inside DIV
    div.innerHTML = createText;

    //appendChield to div ID books
    document.getElementById("books").appendChild(div);
    
}





function addBook(){

    //Use Constructor Book to create newBook input
    const newBook = new Book("abc", "xyz", 258, false)

    //Push newBook to the Array
    myLibrary.push(newBook);

}




//Constructor

function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function (){

        return title +" by "+ author +", " + pages+", " + read

    }

}




