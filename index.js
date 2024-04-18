// Write your code here!
// removing the DOM node main id = main.
main.remove();

// creating a new element with an id 
/*
const newHeader = document.createElement('h1');
    newHeader.id = victory;
    newHeader.textContent = 'TUMAINI KEBAYA is the champion';

const newHeader = document.createElement('h1');

function newElement(element){
    let h1 = document.querySelector('h1')
    h1.id = element
}
newElement(element)
*/
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
document.body.appendChild(newHeader);

newHeader.textContent = "Tumaini Kebaya is the champion";



