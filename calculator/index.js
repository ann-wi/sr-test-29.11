const currentOperandElem = document.getElementById("currentOperand");
const previousOperandElem = document.getElementById("previousOperand");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const numberButtons = document.getElementsByClassName("number");
const operationButtons = document.getElementsByClassName("operation");

class Calculator {
  constructor(currentOperandElem, previousOperandElem) {
    this.currentOperandElem = currentOperand,
    this.previousOperandElem = previousOperand,
    this.clear()
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = null;
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  
  updateOutput(){
     this.currentOperandElem.value= this.currentOperand;
     this.previousOperandElem.value = this.previousOperand;
   }

  selectOperation(oper) {
      if (this.currentOperand === "") return
      if(this.previousOperand != "") {
        this.compute()
      }
      this.operation = oper;
      this.previousOperand = this.currentOperand;
      this.currentOperand = "";
  }

  compute() {
    let result;
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        result = prev + current
        break;
      case '-':
        result = prev - current
        break;
      case '*':
        result = prev * current
        break;
      case '÷':
        result = prev / current
        break;
      default:
        return
    }
    this.currentOperand = result;
    this.operation = undefined;
    this.previousOperand = "";
  }

  updateOutput() {
    this.currentOperand.value = this.currentOperand;
    if (this.operation != null) {
      this.previousOperand.value = `${this.previousOperand} ${this.operation}`;
    }
  }
  
}

const calc = new Calculator(currentOperand, previousOperand);

Array.from(numberButtons).forEach(button => {
    button.addEventListener("click", () => {
      calc.appendNumber(button.value);
      calc.updateOutput();
    })
})
  
Array.from(operationButtons).forEach(button => {
    button.addEventListener("click", () => {
      calc.selectOperation(button.value)
      calc.updateOutput()
    })
})

equalsButton.addEventListener("click", button => {
      calc.compute()
      calc.updateOutput()
})

clearButton.addEventListener("click", button => {
    calc.clear();
    calc.updateOutput();
})
