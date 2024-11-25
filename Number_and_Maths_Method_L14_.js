/* Number Properties

Number.MAX_VALUE
Number.MIN_VALUE
Number.POSITIVE_INFINITY
Number.NEGATIVE_INFINITY
Number.NaN
Number Methods

Number.isInteger()
Number.isFinite()
Number.isNaN()
Number.isSafeInteger()
Parsing Methods

Number.parseInt()
Number.parseFloat()
Math Methods

Math.abs()
Math.ceil()
Math.floor()
Math.round()
Math.trunc()
Math.pow()
Math.sqrt()
Math.cbrt()
Math.max()
Math.min()
Math.random()
Math.log()
Math.exp()
Math.sin()
Math.cos()
Math.tan()
Other Useful Methods

toString()
toFixed()
toPrecision()
valueOf() */


// 1.Number() Method
/* var a="999";
var c="Bardx";
var c=true;
var c=false;

var b=Number(a);
document.write(b);
document.write("<br>");
document.write(b+10);
document.write("<br>");
document.write(c);
document.write("<br>");
document.write(c+10); */

// parseInt()

/* var a="223.4"
// var a="Bardx 4" //not a number(NAN)
var a="55 bardx"
var b=parseInt(a);
document.write(b); */

// parseFloat()

/* var a="223.4"
// var a="Bardx 4" //not a number(NAN)
document.write(a);
document.write('<br>')
var a="55.7 bardx"
var b=parseFloat(a);
document.write(b); */


// isFinite()

/* var a=22/7;
var a=Infinity;
var b=Number.isFinite(a)
document.write(b) */

// isInteger()

/* var a=22/7;
var a=Infinity;
var a=3;
var b=Number.isInteger(a)
document.write(b) */


// toFixed()

/* var a=5.57;
var b=a.toFixed(23);
document.write(b) */

/* var a=5.57;
var b=a.toPrecision(2);
document.write(b) */

// Maths Methods

/* 
Math.abs
Math.ceil
Math.floor
Math.round
Math.trunc
Math.pow
Math.sqrt
Math.cbrt
Math.exp
Math.log
Math.log2
Math.log10
Math.max
Math.min
Math.random
Math.sign
Math.sin
Math.cos
Math.tan
Math.asin
Math.acos
Math.atan
Math.atan2
Math.sinh
Math.cosh
Math.tanh
Math.asinh
Math.acosh
Math.atanh
Math.hypot

 */

// Ceil()

/* var a=Math.ceil(5.5)
var a=Math.ceil(-5.5)
document.write(a) */


// floor()

/* var a=Math.floor(5.5)
var a=Math.floor(-5.5)
document.write(a) */

// round()

/* var a=Math.round(5.5)
var a=Math.round(-5.5)
document.write(a) */

// trunc()

/* var a=Math.trunc(5.5)
var a=Math.trunc(-5.5)
document.write(a)
 */


// max()

/* var a=Math.max(5.5,5,7,9)
var a=Math.max(-5.5,0,4,2)
document.write(a) */

// min()


/* var a=Math.min(5.5,5,7,9)
var a=Math.min(-5.5,0,4,2)
document.write(a) */


// sqrt(), qbrt()

/* var a=Math.sqrt(5)
var a=Math.sqrt(4)
var a=Math.cbrt(125)
var a=Math.cbrt(8)
document.write(a) */

// pow()

/* var a=Math.pow(5,3);
var a=Math.pow(4,3);
document.write(a); */

// random()

/* var a=Math.random(125)
var a=Math.random(8)
var a=Math.floor(Math.random(8)*100)+1;
document.write(a) */

// abs()

/* var a=Math.abs(25);
var a=Math.abs(-8);
var a=Math.abs(null);
document.write(a);
 */

/* var x=Math.PI;
document.write(x) */


// DATE-METHODS

/* 
Date.now
Date.parse
Date.UTC
getDate
getDay
getFullYear
getHours
getMilliseconds
getMinutes
getMonth
getSeconds
getTime
getTimezoneOffset
getUTCDate
getUTCDay
getUTCFullYear
getUTCHours
getUTCMilliseconds
getUTCMinutes
getUTCMonth
getUTCSeconds
setDate
setFullYear
setHours
setMilliseconds
setMinutes
setMonth
setSeconds
setTime
setUTCDate
setUTCFullYear
setUTCHours
setUTCMilliseconds
setUTCMinutes
setUTCMonth
setUTCSeconds
toDateString
toISOString
toJSON
toLocaleDateString
toLocaleString
toLocaleTimeString
toTimeString
toUTCString
valueOf */


/* var n =new Date();
document.write(n);
document.write("<br>");
document.write("<br>");
document.write(n.toDateString());
document.write("<br>");
document.write("<br>");
document.write(n.getDate());
document.write("<br>");
document.write("<br>");
document.write(n.getFullYear());
document.write("<br>");
document.write("<br>");
document.write(n.getMonth());
document.write("<br>");
document.write("<br>");
document.write(n.getDay());
document.write("<br>");
document.write("<br>");
document.write(n.getHours());
document.write("<br>");
document.write("<br>");
document.write(n.getMinutes());
document.write("<br>");
document.write("<br>");
document.write(n.getSeconds());
document.write("<br>");
document.write("<br>");
document.write(n.getMinutes()); */


var n =new Date();
// n.setDate(20);
// n.setFullYear(2020);
// n.setMonth(2);
// n.setHours(12);
// document.write(n)
/* document.write(n.getDate()+"/"+n.getMonth()+" /"+n.getFullYear()) */













