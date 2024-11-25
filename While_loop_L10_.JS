/* 
        TYPES OF LOOP
While Loop
do/while loop
for loop
for/in loop(objects)
forEach (array)

*/

// WHILE-LOOP


/* var a=1;
while(a<=10){
    document.write(a+')'+' '+"..."+' <br>');
    a=a+1+1;
}
document.write('<br>') */

/* b=0;
while(b<10){
    document.write(+b+' '+'(^_^)'+ '<br>');
    b=b+1;
}
document.write('<br>') */


// may code not seen here a glitch has been occured
/* var fact = 1;
var num = 5;
while (num > 0) {
    fact = fact * num;
    num = num - 1;
}
document.write("Factorial: " + fact); */



/* var a=1;
document.write('<ol>');
while(a<=10){
    document.write('<li type="square" >*^*</li>');
    a=a+2;
}
document.write('</ol>'); */


//    DO/WHILE-LOOP
// document.write("<br>")
// document.write("<br>")

/* var a=1;     //initialising the variable
do{
document.write(a+' !');
a++;     //incrementing the variable
document.write("<br>")
}while(a<=5) */

// NOTE:only one difference in do/while and while loop is that the first time the cursur go inside without checking the condition.
//       so the first time the condition is true and then it goes inside the loop and then it checks the condition and then it goes inside the loop again.so it will run at least once.

//     FOR-LOOP

/* for (initialization; condition; increment/decrement) {
    // Code to execute
} */

/* document.write("<br>")
for(var w=1 ; w<=5 ;w++){
    document.write( w+" ! * !"+'<br>')
} */

// document.write("<br>")

/* for(var a=1;a<=10;a++){
    document.write('#')
    document.write("<br>")
} */

/* const fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
    document.write(fruits[i])
    document.write("<br>")
} */



//    BREAK AND CONTINUE STATEMENT
/* for(var a=1;a<=10;a++){
    if(a==5){
        document.write('Hey: '+a+"<br>");
        break
        // continue
    }
    document.write('NUMBER: '+a+"<br>");
    document.write("<br>")
} */

/* var num=6
for (var fact=1 ;num>0;num--){
    fact=fact*num
}
document.write("Factorial :"+fact) */


/* for(var a=1;a<=14;a++){
    if(a%2==0){
        document.write(a+'<br>')
        document.write("<br>")
    }
} */


//   Nested Loop

// Example-1
/* for(var a=1;a<=100;a+=10){
    // document.write(a+"  ")
    for(var b=a;b<a+10;b=b+1)
        {document.write(b+"  ")
    }
    document.write('<br>')
} */

/*for(var x=1;x<100;x+=10){
    document.write(x+" ")
    document.write("<br>")
    for(var y=x;y<x+10;y++){document.write(y+" ")}
}*/



// Example-2

/* for(var a=1;a<=5;a=1+a){
    for(var b=1;b<=a;b=b+1)
        document.write(b+'  ')
        document.write('<br>')
} */

// document.write("<br>")

/* for(var a=1;a<=5;a=1+a){
    for(var b=1;b<=a;b=b+1)
        document.write(a+'  ')
        document.write('<br>')
} */

/* for(var a=5;a>=1;a=a-1){
    for(var b=1;b<=a;b++)
        document.write(b+" ")
        document.write('<br>')
}
for(var a=5;a>=1;a=a-1){
    for(var b=1;b<=a;b++)
        document.write(a+" ")
        document.write('<br>')
} */
/* document.write('<br>')
for(var a=5;a>=1;a=a-1){
    for(var b=a;b>=1;b--)
        document.write(b+" ");
        document.write('<br>');
} */




