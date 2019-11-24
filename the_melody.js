var j = jQuery.noConflict();
j(document).ready(function () {
    j(".up").hide();
    j(".click").click(function () {
        j(".menu").toggle(300);
        j(".up").toggle(0);
        j(".down").toggle(0);
    });
    j(".w-29").click(function () {

        if (!j(".w-29").hasClass("open")) {
            j(".w-29").addClass("open");
            j(".DoubleMenu").css("left", "0px");
            j(".puk").css("left", "0px");
        } else {
            j(".w-29").removeClass("open");
            j(".DoubleMenu").css("left", "-1100px");
            j(".puk").css("left", "-1100px");
        }
    });
    j(".centerr").slick({
        mobileFirst: true,
        dots: false,
        infinite: false,
        slidesToShow: 1,
        appendArrows: '.arrrows',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    centerMode: true,
                    slidesToShow: 3,
                    centerPadding: '0px',
                    initialSlide: 2,
                    appendDots: '.dotts',
                }
    }
  	]
    });

    j(".center").slick({
        mobileFirst: true,
        dots: false,
        infinite: false,
        slidesToShow: 1,
        appendArrows: '.arrows',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    centerMode: true,
                    slidesToShow: 3,
                    centerPadding: '0px',
                    initialSlide: 2,
                    appendDots: '.dots',
                }
    }
  	]
    });

    j(".cente").slick({
        mobileFirst: true,
        dots: false,
        infinite: false,
        slidesToShow: 1,
        appendArrows: '.aows',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    centerMode: true,
                    slidesToShow: 3,
                    centerPadding: '0px',
                    initialSlide: 2,
                    appendDots: '.dos',
                }
    }
  	]
    });

    j(".sertificate").slick({
        mobileFirst: true,
        slidesToShow: 2,
        infinite: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 3,
                    centerPadding: '0px',
                    initialSlide: 0,
                }
    }
  	]
    });

});
