(function (){
    'use strict';

    /*
    in angular object, module method expects first parameter as our app name,
    second parameter is aray of dependencies,
    in this case we don't have any dependencies so pass an empty array
    */
    angular.module('myFirstApp', [])
    //module function returns module instance.
    .controller("myFirstController", function($scope){
        $scope.name="Rushali";  
    }); 
    /*
    the way we define ViewModel of view,
    takes Controller name and function that defines functionality for the controller as second parameter.
    */
})();