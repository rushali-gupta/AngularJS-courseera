(function(){
    'use strict';
    angular.module("DirectivesController",[])
    .controller("ShoppingListController1",ShoppingListController1)
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
            bindToController: true, //to say that scope object(above) should be available in $scope of controller.
            link: ShoppingListDirectiveLink,
            transclude: true
        };
        return ddo;
    }

    function ShoppingListDirectiveLink(scope,element,attrs,controller){
        // console.log("Link Scope is: ",scope);
        // console.log("Element is: ",element);
        // console.log("Controller instance is: ",controller);
        
        scope.$watch('list.cookiesInList()',function(newValue,oldValue){
            console.log("newValue is: ", newValue);
            console.log("oldValue is: ", oldValue);
            if(newValue === true){
                displayCookieWarning();
            }
            else{
                removeCookieWarning();
            }
        });

        function displayCookieWarning(){
            //jqlite [angular.element]
            let warningElement = element.find("div");
            warningElement.css("display","block");
            //if we add jquery file before angular, much more objects will be exposed to element.
        }

        function removeCookieWarning(){
            //jqlite [angular.element]
            let warningElement = element.find("div");
            warningElement.css("display","none");
            //if we add jquery file before angular, much more objects will be exposed to element.
        }
    }

    function ShoppingListDirectiveController(){
        let list = this;
        list.cookiesInList = function(){
            for(let i=0;i<list.items.length;i++){
                let name=list.items[i].name;
                if(name.toLowerCase().indexOf("cookies")!=-1){
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

        list.warning = "COOKIESSSSSSS!!!!!!!!!!!";

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