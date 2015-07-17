'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:EdgesCtrl
 * @description
 * # EdgesCtrl
 * Controller of the swFrontApp
 */
angular.module('swFrontApp')
  .controller('NavigationController', function ($scope,$location) {
  	$scope.isActive=function(path){
  		// return true;
  		var currentPath = $location.path().split('/')[1].split('?')[0];
  		return currentPath === path.split('/')[1];

  	}
  });
