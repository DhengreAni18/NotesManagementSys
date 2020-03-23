function signupp(email, password, name) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function() {
      alert("SignUp Success!!!");
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

    firebase
    .database()
    .ref("users/" + email)
    .set({
      name: name,
      // Description: description
      //userID: id,
      //uploadBy: by,
      //uploadedOn: not working
    });
}
