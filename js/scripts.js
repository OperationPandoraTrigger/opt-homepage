window.addEventListener('load', callbackFunc);
window.addEventListener('scroll', callbackFunc);

jQuery(window).on('scroll', function() {
        if(jQuery(window).scrollTop() > 1) {
            jQuery('body').addClass('header-active');
        } else {
            jQuery('body').removeClass('header-active');
        }
    }
);

function isElementInViewport(element) {
    var rect=element.getBoundingClientRect();
    return (
    rect.top >=0 &&
    rect.left >=0);}

var elements=document.querySelectorAll('.on-scroll-once');

function callbackFunc() {
    for (var i=0; i < elements.length; i++) {
        if (isElementInViewport(elements[i])) {
            elements[i].classList.add('visible');
			elements[i].classList.remove('on-scroll-once');
        }        
    }
}

const menu = document.querySelector(".nav-menu");
const menuItems = document.querySelectorAll(".nav-menu-item");
const hamburger= document.querySelector("#BurgerMenu");
const closeIcon= document.querySelector("#NavBarClose");
const menuIcon = document.querySelector("#NavBarButton");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
