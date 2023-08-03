//Declare Variables
let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector('#result-box');
let clearBtn = document.querySelector('#clear');

let total = document.querySelector("#total");

//Spread operator which enables us to apply functions to more variables without having to write code
let btnSpread = [...btns];
let allBtnSpread = [...allBtns];

//Number inputs and inner values of the calculator
btnSpread.forEach((button, i) =>  {
    button.addEventListener("click", () => {
        // Inner Values for calculator

        if (resultBox.innerHTML == "0") {
            resultBox.innerHTML = "";
        }

        let value = btns[i].innerHTML;
        resultBox.innerHTML += value;
    });
});


//function to evaluate strings i.e what should happen when an arithmetic operation is carried out in the calculator.

function evaluate(fn)  {
    return new Function('return ' +  fn)();
}

//To calculate all functions

total.addEventListener('click', ()=> {
    let allInputs = resultBox.innerHTML;
    resultBox.innerHTML = evaluate(allInputs);
    console.log(evaluate(allInputs));
});

//To Clear all inputs
clearBtn.addEventListener('click', () => {
    resultBox.innerHTML = "0";
});