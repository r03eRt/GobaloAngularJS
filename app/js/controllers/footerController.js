app.controller('footerController', ['$scope','$http', function($scope, $http) {

    var self = this;




}]);



//Place your own Instagram client_id below. Go to https://instagram.com/developer/clients/manage/ and register your app to get a client ID
var client_id = '957fdac3b0384d3db9ce64f13d5d258d';

//To get your user ID go to http://jelled.com/instagram/lookup-user-id and enter your Instagram user name to get your user ID
var user_id = '1210570537';

//https://www.instagram.com/oauth/authorize/?client_id=64a12cb0db7b41da8cd2a8736770c466&redirect_uri=http://127.0.0.1:8080/test&response_type=token
var access_token = '1210570537.1677ed0.92332ad61f2d4e1da81132fd62db1bc2';


app.controller('ShowImages', function($scope, InstagramAPI) {
    $scope.layout = 'grid';
    $scope.data = {};
    $scope.pics = [];

    InstagramAPI.fetchPhotos(function(data) {
        $scope.pics = data;
    });
});


app.factory('InstagramAPI', ['$http', function($http) {
    return {
        fetchPhotos : function(callback) {
            var endpoint = 'https://api.instagram.com/v1/users/';
            endpoint += user_id;
            endpoint += '/media/recent/?';
            endpoint += '?count=1';
            endpoint += '&callback=JSON_CALLBACK';
            endpoint += '&access_token=' + access_token;
            console.log(endpoint);
            $http.jsonp(endpoint)
                .success(function(response) {
                    callback(response.data);
                })
                .error(function(xhr, status, err) {
                    console.error(status, err);
                })
        }
    }
}]);
