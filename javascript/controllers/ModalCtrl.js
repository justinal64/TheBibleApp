"use strict";

app.controller('ModalCtrl', function($scope, $http) {

    // $scope.title = title;

    // // Hide register form by default
    // $scope.showdiv = false;


    // // Used to change to register form
    // $scope.showRegisterForm = () => {
    //     $scope.showdiv = true;
    // };
    // // Used to change to login form
    // $scope.showLoginForm = () => {
    //     $scope.showdiv = false;
    // };
    // // used to register
    // $scope.register = (registerUser) => {
    //     $scope.showdiv = true;
    //     register(registerUser);
    // };
    // // register the new user
    // let register = (user) => {
    //     AuthFactory.registerWithEmail(user).then((result) => {
    //         if(result !== null) {
    //             $rootScope.name = result.email;
    //             $rootScope.userloggedin = true;
    //         }
    //     });
    // };
    // // Login user
    // $scope.login = (user) => {
    //     $scope.showdiv = true;
    //     auth(user);
    // };
    // // logout the user
    // $scope.logout = () => {
    //     AuthFactory.logout();
    // };
    // // authenticate the user
    // let auth = (user) => {
    //     AuthFactory.authenticate(user).then((result) => {
    //         if(result !== null) {
    //             $rootScope.name = result.email;
    //             $rootScope.userloggedin = true;
    //         }
    //     });
    // };
    // //  This close function doesn't need to use jQuery or bootstrap, because
    // //  the button has the 'data-dismiss' attribute.
    // $scope.close = function() {
    //     close({
    //         password: $scope.password,
    //         email: $scope.email,
    //         age: $scope.age
    //     }, 500); // close, but give 500ms for bootstrap to animate
    // };
    // //  This cancel function must use the bootstrap, 'modal' function because
    // //  the doesn't have the 'data-dismiss' attribute.
    // $scope.cancel = function() {

    //     // hide the modal.
    //     $element.modal('hide');
    // };

    // Materialize Modal
    // create new product
    $scope.createProduct = function(){

    // fields in key-value pairs
    $http.post('create_product.php', {
            'name' : $scope.name,
            'description' : $scope.description,
            'price' : $scope.price
        }
    ).success(function (data, status, headers, config) {
        console.log(data);
        // tell the user new product was created
        // Materialize.toast(data, 4000);

        // close modal
        $('#modal-product-form').closeModal();

        // clear modal content
        $scope.clearForm();

        // refresh the list
        $scope.getAll();
    });
    };

         // clear variable / form values
$scope.clearForm = function(){
    $scope.id = "";
    $scope.name = "";
    $scope.description = "";
    $scope.price = "";
};

     $scope.showCreateForm = function(){
       console.log("got here");
   // clear form
    $scope.clearForm();
   $('#modal1').show();
    // change modal title
    $('#modal-product-title').text("Create New Product");

    // hide update product button
    $('#btn-update-product').hide();

    // show create product button
    $('#btn-create-product').show();

};

$scope.closeModal = () => {
    console.log("closeModal called!!");
    $('#modal1').hide();
};


});
