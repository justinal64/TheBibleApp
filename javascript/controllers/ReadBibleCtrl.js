"use strict";

app.controller("ReadBibleCtrl", function($scope, BibleFactory) {
    $scope.messages = "This is a test";
    $scope.kidsbibles = {};

    $scope.login = () => {
        console.log("Login Working!!!!!!");
        // Login Modal goes here
    };

    let getKidsBible = () => {
        BibleFactory.getKidsBible().then((response) => {
            $scope.kidsbibles = response;
            console.log(response);
        });
    };
    // populate array with all verses from db
    getKidsBible();
});