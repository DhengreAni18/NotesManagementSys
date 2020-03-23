function logout() {
    firebase.auth().signOut().then(function() {
      console.log('Logout Successfull!!');
      window.location.replace('./signin.html')
    }).catch(function(error) {
      console.log(error);
    });
  }