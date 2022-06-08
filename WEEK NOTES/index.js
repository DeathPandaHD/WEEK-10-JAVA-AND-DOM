/* finding elements in dom and by css selectors example code:JS //! remove comments (/* * /) to test code

 let buttonsbyclassname = document.getElementsByClassName('my-class'); //! html elements can be found by id , class name and tag name.
console.log(buttonsbyclassname) ;

 let buttonsByCSSSelector = document.querySelectorAll('.my-class');//* this prints out everything with the class = my-class,
//* button.my-class will only print out the button elements and not the h1 element with the same class 
console.log(buttonsByCSSSelector)
*/

/* interacting with the dom notes:JS */
   let button=document.getElementById('btn');
   let content=document.getElementById('content');
//* document.getElementById('content').innerHTML = 'Goodbye.' this was used to change the html <p> from showing hello. to goodbye.

button.addEventListener('click',() =>{
    if (content.innerHTML == 'Goodbye.') {
        content.innerHTML ='Hello.';
    }else{
        content.innerHTML= 'Goodbye.'
    }
}); //! Used to change simple content button changes text from Hello. to Goodbye. and vice versa.

document.getElementById('remove').addEventListener('click',() => {
    content.parentNode.removeChild(content);
}); //! removes element from DOM.*

/* document.getElementById('add').addEventListener('click', () => {
    var parent = document.getElementById('paragraphs');
    var newElement = document.createElement('p');
    newElement.innerHTML = 'this is the a new paragraph';
    parent.appendChild(newElement);
}) */ //! adds predefined new paragraph*

document.getElementById('add').addEventListener('click', () => {
    var parent = document.getElementById('paragraphs');
    var newElement = document.createElement('p');
    newElement.innerHTML = document.getElementById('new-text').value; //! this replaces the static 'this is a new paragraph
    //! w/ document.getElementById('new-text').value, which prints string put into text input that has id='new-text'.
    newElement.setAttribute('id',id++);
    parent.appendChild(newElement);
    document.getElementById('new-text').value = '' //! changes text in input box to blank after add new paragraph button is pressed
}) //! adds new paragraph using user input

document.getElementById('remove').addEventListener('click',() => {
    let idToRemove = document.getElementById('remove-id').value;
    let elementToRemove = document.getElementById(idToRemove);
    elementToRemove.parentNode.removeChild(elementToRemove);
    document.getElementById('remove-id').value = '';
}); //! removes element using id*

let id=0;




