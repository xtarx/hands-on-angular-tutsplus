'use strict';

/**
 * @ngdoc overview
 * @name swFrontApp
 * @description
 * # swFrontApp
 *
 * Main module of the application.
 */
 angular
 .module('swFrontApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
  ])
 .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })  
  .when('/edges', {
    templateUrl: 'views/edges.html',
    controller: 'EdgesCtrl'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
