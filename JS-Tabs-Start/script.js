;(function () {
    'use strict';

    const tabs = document.querySelectorAll('#tabs > ul > li > a');

    //grap all buttons
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', selectTab);
    }

    
    function selectTab(event) 
    {

        event.preventDefault();

        // remove all classes associate with buttons
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].removeAttribute('class');
        }

        //target the button user clicked on
        event.target.className = 'active';

        // get the id of the button clicked
        const thisTap = event.target.getAttribute('href');
        

        //get the paragraph associate with button click with the id of
        //button as both have same id
        const thisContent = document.querySelector(thisTap);

        // the pargraph already appear has class .visible and i hide it with visuallyhidden
        const oldTapContent = document.querySelector('.visible');

        oldTapContent.className = 'visuallyhidden';

        oldTapContent.addEventListener('transitionend', function () {

            oldTapContent.className = 'hidden';

            thisContent.className = 'visible visuallyhidden';

            setTimeout(function () {
                thisContent.classList.remove('visuallyhidden');
            }, 20);
        }, {capture: false, once:true, passive:false});

    }

})();