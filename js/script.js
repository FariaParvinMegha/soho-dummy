

$(function () {

    // init flickity
    $('.pic-slider').flickity({
        // options
        prevNextButtons: true,
        contain: true,
        pageDots: false,
        groupCells: true,
        wrapAround: true,
        draggable: true,
        percentPosition: false,
        adaptiveHeight: true,
        cellAlign: "left",
        arrowShape: "M95.849,46.323H14.1L40.364,20.15a4.166,4.166,0,0,0-5.9-5.881L1.076,47.537a4.162,4.162,0,0,0,0,5.891L34.462,86.7a4.166,4.166,0,0,0,5.9-5.881L14.1,54.642H95.849A4.159,4.159,0,1,0,95.849,46.323Z",
        pauseAutoPlayOnHover: false
    });


    // init scroll-magic
    var controller = new ScrollMagic.Controller();

    // pin the intro
    var pinIntroScene = new ScrollMagic.Scene({
        triggerElement: '.bg-img-2',
        triggerHook: 0
    })
    .setPin('.bg-img-2')
    .addTo(controller);
    var pinIntroScene2 = new ScrollMagic.Scene({
        triggerElement: '.bg-img-3',
        triggerHook: 0
    })
    .setPin('.bg-img-3')
    .addTo(controller);

    // fade in back2top
    var MyScene = new ScrollMagic.Scene({
        triggerElement: '#flickity',
        triggerHook: 0.8
    })
        .setClassToggle('#back2top', 'fade-in')
        .addTo(controller);

    //show mobile nav
    $('#mobile-nav-open-btn').click(function(){
        $('#mobile-nav').css("height", "100%");
    });
    //hide mobile nav
    $('#mobile-nav-close-btn, #mobile-nav a').click(function(){
        $('#mobile-nav').css("height", "0");
    });

});