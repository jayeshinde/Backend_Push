/**
 * Created by Hartleylabs on 4/25/2014.
 */
refclix.controller("registrationController", ["$scope", "$location",
    function ($scope, $location) {

        //$scope.data = { email : null, password : null };

        $scope.OnContinue = function() {
            $location.path("/register2");
//            $auth.login({
//                email : $scope.data.email,
//                password : $scope.data.password
//            }, successCallback, errorCallback);
        };


        // Call Back Methods
        var successCallback = function () {
            $location.path("/register2");
        };
        var errorCallback = function () {

        };


        $scope.OnRegister = function() {
            $location.path("/finished");
        };


    }]);
