"use strict";

app.factory("DBPFactory", function($q, $http) {

    let NT = "ENGNASN2ET";
    let OT = "ENGNASO2ET";

    // dam_id for NT ENGNASN2ET
    // This dam_id is pulling an NT english version of NAS New American Standard Bible
    var getNTBible = function() {
        return $q((resolve, reject) => {
            // $http.get(`${FIREBASE_CONFIG.databaseURL}/biblestories.json`)
            $http.get(`http://dbt.io/library/bookorder?key=c0c769e931f78307a6c1c65cc5bd1d8c&dam_id=${NT}&v=2`)
            // http://dbt.io/library/bookorder?key=c0c769e931f78307a6c1c65cc5bd1d8c&dam_id=ENGNASN2ET&v=2
            .success((response) => {
                // let pins = [];
                // Object.keys(response).forEach((key) => {
                //     response[key].id = key;
                //     pins.push(response[key]);
                // });
                // resolve(pins);
                resolve(response);
            })
            .error((errorResponse) => {
                reject(errorResponse);
            });
        });
    };

    // dam_id for OT ENGNASO2ET
    // This dam_id is pulling an OT english version of NAS New American Standard Bible
    var getOTBible = function() {
        return $q((resolve, reject) => {
            // $http.get(`${FIREBASE_CONFIG.databaseURL}/biblestories.json`)
            $http.get(`http://dbt.io/library/bookorder?key=c0c769e931f78307a6c1c65cc5bd1d8c&dam_id=${OT}&v=2`)
            // http://dbt.io/library/bookorder?key=c0c769e931f78307a6c1c65cc5bd1d8c&dam_id=ENGNASN2ET&v=2
            .success((response) => {
                // let pins = [];
                // Object.keys(response).forEach((key) => {
                //     response[key].id = key;
                //     pins.push(response[key]);
                // });
                // resolve(pins);
                resolve(response);
            })
            .error((errorResponse) => {
                reject(errorResponse);
            });
        });
    };

    var getOTVerse = function() {
        return $q((resolve, reject) => {
            // $http.get(`${FIREBASE_CONFIG.databaseURL}/biblestories.json`)
            $http.get(`http://dbt.io/text/verse?key=c0c769e931f78307a6c1c65cc5bd1d8c&dam_id=${OT}&book_id=Gen&v=2`)
            .success((response) => {
                // let pins = [];
                // Object.keys(response).forEach((key) => {
                //     response[key].id = key;
                //     pins.push(response[key]);
                // });
                // resolve(pins);
                resolve(response);
            })
            .error((errorResponse) => {
                reject(errorResponse);
            });
        });
    };

    var getNTVerse = function() {
        return $q((resolve, reject) => {
            // $http.get(`${FIREBASE_CONFIG.databaseURL}/biblestories.json`)
            $http.get(`http://dbt.io/text/verse?key=c0c769e931f78307a6c1c65cc5bd1d8c&dam_id=ENGNAS&book_id=Matt&v=2`)
            .success((response) => {
                // let pins = [];
                // Object.keys(response).forEach((key) => {
                //     response[key].id = key;
                //     pins.push(response[key]);
                // });
                // resolve(pins);
                resolve(response);
            })
            .error((errorResponse) => {
                reject(errorResponse);
            });
        });
    };

    var getChapters = function(book_id) {
        return $q((resolve, reject) => {
            $http.get(`http://dbt.io/library/chapter?key=c0c769e931f78307a6c1c65cc5bd1d8c&dam_id=ENGNAS&book_id=${book_id}&v=2`)
            .success((response) => {
                resolve(response);
            })
            .error((errorResponse) => {
                reject(errorResponse);
            });
        });
    };







    // URL request for chapters of a book
    // http://dbt.io/library/chapter?key=c0c769e931f78307a6c1c65cc5bd1d8c&dam_id=ENGNASO2ET&book_id=Gen&v=2

    // http://www.digitalbibleplatform.com/docs/api-version-2/library-text/verse/
    // this pulls back every verse in genesis
    // http://dbt.io/text/verse?key=c0c769e931f78307a6c1c65cc5bd1d8c&dam_id=ENGNASO2ET&book_id=Gen&v=2

    return {
            getNTBible: getNTBible,
            getOTBible: getOTBible,
            getOTVerse: getOTVerse,
            getNTVerse: getNTVerse,
            getChapters: getChapters
        };

});
