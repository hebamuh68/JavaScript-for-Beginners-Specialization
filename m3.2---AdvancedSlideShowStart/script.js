(function () {
    let currImage = 0;
    const myImages = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];

    const container = document.getElementById('content');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('previous');

    function makeSlide() {

        const newslide = document.createElement('img');
        newslide.src = `slides/${myImages[currImage]}`;
        newslide.className = 'fadeinimg';
        container.appendChild(newslide);

        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }

    }

    nextBtn.addEventListener('click', function (event) {
        event.preventDefault();

        currImage++;
        if (currImage > (myImages.length - 1)) {
            currImage = 0;
        }

        makeSlide()
    });



    prevBtn.addEventListener('click', function (event) {
        event.preventDefault();

        currImage--;
        if (currImage < 0) {
            currImage = (myImages.length - 1);
        }

        makeSlide()
    });

})();