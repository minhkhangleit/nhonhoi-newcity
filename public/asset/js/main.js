//FACILITIES PAGE//
if ($('.facilities-page__box').length) {
    $('.footer').addClass('no-wheel');
    $('.bottom-link a:first-child').addClass('hidden');
    $('.group-central').addClass('show-text');
    $('.container').addClass('show');
    $('.show-text .all-dot-top').children().each(function (i) {
        var box = $(this);
        setTimeout(function () { $(box).addClass('show') }, (i + 1) * 200);
    });

    $('.note-facilities li').on('mouseenter', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var idx = $(this).attr('data-text');
        var Active = $(".all-dot-top a[data-name ='" + idx + "']");
        $('.all-dot-top a, .note-facilities li').removeClass('current');
        $(Active).addClass('current');
        $('.show-box-pic').removeClass('showup');
        $(".all-dot-top a[data-name='" + idx + "']").trigger('mouseenter');

        return false;
    });


    $('.note-facilities li').on('mouseleave', function () {
        $('.all-dot-top a, .note-facilities li').removeClass('current');
        $('.show-box-pic').removeClass('showup');
    });

    $('.all-dot-top a').on('mouseleave', function () {
        if ($(window).width() > 1100) {
            $('.all-dot-top a, .note-facilities li').removeClass('current');
            $('.show-box-pic').removeClass('showup');
        }
    });

    $('.link-point').on('mouseenter', function (e) {
        $(this).find('h3').addClass('hide')
    });
    $('.link-point').on('mouseleave', function (e) {
        $(this).find('h3').removeClass('hide')
    });


    $('.all-dot-top a').on('mouseenter click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.all-dot-top a, .note-facilities li').removeClass('current');
        $(this).addClass('current');
        $('.show-box-pic').removeClass('showup');
        var id = $(this).attr('data-name');
        var Lx = $(this).offset().left;
        var Tx = $(this).offset().top;

        var show = $(this).attr('data-box');
        var Height = $(".show-box-pic[data-pic-box='" + show + "']").innerHeight();
        var Width = $(".show-box-pic[data-pic-box='" + show + "']").innerHeight();
        if ($(window).width() > 1100) {
            $(".show-box-pic.no-pic[data-pic-box='" + show + "']").css({ 'left': Lx - Width / 2, 'top': Tx - (Height + 20) }).addClass('showup');
            $(".show-box-pic:not(.no-pic)[data-pic-box='" + show + "']").css({ 'left': Lx + 60, 'top': Tx - (Height / 2) }).addClass('showup');
            $(".note-facilities li[data-text='" + id + "']").addClass('current');
        } else {
            $(".show-box-pic[data-pic-box='" + show + "']").css({ 'left': Lx - ((Width / 2) + 10), 'top': Tx - (Height + 80) }).addClass('showup');
            $(".note-facilities li[data-text='" + id + "']").addClass('current');
        }

        return false;
    });

    $('.note-facilities li').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var idx = $(this).attr('data-text');
        $(".all-dot-top a[data-name='" + idx + "']").trigger('click');

    });

    //ZOOM PIC
    $('.all-dot-top a:not(.no-pic)').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(".show-box-pic").removeClass('current');
        if ($(window).width() > 1100) {
            // var picx = $(this).attr('data-name');

            const picx = $(this).attr('data-box');
            $(".show-box-pic[data-pic-box='" + picx + "']").removeClass('showup').addClass('current');

            if (picx !== "") {
                var img = $(".show-box-pic[data-pic-box='" + picx + "']").find('img').attr("data-src");
                var Text = $(".show-box-pic[data-pic-box='" + picx + "']").find('.faci-text h3').text();
                ThumbZoom(img, Text);
                $('.all-dot-top a, .note-facilities li').removeClass('current');

            }

        }

        return false;
    });


    $('.show-box-pic').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.all-dot-top a, .note-facilities li').removeClass('current');
        $(".show-box-pic").removeClass('current');
        $(this).removeClass('showup').addClass('current');
        var img = $(this).find('img').attr("data-src");
        var Text = $(this).find('.faci-text h3').text();
        if (img) {
            ThumbZoom(img, Text);
        }
        return false;
    });


}