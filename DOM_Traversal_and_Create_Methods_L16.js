// L-68
// DOM-Traversal Methods
// to target any element or any object in html

//parentNode
// ParentElement

// lastChild
// lastElementChild

// nextSibiling
// NextElementSibiling

// Children
// childNodes


// firstChild
// firstElementChild

// previousElementSibling
// previousSibling



// 1.parentElement and parentNode

// console.log(document.getElementById('inner').parentElement);
// document.getElementById('inner').parentElement.style.background='blue'
// document.getElementById('Child-C').parentElement.style.background='blue'

// console.log(document.getElementById('Child-C').parentNode)
// console.log(document.getElementById('main').parentNode);
// console.log(document.getElementById('main').parentElement);
// document.getElementById('Child-C').parentElement.style.background='blue'

// L-69
//2. Children and childNodes


/* console.log(document.getElementById('outer').children);
console.log(document.getElementById('inner').children);
console.log(document.getElementById('inner').children[2]);
document.getElementById('inner').children[1].style.background='blue';
console.log(document.getElementById('inner').children[1].innerHTML);


console.log(document.getElementById('inner').childNodes);
console.log(document.getElementById('inner').childNodes[1].innerHTML); */


// L-70
// firstChild and firstElementChild

/* console.log(document.getElementById('inner').firstElementChild);
console.log(document.getElementById('inner').firstElementChild.innerHTML);
console.log(document.getElementById('inner').firstElementChild.style.background='red');

console.log(document.getElementById('inner').lastElementChild);
console.log(document.getElementById('inner').lastElementChild.innerHTML);
console.log(document.getElementById('inner').lastElementChild.style.background='red'); */



/* console.log(document.getElementById('inner').firstChild);
console.log(document.getElementById('inner').lastChild);
console.log(document.getElementById('Child-C').firstChild); */

// L-71
// nextSibling and previousSibling and nextElementSibling and previousElementSibling


/* console.log(document.getElementById('Child-C').nextElementSibling);
console.log(document.getElementById('Child-C').nextElementSibling.innerHTML);
(document.getElementById('Child-C').nextElementSibling.style.background='red');


console.log(document.getElementById('Child-C').previousElementSibling);
console.log(document.getElementById('Child-C').previousElementSibling.innerHTML);
(document.getElementById('Child-C').previousElementSibling.style.background='red'); */

/* console.log(document.getElementById('Child-C').previousSibling);
console.log(document.getElementById('Child-C').nextSibling); */


// L-72
// Create -Methods

// createElement
// createtextNode
// createComment

// we can write any tag , text and comment in html file by js by this methods
 
/* console.log(document.createElement('p'));
console.log(document.createElement('h2'));

console.log(document.createTextNode('Hello World').nodeValue);

console.log(document.createComment('this is comment'));
 */


// L-73

// DOM-Append Methods
// appendChild and insertBefore
// so hamne 72 lecture me tag bananya and text likha but to add this we use append

/* var x=(document.createElement('h2'));
var y=(document.createTextNode('Hello World'));
x.appendChild(y)
console.log(x);
// document.getElementById('Child-C').appendChild(x)
// document.getElementById('Child-C').appendChild(y)
document.getElementById('inner').appendChild(y)    //last me add ho rha


var z= document.createComment('A Comment')
document.getElementById('inner').appendChild(z)   //wow ek last me comment added

// specify a position u wanna append
document.getElementById('inner').insertBefore(z,document.getElementById('inner').childNodes[2]) */



// L-74

// insertAdjacentElement    <p></p>
// insertAdjacentHTML       <p>Hello World</p>
// insertAdjacentText       Hello World

// uper 73 lecture me jo hai o bas append krenge per ye tino append and create dono kr sakte hai.

// 1.insertAdjacentElement

// a.beforebegin
// b.afterbegin
// c.beforeend
// d.afterend

/* var newElement=document.createElement('h3');
//  tag banaya
var newText=document.createTextNode('Hello World');
// text likha
newElement.appendChild(newText);
// dono ko merge kiya
var target=document.getElementById('Child-C');
// id select kiya
target.insertAdjacentElement('beforebegin',newElement)
// before me add kiya
target.insertAdjacentElement('afterbegin',newElement) */




/* var target=document.getElementById('Child-C')
// id select kiya
var newElement="<h2>This Is Heading </h2>"

target.insertAdjacentHTML('beforebegin',newElement) //before me add kiya
target.insertAdjacentHTML('afterend',newElement) //before me add kiya */


/* var target=document.getElementById('Child-C');
// id select kiya
var newtext="This Is Heading";

target.insertAdjacentText('afterend',newtext); //before me add kiya */

// L-75

// replaceChild() and removeChild()

/* var newElement=document.createElement('div');

var newText=document.createTextNode('Z');

newElement.appendChild(newText);

var target=document.getElementById('inner');

var oldelement=target.children[1];

console.log(oldelement);

target.replaceChild(newElement,oldelement)
// A ko Z se replace */



/* var target=document.getElementById('inner');

var oldelement=target.children[1];

target.removeChild(oldelement) //A ko remove kiya */

// L-76
// ColneNode()
// html me two ul list banao ekse dusre me colne kro


var target=document.getElementById('list1').children[0];
var copyelement=target.cloneNode(true);

// if false then it only copy attributes and tag
// if true then it copy all i.e inner value
console.log(copyelement);
document.getElementById('list2').appendChild(copyelement)

// 2nd list me copy kiya A










