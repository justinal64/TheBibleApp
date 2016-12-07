"use strict";

app.controller('ModalCtrl', [
  '$scope', '$element', 'title', 'close', 'AuthFactory', '$rootScope',
  function($scope, $element, title, close, AuthFactory, $rootScope) {


    $scope.email = null;
    $scope.age = null;
    $scope.password = null;
    $scope.title = title;

    // Hide register form by default
    $scope.show = false;
    let credentials = {};


    $scope.showRegisterForm = () => {
        $scope.show = true;
    };

    $scope.showLoginForm = () => {
        $scope.show = false;
    };

    $scope.register = () => {
        console.log("register working!!!");
    };



    //  This close function doesn't need to use jQuery or bootstrap, because
    //  the button has the 'data-dismiss' attribute.
    $scope.close = function() {
        close({
            password: $scope.password,
            email: $scope.email,
            age: $scope.age
        }, 500); // close, but give 500ms for bootstrap to animate
        credentials = {
            password: $scope.password,
            email: $scope.email,
            age: $scope.age
        };
        auth(credentials);
    };

    let auth = () => {
        AuthFactory.authenticate(credentials).then((result) => {
            console.log("result = ", result);
            if(result !== null) {
                $rootScope.userloggedin = true;
            }
        });
    };

    $scope.logout = () => {
        console.log("logout Working!!!!!!");
        AuthFactory.logout();
    };

    //  This cancel function must use the bootstrap, 'modal' function because
    //  the doesn't have the 'data-dismiss' attribute.
    $scope.cancel = function() {

        // hide the modal.
        $element.modal('hide');
    };

}]);
