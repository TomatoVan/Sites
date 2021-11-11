// ДЛЯ ФОРМЫ:
//объявляем переменные, в которые записываем DOM-элементы
let contactBtn = document.querySelector('.contact_btn'); 
let contactWrapper = document.querySelector('.contact_wrapper');
let contactBlock = document.querySelector('.contact_block');
let contactInput = document.querySelector('.contact_input');


//ставим обработчик на клик
contactBtn.onclick = (e) => {
    if (contactInput.value !="") {
    e.preventDefault();
    contactBlock.style.display = 'block';
    contactWrapper.style.display = 'none';
    }

}


//гамбургер для мобильной версии
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navbar_menu'),
    menuItem = document.querySelectorAll('.navbar_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('navbar_menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('navbar_menu_active');
        })
    })
})