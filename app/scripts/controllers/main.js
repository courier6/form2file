'use strict';

/**
 * @ngdoc function
 * @name form2fileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the form2fileApp
 */
angular.module('form2fileApp')
  .controller('MainCtrl', ['$scope', function ($scope) 
  {
  	$scope.formData = {};
  	$scope.file = {};
    $scope.processForm = function()
    {
      var form2File = new Blob([JSON.stringify($scope.formData)], {type: "text/plain;charset=utf-8"});

      //give a default filename and extension if none was typed in
      if($scope.file.name == undefined)
      {
        $scope.file.name = "form2file";
      }

      if($scope.file.extension == undefined)
      {
        $scope.file.extension = "txt";
      }

      saveAs(form2File, $scope.file.name + '.' + $scope.file.extension);
    };
  }]);
