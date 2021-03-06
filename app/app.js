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

    var img = $('#bg img');
    //console.log(img);

    /*$scope.tyswatch = function () {

        var vibrant = new Vibrant(img);
        console.log('test');
        var swatches = vibrant.swatches();

        for (var swatch in swatches)
            if (swatches.hasOwnProperty(swatch) && swatches[swatch])
                console.log(swatch, swatches[swatch].getHex())*/

        /*
         * Results into:
         * Vibrant #7a4426
         * Muted #7b9eae
         * DarkVibrant #348945
         * DarkMuted #141414
         * LightVibrant #f3ccb4
         */
    /*};*/



    $scope.num = Math.round(Math.random()*10);
    $scope.numImg = 'img'+Math.round(Math.random()*2);
    $http.get('datas/quotes.json').success(function(response){
        $scope.myQuote = response;
    });
}]);