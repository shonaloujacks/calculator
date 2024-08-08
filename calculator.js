function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let firstNumber = "";
let operator = "";
let secondNumber = "";

function operate(firstNumber, operator, secondNumber) {
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator === "/") {
    return divide(firstNumber, secondNumber);
  } else if (operator === "*") {
    return multiply(firstNumber, secondNumber);
  }
}

const displayDiv = document.getElementById("display");

function numberIsHigherThanLimit() {
  if (firstNumber.length > 14 || secondNumber.length > 14) {
    console.log(
      "at least one number is higher than 15",
      firstNumber,
      secondNumber
    );
    return true;
  }
  console.log("Neither number is higher than 15", firstNumber, secondNumber);
  return false;
}

function cleardisplay() {
  displayDiv.innerText = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
}

const buttonClear = document.querySelector('button.operator[id="ac"]');
buttonClear.addEventListener("click", function () {
  cleardisplay();
});

const button1 = document.querySelector('button.number[id="1"]');
button1.addEventListener("click", function () {
  if (!numberIsHigherThanLimit()) {
    if (!operator) {
      firstNumber += "1";
      displayDiv.innerText = firstNumber;
    } else {
      secondNumber += "1";
      displayDiv.innerText = secondNumber;
    }
  }
});

const button2 = document.querySelector('button.number[id="2"]');
button2.addEventListener("click", function () {
  if (!numberIsHigherThanLimit()) {
    if (!operator) {
      firstNumber += "2";
      displayDiv.innerText = firstNumber;
    } else {
      secondNumber += "2";
      displayDiv.innerText = secondNumber;
    }
  }
});

const button3 = document.querySelector('button.number[id="3"]');
button3.addEventListener("click", function () {
  if (!numberIsHigherThanLimit()) {
    if (!operator) {
      firstNumber += "3";
      displayDiv.innerText = firstNumber;
    } else {
      secondNumber += "3";
      displayDiv.innerText = secondNumber;
    }
  }
});

const button4 = document.querySelector('button.number[id="4"]');
button4.addEventListener("click", function () {
  if (!numberIsHigherThanLimit()) {
    if (!operator) {
      firstNumber += "4";
      displayDiv.innerText = firstNumber;
    } else {
      secondNumber += "4";
      displayDiv.innerText = secondNumber;
    }
  }
});

const button5 = document.querySelector('button.number[id="5"]');
button5.addEventListener("click", function () {
  if (!numberIsHigherThanLimit()) {
    if (!operator) {
      firstNumber += "5";
      displayDiv.innerText = firstNumber;
    } else {
      secondNumber += "5";
      displayDiv.innerText = secondNumber;
    }
  }
});

const button6 = document.querySelector('button.number[id="6"]');
button6.addEventListener("click", function () {
  if (!numberIsHigherThanLimit()) {
    if (!operator) {
      firstNumber += "6";
      displayDiv.innerText = firstNumber;
    } else {
      secondNumber += "6";
      displayDiv.innerText = secondNumber;
    }
  }
});

const button7 = document.querySelector('button.number[id="7"]');
button7.addEventListener("click", function () {
  if (!numberIsHigherThanLimit()) {
    if (!operator) {
      firstNumber += "7";
      displayDiv.innerText = firstNumber;
    } else {
      secondNumber += "7";
      displayDiv.innerText = secondNumber;
    }
  }
});

const button8 = document.querySelector('button.number[id="8"]');
button8.addEventListener("click", function () {
  if (!numberIsHigherThanLimit()) {
    if (!operator) {
      firstNumber += "8";
      displayDiv.innerText = firstNumber;
    } else {
      secondNumber += "8";
      displayDiv.innerText = secondNumber;
    }
  }
});

const button9 = document.querySelector('button.number[id="9"]');
button9.addEventListener("click", function () {
  if (!numberIsHigherThanLimit()) {
    if (!operator) {
      firstNumber += "9";
      displayDiv.innerText = firstNumber;
    } else {
      secondNumber += "9";
      displayDiv.innerText = secondNumber;
    }
  }
});

const button0 = document.querySelector('button.number[id="0"]');
button0.addEventListener("click", function () {
  if (!numberIsHigherThanLimit()) {
    if (firstNumber.length !== 0) {
      if (!operator) {
        firstNumber += "0";
        displayDiv.innerText = firstNumber;
      } else {
        secondNumber += "0";
        displayDiv.innerText = secondNumber;
      }
    }
  }
});

const buttonDecimal = document.querySelector('button.decimal[id="."]');
buttonDecimal.addEventListener("click", function () {
  if (!firstNumber.includes(".", 0)) {
    firstNumber += ".";
    displayDiv.innerText = firstNumber;
  } else if (!secondNumber.includes(".", 0)) {
    secondNumber += ".";
    displayDiv.innerText = secondNumber;
  }
});

const buttonAdd = document.querySelector('button.operator[id="+"]');
buttonAdd.addEventListener("click", function () {
  if (operator) {
    const answer = operate(firstNumber, operator, secondNumber);
    displayDiv.innerText = answer;
    firstNumber = answer;
    secondNumber = "";
  }
  operator = "+";
});

const buttonMinus = document.querySelector('button.operator[id="-"]');
buttonMinus.addEventListener("click", function () {
  if (operator) {
    const answer = operate(firstNumber, operator, secondNumber);
    displayDiv.innerText = answer;
    firstNumber = answer;
    secondNumber = "";
  }
  operator = "-";
});

const buttonMultiply = document.querySelector('button.operator[id="*"]');
buttonMultiply.addEventListener("click", function () {
  if (operator) {
    const answer = operate(firstNumber, operator, secondNumber);
    displayDiv.innerText = answer;
    firstNumber = answer;
    secondNumber = "";
  }
  operator = "*";
});

const buttonDivide = document.querySelector('button.operator[id="/"]');
buttonDivide.addEventListener("click", function () {
  if (operator) {
    const answer = operate(firstNumber, operator, secondNumber);
    displayDiv.innerText = answer;
    firstNumber = answer;
    secondNumber = "";
  }
  operator = "/";
});

const buttonEquals = document.querySelector('button.equals[id="\\3d"]');
buttonEquals.addEventListener("click", function () {
  if (firstNumber.includes("0", 0) && firstNumber.length === 1) {
    displayDiv.innerText = "Hell nah";
  } else if (secondNumber.includes("0", 0) && secondNumber.length === 1) {
    displayDiv.innerText = "Hell nah";
  } else {
    const answer = operate(firstNumber, operator, secondNumber);
    displayDiv.innerText = answer;
  }
});
