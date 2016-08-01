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


/**
 * <h1 class="titular ">{{'HEADLINE' | translate}}</h1> --> Introducir texto plano. ( {{ 'NOMBRE_VARIABLE' | translate }} )
 * <p translate="{{ 'PASSED_AS_INTERPOLATION' }}"></p> --> Introducir html ( translate="{{ NOMBRE_VARIABLE}}").
 */

app.config(['$translateProvider', function ($translateProvider) {
    // add translation table
    $translateProvider.translations('en', translations_en);
    $translateProvider.translations('es', translations_es);
    $translateProvider.preferredLanguage('es');
}]);



//TRADUCCIONES

var translations_es = {
    // GENERAL
    GENERAL:{
        LOGO: 'mi logo',
        BUTTON_LANG_ES: 'Español',
        BUTTON_LANG_EN: 'Ingles'
    },
    // INICIO
    INICIO:{
        TITULAR: 'Inicio',
        INTRO: 'Inicio Contenido!',
        PARRAFO1: 'Parrafo español'
    },
    //AGENCIA
    AGENCIA:{
        TITULAR: 'Agencia',
        INTRO: 'Agencia Contenido',
        PARRAFO1: 'Agencia Parrafo español'
    },
    //PROYECTOS
    PROYECTOS:{
        TITULAR: 'Proyectos',
        INTRO: 'Proyectos Contenido',
        PARRAFO1: 'Proyectos Parrafo español'
    },
    //CONTACTO
    CONTACTO:{
        TITULAR: 'Contacto',
        INTRO: 'Contacto Contenido',
        PARRAFO1: 'Contacto Parrafo español'
    },

};

var translations_en = {
    // GENERAL
    GENERAL:{
        LOGO: 'my logo',
        BUTTON_LANG_ES: 'Spanish',
        BUTTON_LANG_EN: 'English'
    },
    //INICIO
    INICIO:{
        TITULAR: 'Index',
        INTRO: 'Index English content!',
        PARRAFO1: 'Index English paragraph'
    },
    //AGENCIA
    AGENCIA:{
        TITULAR: 'Agency',
        INTRO: 'Agency English content!',
        PARRAFO1: 'Agency English paragraph'
    },
    //PROYECTOS
    PROYECTOS:{
        TITULAR: 'Projects',
        INTRO: 'Projects English content!',
        PARRAFO1: 'Projects English paragraph'
    },
    //CONTACTO
    CONTACTO:{
        TITULAR: 'Contact',
        INTRO: 'Contact English content!',
        PARRAFO1: 'Contact English paragraph'
    },

};