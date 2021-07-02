var displayDiv = document.querySelector('#display')
console.log(displayDiv);
var num1 = ""
var op = ""
var num2 = ""

function press(element) {
    firstNum = element.toString();
    displayDiv.innerText = displayDiv.innerHTML + firstNum;
}

function clr() {
    displayDiv.innerText = ""
}

function setOP(element) {
    num1 = displayDiv.innerText
    displayDiv.innerText = ''
    op = element
}

function calculate() {
    var num2 = displayDiv.innerText
    var answer = 0
    if (op == "+") {
        answer = parseFloat(num1) + parseFloat(num2);
        displayDiv.innerText = answer;
    }
    if (op == "-") {
        answer = parseFloat(num1) - parseFloat(num2);
        displayDiv.innerText = answer
    }
    if (op == "*") {
        answer = parseFloat(num1) * parseFloat(num2);
        displayDiv.innerText = answer
    }
    if (op == "/") {
        answer = parseFloat(num1) / parseFloat(num2);
        displayDiv.innerText = answer
    }
}

// Grab the displayed number and store it
// Grab the operator
// Remove the number from the display
// Grab and store the new number
// Perform the operation
// Store and display the final number on the first var