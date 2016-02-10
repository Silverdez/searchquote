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