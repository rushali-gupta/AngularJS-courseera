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
    /*
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
   */
   let items1= ['apple','orange','banana','papaya'];
    let items2=[
        {
            name: 'apple',
            quantity: '2'
        },
        {
            name: 'orange',
            quantity: '200'
        },
        {
            name: 'banana',
            quantity: '212'
        },
        {
            name: 'papaya',
            quantity: '434'
        }
    ];
    let fruitList= ['apple','orange','banana','papaya','mango','pineapple','jack fruit'
    ,'dragon fruit','grapes','blue berries','straw berries']; 
   let app=angular.module('myApp',[]);
   app.controller('ctrl',ctrl);
   app.controller('filteredRepeat',filteredRepeat);
   ctrl.inject=['$scope'];
   function ctrl($scope){
       $scope.count=0;
       //method 1
    //    $scope.counter = function(){
    //        setTimeout(function(){
    //         $scope.count++;
    //         console.log('Incremented');
    //         $scope.$digest();
    //        },2000);       
        
    //method 2
    $scope.counter = function(){
            setTimeout(function(){
                $scope.$apply(function(){
                    $scope.count++;
                    console.log('Incremented');
                })
            },2000);

    }
    $scope.showWatchers = function(){
        console.log($scope.$$watchersCount);
    };

    $scope.items1=items1;
    $scope.items2=items2;
    $scope.addFruit = function(){
        let newFruit={
            name: $scope.fruit,
            quantity: $scope.qty
        };
        items2.push(newFruit);
    }
   }
   filteredRepeat.$inject=['$scope'];
   function filteredRepeat($scope){
       $scope.fruitList= fruitList;
    }
})();
