"use strict";

app.controller("DBPCtrl", function($scope, DBPFactory) {


    $scope.getNTBible = () => {
        console.log("NT working!!!!");
        DBPFactory.getNTBible().then((response) => {
            console.log("response = ", response);
        });
    };

    $scope.getOTBible = () => {
        console.log("OT working!!!!");
        DBPFactory.getOTBible().then((response) => {
            console.log("response = ", response);
        });
    };

});