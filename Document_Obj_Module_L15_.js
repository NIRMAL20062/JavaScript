// DOM-Document Get Method
// DOM (Document Object Model) targeting methods in JavaScript are used to select and manipulate elements within an HTML document.

// Issse sirf get ,set,html me change etc krte hai re-baba


/* How to target a DOM Object:


ID : document.getElementById(id)

Class : document.getElementsByClassName(className)

Tag Name : document.getElementsByTagName(tagName)

CSS Selector : document.querySelector(selector)

All Matching CSS Selectors : document.querySelectorAll(selector)

Name Attribute : document.getElementsByName(name)

Closest Ancestor Matching Selector : element.closest(selector)

Children : element.children (targets direct child elements of a given element)

First Element Child : element.firstElementChild
Last Element Child : element.lastElementChild

Next Sibling Element : element.
nextElementSibling

Previous Sibling Element : element.previousElementSibling

Parent Element : element.parentElement
*/

// var element;
// element=document;
// element=document.all;
// element=document.head;
// element=document.al[9];
// element=document.title;
// element=document.body;
// element=document.links;
// element=document.images;
// element=document.url;
// element=document.domain;
// element=document.forms;
// element=document.getElementById('header');
// element=document.getElementsByClassName('header');
// console.log(element);


// UTNA IMPORTANT NHI HAI CAHOR DO RE BABA SURU K BAS TIN IMPORTANT HAI CALL KRNE WALA ID , CLASS WRNA KOI NHI
 

/* var element;
element = document;
element = document.all; //not use now
element = document.all[5]; // all ko dekho phir jis number jo aa rha hai use get kr sakte hai [x]
console.log(element) */
// element = document.all;
// element = document.head;  //head ko target krega
// element = document.all[9];
// element = document.title   //title target krega
// element = document.body;
// element = document.links;
// element = document.images;
// element = document.URL;
// element = document.domain;
// element = document.forms;
// element = document.getElementById('header');
// element = document.getElementsByClassName('header');
// console.log(element);







// Get and Set Values Methods

// Dom -Get Methods

        // 1.innerText
        // 2.innerHTML
        // 3.getAttributes
        // 4.getAttributesNode
        // 5.Atrributes

/* var element;
// element=document.getElementById('header').innerText;
element=document.getElementById('container').innerText;
element=document.getElementById('container').innerHTML;
element=document.getElementById('header').getAttribute('id');
element=document.getElementById('header').getAttribute('style');
element=document.getElementById('header').getAttributeNode('onclick');
element=document.getElementById('header').getAttributeNode('style').value;
element=document.getElementById('header').attributes; //sab ek barr me hi de dega
element=document.getElementById('header').attributes[1];
element=document.getElementById('header').attributes[1].value;
element=document.getElementById('header').attributes[1].name;
element=document.getElementById('header').attributes[1].value="xyz";

console.log(element);

function abc(){
} */

/* var element;
document.getElementById('header').innerText='wow';
document.getElementById('header').innerHTML='<h1>wow</h1>';

element=document.getElementById('header').innerHTML;
element=document.getElementById('header').setAttribute('style','border:10px dotted black');
// document.getElementById("header").removeAttribute("style")

console.log(element); */




      // DOM-querySelector()
     // and querySelectorAll()

// tino upper wala ko yadd krne se aacha ek querySelector() ka use karega

// var element;
// document.querySelector("#header").innerHTML="<h1>PUSH</h1>";
// element=document.getElementById("header").getAttribute('class');
// element=document.querySelector(".list");
// element=document.querySelectorAll(".list");
// element=document.querySelectorAll(".list")[1].innerHTML;
// element.document.querySelectorAll("#header h1") //header in html file uncomment 2nd h1 

// element=document.querySelectorAll("ul");
// element=document.querySelectorAll("ul")[1].innerHTML;

// console.log(element);

// anjali (gupta) 8294408416 





// DOM CSS STYLING METHODS
// L-65

// style
// className
// classList


//1. style

/* var element=document.querySelector("#header").style.border;
document.querySelector('#header').style.backgroundColor='tan'; //tan kr diya
document.querySelector('#header').style.color='red'; //red kr diya
console.log(element);
 */


//2. className

/* document.querySelector("#header").className='abc';
var element=document.querySelector("#header").className='abc';
var element=document.querySelector("#header").className='abc xyz';
console.log(element); //abc kr diya */

// 3. classList

/* var element;
// document.querySelector("#header").classList='abc';
var element=document.querySelector("#header").classList.add('bardx');
var element=document.querySelector("#header").classList.remove('abc');
var element=document.querySelector("#header").classList;
console.log(element); */




// L-66
// DOM addEventListener() METHODS

// as hame event ko call krne k lite html me jake onclick='abc()' likhna hota tha , lekin ab hame iske alawa bhi event ko call krne k liye add EventListener() ka upyog krna hota hai.jo directly js me hota hai. html sahi dikhega, i.e js ka backchodi js me krenge.

/* var element;
document.getElementById('header').onclick=abc;
function abc(){
        document.getElementById('header').style.background='black';
        } // header per click kroge to black kr dega */

// General-Way of writing
// document.getElementById(id).addEventListener('click',functionName);

// document.getElementById(id).addEventListener('click',function(){statement});

/* var element;

document.getElementById('header').addEventListener('click',abc)

function abc(){
        document.getElementById('header').style.background='green';
        }



document.getElementById('header').addEventListener('mouseenter',function(){
        document.getElementById('header').style.border='10px solid black'
})
document.getElementById('header').addEventListener('mouseenter',function(){
        this.style.border='10px solid black'
}) */

// this likho pura likhane ki jaroorat nhi hai bhai

// if u have 2 div s and u want to add event listener on both divs then u can use addEventListener() method
// but ek ko call krne per dono call honge so 

// sirf padho console me n jao


// without useCapture
/* document.querySelector('#inner').addEventListener('click',function(){alert('inner div')}
);
document.querySelector('#outer').addEventListener('click',function(){alert('outer div')});

// with UseCapture 
document.querySelector('#inner').addEventListener('click',function(){alert('inner div')}
,true);
document.querySelector('#outer').addEventListener('click',function(){alert('outer div')},true); */

// ho kya rha hai bhai
// inner div ka event listener outer div ke event listener se pehle call hoga
// so outer div ka event listener inner div ke event listener se pehle call hoga
// Bhai event listener ke 3rd argument me true likhna padta hai agar use
// capture phase me call karna hai
// agar false likhna hai to bubbling phase me call hoga


// removeEventListener() Method:


/* var elememt;

document.getElementById('header').addEventListener('mouseleave',abc)
function abc(){
        document.getElementById('header').style.background='green';
        }

document.getElementById('header').addEventListener('click',xyz);
function xyz(){
        document.getElementById('header').removeEventListener('mouseleave',abc);
        }
        // bhai agar aapne event listener ko add kiya hai to
        // aapko removeEventListener() method ka use karna padta hai agar aapne event ko remove krne k liye if u wanted to remove the event listener */




// L-67
// JS classList Method
// classList property returns the class name of an element, as a DOMTokenList object.
// The classList property returns a DOMTokenList object, which is a list of strings representing the
// classes of the element.
// The classList property is read-only, meaning you cannot add or remove classes directly from it.
// Instead, you can use the add() and remove() methods to add or remove classes from the

// methods
// add() method: adds a class to the element
// remove() method: removes a class from the element
// toggle() method: toggles a class on the element (adds it if it's not present
// already, removes it if it is present already)
// contains() method: returns a boolean indicating whether a class is present on the element
// item() method: returns the class at the specified index in the class list
// length
// values() method: returns a DOMTokenList object containing the classes of the element
// entries() method: returns an iterator allowing you to iterate over the classes of the element
// forEach() method: calls a function for each class in the class list

/* var elememt;
elememt = document.getElementById('header').addEventListener('click',abc);
function abc(){
        document.getElementById('header').classList.add('xyz','efg')

        document.getElementById('header').classList.remove('xyz')

        console.log(document.getElementById('header').classList);
        
} */
// css me ek xyz class add karna hai tab check kro
//  console m jao and click krne k pehle kuch nhi hoga after u ckick xyz class add ho jayega

/* var elememt;
elememt = document.getElementById('header').addEventListener('click',abc);
function abc(){
        var a =document.getElementById('header').classList.length;
        console.log(a);
        // click kro phir length of used classes i.e kitne classes lag rhe o dikhayega
} */

// toggle()
// toggle() method toggles a class on the element (adds it if it's not present already
// , removes it if it is present already)
/* var elememt;
elememt = document.getElementById('header').addEventListener('click',abc);
function abc(){
        document.getElementById('header').classList.toggle('xyz abc djfh');
} */



// contains()
//  agr class present hai to true agr nhi hai to false

/* var elememt;
elememt = document.getElementById('header').addEventListener('click',abc);
function abc(){
        var a =document.getElementById('header').classList.contains('abc');
        console.log(a);
        // click kre re header tab true false jo bhi aana hoga o aayega
} */

// L-68
// DOM-Traversal Methods
// to target any element or any object in html
//parentNode
// lastChild
// ParentElement
// lastElementChild
// Children
// NextElementSibiling
// childNodes
// nextSibiling
// firstChild
// previousElementSibling
// firstElementChild
// previousSibling






