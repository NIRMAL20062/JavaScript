/* 
        TYPES OF LOOP
While Loop
do/while loop
for loop
for/in loop(objects)
forEach (array)

*/

// WHILE-LOOP


var a=1;
while(a<=10){
    document.write(a+')'+' '+"."+'Yahoo Baba <br>');
    a=a+1;
}
document.write('<br>')

var a=1;
document.write('<ol');
while(a<=10){
    document.write('<li>Helo Bardx</li>');
    a=a+1;
}
document.write('</ol>');


//    DO/WHILE-LOOP
document.write("<br>")

var a=1;     //initialising the variable
do{
document.write('Yahoo Baba');
a++;     //incrementing the variable
document.write("<br>")
}while(a<=10)

// NOTE:only one difference in do/while and while loop is that the first time the cursur go inside without checking the condition.

//     FOR-LOOP
document.write("<br>")

for(var a=1;a<=10;a++){
    document.write('Yahoo G ')
    document.write("<br>")
}



//    BREAK AND CONTINUE STATEMENT
for(var a=1;a<=10;a++){
    if(a==5){
        document.write('Hey: '+a+"<br>");
        break
        // continue
    }
    document.write('NUMBER: '+a+"<br>");
    document.write("<br>")
}


for(var a=1;a<=14;a++){
    if(a%2==0){
        document.write(a+'<br>')
        document.write("<br>")
    }
}


//   Nested Loop

// Example-1
for(var a=1;a<=100;a+=10){
    // document.write(a+"  ")
    for(var b=a;b<a+10;b=b+1)
        {document.write(b+" ")
    }
    document.write('<br>')
}


// Example-2

for(var a=1;a<=5;a=1+a){
    for(var b=1;b<=a;b=b+1)
        document.write(b+'  ')
        document.write('<br>')
}

for(var a=5;a>=1;a=a-1){
    for(var b=1;b<=a;b++)
        document.write(b+" ")
        document.write('<br>')
}
for (var a=1;a<=5;a=a+1){
    // document.write(a)
    // document.write('<br>')
    for(var b=1;b<=a;b=b+1)
        document.write(a+" ")
        document.write('<br>')
}

document.write('<br>')


for(var a=5;a>=1;a=a-1){
    for(var b=1;b<=a;b++)
        document.write(a+" ")
        document.write('<br>')
}


for(var a=5;a>=1;a=a-1){
    for(var b=a;b>=1;b--)
        document.write(b);
        document.write('<br>');
}




