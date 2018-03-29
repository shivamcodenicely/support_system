function chat2() {
    var ticket_id1=document.getElementById('ticket_id3').textContent;
    var username=document.getElementById('username').textContent;
    var comment = document.getElementById('comment').value;

    $.ajax({
        url: '/ticket/z/',
        type: 'POST',
        data: {
            'username':username,
            'ticket_id1':ticket_id1,
            'comment':comment,


        },
        dataType: 'json',

        success: function (contxt) {
                if(contxt.success==true){
                location.reload()
                }
                else{
                alert("This User is already exist");
                }


            }
    });
}