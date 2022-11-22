// Smoothscroll Script...
$ ('nav ul li a').click(function(){
    var thisSection = $(this).attr('href');
    var thisLInk = $(this);

    $('html, body').stop().animate({scrollTop: $(thisSection).offset().top - 200
    }, 800, 'easeOutCirc', function(){

        //alert on the left bottom line
        //alert($(window).offset());

        //change link color
        $('nav ul li a').removeAttr('class');
        thisLInk.addClass('selected');

    });
})

$(window).on('load', function(){

    var allLinks = $('nav ul li a');
    var posts = $('section')
    var pageTop;
    var postPos;
    var counter = 0;
    var prevCounter = 0;

    var postTops = [];

    posts.each(function(){
        postTops.push(Math.floor($(this).offset().top))
    });

    console.log(postTops);

    //======================================================

    $(window).scroll(function(){
        
        pageTop = $(window).scrollTop() + 210;

        if (pageTop > postTops[counter+1]){
            counter++;
            console.log(`scroll down ${counter}`);
        }
        else if (counter > 0 && pageTop < postTops[counter]){
            counter--;
            console.log(`scrolling up ${counter}`);

        }

        if (counter != prevCounter){
            $(allLinks).removeAttr('class');
            $("nav ul li a").eq(counter).addClass("selected");
            prevCounter = counter;
        }
        
    });


})