function hello(){
    document.write('Hello Every-body.')
}
hello()
document.write('<br>')

function yahoobaba(){
    document.write('Hello yahoo baba')
}
yahoobaba()

document.write('<br>') 
// Parametric function

function sum(a,b){
document.write(a-b)
}
sum(3,4)

document.write('<br>')
// function with retur value

function fullname(fname,lname){
    var a=fname +' '+lname;
    return a;
}
document.write(fullname('i am','Singh'));

document.write('<br>')
// Example
function sum(math,eng,sc){
    var s =math+eng+sc;
    return s;
}
function percentage(tt){
    var per =(tt/300)*100;
    document.write(per);
}
var total =sum(30,66,100);
percentage(total);
document.write("<br>")
percentage(sum(10,20,38))











