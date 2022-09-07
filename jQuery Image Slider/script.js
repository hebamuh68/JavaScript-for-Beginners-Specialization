$(window).on('load', function(){

    'use strict';

    const imageCount = $('#slider ul li').length;
    const imageWidth = $('#slider ul li img').first().width();
    const totalWidth = (imageCount * imageWidth) + 'px';

    let leftPosition = 0;
    let counter = 0;

    $('#slider ul').css('width', totalWidth);

    //Add click handler for next button
    $('#next').click(function(){

        counter++;
        if (counter == imageCount){
            counter = 0;
        }

        leftPosition = `-${counter * imageWidth}px`;
        $('#slider ul').animate({left: leftPosition}, 700, "easeInQuad");
   
    });

    $('#previous').click(function(){

        if (counter == 0){
            counter = imageCount;
        }
        counter--;

        leftPosition = `-${counter * imageWidth}px`;
        $('#slider ul').animate({left: leftPosition}, 700, "easeInQuad");
   
    });

});
