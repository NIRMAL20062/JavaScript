var a=[12,43,23];
// document.write(a)

/* document.write('<br>');
document.write(a[0]);
document.write('<br>');
document.write(a[1]);
document.write('<br>');
document.write(a[2]);

document.write('<br>');
document.write('<br>'); */

/* for(var b=0;b<=a.length-1;b++){
    document.write(a[b]);
    document.write('<br>');
} */



/* let obj = { a: 1, b: 2, c: 3 };
document.write(Object.values(obj)[0]);
document.write("<br>")
document.write(Object.keys(obj)[0]); */
/* let obj = { a: 1, b: 2, c: 3 };
document.write(Object.keys(obj).length); // Output:3
document.write("<br>")
document.write(Object.keys(obj));
document.write("<br>")
document.write(Object.values(obj));
document.write("<br>")
document.write(Object.entries(obj));
document.write("<br>")
document.write(Object.assign(obj));
document.write("<br>")
document.write(Object.defineProperty); */


/* document.write('<br>');
document.write('<br>');
const arr = [1, 2, 3, 4, 5];
console.log(arr.length);
document.write(arr.length);
// Output: 5
document.write('<br>');
document.write('<br>'); */

// L-2

/* let newArray = []; // Creates an empty array
let fruits = ["apple", "banana", "cherry"]; // Creates an array with elements
document.write(fruits) */

/* let newArray = new Array(); // Creates an empty array
let numbers = new Array(3); // Creates an array with 3 empty slots
let colors = new Array("red", "blue", "green"); // Creates an array with specified elements
document.write(numbers)
document.write(newArray)
document.write(colors) */


/* let newArray = Array.of(1, 2, 3); // [1, 2, 3]
document.write(newArray) */


/* let newArray = Array.from("hello"); // ["h", "e", "l", "l", "o"]
document.write(newArray)
document.write("<br>")
let nums = Array.from([1, 2, 3], x => x * 2); // [2, 4, 6] (with a mapping function)
document.write(nums) */


/* let newArray = [];
newArray.push(1); // [1]
newArray.push(2, 3); // [1, 2, 3]
document.write(newArray) */

/* let originalArray = [1, 2, 3];
let newArray = originalArray.map(x => x * 2); // [2, 4, 6]
document.write(newArray) */


/* var ary=new Array();
ary[0]=12;
ary[1]=12;
ary[80]=12;
document.write(ary) */
// Browser Me kholo re baba


/* var ary=new Array();
for(var g=0;g<3;g++){
    ary[g]=prompt('Enter The Value: ');
}
document.write("<ul>");
for (var a=0;a<3;a++){
    document.write('<ul>'+ary[a]+'</li>');
}
document.write('</ul'); */



// L-3   Multi-dimentional Array

//love u my gurl❤️💕😘💖🫀💏❤️

/* var ary =[
['Harry',18,'male','B.com'],
['sunny',19,'male','bca'],
['sarah',18,'female','bca']
];
for(var a=0;a<ary.length;a++){
    // document.write(ary[a]+ " <br>");
    for (var b=0;b<ary.length;b++){
        // document.write(ary[a][b] + " <br>");
        // document.write(ary[b] + " <br>");
        for (var c=0;c<ary[a].length;c++){
            document.write(ary[a][c]+ " ");
    }
    document.write("<br>");
}
} */

/* document.write("<table border='8' cellspacing='30'>");
var ary = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (var a = 0; a < ary.length; a++) {
    document.write("<tr>");
    for (var b = 0; b < ary[a].length; b++) { // Use ary[a].length for dynamic column size
        document.write('<td>' + ary[a][b] + "</td>");
    }
    document.write("</tr>"); // Corrected closing tag
}
document.write("</table>"); */




// MODIFYING OR DELETING ARRAY ELEMENT

/* var ary =
    ['Harry',18,'male','B.com'];
    document.write(ary)
ary[2]=300;
document.write('<br>')
document.write(ary)
delete ary[3]
document.write('<br>')
document.write(ary) */



// ARRAY-SORT AND REVERSE

/* 
sort() 
reverse()
pop()
push()
shift()
unshift()
concat()
join()
slice()
splice()
isArray()
indexOf()
lastindexOf()
entries()
every()
filter()
find()
findindex()
includes()
some()
forEach()
toString()
valueOf()
fill()
*/

/* var ary =['e','c','b','a','d'];
document.write(ary);
ary.sort()
document.write('<br>');
document.write(ary);
document.write('<br>');
ary.reverse()
document.write(ary);
document.write('<br>'); */


// Array POP() AND PUSH()

/* var ary=['sanjay','aman','rehamn'];
document.write(ary);
document.write('<br>');
ary.pop();
document.write(ary);
document.write('<br>');
ary.push('Bardx')
document.write(ary); */


// Array Shift() and Unshift()

/* var ary=['sanjay','aman','rehamn'];
document.write(ary);
document.write('<br>');
ary.shift()
document.write(ary);
document.write('<br>');
ary.unshift('bardx')
document.write(ary);
document.write('<br>'); */


// Array Concat() and Join()

/* var ary=['sanjay','aman','rehamn','hello'];
var ary1=["karan","Bardx"]
document.write(ary);
document.write('<br>');
document.write(ary.concat(ary1))


document.write('<br>'); */


// comma wooma nhi aaya na babu
/* var ary=['sanjay','aman','rehamn','hello'];
document.write(ary.join(' '));
document.write('<br>'); */

// Array Slice() and Splice()

/* var ary=['sanjay','aman','rehamn','hello'];
var g =ary.slice(1,3);
document.write(g); */



/* var ary=['Sanjay','Aman','Rehamn','Hello'];
document.write(ary);
ary.splice(2,0,'Neh','Kar');
document.write('<br>');
document.write(ary); */

/* ary.splice(2,1,'Neh','Kar');
document.write('<br>');
document.write(ary); */


// Array isArray()

/* var ary=['sanjay','aman','rehamn','hello'];
document.write(ary)
document.write("<br>")
var b=Array.isArray(ary);
document.write(b)
document.write("<br>")


if(Array.isArray(ary)==true){
    document.write('This Is an Array');
}else{
    document.write("Is not an Array")
} */


// indexOf() and lastIndexOf()


/* var ary=['sanjay','aman','rehamn','hello'];
var b=ary.indexOf('aman',0);
document.write(b) */

/* var ary=['sanjay','aman','rehamn','hello'];
var b=ary.lastIndexOf('aman',2);
document.write(b); */

// Includes()

/* var ary=['sanjay','aman','rehamn','hello'];
var b=ary.includes('hello')
document.write(b) */


// some() and every()

/* var ary=[16,18,3,55];
var b=ary.some(checkadult);
document.write(b)
function checkadult(age) {
    return age>=18;  
}
// document.write('<br>')

/* var ary=[16,18,3,55];
var b=ary.every(checkadult);
document.write(b)
function checkadult(age) {
    return age>=18;  
} */

/* var ages=[10,43,37,77];
var b=ages.find(getage);
document.write(b)
function getage(age){
    return age>=18;
} */
/* var ages=[10,43,37,77];
var b=ages.findIndex(getage);
document.write(b)
function getage(age){
    return age>=18;
} */


// filter()

/* var ages=[10,23,8,20];
var adultage=ages.filter(getage)
document.write(adultage)
function getage(age){
    return age>=18;
} */


// toString(),valueOf(),fill()


/* var ary=['sanjay','aman','rehamn','hello'];
var b =ary.toString();
document.write(b);
ary.fill('ram')
document.write('<br>');

document.write(ary); */


// FOR-EACH LOOP


/* var ary=['sanjay','aman','rehamn','hello'];
ary.forEach(function(value){
   document.write(value+'<br>')
});
document.write('<br>');
ary.forEach(function(value,index){
   document.write(index+" : "+value+'<br>')
});
 */











