'use strict';

/**
 * @ngdoc overview
 * @name angularWaitandeatApp
 * @description
 * # angularWaitandeatApp
 *
 * Main module of the application.
 */
angular
  .module('myApp', [
    'ngRoute',
    'myApp.controllers',
    'firebase'
    ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/landing_page.html',
        controller: 'LandingPageController'
      })
      .when('/waitlist', {
        templateUrl: 'partials/waitlist.html',
        controller: 'WaitlistController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
