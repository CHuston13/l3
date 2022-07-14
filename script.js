let myLibrary=[];

const addBook =(ev) =>{
    ev.preventDefault();
    let books = {
        id: Date.now(),
        author: document.getElementById('author').value,
        title: document.getElementById('title').value,
        pages: document.getElementById('pages').value,
    }
         myLibrary.push(books);


        console.warn('added',{myLibrary});
        let pre= document.querySelector('#msg pre');
        pre.textContent ='\n' + JSON.stringify(myLibrary , '\t',2);


}




    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('btn').addEventListener('click' , addBook)
    });