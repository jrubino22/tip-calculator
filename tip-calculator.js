//need to round to nearest cent
const buttons = document.querySelectorAll(".buttons");
const good = document.getElementById("good");
const great = document.getElementById("great");
const excellent = document.getElementById("excellent");
const tipSpan = document.getElementById("tipAmt");
const totalSpan = document.getElementById("total")


buttons.forEach(function (btn) {
    btn.addEventListener("click", function (c) {
      const classes = c.currentTarget.classList;
      const billAmt = document.querySelector("input").value;
      let tip = 0;
      let total = 0;
      if(classes.contains("good")) {
          tip = (billAmt * .15);
          total = (billAmt * 1.15);
          
      }
        else if(classes.contains("great")) { 
            tip = (billAmt * .2);
            total = (billAmt * 1.2);
            console.log(total)
        }
        else if(classes.contains("excellent")){
            tip = billAmt * .25;
            total = (billAmt * 1.25);

           
        }
        else {
            console.log("How did you do this")
        }

        tipSpan.textContent = ("$" + tip)
        totalSpan.textContent =  ("$" + total)
    })       
    
})