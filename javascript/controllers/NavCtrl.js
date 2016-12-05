"use strict";

app.controller('NavCtrl', function($scope, $location, ModalService) {

    $scope.login = () => {
        console.log("Login Working!!!!!!");
        // Login Modal goes here
    };

    $scope.register = () => {
        console.log("Register Working!!!!!!");
        // Register Modal goes here
    };

    $scope.readthebible = () => {
        console.log("readthebible Working!!!!!!");
        $location.url("/readbible");
    };

    $scope.show = function() {
        ModalService.showModal({
            templateUrl: './partials/modal.html',
            controller: "ModalController"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });
    };

});

app.controller('ModalController', function($scope, close) {

    $scope.close = function(result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };

});