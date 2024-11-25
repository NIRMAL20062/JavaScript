var x=1;
var b=3;
if(x<b){
    document.write('X is greater');
}

//  logical operators

// if condition 1 and 2 are true then statement will run
// if both false then statememnt will not run it will out

//  3-Types
// &&       Logical AND
// ||       Logical OR
// !        Logical NOT

/* if(condition_1 && condition_2){
    statement
}
if(condition_1 || condition_2){
    statement
}
if !(condition){
    statement
} */


document.write('<br>')


var age=20;
if(age>=18 && age<=21){
    document.write('Hello')
}

// NOTE:To check result in console i.e browser me open kro html and inspect me jake console me dekho
console.log('Helloyou are eligible')

document.write('<br>')


var age=20;
if(age>=20 || age<=1){
    document.write('Hello Kello')
}

// var ka value change ekrke dekho
document.write('<br>')


// If-Else Statement

var f=15;
if(f>30){
    document.write('F is GREATER')
}else{
    document.write('F is Small')
}

document.write('<br>')
var f=15;
var g='15'
if(f===g){
    document.write('F same' +f)
}else{
    document.write('F is not same'+ ' '+g)
}
document.write('<br>')
document.write('<br>')

// if-else-if Statement

var time=6
if(time<12){
    document.write('Time before noon')
} else if(time>5){
    document.write('Time after noon')
} else{
    document.write('Its night')
}

document.write('<br>')
document.write('<br>')


// Ternery Operators
// true or false deta hai

// (condition)? True Statement:False Statement
var t =10;
var z;
(t>21)?  z='True':z="False";
document.write(z);
document.write('<br>')
z=(t==10)? 'true':'false';
document.write(z);

document.write('<br>')

var q=100;
var p;
b ='Value is'+" "+ (q>10 ?'true': ' false')
document.write(b);

// Switch Cases

document.write('<br>')
var day=5
switch (day) {
    case 0:
        document.write('sunday')
        break;
    case 1:
        document.write('Monday')
        break;
    case 2:
        document.write('tueday')
        break;
    case 3:
        document.write('wednesday')
        break;
    case 4:
        document.write('thursday')
        break;
    case 5:
        document.write('friday')
        break;
    case 6:
        document.write('saturday')
        break;
    default:
        document.write('enter valid no.')
        break;
}

