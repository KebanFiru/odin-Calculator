let firstNumber;
let operator = false;

const buttons = document.querySelectorAll("button");
const display = document.getElementById("ResultText");

buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        buttonValue = button.textContent;
        if (button.classList == "NumberButton") {
            firstNumber = display.textContent += buttonValue;
            if(!operator ){         
                console.log(operator);       
                firstNumber
            }
            else{
                operator = false;
                display.textContent = '';
            }
        }
        else if (button.classlist = "OperatorButton"){
            if(button.textContent == "Clear"){ 
                display.textContent = '';
            }
            else {
                operator = true;
                display.textContent = '';
                display.textContent = button.textContent;
            }
            
        }
    });
});
