let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset');

let text = document.getElementById('text');

let counter = 0;

increase.addEventListener('click', () => {
    counter += 1;
    text.innerHTML = counter;
})

decrease.addEventListener('click', () => {
    counter -= 1;
    text.innerHTML = counter;
})

reset.addEventListener('click', () => {
    counter = 0;
    text.innerHTML = counter;
});