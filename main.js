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

let id = 0;

function createList(text) {
    const list = document.createElement('li');
    list.setAttribute('class', 'list');
    list.setAttribute('data-id', `${id}`)
    list.innerHTML = `
        <div class="list__check__item" data-id=${id}>
            <span class="list__check">
                <i class="far fa-check-circle"></i>
            </span>
            <span class="list__item">${text}</span>
        </div>
        <div class="list__delBtn">
            <i class="far fa-trash-alt" data-id=${id}></i>
        </div>
    `;

    lists.appendChild(list);
    list.scrollIntoView({block: "center"});
    id++;

    lists.addEventListener('click', event => {
        const id = event.target.dataset.id;
        
        if (event.target.className === 'far fa-trash-alt') {
            document.querySelector(`.list[data-id="${id}"]`).remove();
        }

        if (event.target.className === 'list') {
            document.querySelector(`.list__check__item[data-id="${id}"]`).style.textDecoration = "line-through";
            document.querySelector(`.list__check__item[data-id="${id}"]`).style.color = "green";
        }
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

