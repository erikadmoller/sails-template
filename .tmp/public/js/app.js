angular.module('app', ['basic.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'templates/home.html',
		controller: 'homeCTRL'
	})
	.state('login', {
		url: '/login',
		templateUrl: 'templates/login.html',
		controller: 'loginCTRL'
	})
	.state('register', {
		url: '/register',
		templateUrl: 'templates/register.html',
		controller: 'registerCTRL'
	})
	$urlRouterProvider.otherwise('/login');
})