document.addEventListener("DOMContentLoaded", function() {

    const hamburgerMenuImage = document.querySelector('.hamburgerMenu');
    const hiddenSubMenu = document.querySelector('.list--hidden');

    const subMenuButton = document.querySelector('.subMenu');
    const hiddenMenu = document.querySelector('.row--hidden');

    const bodyElement = document.querySelector('body');
    const gradient = document.querySelector('.gradient');

    let stateOfMenu = 0;
    let stateOfSubMenu = 0;


    //Open/Close Hamburger Menu
    hamburgerMenuImage.addEventListener('click', function (event) {
        event.stopImmediatePropagation();

            if(stateOfMenu === 0)
            {
                hamburgerMenuImage.style.backgroundImage = "url('./images/X.svg')";

                gradient.classList.remove('gradientDisappear');
                gradient.classList.add('gradientShowing');

                hiddenMenu.classList.add("slideMainMenuFromTop");
                hiddenMenu.classList.remove('slideMainMenuToTop');

                stateOfMenu = 1;
            } else {

                hamburgerMenuImage.style.backgroundImage = "url('./images/hamburgermenu.png')";

                gradient.classList.remove('gradientShowing');
                gradient.classList.add('gradientDisappear');

                hiddenMenu.classList.remove('slideMainMenuFromTop');
                hiddenMenu.classList.add("slideMainMenuToTop");

                stateOfMenu = 0;
            }
            if(stateOfSubMenu === 1){
                hiddenSubMenu.classList.remove('submenuShowing');
                hiddenSubMenu.classList.add("submenuHiding");
                stateOfSubMenu = 0;
            }

    });

    //Clear classes after resize > 1200
    window.addEventListener("resize", function() {
        if (window.matchMedia("(min-width: 1200px)").matches) {

            hamburgerMenuImage.style.backgroundImage = "url('./images/hamburgermenu.png')";

            gradient.classList.remove('gradientShowing');
            gradient.classList.remove('gradientDisappear');

            hiddenSubMenu.classList.remove('submenuHiding');
            hiddenSubMenu.classList.remove('submenuShowing');

            hiddenMenu.classList.remove("slideMainMenuToTop");
            hiddenMenu.classList.remove("slideMainMenuFromTop");

            stateOfMenu = 0;
            stateOfSubMenu = 0;
        }
    });

    //Menu will hide when click outside
    bodyElement.addEventListener('click', function (event) {

        if(stateOfMenu === 1)
        {
            hamburgerMenuImage.style.backgroundImage = "url('./images/hamburgermenu.png')";

            hiddenMenu.classList.remove('slideMainMenuFromTop');
            hiddenMenu.classList.add("slideMainMenuToTop");

            gradient.classList.remove('gradientShowing');
            gradient.classList.add('gradientDisappear');

            stateOfMenu = 0;
        }
        if(stateOfSubMenu === 1){
            hiddenSubMenu.classList.remove('submenuShowing');
            hiddenSubMenu.classList.add("submenuHiding");

            stateOfSubMenu = 0;
        }
    });

    //But not when sliderMenu was clicked
    hiddenMenu.addEventListener('click', function (event) {
        event.stopImmediatePropagation();
    });

    //Open menu event works only on smaller screen
    subMenuButton.addEventListener('click', function () {
        event.stopImmediatePropagation();

        if(window.innerWidth<1200) {
            if (stateOfSubMenu === 0) {
                subMenuButton.style.color = "red";

                hiddenSubMenu.classList.remove("submenuHiding");
                hiddenSubMenu.classList.add("submenuShowing");

                stateOfSubMenu = 1;
            } else {
                subMenuButton.style.color = "white";

                hiddenSubMenu.classList.remove('submenuShowing');
                hiddenSubMenu.classList.add("submenuHiding");

                stateOfSubMenu = 0;
            }
        }
    })
});