// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


(function (window) {
  'use strict';
  var App = window.App || {};

  window.FirebaseConfig = {
    apiKey: "AIzaSyD-KMP-Br7C94cXAJgzypLCkxG-whbmuUA",
    authDomain: "coffeerun-d24c9.firebaseapp.com",
    databaseURL: "https://coffeerun-d24c9-default-rtdb.firebaseio.com",
    projectId: "coffeerun-d24c9",
    storageBucket: "coffeerun-d24c9.appspot.com",
    messagingSenderId: "326705946119",
    appId: "1:326705946119:web:1a17f850c67685a8ec14a2",
    measurementId: "G-3P4K1J2GQW"
  };
  App.FirebaseConfig = FirebaseConfig;
  firebase.initializeApp(App.FirebaseConfig);

  window.App = App;

})(window);