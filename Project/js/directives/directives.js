//
// Directives
// ---------------------------

// Stage
app.directive('stage', function ($rootScope, $timeout) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            TweenMax.set('#main', {perspective:500});

            scope.$on('$locationChangeStart', function (event, next, current) {
                scope.$broadcast('hide');
            });
        }
    }
})


// Animations Page 1
app.directive('page1', function ($rootScope) {


    var show = function (id, done) {
    	
        var tl = new TimelineMax({onComplete: done});

        tl.add(TweenMax.from(id, .6, {rotationX: -90}));
        tl.add(TweenMax.from('#element1', .4, {x: 100, opacity: 0}));
        tl.add(TweenMax.from('#element2', .4, {x: 100, opacity: 0}));
        tl.add(TweenMax.to('header', .8, {y:0, autoAlpha:1, ease:Power4.easeInOut}));
        tl.add(TweenMax.to('footer', .8, {y:0, autoAlpha:1, ease:Power4.easeInOut}), '-=.8');
        tl.add(TweenMax.to('main', .8, {y:0, autoAlpha:1,  ease:Power4.easeInOut}), '-=.8');
        tl.add(TweenMax.set('body',{css:{className:'-=overflow-hidden'}}));
        tl.play();

    };

    var hide = function (id, done) {
        var tl = new TimelineMax({onComplete: done});
        tl.add(TweenMax.set('body',{css:{className:'+=overflow-hidden'}}));
        tl.add(TweenMax.to('header', .8, {y:'-=440', autoAlpha:0, ease:Power4.easeInOut }));
        tl.add(TweenMax.to('footer', .8, {y:'+=450', autoAlpha:0, ease:Power4.easeInOut}), '-=.8');
        tl.add(TweenMax.to('main', .8, {y:'+=450', autoAlpha:0, ease:Power4.easeInOut}), '-=.8');
        //tl.add(TweenMax.to('#element2', .4, {x: 100, opacity: 0}));
        //tl.add(TweenMax.to('#element1', .4, {x: 100, opacity: 0}));
        //tl.add(TweenMax.to(id, .6, {rotationX: -90}));
        tl.play();
    };

    return {
        restrict: 'A',
        link: function (scope, element) {

            show(element);
            scope.$on('hide', function (event, next, current) {
                hide(element, function () {
                    scope.$emit('changeRoute');
                });
            });
        }
    }
})


// Animations Page 2
app.directive('page2', function ($rootScope) {

    var show = function (id, done) {
        var tl = new TimelineMax({onComplete: done});
        tl.add(TweenMax.to('header', .8, {y:0, autoAlpha:1, ease:Power4.easeInOut}));
        tl.add(TweenMax.to('footer', .8, {y:0, autoAlpha:1, ease:Power4.easeInOut}), '-=.8');
        tl.add(TweenMax.to('main', .8, {y:0, autoAlpha:1,  ease:Power4.easeInOut}), '-=.8');
        //tl.add(TweenMax.from(id, .6, {rotationX: -90}));
        //tl.add(TweenMax.from('#element3', .4, {y: 100, opacity: 0}));
        //tl.add(TweenMax.from('#element4', .4, {y: 100, opacity: 0}));
        tl.add(TweenMax.set('body',{css:{className:'-=overflow-hidden'}}));
        tl.play();
        
    };

    var hide = function (id, done) {
    	
        var tl = new TimelineMax({onComplete: done});
        tl.add(TweenMax.set('body',{css:{className:'+=overflow-hidden'}}));
        //tl.add(TweenMax.to('#element4', .4, {y: 100, opacity: 0}));
        //tl.add(TweenMax.to('#element3', .4, {y: 100, opacity: 0}));
        //tl.add(TweenMax.to(id, .6, {rotationX: -90}));
        tl.add(TweenMax.to('header', .8, {y:'-=440', autoAlpha:0, ease:Power4.easeInOut}));
        tl.add(TweenMax.to('footer', .8, {y:'+=450', autoAlpha:0, ease:Power4.easeInOut}), '-=.8');
        tl.add(TweenMax.to('main', .8, {y:'+=450', autoAlpha:0, ease:Power4.easeInOut}), '-=.8');
        tl.play();
    };

    return {
        restrict: 'A',
        link: function (scope, element) {

            show(element);

            scope.$on('hide', function (event, next, current) {
                hide(element, function () {
                    scope.$emit('changeRoute');
                });
            });
        }
    }
})


// Animations Page 3
app.directive('page3', function ($rootScope) {

    var show = function (id, done) {
        var tl = new TimelineMax({onComplete: done});

        //tl.add(TweenMax.from(id, .6, {rotationX: 90, rotationY: 90}));
        //tl.add(TweenMax.from('#element5', .4, {x: 100, rotationY: -90, opacity: 0}));
        //tl.add(TweenMax.from('#element6', .4, {x: 100, rotationX: -90, opacity: 0}));
        tl.add(TweenMax.to('header', .8, {y:0, autoAlpha:1, ease:Power4.easeInOut}));
        tl.add(TweenMax.to('footer', .8, {y:0, autoAlpha:1, ease:Power4.easeInOut}), '-=.8');
        tl.add(TweenMax.to('main', .8, {y:0, autoAlpha:1, ease:Power4.easeInOut}), '-=.8');
        tl.add(TweenMax.set('body',{css:{className:'-=overflow-hidden'}}));
        tl.play();
    };

    var hide = function (id, done) {
        var tl = new TimelineMax({onComplete: done});
        tl.add(TweenMax.set('body',{css:{className:'+=overflow-hidden'}}));
        tl.add(TweenMax.to('header', .8, {y:'-=440', autoAlpha:0, ease:Power4.easeInOut}));
        tl.add(TweenMax.to('footer', .8, {y:'+=450', autoAlpha:0, ease:Power4.easeInOut}), '-=.8');
        tl.add(TweenMax.to('main', .8, {y:'-=440', autoAlpha:0, ease:Power4.easeInOut}), '-=.8');
        //tl.add(TweenMax.to('#element6', .4, {x: 150, rotationX: 90, opacity: 0}));
        //tl.add(TweenMax.to('#element5', .4, {x: 150, rotationY: 90, opacity: 0}));
        //tl.add(TweenMax.to(id, .6, {rotationX: -90, rotationY: -90}));
        tl.play();
    };

    return {
        restrict: 'A',
        link: function (scope, element) {

            show(element);

            scope.$on('hide', function (event, next, current) {
                hide(element, function () {
                    scope.$emit('changeRoute');
                });
            });
        }
    }
});