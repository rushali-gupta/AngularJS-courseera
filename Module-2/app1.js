(function(){
    'use strict';
    // angular.module('ControllerAsApp',[])
    // // .controller('ParentController1',ParentController1)
    // // .controller('ChildController1',ChildController1)
    // .controller('ParentController2',ParentController2)
    // .controller('ChildController2',ChildController2);

    // ParentController1.$inject = ['$scope'];
    // function ParentController1($scope){
    //     $scope.parentValue = 1;
    //     $scope.parentCtrl = this;
    //     $scope.parentCtrl.parentValue = 2;
    // }

    // ChildController1.$inject = ['$scope'];
    // function ChildController1($scope){
    //     console.log("$scope.parentValue: ",$scope.parentValue); //prototypal inheritance.
    //     console.log("ChildController1 $scope: ", $scope);

    //     $scope.parentValue=5;
    //     console.log('Changed $scope.parentValue=5 ');
    //     console.log($scope.parentValue);
    //     console.log($scope);

    //     $scope.parentCtrl.parentValue = 6;  //prototypically inherited object.
    //     console.log('Changed $scope.parentCtrl.parentValue=6 ');
    //     console.log($scope.parentCtrl.parentValue);
    //     console.log($scope);

    //     console.log('$scope.$parent.parentValue: ',$scope.$parent.parentValue);
    // }



    // function ParentController2(){
    //     let parent = this;
    //     parent.value = 1;
    // }

    // ChildController2.inject = ['$scope'];
    // function ChildController2($scope){
    //     let child = this;
    //     child.value = 5;
    //     console.log('ChildController2 $scope: ',$scope);
    // }

    angular.module('CustomServicesApp',[])
    .controller('AddItemController',AddItemController)
    .controller('ShowItemController',ShowItemController)
    .service('ItemsListService',ItemsListService);

    AddItemController.$inject = ['ItemsListService'];
    function AddItemController(ItemsListService){
        let ItemAdder=this;
        ItemAdder.itemName="";
        ItemAdder.itemQuantity="";
        ItemAdder.addItem = function(){
            ItemsListService.addItem(ItemAdder.itemName,ItemAdder.itemQuantity);
            ItemAdder.itemName="";
            ItemAdder.itemQuantity="";
        };
    }

    ShowItemController.$inject = ['ItemsListService'];
    function ShowItemController(ItemsListService){
        let ShowItem=this;
        ShowItem.list = ItemsListService.getItems(); 
        ShowItem.removeItem = function(index){
            ItemsListService.removeItem(index);
        }
    }

    function ItemsListService(){
        let service = this;
        let items=[];
        service.addItem = function(itemName,itemQuantity){
            let newItem={
                name: itemName,
                quantity: itemQuantity
            };
            items.push(newItem);
        };
        service.getItems = function() {
            return items;
        };
        service.removeItem = function(index){
            items.splice(index,1);
        };
    }

})();