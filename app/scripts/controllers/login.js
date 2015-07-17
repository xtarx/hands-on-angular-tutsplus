'use strict';

angular.module('swFrontApp')
.controller('LoginCtrl', function ($scope) { 
	$focused=false;
	$scope.login=function  () {
		if($scope.loginForm.$valid){
			console.log('sending reqiuest');
		}
	}
});
