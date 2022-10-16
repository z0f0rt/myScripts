'use strict'
let inp = document.querySelector("#input");

 var result,
   isNotCal = false 

 function clear_C() {
     inp.value = ""
 }

 function getResult() {
     isNotCal = true
     result = eval(inp.value)
     inp.value = result
 }

 function deleteOne() {
     if(isNotCal == false) {
         inp.value = inp.value.substr(0, inp.value.length - 1)
     } else {
        clear_C()
     } 
 }

let inps = document.querySelectorAll('input[name="data-num"]');
for(let num of inps){
    num.addEventListener("click", function(){
            if(isNotCal == true) {
                inp.value = ""
            }
            inp.value = inp.value + this.value
            isNotCal = false;
            
    });   
}