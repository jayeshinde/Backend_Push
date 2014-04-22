var refclix = angular.module("refclix", ["ngRoute", "ngResource"]);

// Constants Declaration
refclix.constant("$config", {
    serviceUrl : "https://1-dot-restthink120.appspot.com/_ah/api/userendpoint/v1/",
    connectivityTestUrl : "",
    sessionTokenKey : "sessionToken",
    userName : "userName",
    translationFolder : "res/languages",
    loginServiceUrl:"https://1-dot-restthink120.appspot.com/_ah/api/userendpoint/v1/signIn",
    defaultLanguage : "en_US"
});

refclix.config(["$routeProvider", "$httpProvider", "$locationProvider",function ($route, $httpProvider, $locationProvider) {



    $route.when("/login", {
        templateUrl: "views/login/login.html",
        controller: "loginController"
    });


    $route.when("/register", {
        templateUrl: "views/login/registration.html",
        controller: "registrationController"
    });

    $route.when("/register2", {
        templateUrl: "views/login/registration2.html",
        controller: "registrationController"
    });

    $route.when("/finished", {
        templateUrl: "views/login/finished.html",
        controller: "registrationController"
    });

    $route.when("/forget", {
        templateUrl: "views/login/password-recovery.html",
        controller: "forgetpwdController"
    });

    $route.when("/dashboard", {
        templateUrl: "views/dashboard/dashboard.html",
        controller: "dashboardController"
    });

    $route.when("/profile", {
        templateUrl: "views/settings/profile.html",
        controller: "dashboardController"
    });

    $route.otherwise({ redirectTo: '/login' });
	
	// Header Declaration
    $httpProvider.defaults.useXDomain = true;

    delete $httpProvider.defaults.headers.common['X-Requested-With'];

}]);



refclix.run(["$t", "$rootScope", function($t, $rootScope) {

    $rootScope.t = $t;

}]);

