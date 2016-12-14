"use strict";

app.controller("DBPCtrl", function($scope, DBPFactory) {
    $scope.NTBibles = {};
    $scope.chapters = {};

    $scope.getBible = () => {
        DBPFactory.getNTBible().then((response) => {
            console.log("getNTBible = ", response);
            $scope.NTBibles = response;
        });
    };
    $scope.getBible();

    $scope.getOTBible = () => {
        DBPFactory.getOTBible().then((response) => {
            console.log("getOTBible = ", response);
        });
    };
    // $scope.getOTBible();

    $scope.getNTVerse = () => {
        DBPFactory.getNTVerse().then((response) => {
            console.log("getNTVerse =", response);
        });
    };
    // $scope.getNTVerse();

    $scope.getOTVerse = () => {
        DBPFactory.getOTVerse().then((response) => {
            console.log("getOTVerse =", response);
        });
    };
    // $scope.getOTVerse();

    // This is triggered when the user selects a book
    $scope.bookselected = () => {
            DBPFactory.getChapters($scope.selectedBook).then((chapters) => {
                $scope.chapters = chapters;
                console.log($scope.chapters);
        });
    };

});