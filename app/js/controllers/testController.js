(function(){

    app.controller('testController', ['$scope','$http', function($scope, $http) {
        $scope.pageClass = 'page-test';

    }]);


    app.controller('circleController', [function(){
        var self = this;
        this.data = "hola";
        this.bg = 'red';

        this.initialState = function(){
            TweenMax.to("circle", 0,{rotation:-90, transformOrigin:"50% 50%"} );
            TweenMax.to("circle", 0,{drawSVG:0} );
        };

        this.animate = function(value,color){
            var tl= new TimelineLite();
            this.bg = color;
            this.valor = value.toString()+'%'
            tl.to("circle",1,{drawSVG:this.valor});
            tl.timeScale(1);

        };
    }]);

}());