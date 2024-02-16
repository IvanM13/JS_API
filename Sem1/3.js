let articles = `[
    {
        "id": 12,
        "title": "header",
        "text": "Lorem ipsum color"
    },
    {
        "id": 13,
        "title": "superHeader",
        "text": "Lorem ipsum tra lala"
    }
]`

articles = JSON.parse(articles);
const listArticEl = document.querySelector(".list-article");
const btnAdd = document.querySelector('.btnAdd');

articles.forEach(element => {
    addedArt(element);
});

listArticEl.addEventListener('click', ({target}) =>{
    if(target.matches(".del")){
        target.closest('.article').remove();
    }
    else if(target.matches('.ref')){
        const fatherEl = target.closest(".article");
        const titleEl = fatherEl.querySelector(".title");
        const textEl = fatherEl.querySelector(".text");
        const title = titleEl.textContent;
        const text = textEl.textContent;

        const newTitle = prompt("Введите заголовок статьи", title);
        const newText = prompt("Введите текст статьи", text);
        titleEl.innerHTML = newTitle;
        textEl.innerHTML = newText;
    }

});

function addedArt(item) {
    listArticEl.insertAdjacentHTML("beforeend", `
    <div class="article">
        <div class="title">${item.title}</div>
        <div class="text">${item.text}</div>
        <button class="del">Удалить</button>
        <button class="ref">Изменить</button>
    </div>
    `)
}
