document.addEventListener("DOMContentLoaded", function() {

    const hamburgerMenu = document.querySelector('.hamburgerMenu');
    const hiddenMenu = document.querySelector('.row--hidden');
    const openMenu = document.querySelector('.openMenu');
    const hiddenSubMenu = document.querySelector('.list--hidden');
    const notHamburgerMenu = document.querySelector('.backgroundImage');

    console.log(hiddenSubMenu);

    let stateOfMenu = 0;
    let stateOfSubMenu = 0;

    hamburgerMenu.addEventListener('click', function () {
        if(stateOfMenu === 0)
            {
                hamburgerMenu.style.backgroundImage = "url('./images/X.png')";
                hiddenMenu.classList.add("slideMainMenuFromTop");
                hiddenMenu.classList.remove('slideMainMenuToTop');
                stateOfMenu = 1;
            } else {
                hamburgerMenu.style.backgroundImage = "url('./images/hamburgermenu.png')";
                hiddenMenu.classList.remove('slideMainMenuFromTop');
                hiddenMenu.classList.add("slideMainMenuToTop");
                stateOfMenu = 0;
            }
            if(stateOfSubMenu === 1){
                hiddenSubMenu.classList.remove('sliderFromUp');
                hiddenSubMenu.classList.add("hideToTop");
                stateOfSubMenu = 0;
            }
    });

    notHamburgerMenu.addEventListener('click', function () {
        if (stateOfMenu === 1) {
            hamburgerMenu.style.backgroundImage = "url('./images/hamburgermenu.png')";
            openMenu.style.color ="white";
            hiddenMenu.classList.remove('slideMainMenuFromTop');
            hiddenMenu.classList.add("slideMainMenuToTop");
            hiddenSubMenu.classList.remove('sliderFromUp');
            hiddenSubMenu.classList.add("hideToTop");
            stateOfMenu = 0;
        }
    });

    openMenu.addEventListener('click', function () {
        if(stateOfSubMenu === 0)
        {
            openMenu.style.color ="red";
            hiddenSubMenu.classList.add("sliderFromUp");
            hiddenSubMenu.classList.remove('hideToTop');
            stateOfSubMenu = 1;
        } else {
            openMenu.style.color ="white";
            hiddenSubMenu.classList.remove('sliderFromUp');
            hiddenSubMenu.classList.add("hideToTop");
            stateOfSubMenu = 0;
        }
    })



});