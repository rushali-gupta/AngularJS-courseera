(function (){
    'use strict';

    /*
    //Custom Filters

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

    */
    
    // Digest Cycle
   angular.module('DigestCycle',[])
   .controller('dcController',dcController);

   dcController.$inject = ['$scope'];
   function dcController($scope){
       $scope.onceCounter=0;
       $scope.genCounter=0;
       $scope.name='Rushali';

       $scope.showNoofWatchers = function(){
           console.log('No.of Watchers: ', $scope.$$watchersCount);
       };

       $scope.countOnce = function(){
           $scope.onceCounter = 1;
       };

    //    //bad practice
    //    $scope.$watch('onceCounter', function(newValue,oldValue){
    //        console.log('Old Value: ', oldValue);
    //        console.log('New Value: ',  newValue);
    //    });

       $scope.counter =function(){
           $scope.genCounter ++;      
       };

    //    //bad practice
    //    $scope.$watch('genCounter', function(newValue,oldValue){
    //     console.log('Old Value: ', oldValue);
    //     console.log('New Value: ',  newValue);
    // });

    //to cross-check dirty checking concept,
    $scope.$watch(function(){
        console.log('Digest Loop Fired');
    });

   }
})();