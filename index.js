function earth(){
    var a=document.getElementById("inp").value;
    a=parseInt(a);
    if(!isNaN(a)) document.getElementById("p").innerHTML="The Weight of Object on Earth is : "+a;
    else alert("Please Enter a Valid Weight");
}
function jupiter(){
    var a=document.getElementById("inp").value;
    a=parseInt(a);
    if(!isNaN(a)) document.getElementById("p").innerHTML="The Weight of Object on Jupiter is : "+Math.round(a*2.34);
    else alert("Please Enter a Valid Weight");
}
function venus(){
    var a=document.getElementById("inp").value;
    a=parseInt(a);
    if(!isNaN(a)) document.getElementById("p").innerHTML="The Weight of Object on Venus is : "+Math.round(a*0.91);
    else alert("Please Enter a Valid Weight");
}
function mars(){
    var a=document.getElementById("inp").value;
    a=parseInt(a);
    if(!isNaN(a)) document.getElementById("p").innerHTML="The Weight of Object on Mars is : "+Math.round(a*0.38);
    else alert("Please Enter a Valid Weight");
}
function neptune(){
    var a=document.getElementById("inp").value;
    a=parseInt(a);
    if(!isNaN(a)) document.getElementById("p").innerHTML="The Weight of Object on Neptune is : "+Math.round(a*1.19);
    else alert("Please Enter a Valid Weight");
}
function satrun(){
    var a=document.getElementById("inp").value;
    a=parseInt(a);
    if(!isNaN(a)) document.getElementById("p").innerHTML="The Weight of Object on Satrun is : "+Math.round(a*1.06);
    else alert("Please Enter a Valid Weight");
}
function uranus(){
    var a=document.getElementById("inp").value;
    a=parseInt(a);
    if(!isNaN(a)) document.getElementById("p").innerHTML="The Weight of Object on Uranus is : "+Math.round(a*0.92);
    else alert("Please Enter a Valid Weight");
}
function sun(){
    var a=document.getElementById("inp").value;
    a=parseInt(a);
    if(!isNaN(a)) document.getElementById("p").innerHTML="The Weight of Object on Sun is : "+Math.round(a*27.01);
    else alert("Please Enter a Valid Weight");
}
function pluto(){
    var a=document.getElementById("inp").value;
    a=parseInt(a);
    if(!isNaN(a)) document.getElementById("p").innerHTML="The Weight of Object on Pluto is : "+Math.round(a*0.06);
    else alert("Please Enter a Valid Weight");
}
function mercury(){
    var a=document.getElementById("inp").value;
    a=parseInt(a);
    if(!isNaN(a)) document.getElementById("p").innerHTML="The Weight of Object on Mercury is : "+Math.round(a*0.38);
    else alert("Please Enter a Valid Weight");
}