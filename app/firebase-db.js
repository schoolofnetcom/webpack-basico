define('firebase-db',['firebase'], function(Firebase){
    var firebaseApp = Firebase.initializeApp({
        apiKey: "AIzaSyDrZ4fxV8ImoLt9iEuhYBwXpe183-CcCCA",
        authDomain: "vuejs-webpack.firebaseapp.com",
        databaseURL: "https://vuejs-webpack.firebaseio.com",
        storageBucket: "vuejs-webpack.appspot.com",
    });
    return firebaseApp.database();
});