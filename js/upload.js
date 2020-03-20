function upload(subject, type, description) {
  firebase
    .database()
    .ref("users/" + subject)
    .set({
      Type: type,
      Description: description,
      //userID: id,
      //uploadBy: by,
      uploadOn: getservertime()
    });
}
