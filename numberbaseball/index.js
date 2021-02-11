const input = document.querySelector('#input');
const checkBtn = document.querySelector('#check');
const logs = document.querySelector('#logs');

let count = 0;
let answer = [];

for(var i=0;i<4;i++) {
    answer[i] = Math.floor(Math.random()*10);
}

answer.join('');

checkBtn.addEventListener('click', () => {
    const value = input.value;
    if(value && value.length === 4) {
        if(answer === value) {
            
        }
    }
});