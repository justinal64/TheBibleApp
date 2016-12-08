"use strict";

app.controller('ModalCtrl', [
  '$scope', '$element', 'title', 'close', 'AuthFactory', '$rootScope',
  function($scope, $element, title, close, AuthFactory, $rootScope) {

    $scope.title = title;

    // Hide register form by default
    $scope.showdiv = false;


    // Used to change to register form
    $scope.showRegisterForm = () => {
        $scope.showdiv = true;
    };
    // Used to change to login form
    $scope.showLoginForm = () => {
        $scope.showdiv = false;
    };
    // used to register
    $scope.register = (registerUser) => {
        $scope.showdiv = true;
        register(registerUser);
    };
    // register the new user
    let register = (user) => {
        AuthFactory.registerWithEmail(user).then((result) => {
            if(result !== null) {
                $rootScope.userloggedin = true;
            }
        });
    };
    // Login user
    $scope.login = (user) => {
        $scope.showdiv = true;
        auth(user);
    };
    // logout the user
    $scope.logout = () => {
        AuthFactory.logout();
    };
    // authenticate the user
    let auth = (user) => {
        AuthFactory.authenticate(user).then((result) => {
            if(result !== null) {
                $rootScope.userloggedin = true;
            }
        });
    };
    //  This close function doesn't need to use jQuery or bootstrap, because
    //  the button has the 'data-dismiss' attribute.
    $scope.close = function() {
        close({
            password: $scope.password,
            email: $scope.email,
            age: $scope.age
        }, 500); // close, but give 500ms for bootstrap to animate
    };
    //  This cancel function must use the bootstrap, 'modal' function because
    //  the doesn't have the 'data-dismiss' attribute.
    $scope.cancel = function() {

        // hide the modal.
        $element.modal('hide');
    };

}]);
