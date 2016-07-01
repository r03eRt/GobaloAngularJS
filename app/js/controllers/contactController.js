(function(){

    app.controller('contactController', ['$scope','$http', function($scope, $http) {
        $scope.pageClass = 'page-contacto';

        var self = this;
        this.user = {};
        this.message = "";

        this.submitForm = function() {
            $http({
                method  : 'post',
                url     : 'http://www.gobalo.es/test.php',
                data    : this.user,
                headers : {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if (data.errors) {
                    // Showing errors.
                    self.errorName = data.errors.name;
                    self.errorUserName = data.errors.username;
                    self.errorEmail = data.errors.email;
                } else {
                    self.message = data.message;
                }
            }).error(function(){
            });
        }
    }]);

}());