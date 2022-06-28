const iconMenu = document.querySelector('.menu__menu-burger');
const menuBody = document.querySelector('.header-menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}