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
    angular.module('MenuCategoriesApp',[])
    .controller('MenuCategoriesController',MenuCategoriesController)
    .service('MenuCategoriesService',MenuCategoriesService)
    .constant('ApiBasePath','http://davids-restaurant.herokuapp.com');

    MenuCategoriesController.inject = ['MenuCategoriesService']
    function MenuCategoriesController(MenuCategoriesService){
        let menu = this;

        let promise = MenuCategoriesService.getCategories();
        promise.then(function(response){
            menu.categories= response.data;
        })
        .catch(function(errorResponse){
            console.log("Something went wrong!!");
        });

        menu.logMenuForCategory = function(short_name){
            let promise= MenuCategoriesService.goToCategory(short_name);
            promise
            .then(function(response){
                console.log(response.data);
            })
            .catch(function(errorResponse){
                console.log(errorResponse);
            })
        }
    }

    MenuCategoriesService.$inject = ['$http','ApiBasePath'];
    function MenuCategoriesService($http,ApiBasePath){
        let service = this;
        service.getCategories = function(){
            let promise = $http({
                method: 'GET',
                url: (ApiBasePath+"/categories.json")
            });
            return promise;
        }
        service.goToCategory = function(short_name){
            let promise = $http({
                method: 'GET',
                url: (ApiBasePath+"/menu_items.json"),
                params: {
                    category: short_name
                }
            })
            return promise;
        }
    }
})();