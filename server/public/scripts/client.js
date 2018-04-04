// Firebase Config
let config = {
    apiKey: "AIzaSyDT179hl2SXPtWTMYGqE0EGwyaeoquJxRk",
    authDomain: "placefinder-3aa68.firebaseapp.com",
    databaseURL: "https://placefinder-3aa68.firebaseio.com",
    projectId: "placefinder-3aa68",
    storageBucket: "placefinder-3aa68.appspot.com",
    messagingSenderId: "430941317722"
    };
    firebase.initializeApp(config);

angular
    .module('placeApp', ['firebase', 'ngMaterial', 'ngRoute']);
    





