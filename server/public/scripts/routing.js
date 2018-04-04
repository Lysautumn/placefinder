angular.module('placeApp')
    .config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/landing.html',
        controller: 'AuthController as ac'
    }).when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'AuthController as ac'
    }).when('/userView',{
        templateUrl: 'templates/userLanding.html',
        controller: 'UserController as uc'
    }).otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
});