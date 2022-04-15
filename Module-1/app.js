(function (){
    'use strict';


    
    /*
    First app
    // in angular object, module method expects first parameter as our app name,
    // second parameter is array of dependencies,
    // in this case we don't have any dependencies so pass an empty array
    
    angular.module('myFirstApp', [])
    //module function returns module instance.
    .controller("myFirstController", function($scope){
        $scope.name="Rushali";  
    }); 
    
    // the way we define ViewModel of view,
    // takes Controller name and function that defines functionality for the controller as parameters.
    
    */

    /*
    Name Calculator App
    angular.module("nameCalculator",[])
    .controller("nameCalculatorController", function ($scope){
        $scope.fullName= "";
        $scope.totalNameValue=0;

        $scope.displayNumeric = function(){
            var totalValue = calculateNumericForString($scope.fullName); 
            $scope.totalNameValue= totalValue;
        };

        function calculateNumericForString(string){
            var totalStringValue = 0;
            for(let i=0;i<string.length;i++){
                totalStringValue += string.charCodeAt(i);
            }
            return totalStringValue;
        }
    });

    */

    angular.module("DIApp",[])
    .controller("DIController", DIController);
    //to protect from data minification.
    DIController.inject = ['$scope','$filter'];
    function DIController($scope, $filter) {
        //$filter is used for filtering/formatting the data
        //which is eventually displayed to the user.
        $scope.name="Rushali";
        $scope.upper = function (){
            let upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
        
    }

})();