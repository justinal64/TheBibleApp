"use strict";

// Example of a modal service
// https://github.com/dwmkerr/angular-modal-service/blob/master/samples/sampleapp.js#L24
app.controller('NavCtrl', [
    '$scope', 'ModalService', '$location', 'AuthFactory', '$rootScope',
     function($scope, ModalService, $location, AuthFactory, $rootScope) {

    // is anyone logged in?
    $rootScope.userloggedin = false;
    // name if the user logged in
    $rootScope.name = "";
    $scope.logout = () => {
        AuthFactory.logout();
        $rootScope.userloggedin = false;
    };
    // Read the Bible Button
    $scope.readthebible = () => {
        $location.url("/readbible");
    };
    // show modal
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


