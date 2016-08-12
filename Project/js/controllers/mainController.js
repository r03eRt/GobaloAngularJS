app.controller('MainCtrl',['$scope', '$rootScope','$timeout', 'ngTranslation', function ($scope, $rootScope, $timeout, $ngTranslation ) {
    $rootScope.currentPage = 'page1';


    console.log('creo page3');


    // Trigger on load:
    $timeout(function () {
        $rootScope.$emit('changeRoute');
    }, 0);

    $scope.languages = ['en', 'de', 'es'];

    $scope.update = function(language) {
        $ngTranslation.use(language);
        console.log("traduzco a "+language);
    };




}]);