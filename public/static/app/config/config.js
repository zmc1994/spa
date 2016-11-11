var appUnlogin = angular.module('qmgj_unlogin', ['ui.router']);
appUnlogin.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/static/app/view/login.html',
            controller: 'loginController'
        })
        .state('reg', {
            url: '/reg',
            templateUrl: '/static/app/view/reg.html',
            controller: 'regController'
        })
        .state('home', {
            url: '/home',
            templateUrl: '/static/app/view/home.html',
            controller: 'homeController'
        })

}]);
var appLogin = angular.module('qmgj_login', ['ui.router']);
appLogin.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/static/app/view/home.html',
            controller: 'homeController'
        })
}]);
