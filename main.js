'use strict';

const input__text = document.querySelector('.input__text');
const addBtn = document.querySelector('.addBtn');
const lists = document.querySelector('.lists');
const clrBtn = document.querySelector('.clrBtn');

function onAdd() {
    const text = input__text.value;

    if (text === '') {
        input__text.focus();
        return;
    }
    
    const list = createList(text);
    lists.appendChild(list);
    list.scrollIntoView({block: "center"});
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
                <i class="far fa-check-circle" data-value=${id}></i>
            </span>
            <span class="list__item" data-value=${id}>${text}</span>
        </div>
        <div class="list__delBtn">
            <i class="far fa-trash-alt" data-key=${id}></i>
        </div>
    `;

    id++;    
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

lists.addEventListener('click', event => {
        const key = event.target.dataset.key;
        const value = event.target.dataset.value;
        
        if (key) {
            const toBeDeleted = document.querySelector(`.list[data-id="${key}"]`);
            toBeDeleted.remove();
        }

        if (value) {
            const toBeChecked = document.querySelector(`.list__check__item[data-id="${value}"]`);
            toBeChecked.style.textDecoration = "line-through";
            toBeChecked.style.color = "green";
        }
}); 