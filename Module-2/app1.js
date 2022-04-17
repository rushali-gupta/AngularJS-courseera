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

    // angular.module('CustomServicesApp',[])
    // .controller('AddItemController',AddItemController)
    // .controller('ShowItemController',ShowItemController)
    // .service('ItemsListService',ItemsListService);

    // AddItemController.$inject = ['ItemsListService'];
    // function AddItemController(ItemsListService){
    //     let ItemAdder=this;
    //     ItemAdder.itemName="";
    //     ItemAdder.itemQuantity="";
    //     ItemAdder.addItem = function(){
    //         ItemsListService.addItem(ItemAdder.itemName,ItemAdder.itemQuantity);
    //         ItemAdder.itemName="";
    //         ItemAdder.itemQuantity="";
    //     };
    // }

    // ShowItemController.$inject = ['ItemsListService'];
    // function ShowItemController(ItemsListService){
    //     let ShowItem=this;
    //     ShowItem.list = ItemsListService.getItems(); 
    //     ShowItem.removeItem = function(index){
    //         ItemsListService.removeItem(index);
    //     }
    // }

    // function ItemsListService(){
    //     let service = this;
    //     let items=[];
    //     service.addItem = function(itemName,itemQuantity){
    //         let newItem={
    //             name: itemName,
    //             quantity: itemQuantity
    //         };
    //         items.push(newItem);
    //     };
    //     service.getItems = function() {
    //         return items;
    //     };
    //     service.removeItem = function(index){
    //         items.splice(index,1);
    //     };
    // }

    angular.module('CustomSevicesFactory',[])
    .controller('AddItemController1',AddItemController1)
    .controller('AddItemController2',AddItemController2)
    .factory('ShoppingListFactory',ShoppingListFactory);

    AddItemController1.$inject = ['ShoppingListFactory'];
    function AddItemController1(ShoppingListFactory){
        let list1=this;
        list1.itemName="";
        list1.itemQuantity="";
        let shoppingList=ShoppingListFactory(); //undefined maxItems service is instantiated.
        list1.addItem = function(){
            try{
                shoppingList.addItem(list1.itemName,list1.itemQuantity);
                list1.itemName="";
                list1.itemQuantity="";
            }
            catch(e){
                list1.errorMessage= e.message;
            }
        };
        list1.list = shoppingList.getItems(); 
        list1.removeItem = function(index){
            shoppingList.removeItem(index);
        };
    }

    AddItemController2.$inject = ['ShoppingListFactory'];
    function AddItemController2(ShoppingListFactory){
        let list2=this;
        list2.itemName="";
        list2.itemQuantity="";
        let shoppingList=ShoppingListFactory(2); //undefined maxItems service is instantiated.
        list2.addItem = function(){
            try{
                shoppingList.addItem(list2.itemName,list2.itemQuantity);
                list2.itemName="";
                list2.itemQuantity="";
            }
            catch(e){
                list2.errorMessage= e.message;
                console.log(list2.errorMessage);
            }
            
        };
        list2.list = shoppingList.getItems(); 
        list2.removeItem = function(index){
            shoppingList.removeItem(index);
        };
    }

    function ShoppingListService(maxItems){
        let service = this;
        let items=[];
        service.addItem = function(itemName,itemQuantity){
            if(maxItems==undefined ||
            (items.length<maxItems && maxItems!=undefined)){
                let newItem={
                    name: itemName,
                    quantity: itemQuantity
                };
                items.push(newItem);
            }
            else{
                throw new Error("Max items limit (" + maxItems + ") reached");
            }            
        };
        service.getItems = function() {
            return items;
        };
        service.removeItem = function(index){
            items.splice(index,1);
        };
    }

    function ShoppingListFactory(){
        var factory = function(maxItems){
            return new ShoppingListService(maxItems);
        };
        return factory;
    }

})();