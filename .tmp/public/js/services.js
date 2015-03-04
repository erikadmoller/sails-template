angular.module('basic.services', [])

.factory('Validate', function() {
	return {
			credentials: function(htmlCredentials) {
				// error Model
				var error = {
					identifier: '',
					password: ''
				};
				// credentials.identifier == false (if its falsy)
				if(!htmlCredentials.identifier) {
					error.identifier = 'Enter your email address';
				}
				else if(!validator.isEmail(htmlCredentials)) {
					error.identifier = 'The email address is not valid';
				}

				if(!htmlCredentials.password) {
					error.password = 'Enter a password';
				}

				return error;
			},

			hasError: function(error) {
				for(var i in error) {
					if(error.hasOwnProperty(i) && error[i]) {
						return true;
					}
				}
				return false;
			}
	}
})