"use strict";

app.controller("ReadBibleCtrl", function($scope, BibleFactory, $filter) {
    $scope.bibleseven = {};
    $scope.biblesodd = {};
    $scope.bible = {};

    $scope.login = () => {
        console.log("Login Working!!!!!!");
        // Login Modal goes here
    };

    let getKidsBible = () => {
        BibleFactory.getKidsBible().then((response) => {
            $scope.bibles = response;
            console.log(response);
        });
    };
    // populate array with all verses from db
    getKidsBible();


// Test area
  $scope.viewby = 2; // number per page
  $scope.totalItems = 37; //$scope.data.length change this back so it can be more scalable
  $scope.currentPage = `1`;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 0; //Number of pager buttons to show

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    console.log('Page changed to: ' + $scope.currentPage);
  };

$scope.setItemsPerPage = function(num) {
  $scope.itemsPerPage = num;
  $scope.currentPage = 1; //reset to first page
};

// end of test
});
