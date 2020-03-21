function studentupload() {
  var name = document.getElementById("subject").value;
  var file = document.getElementById("myfile").files[0];
  var storageRef = firebase
    .storage()
    .ref()
    .child(name + "/" + file.name);

  storageRef
    .put(file)
    .then(function(snapshot) {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      alert("Uploaded file!");
      console.log(snapshot);
    })
    .catch(function(error) {
      console.log(error);
    });
}
