const numberInput = document.querySelector('#input');
const clearBtn = document.querySelector('#clear');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const multiBtn = document.querySelector('#multiply');
const divBtn = document.querySelector('#divide');
const calcBtn = document.querySelector('#calc');
const result = document.querySelector('#result');

const error = document.querySelector('#error');

let temp;
let operator;

plusBtn.addEventListener('click', () => {
    if(numberInput) {
        temp = Number(numberInput.value);
        operator = '+';
        numberInput.value = null;
    }
});

minusBtn.addEventListener('click', () => {
    if(numberInput) {
        temp = Number(numberInput.value);
        operator = '-';
        numberInput.value = null;
    }
});

multiBtn.addEventListener('click', () => {
    if(numberInput) {
        temp = Number(numberInput.value);
        operator = '*';
        numberInput.value = null;
    }
});

divBtn.addEventListener('click', () => {
    if(numberInput) {
        temp = Number(numberInput.value);
        operator = '/';
        numberInput.value = null;
    }
});

calcBtn.addEventListener('click', ()=> {
    if(numberInput) {
        if(operator === '+') {
            result.value = temp + Number(numberInput.value);
            numberInput.value = null;
        } else if(operator === '-') {
            result.value = temp - Number(numberInput.value);
            numberInput.value = null;
        } else if(operator === '*') {
            result.value = temp * Number(numberInput.value);
            numberInput.value = null;
        } else if(operator === '/') {
            result.value = temp / Number(numberInput.value);
            numberInput.value = null;
        }
    } 
});


clearBtn.addEventListener('click', () => {
    numberInput.value = null;
    result.value = null;
    temp = null;
    operator = null;
});