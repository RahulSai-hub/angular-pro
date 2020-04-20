(function(){
  'use strict'
  var x="heloo";
  angular.module('myfirstapp',[])
  .controller('myfirstcontroller',function($scope){
    $scope.name="rahul sai";
    $scope.myfunction=function(){
      return "hello angular js";
    }
  });

})();
