angular.module('basic.controllers', [])
.controller('homeCTRL', function($scope) {

})
.controller('loginCTRL', function($scope) {

	$scope.email = '';
	$scope.password = '';

	$scope.emailTrue = false;
	$scope.passTrue = false;

	$scope.emailError = false;
	$scope.passwordError = false;

	$scope.emailChg = function(email) {
		 var val = validator.isEmail(email);
		 console.log(val);

		 if(val === true) {
		 	$scope.emailTrue = true;
		 	$scope.emailError = false;
		 	console.log('its an email');
		 } else {
		 	$scope.passTrue = false;
		 	$scope.emailError = true;
		 	console.log('not an email');
		 }
	}

	$scope.passChg = function(password) {
		var pal = validator.isNull(password);
		console.log(pal);

		if(pal === true) {
			$scope.passTrue = true;
			$scope.passwordError = false;
			console.log('its a password');
		} else {
			$scope.passTrue = false;
			$scope.passwordError = true;
			console.log('its not a password');
		}
	}

	$scope.submit = function(email, password) {
		if(($scope.emailTrue && $scope.passTrue) === true) {

			var object = {
			 	email: $scope.email,
			 	password: $scope.password
			 }

		 console.log(object);
		}
	}
	
})
.controller('registerCTRL', function($scope) {

	$scope.email = '';
	$scope.password = '';

	$scope.emailTrue = false;
	$scope.passTrue = false;

	$scope.emailError = false;
	$scope.passwordError = false;

	$scope.emailChg = function(email) {
		 var val = validator.isEmail(email);
		 console.log(val);

		 if(val === true) {
		 	$scope.emailTrue = true;
		 	$scope.emailError = false;
		 	console.log('its an email');
		 } else {
		 	$scope.passTrue = false;
		 	$scope.emailError = true;
		 	console.log('not an email');
		 }
	}

	$scope.passChg = function(password) {
		var pal = validator.isNull(password);
		console.log(pal);

		if(pal === true) {
			$scope.passTrue = true;
			$scope.passwordError = false;
			console.log('its a password');
		} else {
			$scope.passTrue = false;
			$scope.passwordError = true;
			console.log('its not a password');
		}
	}

	$scope.submit = function(email, password) {
		if(($scope.emailTrue && $scope.passTrue) === true) {

			var object = {
			 	email: $scope.email,
			 	password: $scope.password
			 }

		 console.log(object);
		}
	}
	
})