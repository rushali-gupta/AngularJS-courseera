(function(){
    'use strict';
    angular.module("DirectivesController",[])
    .controller("ShoppingListController1",ShoppingListController1)
    .controller("ShoppingListController2",ShoppingListController2)
    .factory("ShoppingListFactory",ShoppingListFactory)
    // .controller("ShoppingListDirectiveController",ShoppingListDirectiveController)
    .directive("listItem",ListItem);

    function ListItem(){
        let ddo=
        {
            restrict: "E",
            templateUrl: "temp1.html",
            scope:
            {
                items: '<',  //one-way binding ['=' is two way binding, avoid using that]
                title: '@',  //text binding [interpolation]
                remove: '&' //allows to execute expression in context of parent controller
            },
            //way-1
            controller: ShoppingListDirectiveController,
            controllerAs: 'list',
            //way-2 directly on module
            // controller: 'ShoppingListDirectiveController as list',
            bindToController: true //to say that scope object(above) should be available in $scope of controller.
            
        };
        return ddo;
    }

    function ShoppingListDirectiveController(){
        let list = this;
        list.cookiesInList = function(){
            for(let i=0;i<list.items.length;i++){
                let name=list.items[i].name;
                if(name.toLowerCase().indexOf("cookies")==-1){
                    return true;
                }
            }
            return false;
        }
        // list.tooManyUnits = function(){
        //     if(list.items[])
        // }
    }

    ShoppingListController1.$inject = ['ShoppingListFactory'];
    function ShoppingListController1(ShoppingListFactory){
        let list=this;
        list.itemName="";
        list.itemQuantity="";
        let shoppingList=ShoppingListFactory(); //undefined maxItems service is instantiated.

        list.getItems = shoppingList.getItems();
        let orgTitle="Shopping List 1 with Unlimited No.of items";
        list.title= orgTitle + "( "+list.getItems.length+" )";
        
        list.addItems = function(){
            try{
                shoppingList.addItem(list.itemName,list.itemQuantity);
                list.title= orgTitle + "( "+list.getItems.length+" )";
                list.itemName="";
                list.itemQuantity="";
            }
            catch(e){
                list.ErrorMessage= e.message;
            }
        };

        list.removeItem = function(index){
            shoppingList.removeItem(index);
            list.title= orgTitle + "( "+list.getItems.length+" )";
        };
        
    }
    
    ShoppingListController2.$inject= ['ShoppingListFactory'];
    function ShoppingListController2(ShoppingListFactory){
        let list2=this;
        
        list2.itemName="";
        list2.itemQuantity="";
        let shoppingList= ShoppingListFactory(3);

        list2.getItems = shoppingList.getItems();
        let orgTitle="Shopping List 2 with Max of 3 items";
        list2.title= orgTitle + "( "+ list2.getItems.length +" )";

        list2.addItems = function(){
            try{
                shoppingList.addItem(list2.itemName,list2.itemQuantity);
                list2.title= orgTitle + "( "+list2.getItems.length+" )";
                list2.itemName="";
                list2.itemQuantity="";
            }
            catch(e){
                list2.ErrorMessage = e.message;
                console.log(e);
            }
        }

        list2.removeItem = function(index){
            shoppingList.removeItem(index);
            list2.title= orgTitle + "( "+list2.getItems.length+" )";
        }
        
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
        service.removeItem = function(index){
            items.splice(index,1);
        }
        service.getItems= function(){
            return items;
        }
    }

    function ShoppingListFactory(){
        var factory = function(maxItems){
            return new ShoppingListService(maxItems);
        };
        return factory;
    }
})();