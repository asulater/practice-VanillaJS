const numberInput = document.querySelector('#input');
const clearBtn = document.querySelector('#clear');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const divideBtn = document.querySelector('#divide');
const multiBtn = document.querySelector('#multiply');
const calBtn = document.querySelector('#calculate');
const resultInput = document.querySelector('#result');

let temp;
let operator;

plusBtn.addEventListener('click', () => {
    if(numberInput.value) {
        temp = Number(numberInput.value);
        operator = '+';
        numberInput.value = null;
    }
});
minusBtn.addEventListener('click', () => {
    if(numberInput.value) {
        temp = Number(numberInput.value);
        operator = '-'
        numberInput.value = null;
    }
});
multiBtn.addEventListener('click', () => {
    if(numberInput.value) {
        temp = Number(numberInput.value);
        operator = '*';
        numberInput.value = null;
    }
});
divideBtn.addEventListener('click', () => {
    if(numberInput.value) {
        temp = Number(numberInput.value);
        operator = '/';
        numberInput.value = null;
    }
});

clearBtn.addEventListener('click', () => {
    numberInput.value = '';
    resultInput.value = '';
    temp = null;
    operator = null;
});

calBtn.addEventListener('click', () => {
    if(operator) {
        if(numberInput.value) {
            if(operator === '+') {
                resultInput.value = temp + Number(numberInput.value);
                numberInput.value = null;
            } else if (operator === '-') {
                resultInput.value = temp - Number(numberInput.value);
                numberInput.value = null;
            } else if (operator === '*') {
                resultInput.value = temp * Number(numberInput.value);
                numberInput.value = null;
            } else if (operator === '/') {
                resultInput.value = temp / Number(numberInput.value);
                numberInput.value = null;
            }
        }
    } else {
        if(numberInput.value) {
            resultInput.value = temp;
        }
    }
});