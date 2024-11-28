const currentOperandElem = document.getElementsById("currentOperand");
const previousOperandElem = document.getElementsById("previousOperand");
const equalsButton = document.getElementsById("equals");
const clearButton = document.getElementsById("clear");
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
    this.operation = undefined;
  }

  numberButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      calc.appendNumber(btn.innerText);
      calc.updateOutput();
    })
  })

  appendNumber(num){
     this.currentOperand = this.currentOperand.toString() + number.toString();
   }
  
  updateOutput(){
     this.currentOperandElem.innerText = this.currentOperand;
     this.previousOperandElem.innerText = this.previousOperand;
   }

  operationButtons.forEach(btn => {
    button.addEventListener("click", () => {
      calc.selectOperation(button.innerText)
      calc.updateOutput()
    })
  })

  selectOperation(oper) {
      if (this.currentOperand === "") return
      if(this.previousOperand != "") {
        this.compute()
      }
      this.operation = oper;
      this.previousOperand = this.currentOperand;
      this.currentOperand = "";
  }

  equalsButton.addEventListener("click", btn => {
      calc.compute()
      calc.updateOutput()
  })

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

  clearButton.addEventListener("click", btn => {
    calc.clear();
    calc.updateOutput();
  })

  updateOutput() {
    this.currentOperandElem.innerText =
      this.getOutputNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandElem.innerText =
        `${this.getOutputNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandElem.innerText = ""
    }
  }

  getOutputNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerOutput;
    if (isNaN(integerDigits)) {
      integerOutput = ''
    } else {
      integerOutput = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
    }
    if (decimalDigits != null) {
      return `${integerOutput}.${decimalDigits}`
    } else {
      return integerOutput;
    }
  }
  
}

const calc = new Calculator(currentOperand, previousOperand);
