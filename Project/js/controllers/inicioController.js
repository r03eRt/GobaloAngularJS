app.controller('InicioCtrl', function ($scope, $rootScope) {
    $rootScope.currentPage = 'inicio';


    console.log('creo inicio');


    var controller = new ScrollMagic.Controller();
    var introTl = new TimelineMax();

    introTl
        .to($('header .bg'), 1.4, {y: '50%', ease:Power1.easeOut}, '-=0.2')
        .to($('header'), 0.7, { ease:Power0.easeNone}, '-=1.4');


    var scrollscene = new ScrollMagic.Scene({
        triggerElement: 'header',
        triggerHook: 0,
        duration: "100%"
    })
        .setTween(introTl)
        .on("enter", function () {
            console.log("triger");
        })

        .addTo(controller);

    $scope.kill = function () {
        console.log('destroy');
        scrollscene.destroy();
    }



    $scope.$on('print', function(event, args) {

        //var anyThing = args.any;
        // do what you want to do
        scrollscene.destroy();
        console.log("destruyo");
    });



    $scope.$on('creo', function(event, args) {
        //var anyThing = args.any;
        // do what you want to do
        console.log("creo");
    });
    
    
    
    
});
