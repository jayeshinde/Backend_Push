// translation service responsible for loading string resources
// based on device preferred language otherwise en_US
refclix.service("$t", ["$http", "$config", function($http, $config){

    // definition of the service
    var service = {
        // get the preferred language
        getLanguage : function(callback){
                callback($config.defaultLanguage);
        },
        // load the translation json file based on the specified language
        getTranslation : function(callback){
            this.getLanguage(function(language){
                var url = $config.translationFolder.concat("/").concat(language).concat(".json");
                $http({ method:"GET", url:url, cache:false }).success(function(data){
                    callback(data);
                }, function(){});
            });
        }
    };

    // load translation and merge properties within the service
    // so it is possible to use "service.MyText" directly
    service.getTranslation(function(data){
        angular.extend(service, service, data);
    });

    return service;
}]);


