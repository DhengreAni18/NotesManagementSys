function upload(sub,desc) {
  var name = document.getElementById("subject").value;
  var file = document.getElementById("myfile").files[0];
  var storageRef = firebase
    .storage()
    .ref()
    .child(name + "/" + file.name);

  var uploadTask = storageRef.put(file);

  firebase
  .database()
  .ref("data/" + sub)
  .push({
    subject:sub,
    Description: desc,
    userID: localStorage.getItem("username"),
    uploadBy: localStorage.getItem("userrole"),
    uploadedOn: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
  });

  uploadTask.on(
    firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    function(snapshot) {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      document.getElementById("progresss").innerHTML =
        "Upload is " + progress + "% done";
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log("Upload is paused");
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log("Upload is running");
          break;
      }
    },
    function(error) {
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;

        case "storage/canceled":
          // User canceled the upload
          break;

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    function() {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log("File available at", downloadURL);
      });
    }
  );
}

document.getElementById("welcome").innerHTML =
  "Welcome" + "&nbsp" + localStorage.getItem("username") + "&nbsp" + "&nbsp";
