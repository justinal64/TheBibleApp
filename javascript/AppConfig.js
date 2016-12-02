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
