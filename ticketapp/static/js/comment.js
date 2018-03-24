function reply() {
    var ticket_id=document.getElementById('ticket_id1').textContent;
    var comment = document.getElementById('comment').value;

    $.ajax({
        url: '/ticket/comment/',
        type: 'POST',
        data: {
            'ticket_id1':ticket_id,
            'email':email,
            'comment':comment,

        },
        dataType: 'json',

        success: function (contxt) {
                 console.log(contxt)
                if(contxt.success==true){
                location.reload()
                }
                else{
                alert("This User is already exist");
                }


            }
    });
}