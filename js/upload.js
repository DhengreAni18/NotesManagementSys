function upload(subject, description, type, id, by) {
  firebase
    .database()
    .ref("users/" + subject)
    .set({
      Description: description,
      Type: type,
      userID: id,
      uploadBy: by,
      uploadOn: getservertime()
    });
}
