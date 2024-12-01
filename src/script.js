const display = document.getElementById("display");

 function appeandToDisplay(input){
    display.value += input;
 }
 function ClearDisplay(){
    display.value = "";
 }
 function Calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    
 }