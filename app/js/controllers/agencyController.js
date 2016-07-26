app.controller('agencyController', ['$scope', function($scope) {
    $scope.pageClass = 'page-agencia';
    var self = this;



    this.animate = function(){
        var $parte1 = $('#parte1'),
        $parte2 = $('#parte2'),
        $maskIzq = $('#maskIzq'),
        $maskDer = $('#maskDer'),
        $O_1 = $('#O_1'),
        $tilde = $('#Tilde'),
        $grupoO = $('#grupo_o');

        mainTL = new TimelineMax();
        initTl();


        function derTl() {
            var derTl = new TimelineMax();
            derTl
                .to($maskDer, 0.8, {x: '+=200px', ease: Power4.easeInOut});
            return derTl;
        };

        function izqTl() {
            var izqTl = new TimelineMax();
            izqTl
                .to($maskIzq, 0.8, {x: '-=60px', ease: Power4.easeInOut});
            return izqTl;
        };

        function centerTl() {
            var centerTl = new TimelineMax();

            centerTl
                .to($grupoO, 1, {rotation:90, transformOrigin: 'center center'});
            return centerTl;
        }

        
        function initTl() {
            mainTL
                .add(centerTl(), 'animation-center')
                .add(derTl(), 'animation-right')
                .add(izqTl(), 'animation-left');
        };



    };


}]);