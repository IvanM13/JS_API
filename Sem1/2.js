const btnAddEl = document.querySelector('#addButton');
const btnRemoveEl = document.querySelector('#removeButton');
const btnCloneEl = document.querySelector('#cloneButton');
const containerEl = document.querySelector('#container');

btnAddEl.addEventListener('click', ()=>{
    // console.log(containerEl.children);
    // console.log(containerEl.childNodes);
    const nextNum = containerEl.children.length + 1;
    containerEl.insertAdjacentHTML('beforeend', `<div class="box">${nextNum}</div>`);
});

btnRemoveEl.addEventListener('click', ()=>{
    containerEl.lastElementChild?.remove();
});

btnCloneEl.addEventListener('click', ()=>{
    const cloneEl = containerEl.lastElementChild?.cloneNode(true);
    if (cloneEl) {
        containerEl.insertAdjacentElement('beforeend', cloneEl);
        
    } else {
        document.write('<h1>Клонировать нечего</h1>');
    }

});


