app.controller('ProyectosCtrl', function ($scope, $rootScope) {
    $rootScope.currentPage = 'proyectos';

    $rootScope.initScrollMagic = function () {
        console.log('creo  1');
        $scope.controller = new ScrollMagic.Controller();
        $scope.introTl = new TimelineMax();

        $scope.introTl
            .to($('header .bg'), 1.4, {y: '50%', ease:Power1.easeOut}, '-=0.2')
            .to($('header'), 0.7, { ease:Power0.easeNone}, '-=1.4');


        $scope.introTl2 = new TimelineMax();

        $scope.introTl2
            .to($('header h1'), 1.4, {y: '400%', ease:Power1.easeOut}, '-=0.2')
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


        $scope.titleScene = new ScrollMagic.Scene({
            triggerElement: 'header',
            triggerHook: 0,
            duration: "100%"
        })
            .setTween($scope.introTl2)
            .addTo($scope.controller);
        

        
        $scope.proyectList = [
            '#proyect1', '#proyect2', '#proyect3', '#proyect4', '#proyect5',
            '#proyect6', '#proyect7', '#proyect8', '#proyect9', '#proyect10',
            '#proyect11', '#proyect12'];
        
        $scope.proyectList.forEach(function (proyect, index) {
            var num = index +1;

            $scope.proyectScene = new ScrollMagic.Scene({
                triggerElement: proyect,
                offset: -150
            })
                .setClassToggle("#proyect"+num, "active")
                .addTo($scope.controller);
        });


    };


    $scope.$on('print', function(event, args) {

        //var anyThing = args.any;
        // do what you want to do
        $scope.scrollscene.destroy();
        $scope.proyectScene.destroy();
        $scope.titleScene.destroy();
        console.log("destruyo");
    });


    $scope.$on('creo', function(event, args) {
        //var anyThing = args.any;
        // do what you want to do
        console.log("creo");
    });


});