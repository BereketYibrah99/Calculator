var tex = document.getElementById("tex");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var times = document.getElementById("times");
var div = document.getElementById("div");
var dot = document.getElementById("dot");
var equ = document.getElementById("equ");
var del = document.getElementById("del");
var per = document.getElementById("per");
var clear = document.getElementById("clear");
var id=0;
var first=true;
var num1;
var num2;
var res;
var word;
one.onclick = function(){
    tex.textContent+="1";
    num1=Number(tex.textContent);
}
two.onclick = function(){
    tex.textContent+="2";
    num1=Number(tex.textContent);
}
three.onclick = function(){
    tex.textContent+="3";
    num1=Number(tex.textContent);
}
four.onclick = function(){
    tex.textContent+="4";
    num1=Number(tex.textContent);
}
five.onclick = function(){
    tex.textContent+="5";
    num1=Number(tex.textContent);
}
six.onclick = function(){
    tex.textContent+="6";
    num1=Number(tex.textContent);
    console.log("6");
}
seven.onclick = function(){
    tex.textContent+="7";
    num1=Number(tex.textContent);
}
eight.onclick = function(){
    tex.textContent+="8";
    num1=Number(tex.textContent);
}
nine.onclick = function(){
    tex.textContent+="9";
    num1=Number(tex.textContent);
    tex.textContent+=numb1;
}
zero.onclick = function(){
    tex.textContent+="0";
    num1=Number(tex.textContent);
}
dot.onclick = function(){
    tex.textContent+=".";
    num1=Number(tex.textContent);
}
clear.onclick = function(){
    tex.textContent="";
    num1=Number(tex.textContent);
    id=0
    num1=0;
    num2=0;
    res=0;
    first=true;
}
per.onclick = function(){
    tex.textContent="";
    if(first==true){
        num2=num1;
        first=false;
        }
    num1=Number(tex.textContent);
    id=5;
}
plus.onclick = function(){
    if(first==true){
        num2=num1;
        first=false;
        }
    tex.textContent="";
    id=1;
}
minus.onclick = function(){
    tex.textContent="";
    if(first==true){
    num2=num1;
    first=false
    }
    id=2;
}
times.onclick = function(){
    tex.textContent='';
    if(first==true){
        num2=num1;
        first=false;
        }
    id=3;
}
div.onclick = function(){
    tex.textContent="";
    if(first==true){
        num2=num1;
        first=false;
        }
    id=4;
}
equ.onclick = function(){
    switch(id){
        case 1:
            res=num2+num1;
            tex.textContent=res;
            num2=Number(res);
            break;
        case 2:
            res=num2-num1;
            tex.textContent=res;
            num2=Number(res);
            break;
        case 3:
            res=num2*num1;
            tex.textContent=res;
            num2=Number(res);
            break;
        case 4:
            res=num2/num1;
            tex.textContent=res;
            num2=Number(res);
            break;
        case 5:
            res=num2/100;
            tex.textContent=res;
            num2=Number(res);
            break;
        case 0:
            tex.textContent=0;
            break;
    }
}



