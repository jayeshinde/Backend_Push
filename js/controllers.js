refclix.controller("loginController", ["$scope", "$location",
    function ($scope, $location) {

        $scope.data = { email : null, password : null };

        $scope.login = function() {

            if($scope.isValid()){
//                $auth.login({
//                    email : $scope.data.email,
//                    password : $scope.data.password
//                }, successCallback, errorCallback);
                var url ='https://1-dot-restthink120.appspot.com/_ah/api/userendpoint/v1/signIn';
                var myObject = new Object();
                myObject.email = $scope.data.email;
                myObject.password = $scope.data.password;

  //  alert(JSON.stringify(myObject));
//                $http({ url: url ,
//                    method: "POST",
//                    data: JSON.stringify(myObject) })
//                    .then(function(response) { //console.log(response);
//                        alert(response);
//                        $location.path('/dashboard'); },
//                    function(response) { // optional // failed
//                   // console.log(response);
//                        alert(response);} );

                $.ajax({
                    type: "POST",
                    url:url,
                    contentType: "application/json; charset=utf-8",
                    data:JSON.stringify(myObject),
                    success:function(data) {

                        $location.path("/dashboard");
                       // alert(JSON.stringify(data));
                    },
                    error:function(data){
                        alert(JSON.stringify(data));
                    }

                });


            }

        };


        // Validation of Email And Password
        $scope.isValid = function(){
            if(!$scope.data.email){
               // $scope.showMessage("MessageEnterEmail", "error");
                //Need to Show Alert Messages when css becomes ready;
                alert('MessageEnterEmail');
                return false;
            }

//            if(!/^(([a-zA-Z0-9~\{\}\^\?%&=`'/\*!#\+_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?))$/.test($scope.data.email)){
//              //  $scope.showMessage("MessageInvalidEmail", "error");
//                return false;
//            }

            if(!$scope.data.password){
                //$scope.showMessage("MessageEnterPwd", "error");
                return false;
            }


            return true;
        };

        // Call Back Methods
        var successCallback = function () {
            alert('Success');
            $location.path("/dashboard");
        };
        var errorCallback = function () {
            alert('Error in CallBack');
        };


        }]);


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
//            $auth.login({
//                email : $scope.data.email,
//                password : $scope.data.password
//            }, successCallback, errorCallback);
        };


    }]);
