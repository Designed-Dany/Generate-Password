let input = document.querySelector('input');
let btnPlus = document.querySelector('.plus');
let btnMinus = document.querySelector('.minus');
let btnGenerate = document.querySelector('#generator');
let btnCopy = document.querySelector('#copy');
let clear = document.querySelector('.clear');
let fader = document.getElementById('#fader');
let output = document.querySelector('#volume');
let easy = document.querySelector('.easy');
let medium = document.querySelector('.medium');
let hard = document.querySelector('.hard');
// На кнопку генерации повесил 
//событие, по клику input заполняется сгенерированной строкой
btnGenerate.addEventListener('click', () => {
    if (output.value == 7.5) {
        input.value = difficultyLevelMedium() 
    } else if (output.value == 15) {
        input.value = difficultyLevelHard()
    } else if (output.value == 0) {
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

// Удаление элементов из инпута с помощью значка clear
clear.addEventListener('click', () => {
    input.value = ""
})

// передвижение бегунка
function outputUpdate(vol) {
    output = document.querySelector('#volume');
    output.value = vol;
    output.style.left = vol - 20 + 'px';

    if (output.value == 0) {
        easy.classList.add('active');
    } else if (output.value !== 0) {
        easy.classList.remove('active');
    }

    if (output.value == 7.5) {
        medium.classList.add('active');
    } else if (output.value !== 7.5) {
        medium.classList.remove('active');
    }

     if (output.value == 15) {
        hard.classList.add('active');
    } else if (output.value !== 15) {
        hard.classList.remove('active')
    }
}





// Надо чтобы при значении инпута бегунка 0 подставлялась функция 0