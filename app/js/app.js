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
        .when('/proyectos/google-ocu', {
            templateUrl: 'views/proyecto-google-ocu.html',
            controller:  'projectsInnerController'
        })
        .when('/proyectos/universidad-nebrija', {
            templateUrl: 'views/proyecto-universidad-nebrija.html',
            controller:  'projectsInnerController'
        })
        .when('/proyectos/altamira', {
            templateUrl: 'views/proyecto-altamira.html',
            controller:  'projectsInnerController'
        })
        .when('/proyectos/el-quinto-de-don-pedro', {
            templateUrl: 'views/proyecto-el-quinto-de-don-pedro.html',
            controller:  'projectsInnerController'
        })
        .when('/proyectos/movistar-cloud', {
            templateUrl: 'views/proyecto-movistar-cloud.html',
            controller:  'projectsInnerController'
        })
        .when('/proyectos/hitachi-holyshot', {
            templateUrl: 'views/proyecto-hitachi-holyshot.html',
            controller:  'projectsInnerController'
        })
        .when('/proyectos/hotel-vinas-de-larrede', {
            templateUrl: 'views/proyecto-hotel-vinas-de-larrede.html',
            controller:  'projectsInnerController'
        })
        .when('/proyectos/google-activa-tu-ciudad', {
            templateUrl: 'views/proyecto-google-activa-tu-ciudad.html',
            controller:  'projectsInnerController'
        })
        .when('/proyectos/nekicesa', {
            templateUrl: 'views/proyecto-nekicesa.html',
            controller:  'projectsInnerController'
        })
        .when('/proyectos/fundacion-real-madrid', {
            templateUrl: 'views/proyecto-fundacion-real-madrid.html',
            controller:  'projectsInnerController'
        })
        .when('/proyectos/kommerling-portugal', {
            templateUrl: 'views/proyecto-kommerling-portugal.html',
            controller:  'projectsInnerController'
        })
        .when('/proyectos/google-activate', {
            templateUrl: 'views/proyecto-google-activate.html',
            controller:  'projectsInnerController'
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