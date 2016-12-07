"use strict";

app.controller("ReadBibleCtrl", function($scope, BibleFactory, $filter, $rootScope, ModalService) {
    $scope.bible = {};

    $scope.bookmark = (bible) => {
        console.log("bookmark Working!!!!!!");
        console.log(bible);
        // If userloggedin is true bookmark the page
        if($rootScope.userloggedin) {
            // add bookmark to db

        } else {
            showComplex();
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

    let showComplex = function() {

    ModalService.showModal({
      templateUrl: "./partials/modal.html",
      controller: "ModalCtrl",
      inputs: {
        title: "Login for Extra Features"
      }
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(result) {
        $scope.complexResult  = "Password: " + result.password + ", age: " + result.age;
        // Print out the results once the modal is closed.
        console.log(result);
      }).then(() => {

      });
    });

  };


// Test area
  $scope.viewby = 2; // number per page
  $scope.totalItems = 34; //$scope.data.length change this back so it can be more scalable
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
