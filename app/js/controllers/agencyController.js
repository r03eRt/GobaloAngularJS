app.controller('agencyController', ['$scope', function($scope) {
    $scope.pageClass = 'page-agencia';
    var self = this;


    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };


}]);
