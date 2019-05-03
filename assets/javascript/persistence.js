function runFirebase(database) {

    var currentCallNumber = 0;

    database.ref("/currentCallNumber").once("value", function (snap) {
        currentCallNumber = snap.val().currentCallNumber;
        currentCallNumber++;
        database.ref("/currentCallNumber").set({
            currentCallNumber: currentCallNumber,
        });
    });
}