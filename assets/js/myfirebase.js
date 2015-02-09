var myFirebaseRef = new Firebase("https://nishadagrawal.firebaseio.com/");
myFirebaseRef.child("location/city").on("value", function(snapshot) {
  alert(snapshot.val());  // Alerts "San Francisco"
});