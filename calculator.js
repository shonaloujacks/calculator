function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function  multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}


let firstNumber = "";
let operator = "";
let secondNumber = "";

function operate (firstNumber, operator, secondNumber) {

 if (operator === "+") {
    return add(firstNumber, secondNumber); 
 }
 else if (operator === "-") {
    return subtract(firstNumber, secondNumner);
 }
else if (operator === "/") {
    return divide(firstNumber, secondNumber); 
}
else if (operator === "*") {
    return multiply(firstNumber, secondNumber); 
}
} 

let displayNumber = []; 
const displayDiv = document.getElementById('display');

function displayid(number) {
    displayNumber.push(number);
    displayDiv.innerHTML = displayNumber.join('');
}

function cleardisplay() {
    displayNumber.splice(0, displayNumber.length);
    displayDiv.innerText = '0';
}


const buttonClear = document.querySelector('button.operator[id="ac"]');
buttonClear.addEventListener("click", function () {
    cleardisplay()

})


const button1 = document.querySelector('button.number[id="1"]');
button1.addEventListener("click", function () {
    displayid(1)

})

const button2 = document.querySelector('button.number[id="2"]');
button2.addEventListener("click", function () {
    displayid(2)

})

const button3 = document.querySelector('button.number[id="3"]');
button3.addEventListener("click", function () {
    displayid(3)

})

const button4 = document.querySelector('button.number[id="4"]');
button4.addEventListener("click", function () {
    displayid(4)

})

const button5 = document.querySelector('button.number[id="5"]');
button5.addEventListener("click", function () {
    displayid(5)

})

const button6 = document.querySelector('button.number[id="6"]');
button6.addEventListener("click", function () {
    displayid(6)

})

const button7 = document.querySelector('button.number[id="7"]');
button7.addEventListener("click", function () {
    displayid(7)

})

const button8 = document.querySelector('button.number[id="8"]');
button8.addEventListener("click", function () {
    displayid(8)

})

const button9 = document.querySelector('button.number[id="9"]');
button9.addEventListener("click", function () {
    displayid(9)

})

const button0 = document.querySelector('button.number[id="0"]');
button0.addEventListener("click", function () {
    displayid(0)

})



const buttonDecimal = document.querySelector('button.decimal[id="."]');
buttonDecimal.addEventListener("click", function () {
    if (!displayNumber.find((element) => element === '.')) {
        displayid('.')   
    }
})



displayNumber[0] 
displayNumber[1] 



