app.controller('Page3Ctrl', function ($scope, $rootScope) {
    $rootScope.currentPage = 'page3';



    $rootScope.initScrollMagic = function () {
        console.log('creo 3');
        $scope.controller = new ScrollMagic.Controller();
        $scope.introTl = new TimelineMax();

        $scope.introTl
            .to($('header .bg'), 1.4, {y: '50%', ease:Power1.easeOut}, '-=0.2')
            .to($('header'), 0.7, { ease:Power0.easeNone}, '-=1.4');


        $scope.scrollscene = new ScrollMagic.Scene({
            triggerElement: 'header',
            triggerHook: 0,
            duration: "100%"
        })
            .setTween($scope.introTl)
            .on("enter", function () {
                console.log("triger");
            })

            .addTo($scope.controller);
    };


    $scope.$on('print', function(event, args) {

        //var anyThing = args.any;
        // do what you want to do
        $scope.scrollscene.destroy();
        console.log("destruyo");
    });
});