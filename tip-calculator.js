const input = document.getElementById("bill").value;
let tip = 0;
let total = 0;
const buttons = document.querySelectorAll(".buttons");
const good = document.getElementById("good");
const great = document.getElementById("great");
const excellent = document.getElementById("excellent");
const tipSpan = document.getElementById("tipAmt");
const totalSpan = document.getElementById("total")

buttons.forEach(function (btn) {
    btn.addEventListener("click", function (c) {
      const classes = c.currentTarget.classList;
      if(classes.contains("good")) {
          tip === (input * .15);
          total === (input * 1.15);
      }
        else if(classes.contains("great")) { 
            tip === (input * .2);
            total === (input * 1.2);
        }
        else if(classes.contains("excellent")){
            tip === input * .25;
            total === (input * 1.25);
            console.log(input)
        }
        else {
            console.log("How did you do this")
        }
    })       
    
})