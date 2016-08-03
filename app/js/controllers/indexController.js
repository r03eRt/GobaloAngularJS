app.controller('indexController', ['$scope', '$route', '$translate', function($scope, $route, $translate) {

	// All effects list
    $scope.effects = [
        {name: 'Slide', className: 'slide'},
        {name: 'Slidedown', className: 'slidedown'},
        {name: 'Slideup', className: 'slideup'},
        {name: 'Pop in/out', className: 'pop'},
        {name: 'Fade in/out', className: 'fade'},
        {name: 'Flip', className: 'flip'},
		{name: 'Rotate', className: 'rotate'},
		{name: 'Slide + Pop in', className: 'slide-pop'}
    ];

	$scope.effect = $scope.effects[0].className;

	// Current menu item
	$scope.isActive = function(path) {
		if ($route.current && $route.current.regexp) {
			return $route.current.regexp.test(path);
		}
		return false;
	};

	$scope.changeLanguage = function (langKey) {
		$translate.use(langKey);
	};

	$scope.animate = function() {
		$body = $('body');
		if(!$body.hasClass('animating')){
			$body.addClass('animating');
			var $layer = $('.layer');
			var tween = TweenLite.to($layer, .5, {xPercent: '100%', ease: Power4.easeInOut});
			var tween = TweenLite.to($layer, 2, {xPercent: '200%', ease: Power4.easeInOut, onComplete: stopAnimate});
			TweenLite.set($layer, {xPercent: '-100%'});

			function stopAnimate(){
				$('body').removeClass('animating')
			}
		}
	}

	// Controlador vista cargada
	$scope.$on('$viewContentLoaded', function(){
		console.log(' is loaded !!');
	});
	
}]);


