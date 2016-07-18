import Firebase from 'firebase';

var firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyDrZ4fxV8ImoLt9iEuhYBwXpe183-CcCCA",
    authDomain: "vuejs-webpack.firebaseapp.com",
    databaseURL: "https://vuejs-webpack.firebaseio.com",
    storageBucket: "vuejs-webpack.appspot.com",
});
export default firebaseApp.database();
