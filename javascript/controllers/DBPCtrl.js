"use strict";

app.controller("DBPCtrl", function($scope, DBPFactory) {
    $scope.booksOfBibles = {};
    $scope.chapters = {};
    $scope.bookSelected = {};
    $scope.showchapters = false;


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

    $scope.bookSelected = (book_id) => {
        Object.keys($scope.booksOfBibles).forEach((key, value) => {
            if($scope.booksOfBibles[key].book_id === book_id) {
                $scope.chapters = $scope.booksOfBibles[key].chapters;
                $scope.showchapters = true;
            }
        });
    };

});

                // let pins = [];
                // Object.keys(response).forEach((key) => {
                //     response[key].id = key;
                //     pins.push(response[key]);
                // });
                // resolve(pins);



// var a = ["a", "b", "c"];

// a.forEach(function(element) {
//     console.log(element);
// });