let input = document.querySelector('input');
let btnPlus = document.querySelector('.plus');
let btnMinus = document.querySelector('.minus');
let btnGenerate = document.querySelector('#generator');
let btnCopy = document.querySelector('#copy');
let clear = document.querySelector('.clear');
let hardCheck = document.getElementById('hard');
let mediumCheck = document.getElementById('medium');
let easyCheck = document.getElementById('easy');

// На кнопку генерации повесил 
//событие, по клику input заполняется сгенерированной строкой
btnGenerate.addEventListener('click', () => {
    if (mediumCheck.checked) {
        input.value = difficultyLevelMedium() 
    } else if (hardCheck.checked) {
        input.value = difficultyLevelHard()
    } else if (easyCheck.checked) {
        input.value = difficultyLevelEasy()
    } else {
        input.value = generateString();
    }
    
})

// функция генерации строки
function generateString() {
    let text = "";
    let possible = "1AabBcCdDeEfFgGhHiI2341jJkKlL567890-mMnNoOpPqQrRsStTuUvVwWxXyYzZ";

    for(let i=0; i < 10; i++) 
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    
}
 

function difficultyLevelHard() {
    let text = "";
    let possible = "1aAbBcCdDeEfFgGhHiI2341jJkKlL567890-mMnNoOpPqQrRsStTuUvVwWxXyYzZ";

    for(let i=0; i < 15; i++) 
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;        
}

function difficultyLevelMedium() {
    let text = "";
    let possible = "1abcdefghi2341jkl567890-mnopqrstuvwxyz";

    for(let i=0; i < 10; i++) 
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;        
}

function difficultyLevelEasy() {
    let text = "";
    let possible = "1abcdefghi2341jkl567890-mnopqrstuvwxyz";

    for(let i=0; i < 5; i++) 
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;        
}
  

// функция копирования текса из инпута
function textCopy() {
    let copyText = document.getElementById("inputCopy"); // создается переменная в которую помещенна ссылка на id инпута
    copyText.select(); // выбирает текстовое поле
    document.execCommand("copy"); // копирует из текстового поля
}

// Удаление элементов из инпута с помощью кнопки clear
clear.addEventListener('click', () => {
    input.value = ""
})
