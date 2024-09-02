let firstNumber;
let secondNumber;
let number;
let operator = false;
let operatorType;
let isfirstnumberwrote = false;

const buttons = document.querySelectorAll("button");
const display = document.getElementById("ResultText");

function operatorShortener(buton){
    operator = true;
    isfirstnumberwrote = true;
    display.textContent = '';
    display.textContent = buton.textContent;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if(button.classList == "NumberButton"){
        number = display.textContent += button.textContent;
        if(!isfirstnumberwrote) {
          if (!operator) {
            firstNumber = number;
          } else {
            operator = false;
            display.textContent = "";
          }
        }
        else{
            if (!operator) {
              secondNumber = number;
            } else {
              operator = false;
              display.textContent = "";
            }
        }
    }
    else if(button.classList == "OperatorButton"){
        if (button.textContent != "=") {
          operatorType = button.textContent;
        }
        if (button.textContent == "Clear") {
            display.textContent = '';
        } 
        else if (button.textContent == "=") {
          switch (operatorType) {
            case "+":
                operatorShortener(button);
                display.textContent = Number(firstNumber) + Number(secondNumber);
              break;
          }
        }
        else{
            operatorShortener(button);
        }
}});
});