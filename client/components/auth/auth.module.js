'use strict';

angular.module('fullstackSqlApp.auth', [
  'fullstackSqlApp.constants',
  'fullstackSqlApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
