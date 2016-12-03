"use strict";

app.controller("HomePageCtrl", function($scope, $location) {

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
});