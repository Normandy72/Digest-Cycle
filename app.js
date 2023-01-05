(function(){
    'use strict';

    angular.module('CounterApp', [])
    .controller('CounterController', CounterController);

    CounterController.$inject = ['$scope'];

    function CounterController($scope){
        $scope.onceCounter = 0;
        $scope.counter = 0;
        $scope.name = 'Some Name';

        $scope.showNumberOfWatchers = function(){
            console.log("# of watchers: ", $scope.$$watchersCount);
        };

        $scope.countOnce = function(){
            $scope.onceCounter = 1;
        };

        $scope.upCounter = function(){
            $scope.counter++;
        };

        $scope.$watch(function(){
            console.log('Digest Loop Fired!');
        })


        // not best way
        // $scope.$watch('onceCounter', function(newValue, oldValue){
        //     console.log('onceCounter old value: ', oldValue);
        //     console.log('onceCounter new value: ', newValue);
        // });

        // $scope.$watch('counter', function(newValue, oldValue){
        //     console.log('Counter old value: ', oldValue);
        //     console.log('Counter new value: ', newValue);
        // });

        // best way - interpolate it in HTML code into double curly braces
    };
})();