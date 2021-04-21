'use strict';

const input = document.querySelector('input');
const btnClear = document.querySelector('.btnClear');
const main = document.querySelector('main');
const form = document.querySelector('form');

function addList(e) {
    const inputValue = input.value;
    const list = document.createElement('li');
    const del = document.createElement('span');
    list.setAttribute('class', 'list');
    list.textContent = inputValue;
    del.textContent = '❌';
    main.appendChild(list);
    list.appendChild(del);
    e.preventDefault();

    del.addEventListener('click', function delList(e) {
        main.removeChild(list);
        e.preventDefault();
    });
};

form.addEventListener('submit', addList);

btnClear.addEventListener('click', init);

function init() {
    window.location.reload();
}