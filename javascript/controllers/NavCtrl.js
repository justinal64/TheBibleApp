"use strict";

// Example of a modal service
// https://github.com/dwmkerr/angular-modal-service/blob/master/samples/sampleapp.js#L24
app.controller('NavCtrl', [
    '$scope', 'ModalService', '$location', 'AuthFactory', '$rootScope',
     function($scope, ModalService, $location, AuthFactory, $rootScope) {

    $rootScope.userloggedin = false;
    // $scope.yesNoResult = null;
    // $scope.complexResult = null;
    // $scope.customResult = null;

    $scope.login = () => {
        console.log("Login Working!!!!!!");
        // Login Modal goes here
    };

    $scope.register = () => {
        console.log("Register Working!!!!!!");
        // Register Modal goes here
    };

    $scope.logout = () => {
        console.log("logout Working!!!!!!");
        AuthFactory.logout();
    };

    $scope.readthebible = () => {
        $location.url("/readbible");
    };


  $scope.showComplex = function() {

    ModalService.showModal({
      templateUrl: "./partials/modal.html",
      controller: "ModalCtrl",
      inputs: {
        title: "Login for Extra Features"
      }
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(result) {
        $scope.complexResult  = "Password: " + result.password + ", age: " + result.age;
        // Print out the results once the modal is closed.
        console.log(result);
      }).then(() => {

      });
    });

  };

}]);


