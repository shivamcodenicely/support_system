function chat() {
    alert('hi')
    var ticket_id1=document.getElementById('ticket_id3').textContent;
    var comment = document.getElementById('btn-input').value;
    alert(ticket_id1)
    alert(comment)

    $.ajax({
        url: '/ticket/rply/',
        type: 'POST',
        data: {
            'ticket_id1':ticket_id1,
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