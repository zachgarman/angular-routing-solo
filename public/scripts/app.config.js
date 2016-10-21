angular.module('routeApp')
       .config(function($routeProvider, $locationProvider) {
         $routeProvider.when('/home', {
           templateUrl: 'views/home.html'
         }).when('/wolverine', {    //$routProvider returns $routeProvider so we can chain .when() to it.
           templateUrl: 'views/wolverine.html'
         }).when('/gizmo', {
           templateUrl: 'views/gizmo.html'
         }).when('/marcusfenix', {
           templateUrl: 'views/marcusfenix.html'
         });

         // lets us use normal looking links, HTML5 made this possible.  Before it was strange.
         // i.e. /home
         // Remember to use this, need to set <base href="/" /> in html head.
         $locationProvider.html5Mode(true);  // allows us to have normal links like normal instead of using weird fragments
       });
