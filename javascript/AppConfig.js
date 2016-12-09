"use strict";

// let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
//     if(AuthFactory.isAuthenticated()) {
//         resolve();
//     } else {
//         reject();
//     }
// });

app.run(($rootScope, $location, FIREBASE_CONFIG, AuthFactory) => {
     firebase.initializeApp(FIREBASE_CONFIG);

     // $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {

     //    let logged = AuthFactory.isAuthenticated();
     //    let appTo;

     //    if(currRoute.originalPath) {
     //        appTo = currRoute.originalPath.indexOf('/auth') !== -1;
     //    }

     //    if(!appTo && !logged) {
     //        event.preventDefault();
     //        $location.path('/auth');
     //    }

     // });
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/homepage.html',
            controller: 'HomePageCtrl'
        })
        .when('/readbible', {
            templateUrl: 'partials/readbible.html',
            controller: 'ReadBibleCtrl'
        })
        .when('/modal', {
            templateUrl: 'partials/modal.html',
            controller: 'NavCtrl'
        })
        .when('/creation', {
            templateUrl: 'partials/kidsbible/creation.html',
            controller: 'ReadBibleCtrl'
        })
        .when('/noah', {
            templateUrl: 'partials/kidsbible/noah.html',
            controller: 'ReadBibleCtrl'
        })
        .when('/noah1', {
            templateUrl: 'partials/kidsbible/noah1.html',
            controller: 'ReadBibleCtrl'
        })
        .when('/noah2', {
            templateUrl: 'partials/kidsbible/noah2.html',
            controller: 'ReadBibleCtrl'
        })
        .when('/moses', {
            templateUrl: 'partials/kidsbible/moses.html',
            controller: 'ReadBibleCtrl'
        })
        .when('/moses1', {
            templateUrl: 'partials/kidsbible/moses1.html',
            controller: 'ReadBibleCtrl'
        })
        .when('/moses2', {
            templateUrl: 'partials/kidsbible/moses2.html',
            controller: 'ReadBibleCtrl'
        })
        .when('/moses3', {
            templateUrl: 'partials/kidsbible/moses3.html',
            controller: 'ReadBibleCtrl'
        })
        .when('/david', {
            templateUrl: 'partials/kidsbible/david.html',
            controller: 'ReadBibleCtrl'
        })
        .when('/david1', {
            templateUrl: 'partials/kidsbible/david1.html',
            controller: 'ReadBibleCtrl'
        })
        .when('/daniel', {
            templateUrl: 'partials/kidsbible/daniel.html',
            controller: 'ReadBibleCtrl'
        })
        .when('/jesus', {
            templateUrl: 'partials/kidsbible/jesus.html',
            controller: 'ReadBibleCtrl'
        })
        .when('/jesus1', {
            templateUrl: 'partials/kidsbible/jesus1.html',
            controller: 'ReadBibleCtrl'
        })
        .when('/wisemen', {
            templateUrl: 'partials/kidsbible/wisemen.html',
            controller: 'ReadBibleCtrl'
        })
        .when('/godworks', {
            templateUrl: 'partials/kidsbible/godworks.html',
            controller: 'ReadBibleCtrl'
        })
        .when('/godworks1', {
            templateUrl: 'partials/kidsbible/godworks1.html',
            controller: 'ReadBibleCtrl'
        })
        .when('/jesuschildren', {
            templateUrl: 'partials/kidsbible/jesuschildren.html',
            controller: 'ReadBibleCtrl'
        })
        .when('/material', {
            templateUrl: 'partials/material.html',
            controller: 'AppCtrl'
        })
        // .when('/pins/view/:id', { // colon means the value will change
        //     templateUrl: 'partials/pin-view.html',
        //     controller: 'PinViewCtrl'
        //     // resolve: {isAuth}
        // })
        // .when('/logout', {
        //     templateUrl: 'partials/auth.html',
        //     controller: 'AuthCtrl'
        //     // resolve: {isAuth}
        // })
        .otherwise('/'); // This could be a 404 error...

});
