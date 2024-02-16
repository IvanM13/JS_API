// const width = window.outerWidth;
// const heigth = window.outerHeight;

// const sizeDesk = document.querySelector('.size_desktop');
// sizeDesk.insertAdjacentHTML('beforeend', `
//             <p>ширина экрана: ${width}</p>
//             <p>высота экрана: ${heigth}</p>
// `)
const sizeDesk = document.querySelector('.size_desktop');

function printDesktopSize() {
    const width = window.outerWidth;
    const heigth = window.outerHeight;

    sizeDesk.innerHTML = `
        <p>ширина экрана: ${width}</p>
        <p>высота экрана: ${heigth}</p>`
}

window.addEventListener('resize', printDesktopSize);

printDesktopSize();

window.addEventListener('beforeunload', (event)=>{
    event.preventDefault();
    confirm("Вы уверены что хотите выйти?");

});