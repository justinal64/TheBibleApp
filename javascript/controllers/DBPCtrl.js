"use strict";

app.controller("DBPCtrl", function($scope, DBPFactory) {
    $scope.booksOfBibles = {};
    $scope.chapters = {};

    $scope.getBooksOfBible = () => {
        DBPFactory.getBible().then((response) => {
            response.forEach((item, index) => {
                // create an array of chapters instead of comma seperated string
                item.chapters = item.chapters.split(',');
                $scope.booksOfBibles[index] = item;
            });
            console.log($scope.booksOfBibles);
        });
    };
    $scope.getBooksOfBible();

    $scope.getChapter = () => {
        console.log("$scope.selectedBook = ", $scope.selectedBook);
        console.log("$scope.selectedChapter = ", $scope.selectedChapter);
        // DBPFactory.getVerse()
    };

});



// var a = ["a", "b", "c"];

// a.forEach(function(element) {
//     console.log(element);
// });