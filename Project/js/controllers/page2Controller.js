app.controller('Page2Ctrl', function ($scope, $rootScope) {
    $rootScope.currentPage = 'page2';


    var controller = new ScrollMagic.Controller();
    var introTl = new TimelineMax();

    introTl
        .to($('header .bg'), 1.4, {y: '50%', ease:Power1.easeOut}, '-=0.2')
        .to($('header'), 0.7, { ease:Power0.easeNone}, '-=1.4');


    var page2 = new ScrollMagic.Scene({
        triggerElement: 'header',
        triggerHook: 0,
        duration: "100%"
    })
        .setTween(introTl)
        .on("enter", function () {
            console.log("triger");
        })

        .addTo(controller);

});