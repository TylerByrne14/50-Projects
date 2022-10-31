'use strict'

const notifications = document.querySelector('.notifications');
const button = document.querySelector('.btn');


const types = [
    'success',
    'error',
    'invalid'
]


const errorMessage = 'This is an ERROR';

const successMessage = 'This is a SUCCESS';

const invalidMessage = 'This is INVALID';

button.addEventListener('click', ()=> showMessage());


function showMessage(){

    const notif = document.createElement('div');
    notif.classList.add(randomType());

    if(notif.classList.contains('success')){
        notif.innerText = successMessage;
    }
    else if(notif.classList.contains('error')){
        notif.innerText = errorMessage;
    }
    else if(notif.classList.contains('invalid')){
        notif.innerText = invalidMessage;
    }

    notifications.appendChild(notif);

    setTimeout(() =>{
        notif.remove();
    }, 3000);

}


function randomType(){
    return types[Math.floor(Math.random() * types.length)];
}

