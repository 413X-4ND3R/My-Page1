function ThisFunction(){
    document.getElementById("First").innerHTML = "Another text.";
}
function ThisOtherFunction(){
    document.getElementById("First").innerHTML = "A text"
}
function ThisAddsNumbers(){
    document.write(5+8)
    document.write("= 5 + 8")
}
function ThisWantsYourAttention(){
    window.alert("Attention!")
}
function Log(){
    console.log()
}
function Maths(){
    c = a + b;
    document.getElementById("DoingMath").innerHTML = c
}
function bMultiply(){
    b = b * 2;
    document.getElementById("DoingMath").innerHTML = b
}
function bDivide(){
    b = b/2;
    document.getElementById("DoingMath").innerHTML = b
}
function AnotherFunction(){
    document.getElementById("First").innerHTML = "This is from an external js. file"
}
function Table1(){
    a = a * 2;
    b = b * 2;
    c = a + b;
    document.getElementById("DoingMath").innerHTML = a
    document.getElementById("DoingLargerMath").innerHTML = c
}
var x, y, z;
x = 0;
y = 0;
z = x + y;

function usingVar(){
    z = x + y;
    document.getElementById("First").innerHTML = x
    document.getElementById("DoingMath").innerHTML = y
    document.getElementById("DoingLargerMath").innerHTML = z
}
function Addx(){
    x = x+1;
    usingVar()
}
function Addy(){
    y = y+1;
    usingVar()
}
function Compary(){
    var bol = y > x;
    document.getElementById("TheBool").innerHTML = bol
}
function AddTwoString(){
    let string1 = "JavaScript";
    let string2 = "Is Great";
    let string2and1 = string1 + " " + string2;

    string2and1 += " And Awesome";
    document.getElementById("DoingMath").innerHTML = string2and1
}
function Mathematics(){
    var Exp = 10;
    Exp **= 5
    document.getElementById("DoingCrazyMath").innerHTML = Exp
}






