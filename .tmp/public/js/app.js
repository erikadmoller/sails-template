angular.module('app', ['basic.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

	.state('home', {
		url: '/',
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
	.state('assignment', {
		url: '/assignment',
		templateUrl: 'templates/assignment.html',
		controller: 'assignmentCTRL'
	})
	.state('dashboard', {
		url: '/dashboard',
		templateUrl: 'templates/dashboard.html',
		controller: 'dashboardCTRL'
	})

	$urlRouterProvider.otherwise('/login');
})