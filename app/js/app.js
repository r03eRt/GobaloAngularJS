var app = angular.module('ngViewEffects', [
	'ngRoute',
	'ngAnimate',
    'pascalprecht.translate'
]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/page/:pageId', {
            controller: 'pageController',
            templateUrl: function(params) {
                return 'views/page' + params.pageId + '.html';
            }
        })
        .when('/code', {
        	controller:  'codeController',
        	templateUrl: 'views/code.html'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller:  'aboutController'
        })
        .when('/agencia', {
            templateUrl: 'views/agencia.html',
            controller:  'agencyController'
        })
        .when('/contacto', {
            templateUrl: 'views/contacto.html',
            controller:  'contactController'
        })
        .when('/proyectos', {
            templateUrl: 'views/proyectos.html',
            controller:  'projectsController'
        })
        .when('/', {
            templateUrl: 'views/inicio.html',
            controller:  'indexController'
        })
        .when('/test', {
            templateUrl: 'views/test.html',
            controller:  'testController'
        })
        .otherwise({
        redirectTo: '/'
        })
        /*.otherwise({
        	redirectTo: '/page/1'
        });*/
});


var translations_es = {
    HEADLINE: 'INICIO',
    PARAGRAPH: "Contenido de inicio<strong>hola amigo</strong>!!",
    NAMESPACE: {
        PARAGRAPH: 'And it comes with awesome features!'
    }
};

var translations_en = {
    HEADLINE: 'INDEX',
    PARAGRAPH: "Index content<strong>Hi my friend</strong>!",
    NAMESPACE: {
        PARAGRAPH: 'And it comes with awesome features!'
    }
};



app.config(['$translateProvider', function ($translateProvider) {
    // add translation table
    $translateProvider.translations('en', translations_en);
    $translateProvider.translations('es', translations_es);
    $translateProvider.preferredLanguage('en');
}]);