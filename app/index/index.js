'use strict';

angular.module('myApp.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {
    templateUrl: 'index/index.html',
    controller: 'IndexCtrl'
  });
}])


.controller('IndexCtrl',  ['$scope', '$http',function($scope, $http) {
    $scope.num = Math.round(Math.random()*10);
    $http.get('datas/quotes.json').success(function(response){
        $scope.myQuote = response;
        console.log($scope.myQuote);
;   });
}]);