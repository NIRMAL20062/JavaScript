/* var a=[12,43,23];
document.write(a)

document.write('<br>');
document.write(a[0]);
document.write('<br>');
document.write(a[1]);
document.write('<br>');
document.write(a[2]);

document.write('<br>');
document.write('<br>');

for(var b=0;b<=2;b++){
    document.write(a[b]);
    document.write('<br>');
}

document.write('<br>');
document.write('<br>');

const arr = [1, 2, 3, 4, 5];
console.log(arr.length);
document.write(arr.length);
// Output: 5


document.write('<br>');
document.write('<br>'); */

// L-2

/* var ary=new Array();
ary[0]=12;
ary[1]=12;
ary[8]=12;
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

// I love u my gurl❤️💕😘💖🫀💏❤️

/* var ary =[
['Harry',18,'male','B.com'],
['sunny',19,'male','bca'],
['sarah',18,'female','bca']
]; */
// for(var a=0;a<3;a++){
//     for (var b=0;b<3;b++){
//         document.write(ary[a][b] + " ");
//     }
//     document.write("<br>");
// }

/* document.write("<table table border='2px' cellspacing='30px'>");
for(var a=0;a<ary.length;a++){
    document.write("<tr>");
    for (var b=0;b<ary.length;b++){
        document.write('<td>'+ary[a][b] + "</td>");
}
    document.write("/tr");
}
document.write("</table>")
 */


// MODIFYING OR DELETING ARRAY ELEMENT

/* var ary =
    ['Harry',18,'male','B.com'];
ary[2]=300;
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
/* document.write(ary.join(' '));
document.write('<br>'); */

// Array Slice() and Splice()


/* var g =ary.slice(1,3);
document.write(g);
 */


/* var ary=['sanjay','aman','rehamn','hello'];
document.write(ary); */

/* ary.splice(2,0,'Neh','Kar');
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
} */
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


var ary=['sanjay','aman','rehamn','hello'];
var b =ary.toString();
document.write(b);
ary.fill('ram')
document.write('<br>');

document.write(ary);


// FOR-EACH LOOP


var ary=['sanjay','aman','rehamn','hello'];
ary.forEach(function(value){
   document.write(value+'<br>')
});
document.write('<br>');
ary.forEach(function(value,index){
   document.write(index+" : "+value+'<br>')
});












