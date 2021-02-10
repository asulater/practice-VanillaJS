const btn = document.querySelector('#button');
const dictionary = [];

btn.addEventListener('click', () => {
    const wordTag = document.querySelector('#word');
    const word = wordTag.textContent;
    
    const inputTag = document.querySelector('#input');
    const input = inputTag.value;
    
    const errorTag = document.querySelector('#error');

    if(dictionary.includes(input)){
       errorTag.textContent = '이미 사용한 단어입니다.'
       inputTag.value = '';
       inputTag.focus();
    } else {
        if(word[word.length-1] === input[0]) {
            wordTag.textContent = input;
            errorTag.textContent = '';
            inputTag.value = '';
            inputTag.focus();
            dictionary.push(input);
        } else {
            errorTag.textContent = '틀렸습니다 다시 입력하세요.';        
            inputTag.value = '';
            inputTag.focus();
        }
    }
});