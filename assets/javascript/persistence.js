function runFirebase() {
    var config = {
        apiKey: "AIzaSyB_P7ESlumLbYuFJryACvJBKkIpzRT6rkU",
        authDomain: "daniel-database.firebaseapp.com",
        databaseURL: "https://daniel-database.firebaseio.com",
        projectId: "daniel-database",
        storageBucket: "daniel-database.appspot.com",
        messagingSenderId: "772832539382"
    };
    firebase.initializeApp(config);

    var currentCallNumber;
    var newCallNumber;

    database.ref().on("value", function(snapshot) {
        currentCallNumber = currentCallNumber;
        newCallNumber = currentCallNumber + 1;
    });

    database.ref("/currentCallNumber").set({
        currentCallNumber: newCallNumber,
      });
}