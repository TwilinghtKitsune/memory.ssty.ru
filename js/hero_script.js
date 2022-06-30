const iconMenu = document.querySelector('.menu__menu-burger');
const menuBody = document.querySelector('.header-menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}


const bio = document.querySelector('.biography');
const nameHero = document.querySelector('.hero__name');

let past = nameHero.textContent;
let arr = past.trim().split(' ').slice(0, -1);
[arr[0], arr[1], arr[2]] = [arr[2], arr[0], arr[1]]

let finName = arr.join(' ');

bio.insertAdjacentHTML('beforebegin', `
    <div class='container bread-crumbs'>
        <a href='../index.html#map'>По улицам памяти</a> / <p>${finName}</p>
    </div>
`)