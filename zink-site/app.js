const btn = document.getElementById('button');
const input = document.querySelector('#input');
const toggle = document.querySelector('#menu-btn');
const display = document.querySelector('.display');
const header = document.querySelector('header');


btn.addEventListener('click', () => {
    if (input.value === '') {
        display.textContent ='Please enter your fullName and email';
        display.style.color = 'red';
    } else{
        display.textContent = 'Thanks for subscribing to our newsletter';
        display.style.color = 'green';
    }
})

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mood');
});


