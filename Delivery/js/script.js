const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close'),
      link = document.querySelector('.menu__list');

      
hamburger.addEventListener('click',() => {
    menu.classList.add('active');
});


close.addEventListener('click',() => {
    menu.classList.remove('active');
});


link.addEventListener('click',() => {
    menu.classList.remove('active');
});
