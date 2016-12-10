"use strict";

app.controller("ReadBibleCtrl", function($scope, BibleFactory, $filter, $rootScope, $location) {
    $scope.bible = {};

    $scope.bookmarkPage = (bible) => {
        console.log("bookmark Working!!!!!!");
        console.log(bible);
        // If userloggedin is true bookmark the page
        if($rootScope.userloggedin) {
            // add bookmark to db

        } else {
            $location.url('#/login');
        }
    };

    let getKidsBible = () => {
        BibleFactory.getKidsBible().then((response) => {
            $scope.bibles = response;
            console.log(response);
        });
    };
    // populate array with all verses from db
    getKidsBible();



});
