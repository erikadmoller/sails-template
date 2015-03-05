this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/assignment.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a ui-sref="home">home</a>\n\n<div class="wrapper">\n\n    <header class="contact-us">\n        <h1>Assignments</h1>\n    </header>\n\n    <form class="form" ng-submit="assign(htmlCredentials)" novalidate>\n        <p class="error" ng-repeat="errorMessage in error.generic" ng-bind="errorMessage">\n        </p>\n            <!-- ng-model refers to credentials object(empty) in controller -->\n            <h2>Name</h2>\n            <input type="text" ng-model="htmlCredentials.name" placeholder="Name of the Assignent">\n            <span ng-bind="error.name"></span>\n\n            <h2>URL</h2>\n            <input type="url" ng-model="htmlCredentials.url" placeholder="Paste Link">\n            <span ng-bind="error.url"></span>\n\n            <!-- ng-model refers to credentials object(empty) in controller -->\n            <h2>Due On</h2>\n            <input type="text" ng-model="htmlCredentials.dueAt" placeholder="When is it due?">\n            <span ng-bind="error.dueAt"></span>\n\n            <button type="submit">Submit</button>\n            \n    </form>  \n\n    <div>\n        <a ui-sref="home">Home</a>\n    </div>\n</div>';

}
return __p
};

this["JST"]["assets/templates/dashboard.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a ui-sref="home">home</a>\n\n<div class="wrapper">\n\n    <header class="contact-us">\n        <h1>Dashboard</h1>\n    </header>\n\n    <form class="form" ng-submit="dashboard()" novalidate>\n        <p class="error" ng-repeat="errorMessage in error.generic" ng-bind="errorMessage">\n        </p>\n\n        <div ng-repeat="assignment in assignments">\n            <div>{{ assignment.name }}</div>\n            <a ng-href="{{ assignment.url }}">Assignment Link</a>\n            <div>{{ assignment.dueAt }}</div>\n\n        </div>\n\n            <button type="Get Assignments">Submit</button>\n            \n    </form>  \n</div>';

}
return __p
};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'home\n<a ui-sref="register">register</a>\n<a ui-sref="login">login</a>\n<a ui-sref="assignment">assignment</a>\n<a ui-sref="dashboard">dashboard</a>\n';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a ui-sref="home">Home</a>\n\n<div class="wrapper">\n\n    <header class="contact-us">\n        <h1>Login</h1>\n    </header>\n\n       <form class="form" ng-submit="login(htmlCredentials)" novalidate>\n            <p class="error" ng-repeat="errorMessage in error.generic" ng-bind="errorMessage">\n            </p>\n            <!-- ng-model refers to credentials object(empty) in controller -->\n            <h2>Email</h2>\n            <input type="text" ng-model="htmlCredentials.identifier" placeholder="Email">\n            <span ng-bind="error.identifier"></span>\n\n            <!-- ng-model refers to credentials object(empty) in controller -->\n            <h2>Password</h2>\n            <input type="password" ng-model="htmlCredentials.password" placeholder="Password">\n\n            <button type="submit">Submit</button>\n            <span ng-bind="error.password"></span>\n    </form>  \n\n    <div>\n        <a ui-sref="register">Register Page</a>\n    </div>\n</div>';

}
return __p
};

this["JST"]["assets/templates/register.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a ui-sref="home">home</a>\n\n<div class="wrapper">\n\n    <header class="contact-us">\n        <h1>Register</h1>\n    </header>\n\n    <form class="form" ng-submit="register(htmlCredentials)" novalidate>\n        <p class="error" ng-repeat="errorMessage in error.generic" ng-bind="errorMessage">\n        </p>\n            <!-- ng-model refers to credentials object(empty) in controller -->\n            <h2>Email</h2>\n            <input type="text" ng-model="htmlCredentials.identifier" placeholder="Email">\n            <span ng-bind="error.identifier"></span>\n\n            <!-- ng-model refers to credentials object(empty) in controller -->\n            <h2>Password</h2>\n            <input type="password" ng-model="htmlCredentials.password" placeholder="Password">\n\n            <button type="submit">Submit</button>\n            <span ng-bind="error.password"></span>\n    </form>  \n\n    <div>\n        <a ui-sref="login">Login Page</a>\n    </div>\n</div>';

}
return __p
};