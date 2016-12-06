"use strict";

app.controller('ModalCtrl', [
  '$scope', '$element', 'title', 'close', 'AuthFactory',
  function($scope, $element, title, close, AuthFactory) {


    $scope.email = null;
    $scope.age = null;
    $scope.password = null;
    $scope.title = title;
    // Hide register form by default
    $scope.show = false;
    let credentials = {};


    $scope.showRegisterForm = () => {
        console.log("Register Working!!!!!!");
        $scope.show = true;
    };

    $scope.showLoginForm = () => {
        console.log("Login Working!!!!!!");
        $scope.show = false;
    };



    //  This close function doesn't need to use jQuery or bootstrap, because
    //  the button has the 'data-dismiss' attribute.
    $scope.close = function() {
        close({
            password: $scope.password,
            email: $scope.email,
            age: $scope.age
        }, 500); // close, but give 500ms for bootstrap to animate
        let credentials = {
            password: $scope.password,
            email: $scope.email,
            age: $scope.age
        };
        console.log(credentials);
        AuthFactory.authenticate(credentials).then((result) => {
            console.log("result = ", result);
        });
    };

    //  This cancel function must use the bootstrap, 'modal' function because
    //  the doesn't have the 'data-dismiss' attribute.
    $scope.cancel = function() {

        //  Manually hide the modal.
        $element.modal('hide');

        //  Now call close, returning control to the caller.
        // close({
        //   name: $scope.name,
        //   age: $scope.age
        // }, 500); // close, but give 500ms for bootstrap to animate
    };

}]);
