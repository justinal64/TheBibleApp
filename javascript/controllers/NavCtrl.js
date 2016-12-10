"use strict";

// Example of a modal service
// https://github.com/dwmkerr/angular-modal-service/blob/master/samples/sampleapp.js#L24
app.controller('NavCtrl', [
    '$scope', '$location', 'AuthFactory', '$rootScope',
     function($scope, $location, AuthFactory, $rootScope) {

    // is anyone logged in?
    $rootScope.userloggedin = false;

    $scope.login = () => {
        $location.url("/login");
    };

    // name if the user logged in
    $rootScope.name = "";

    $scope.logout = () => {
        AuthFactory.logout();
        $rootScope.userloggedin = false;
    };

    // Read the Bible Button
    $scope.readthebible = () => {
        $location.url("/readbible");
    };

}]);


