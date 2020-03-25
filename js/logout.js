function logout() {
  firebase
    .auth()
    .signOut()
    .then(function() {
      console.log("Logout Successfull!!");
      localStorage.removeItem("name");
      localStorage.removeItem("username");
      localStorage.removeItem("key");
      window.location.replace("/signin.html");
    })
    .catch(function(error) {
      console.log(error);
    });
}
