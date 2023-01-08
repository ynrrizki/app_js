let count = document.querySelector('#count');
let btnIncrement = document.querySelector('#increment');
let btnDecrement = document.querySelector('#decrement');
let number = 0;

count.innerHTML = 0;

btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);

function increment() {
    number += 1;
    count.innerHTML = number;
}

function decrement() {
    if (number > 0) {
        number -= 1;
        count.innerHTML = number;
    }
}

