var socket = io.connect('localhost:3000');
//メッセージ受け取る
//socket.emit('message', {value : 'agokui'});
socket.on('stoc_mes', function(data){
    $("#message").append("<div>"+ data.value +"</div><hr>");
});

$("#send_message").click( function () {
    var message = $("#input_message").val();
    console.log(message);
    socket.emit('message', {value : message});
});