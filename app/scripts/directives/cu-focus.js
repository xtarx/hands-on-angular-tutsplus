'use strict';
angular.module('swFrontApp')
  .directive('cuFocus', function () {
  return{
  	restrict:'A',
  	required:'ngModel',
  	link:function  (scope,element,attrs,controller) {
  		controller.$foucsed=false;
  		element.bind('focus', function(event) {scope.$apply(function () {controller.$focused=true;})})
  		.bind('blur', function(event) {scope.$apply(function () {controller.$focused=false;})});


  	},  	
  }

  });