"use strict";

// Example of a modal service
// https://github.com/dwmkerr/angular-modal-service/blob/master/samples/sampleapp.js#L24
app.controller('NavCtrl', ['$scope', 'ModalService', '$location', function($scope, ModalService, $location) {

  $scope.yesNoResult = null;
  $scope.complexResult = null;
  $scope.customResult = null;

    $scope.login = () => {
        console.log("Login Working!!!!!!");
        // Login Modal goes here
    };

    $scope.register = () => {
        console.log("Register Working!!!!!!");
        // Register Modal goes here
    };

    $scope.readthebible = () => {
        $location.url("/readbible");
    };


  $scope.showComplex = function() {

    ModalService.showModal({
      templateUrl: "./partials/modal.html",
      controller: "ModalCtrl",
      inputs: {
        title: "A More Complex Example"
      }
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(result) {
        $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
      }).then(() => {
        // Print out the results once the modal is closed.
        console.log($scope.complexResult);
      });
    });

  };

  // $scope.showCustom = function() {

  //   ModalService.showModal({
  //     templateUrl: "custom/custom.html",
  //     controller: "CustomController"
  //   }).then(function(modal) {
  //     modal.close.then(function(result) {
  //       $scope.customResult = "All good!";
  //     });
  //   });

  // };

}]);




