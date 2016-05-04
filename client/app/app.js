'use strict';

angular.module('fullstackSqlApp', [
  'fullstackSqlApp.auth',
  'fullstackSqlApp.admin',
  'fullstackSqlApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
