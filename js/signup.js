function signupp(email, password) {
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
}
