var app = angular.module('GobaloApp', [
    'ngRoute',
    'ngAnimate',
    'ng-translation'
]);


app.value({
    value1: { foo: 'bar' },
    value2: { foo: 'baz' }
});

app.config(['ngTranslationProvider', function(ngTranslationProvider) {
    ngTranslationProvider
        .setDirectory('translations')
        .setFilesSuffix('.json')
        .langsFiles({
            en: 'en',
            de: 'de',
            es: 'es'
        })
        .fallbackLanguage('en')
}]);

app.run(function($location, ngTranslation) {
    ngTranslation.use(
        $location.search().lang
    );
});

//
// Resolver
// ---------------------------
var resolve = {
  delay: function($q, $timeout, $rootScope) {
    var deferred = $q.defer();

    var stopListening = $rootScope.$on('changeRoute', function (event) {
      event.stopPropagation();
      deferred.resolve('delay');
      stopListening();
    });

    return deferred.promise;
  }
};

//
// Routes
// ---------------------------

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $routeProvider.
    when('/', {
      controller: 'Page1Ctrl',
      templateUrl: 'views/page1.html',
      resolve: resolve
    })
    .when('/page2', {
      controller: 'Page2Ctrl',
      templateUrl: 'views/page2.html',
      resolve: resolve
    })
    .when('/page3', {
      controller: 'Page3Ctrl',
      templateUrl: 'views/page3.html',
      resolve: resolve
    })
    .when('/contacto', {
      controller: 'ContactoCtrl',
      templateUrl: 'views/contacto.html',
      resolve: resolve
    })
    .when('/proyectos', {
      controller: 'ProyectosCtrl',
      templateUrl: 'views/proyectos.html',
      resolve: resolve
    })
    .when('/inicio', {
      controller: 'InicioCtrl',
      templateUrl: 'views/inicio.html',
      resolve: resolve
    })
    .when('/talento', {
      controller: 'TalentoCtrl',
      templateUrl: 'views/talento.html',
      resolve: resolve
    })
    .when('/agencia', {
      controller: 'AgenciaCtrl',
      templateUrl: 'views/agencia.html',
      resolve: resolve
    })
    .otherwise({
      redirectTo: '/'
    });

}]);




