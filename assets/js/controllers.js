angular.module('basic.controllers', ['basic.services'])
.controller('homeCTRL', function($scope) {

})
.controller('NavCTRL', function($scope, $http, $state) {
	$scope.logout = function() {
		$http.get('/logout')
		.success(function(logout) {
			$state.go('login');
		})
		
	}
})
.controller('dashboardCTRL', function($scope, $http, $state) {

	$scope.dashboard = function(assignments) {
		$scope.assignments = [];

		$http.get('/assignment?sort=id DESC')
		.success(function(assignments) {

			console.log(assignments);
			$scope.assignments = assignments;

		})
		.error(function(err) {
				console.log('Error!');
				console.log(err);
		});
	}
})
.controller('assignmentCTRL', function($scope, $http, $state, Assalidate) {
	$scope.error = {
		name: '',
		dueAt: '',
		url: '',
		generic: []
	};
	$scope.htmlCredentials = {
		name: '',
		dueAt: '',
		url: ''
	}

	$scope.assign = function(htmlCredentials) {
		$scope.error = Assalidate.htmlCredentials(htmlCredentials);
		console.log($scope.error);

		if(!Assalidate.hasError($scope.error)) {
			console.log($scope.error);
			var object = {
					name: htmlCredentials.name,
				 	dueAt: htmlCredentials.dueAt,
				 	url: htmlCredentials.url
				 };
			 console.log(object);

			 $http.post('/assignment', htmlCredentials)
			.success(function(res) {
				// console.log('success!');
				// console.log(res);
				if(res.success) {
					$state.go('assignment');
				}
				else {
					$scope.error.generic = res.errors;
				}
				console.log($scope.error);
			})
			.error(function(err) {
				console.log('Error!');
				console.log(err);
			});
		}
	}

})
.controller('loginCTRL', function($scope, $http, $state, Validate) {
	$scope.error = {
		identifier: '',
		password: '',
		generic: []
	};
	$scope.htmlCredentials = {
		identifier: '',
		password: ''
	};

	/* console.log($scope.credentials); */

	$scope.login = function(htmlCredentials) {
		$scope.error = Validate.htmlCredentials(htmlCredentials);
		console.log($scope.error);

		if(!Validate.hasError($scope.error)) {
			$http.post('/auth/local', htmlCredentials)
			.success(function(res) {
				console.log('success!');
				console.log(res);

				/* res is the object coming back from server, success is the property
				automatically is attached to the object coming back */
				if(res.success) {
					$state.go('home');
				}
				/* res.errors, errors is a property in the config>locals>en.json file you can change what it says */
				else {
					$scope.error.generic = res.errors;
				}
				console.log($scope.error);
			})
			.error(function(err) {
				console.log('Error!');
				console.log(err);
			});
		}
	};
	
	
})
.controller('registerCTRL', function($scope, Validate, $http, $state) {

	/* Model error object (empty) that is filled by the outcome of the service */
	$scope.error = {
		identifier: '',
		password: '',
		generic: []
	};

	/* Setting format for credentials object filled by outcome of service */
	$scope.htmlCredentials = {
		identifier: '',
		password: ''
	};

	/* Pass object from HTML submit into function through the credentials method 
	of service to evaluate submission $scope.submit = function(htmlCredentials) { */
					/* calling object.method from services */
		$scope.register = function(htmlCredentials) {
		$scope.error = Validate.htmlCredentials(htmlCredentials);
			console.log($scope.error);

			/* If it is true that val.hasError is false (no errors), if(true) and run */
			if(!Validate.hasError($scope.error)) {
				var object = {
					username: htmlCredentials.identifier,
				 	email: htmlCredentials.identifier,
				 	password: htmlCredentials.password
				 };
			 console.log(object);


			 $http.post('/auth/local/register', object)
			 .success(function(res) {
			 	// console.log('success');
			 	// console.log('res');

			 	if(res.success) {
			 		$state.go('home');
			 	}
			 	else {
			 		$scope.error.generic = res.errors;
			 	}
			 	console.log($scope.error);
			 })

			 .error(function(err) {
			 	console.log('Error!');
			 	console.log(err);
			 });
			}	
			else {
				console.log($scope.error);
			}
	};
	
})