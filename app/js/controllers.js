'use strict';

angular.module('myApp.controllers', [])
        .controller('LandingPageController', [function(){

        }])
        .controller('WaitlistController', ['$scope', '$firebase', function($scope, $firebase){
             var partiesRef = new Firebase('https://waitandeat-krishna.firebaseio.com/parties');

             $scope.parties = $firebase(partiesRef);

             $scope.party = {name : '', phone : '', size : '', done: false, notified: 'No'};

             $scope.saveParty = function() {
               $scope.parties.$add($scope.party);
               $scope.party = {name : '', phone : '', size : '', done: false, notified: 'No'};
             };
             
             $scope.sendTextMessage = function(party){
                 var textMessageRef = new Firebase('https://waitandeat-krishna.firebaseio.com/textMessages');
                 var textMessages = $firebase(textMessageRef);
                 textMessages.$add({phoneNumber : party.phone});
                 party.notified = 'Yes';
                 $scope.parties.$save(party.$id);
             };
        }])
        .controller('AuthController', ['$scope', '$firebaseSimpleLogin', function($scope, $firebaseSimpleLogin){
            var authRef = Firebase('https://waitandeat-krishna.firebaseio.com/');
            var auth = $firebaseSimpleLogin(authRef);

            $scope.user = {email : '', password: ''};

            $scope.register = function(){
                auth.$createUser($scope.user.email, $scope.user.password);
            };
        }]);