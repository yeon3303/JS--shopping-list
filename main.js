'use strict';

const input__text = document.querySelector('.input__text');
const addBtn = document.querySelector('.addBtn');
const lists = document.querySelector('.lists');
const clrBtn = document.querySelector('.clrBtn');

function onAdd() {
    const text = input__text.value;

    if (text !== '') {
        createList(text);
    }

    input__text.value = '';
    input__text.focus();
};

function createList(text) {
    const list = document.createElement('li');
    list.setAttribute('class', 'list');

    const listCheckItem = document.createElement('div');
    listCheckItem.setAttribute('class', 'list__check__item');

    const listCheck = document.createElement('span');
    listCheck.setAttribute('class', 'list__check');
    listCheck.innerHTML = '<i class="far fa-check-circle"></i>';
    
    const listItem = document.createElement('span');
    listItem.setAttribute('class', 'list__item');
    listItem.textContent = text;

    const listDelBtn = document.createElement('div');
    listDelBtn.setAttribute('class', 'list__delBtn');
    listDelBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
    
    listCheckItem.appendChild(listCheck);
    listCheckItem.appendChild(listItem);
    list.appendChild(listCheckItem);
    list.appendChild(listDelBtn);

    lists.appendChild(list);
    list.scrollIntoView({block: "center"});

    listDelBtn.addEventListener('click', () => {
        lists.removeChild(list);
    });

    list.addEventListener('click', () => {
        list.style.textDecoration = "line-through";
        listCheck.style.color = "green";
    });
    
    return list;
};


addBtn.addEventListener('click', () => {
    onAdd();
});

input__text.addEventListener('keyup', event => {
    if (event.keyCode === 13) {
        onAdd();
    }
})

clrBtn.addEventListener('click', () => {
    window.location.reload();
})

