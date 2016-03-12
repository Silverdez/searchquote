'use strict';

angular.module('myApp.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {
    templateUrl: 'index/index.html',
    controller: 'IndexCtrl'
  });
}])

.filter('cut', function () {
    return function (value, wordwise, max, tail) {
        if (!value) return '';

        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace != -1) {
                value = value.substr(0, lastspace);
            }
        }

        return value + (tail || ' …');
    };
})


.controller('IndexCtrl',  ['$scope', '$http',function($scope, $http) {
    $scope.num = Math.round(Math.random()*10);
    $http.get('datas/quotes.json').success(function(response){
        $scope.myQuote = response;
    });



    $scope.submitForm = function(event){

        $scope.research = $scope.search;

        $scope.setAction();

        event.preventDefault();
        if ($scope.formSearch.$valid) {

            console.log('validé Inscription '+$scope.research);
            $('#search_content')[0].submit();
        }

    };

    $scope.setAction= function(){
        document.formSearch.action='http://www.google.com/?q='+$scope.research;
    };
}]);