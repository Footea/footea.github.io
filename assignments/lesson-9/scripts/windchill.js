var high= parseFloat(document.getElementById('highT').innerHTML); 
var low= parseFloat(document.getElementById('lowT').innerHTML); 
var speed= parseFloat(document.getElementById('windSp').innerHTML);
var tempF= (high + low) / 2; 
var windC= (35.74 + (0.6215 * tempF))-(35.75 * speed**0.16)+(0.4275 * (tempF*speed**0.16)); 
   
document.getElementById("output").innerHTML= windC.toFixed(2);