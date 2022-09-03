(function () {
    'use strict';

    const subMenus = document.querySelectorAll("ul li ul");
    const menuLinks = document.querySelectorAll(".menulink");

    //Challenge 1
    function close_SubMenus() {
        for (let i = 0; i < subMenus.length; i++) {
            subMenus[i].className = "hide-menu";
        }
    }

    close_SubMenus();

    //Challenge 2, 3, 4, 5
    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', function (event) {
            event.preventDefault();

            const thisMenu = this.parentNode.querySelector('ul');

            // open or close sub menus
            if (thisMenu.classList.contains("hide-menu")) {
                //Close other menus before open new one
                close_SubMenus()
                thisMenu.className = "show-menu ";
            } else {
                thisMenu.className = "hide-menu ";
            }
        });
    }


})();