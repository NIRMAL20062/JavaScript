var ary=['sanjay','aman','rehamn','hello'];
document.write(ary)
document.write("<br>")
var b=Array.isArray(ary);
document.write(b)
document.write("<br>")


if(Array.isArray(ary)==true){
    document.write('This Is an Array');
}else{
    document.write("Is not an Array")
}