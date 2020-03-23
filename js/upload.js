function upload(subject, type, description) {
  firebase
    .database()
    .ref("data/" + subject)
    .set({
      Type: type,
      Description: description
      //userID: id,
      //uploadBy: by,
      //uploadedOn: not working
    });
}
