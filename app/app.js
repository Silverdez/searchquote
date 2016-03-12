'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.index',
  'myApp.contact'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/index'});
}]).
directive('backImg', function(){
  return function(scope, element, attrs){
    var url = attrs.backImg;
    element.css({
      'background-image': 'url(' + url +')',
      'background-size' : 'cover'
    });
  };
})
.controller('bgCtrl',  ['$scope', '$http',function($scope, $http) {
    $scope.num = Math.round(Math.random()*10);
    $scope.numImg = 'img'+Math.round(Math.random()*2);
    $http.get('datas/quotes.json').success(function(response){
        $scope.myQuote = response;
    });
}]);