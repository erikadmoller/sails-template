this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'home\n<a ui-sref="register">register</a>\n<a ui-sref="login">login</a>\n';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'login\n<a ui-sref="home">home</a>\n\n<div ng-controller="loginCTRL" class="wrapper">\n\n    <header class="contact-us">\n        <h1>Login</h1>\n    </header>\n\n    <form ng-submit="submit(email, password)">\n\n        <h2>Email</h2>\n        <input type="text" ng-model="email" placeholder="Email" ng-change="emailChg(email)">\n    \n        <h2>Password</h2>\n        <input type="text" ng-model="password" placeholder="Website" name="Website" ng-change="passChg(password)">\n\n        <button>Submit</button>\n    </form>  \n\n    <span ng-show="emailError">Enter a valid email</span>\n    <span ng-show="passwordError">Enter a valid password</span>\n\n    <div>\n        <a ui-sref="register">Register Page</a>\n    </div>\n</div>';

}
return __p
};

this["JST"]["assets/templates/register.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'register\n<a ui-sref="home">home</a>\n\n<div ng-controller="registerCTRL" class="wrapper">\n\n    <header class="contact-us">\n        <h1>Register</h1>\n    </header>\n\n    <form ng-submit="submit(htmlCredentials)">\n\n            <!-- ng-model refers to credentials object(empty) in controller -->\n            <h2>Email</h2>\n            <input type="text" ng-model="credentials.identifier" placeholder="Email" ng-bind="error.identifier">\n\n            <!-- ng-model refers to credentials object(empty) in controller -->\n            <h2>Password</h2>\n            <input type="password" ng-model="credentials.password" placeholder="Password" ng-bind="error.password">\n\n            <button>Submit</button>\n    </form>  \n\n    <span ng-show="emailError">Enter a valid email</span>\n    <span ng-show="passwordError">Enter a valid password</span>\n\n    <div>\n        <a ui-sref="login">Login Page</a>\n    </div>\n</div>';

}
return __p
};