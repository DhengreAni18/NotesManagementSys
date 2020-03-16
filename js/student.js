
function studentupload(){
    var timestamp = Number(new Date());
    var storageRef = firebase.storage().ref(timestamp.toString());
    var $ = jQuery;
    const file = $('#upload').get(0).files[0]
    var fileButton=document.getElementById('file');
    
    storageRef.put(fileButton);
}