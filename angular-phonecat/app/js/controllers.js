'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'Parmley 2000™',
     'snippet': 'The most advanced vaporware on the market'},
    {'name': 'The PBJ™',
     'snippet': 'My favorite variation on the peanut butter sandwich. Jam not Jelly!'},
    {'name': 'The Firebolt™',
     'snippet': 'Compete in style.'}
  ];
});
