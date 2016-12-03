"use strict";

app.controller("ReadBibleCtrl", function($scope, BibleFactory) {
    $scope.bibles = {};
    // $scope.divnum = 0;

    $scope.navigatePage = function(obj){
    var targetId = $(obj).attr('id');
    var scroT = $('#'+targetId).offset();
    $('html,body').stop(true,true).animate({scrollTop:scroT.top+'px'});
}

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
});