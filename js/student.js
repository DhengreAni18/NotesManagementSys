
function studentupload(){
    var timestamp = Number(new Date());
    var storageRef = firebase.storage().ref(timestamp.toString());
    var file = document.getElementById("myfile").files[0];
    // var $ = jQuery;
    // var file_data = $(‘#myfile’).prop(‘files’)[0];
    // const file = $('#myFile').get(0).files[0]
    // var fileButton=document.getElementById('file');
    
    storageRef.put(file);
}