(function (){
    'use strict';

    angular.module('myApp',[])
    .controller('myController', msgController)
    .filter('loves',lovesFilterFactory)
    .filter('truth',truthFilterFactory);

    msgController.inject['$scope','lovesFilter','truthFilter'];
    function msgController($scope,lovesFilter,truthFilter){
        $scope.sayMessage = function(){
            let msg="Rushali likes to eat healthy snacks at night.";
            return msg;
        }
        $scope.sayLovesMessage = function(){
            let msg="Rushali likes to eat healthy snacks at night.";
            msg = lovesFilter(msg, 'healthy', 'cookie');
            return msg;
        }
    }
    
    function lovesFilterFactory(){
        return function (msg, target, replace){
            msg = msg || '';
            msg = msg.replace(target,replace);
            return msg;
        };
    }
    function truthFilterFactory(){
        return function(msg,target,replace){
            msg = msg || '';
            msg = msg.replace(target,replace);
            return msg;
        };
    }
})();