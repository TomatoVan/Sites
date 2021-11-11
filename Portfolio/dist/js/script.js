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


const num = document.querySelectorAll('.skills_item2-num'),
      lines = document.querySelectorAll('.skills_item2-bar span');

num.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


arrowTop.onclick = function() {
    window.scrollTo (pageXOffset, 0);
};
window.addEventListener ('scroll', function(){
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});

