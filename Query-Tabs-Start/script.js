(function () {
    'use strict'

    $('#tabs > ul > li > a').click(function () {
        $('#tabs > ul > li > a').css({
            background: "#333",
            color: "#ccc"
        });

        $(this).css({
            background: "#ccc",
            color: "#333"
        });

        const thisTab = $(this).attr('href');
        $('#tabs > div:visible').fadeOut(200, function () {
            $(thisTab).fadeIn(200);
        });
    })
})();