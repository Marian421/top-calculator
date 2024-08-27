// variables
let currentValue = [], // number that is typed on the screen
 storedValue = [], // holds values that were typed
  opperation = []; // holds the opperands in order

// get the  display area
const display = document.querySelector('.text');

// function for display
function showOnScreen(number) {
    display.textContent = number.join("");
}

function updateScreen(stored) {
    display.textContent = stored;
}


// get all elements with class 'number'
const number = document.getElementsByClassName('number');

// iterate through numbers, adding eventListeners to all of them
for (let i = 0; i < number.length; i++) {
    if(parseInt(number[i].innerHTML) >= 0 || parseInt(number[i].innerHTML) < 10){
        number[i].addEventListener('click' , () => {
            currentValue.push(parseInt(number[i].innerHTML));
            showOnScreen(currentValue);
            console.log(currentValue);
        })
    }
}
// get all element with class 'opperand'
const opperand = document.getElementsByClassName('opperand');

// add eventListeners to the opperands
for (let i = 0; i < opperand.length; i++) {
    opperand[i].addEventListener('click', () => {
        if (storedValue.length === 0){
            storedValue = [...currentValue]; // holds the first number typed
            currentValue = []; // makes place for the second number
            opperation.push(opperand[i].innerText); 
        } else {
            opperation.push(opperand[i].innerText);
            switch(opperation[0]){
                case "+": 
                console.log('+');
                    storedValue = add(currentValue, storedValue);
                    break;
                case "-": 
                console.log('-');
                    storedValue = substract(currentValue, storedValue);
                    break;
                case "/": 
                console.log('/');
                    storedValue = divide(currentValue, storedValue);
                    break;
                case "*": 
                    console.log('*');
                    storedValue = multiply(currentValue, storedValue);
                    break;
            }
            opperation.shift(); // operation done, so removed from list
            currentValue = [];
            updateScreen(storedValue.join(""));
        }
    })

}

// functions for the operations

function add(firstArray, secondArray) {
    let A = parseInt(firstArray.join(""));
    let B = parseInt(secondArray.join(""));
    let result = A + B;
    return result.toString().split("");
    
}

function substract(firstArray, secondArray) {
    let A = parseInt(secondArray.join(""));
    let B = parseInt(firstArray.join(""));
    let result = A - B;
    return result.toString().split("");

}

function multiply(firstArray, secondArray) {
    let A = parseInt(secondArray.join(""));
    let B = parseInt(firstArray.join(""));
    let result = A * B;
    return result.toString().split("");

}

function divide(firstArray, secondArray) {
    let A = parseInt(secondArray.join(""));
    let B = parseInt(firstArray.join(""));
    let result = A / B;
    return result.toString().split("");

}