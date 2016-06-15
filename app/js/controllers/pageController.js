app.controller('pageController', ['$scope', '$location', '$routeParams', '$http', function($scope, $location, $routeParams, $http) {

    $scope.pageId = $routeParams.pageId || 1;
    
    $scope.nextPage = function() {
        $scope.pageId = (++$scope.pageId % 4) || 1;
        $location.path("/page/" + $scope.pageId);
    };

	$scope.pageClass = 'page-' + $scope.pageId;

}]);