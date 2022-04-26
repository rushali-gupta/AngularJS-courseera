(function(){
    'use strict';
    // angular.module('ShoppingListPromiseApp',[])
    // .controller('ShoppingListController',ShoppingListController)
    // .service('ShoppingListService',ShoppingListService)
    // .service('WeightLossFilterService',WeightLossFilterService);

    // ShoppingListController.$inject= ['ShoppingListService']
    // function ShoppingListController(ShoppingListService){
    //     let List= this;
    //     List.itemName="";
    //     List.itemQuantity="";
    //     List.addItem = function(){
    //         ShoppingListService.addItem(List.itemName,List.itemQuantity);
    //         List.itemName="";
    //         List.itemQuantity="";
    //     };
    //     List.items= ShoppingListService.getItems();
    //     List.removeItem= function(index){
    //         ShoppingListService.removeItem(index);
    //     };
    // }

    // ShoppingListService.$inject = ['$q','WeightLossFilterService'];
    // function ShoppingListService($q,WeightLossFilterService){
    //     let service = this;
    //     let items=[];

        //1 way of using promises.
        // service.addItem = function(itemName,itemQuantity){
        //     let promise = WeightLossFilterService.checkName(itemName);

        //     promise.then(function(response){
        //         let nextPromise = WeightLossFilterService.checkQunatity(itemQuantity);

        //         nextPromise.then(function(result){
        //             let newItem={
        //                 name: itemName,
        //                 quantity: itemQuantity
        //             };
        //             items.push(newItem);
        //         }, function(error){
        //             console.log(error.message);
        //         });
        //     }, function(error){
        //         console.log(error.message);
        //     });
        // }

        //2nd way of using promises.
        // service.addItem = function(itemName,itemQuantity){
        //     let promise = WeightLossFilterService.checkName(itemName);
            
        //     promise
        //     .then(function(response){
        //         return WeightLossFilterService.checkQunatity(itemQuantity);
        //     })
        //     .then(function(response){
        //         let newItem = {
        //             name: itemName,
        //             quantity: itemQuantity
        //         };
        //         items.push(newItem);
        //     })
        //     .catch(function(errorResponse){
        //         console.log(errorResponse.message);
        //     })
        // };

        //3rd way of using promises. ( resolve promises parallely ).
    //     service.addItem = function(itemName,itemQuantity){
    //         let namePromise = WeightLossFilterService.checkName(itemName);
    //         let quantityPromise = WeightLossFilterService.checkQunatity(itemQuantity);

    //         $q.all([namePromise,quantityPromise])
    //         .then(function(response){
    //             let newItem ={
    //                 name: itemName,
    //                 quantity: itemQuantity
    //             };
    //             items.push(newItem);
    //         })
    //         .catch(function(errorResponse){
    //             console.log(errorResponse.message);
    //         })
    //     }


    //     service.removeItem = function(index){
    //         items.splice(index,1);
    //     };
    //     service.getItems = function(){
    //         return items;
    //     };
    // }

    // WeightLossFilterService.$inject = ['$q','$timeout'];
    // function WeightLossFilterService($q,$timeout){
    //     let service = this;

    //     service.checkName = function(name){
    //         let deferred = $q.defer();
    //         let result = {
    //             message: ""
    //         };

    //         $timeout(function(){
    //             if(name.toLowerCase().indexOf('chip')===-1){
    //                 deferred.resolve(result);
    //             }
    //             else{
    //                 result.message="No Chips!!!"
    //                 deferred.reject(result);
    //             }
    //         },3000);

    //         return deferred.promise;

    //     };

    //     service.checkQunatity = function(quantity){
    //         let deferred=$q.defer();
    //         let result={
    //             message: ""
    //         };
    //         $timeout(function(){
    //             if(quantity<6){
    //                 deferred.resolve(result);
    //             }
    //             else{
    //                 result.message="Too many units!!!!!!!";
    //                 deferred.reject(result);
    //             }
    //         },1000);

    //         return deferred.promise;
    //     }
    // }

    //$http Service:
    //https://github.com/jhu-ep-coursera/restaurant-menu-server
    //http://davids-restaurant.herokuapp.com/categories.json  (using this server as demo).
    // angular.module('MenuCategoriesApp',[])
    // .controller('MenuCategoriesController',MenuCategoriesController)
    // .service('MenuCategoriesService',MenuCategoriesService)
    // .constant('ApiBasePath','http://davids-restaurant.herokuapp.com');

    // MenuCategoriesController.inject = ['MenuCategoriesService']
    // function MenuCategoriesController(MenuCategoriesService){
    //     let menu = this;

    //     let promise = MenuCategoriesService.getCategories();
    //     promise.then(function(response){
    //         menu.categories= response.data;
    //     })
    //     .catch(function(errorResponse){
    //         console.log("Something went wrong!!");
    //     });

    //     menu.logMenuForCategory = function(short_name){
    //         let promise= MenuCategoriesService.goToCategory(short_name);
    //         promise
    //         .then(function(response){
    //             console.log(response.data);
    //         })
    //         .catch(function(errorResponse){
    //             console.log(errorResponse);
    //         })
    //     }
    // }

    // MenuCategoriesService.$inject = ['$http','ApiBasePath'];
    // function MenuCategoriesService($http,ApiBasePath){
    //     let service = this;
    //     service.getCategories = function(){
    //         let promise = $http({
    //             method: 'GET',
    //             url: (ApiBasePath+"/categories.json")
    //         });
    //         return promise;
    //     }
    //     service.goToCategory = function(short_name){
    //         let promise = $http({
    //             method: 'GET',
    //             url: (ApiBasePath+"/menu_items.json"),
    //             params: {
    //                 category: short_name
    //             }
    //         })
    //         return promise;
    //     }
    // }
    
    // angular.module('DynamicDirectivesApp',[])
    // .controller('AddItemController1',AddItemController1)
    // .controller('AddItemController2',AddItemController2)
    // .factory('ShoppingListFactory',ShoppingListFactory)
    // .directive('listItemDescription',ListItemDescription)
    // .directive('listItem',ListItem);

    
    // function ListItem(){
    //     let ddo = { //ddo: Directive Definition Object
    //         restrict: "E",
    //         templateUrl: "temp.html"
    //     };
    //     return ddo;
    // }

    // function ListItemDescription(){
    //     let ddo = { //ddo: Directive Definition Object
    //         restrict: "E",
    //         template: "{{ item.quantity }} of {{ item.name }}"
    //     };
    //     return ddo;
    // }

    // AddItemController1.$inject = ['ShoppingListFactory'];
    // function AddItemController1(ShoppingListFactory){
    //     let list=this;
    //     list.itemName="";
    //     list.itemQuantity="";
    //     let shoppingList=ShoppingListFactory(); //undefined maxItems service is instantiated.
    //     list.addItem = function(){
    //         try{
    //             shoppingList.addItem(list.itemName,list.itemQuantity);
    //             list.itemName="";
    //             list.itemQuantity="";
    //         }
    //         catch(e){
    //             list.errorMessage= e.message;
    //         }
    //     };
    //     list.items = shoppingList.getItems(); 
    //     list.removeItem = function(index){
    //         shoppingList.removeItem(index);
    //     };
    // }

    // AddItemController2.$inject = ['ShoppingListFactory'];
    // function AddItemController2(ShoppingListFactory){
    //     let list=this;
    //     list.itemName="";
    //     list.itemQuantity="";
    //     let shoppingList=ShoppingListFactory(3); //undefined maxItems service is instantiated.
    //     list.addItem = function(){
    //         try{
    //             shoppingList.addItem(list.itemName,list.itemQuantity);
    //             list.itemName="";
    //             list.itemQuantity="";
    //         }
    //         catch(e){
    //             list.errorMessage= e.message;
    //             console.log(list.errorMessage);
    //         }
            
    //     };
    //     list.items = shoppingList.getItems(); 
    //     list.removeItem = function(index){
    //         shoppingList.removeItem(index);
    //     };
    // }

    // function ShoppingListService(maxItems){
    //     let service = this;
    //     let items=[];
    //     service.addItem = function(itemName,itemQuantity){
    //         if(maxItems==undefined ||
    //         (items.length<maxItems && maxItems!=undefined)){
    //             let newItem={
    //                 name: itemName,
    //                 quantity: itemQuantity
    //             };
    //             items.push(newItem);
    //         }
    //         else{
    //             throw new Error("Max items limit (" + maxItems + ") reached");
    //         }            
    //     };
    //     service.getItems = function() {
    //         return items;
    //     };
    //     service.removeItem = function(index){
    //         items.splice(index,1);
    //     };
    // }

    // function ShoppingListFactory(){
    //     var factory = function(maxItems){
    //         return new ShoppingListService(maxItems);
    //     };
    //     return factory;
    // }

    angular.module("DirectivesIsolateScope",[])
    .controller("ShoppingListController1",ShoppingListController1)
    .controller("ShoppingListController2",ShoppingListController2)
    .factory("ShoppingListFactory",ShoppingListFactory)
    .directive("listItem",ListItem);

    function ListItem(){
        let ddo=
        {
            restrict: "E",
            templateUrl: "temp1.html",
            scope:
            {
                list: '=myList',
                title: '@title'
            }
            
        };
        return ddo;
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