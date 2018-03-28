
                $(document).ready(function(){
                    $.ajax({
        url: '/ticket/adminload/',
        type: 'GET',
        dataType: 'json',

        success: function (contxt) {
        var html="";
        var html1="";
            {
                console.log(contxt.ticket_list)
                for(var i=0;i<contxt.ticket_list.length;i++)
                {
                var data=contxt.ticket_list[i].status;
                var a=contxt.ticket_list[i].ticket_id;
                var b=contxt.ticket_list[i].catagory;
                var c=contxt.ticket_list[i].subject;
                var d=contxt.ticket_list[i].description;
                var d1=contxt.ticket_list[i].created;

                var e="CLOSE";

                if(data==true)
                {
                html+='<tr><td onclick="comment('+a+')">'+a+'</td><td>'+b+'</td><td>'+c+'</td><td>'+d+'</td><td>'+d1+'</td><td onclick="closed('+a+')">'+e+'</td></tr>'
                }

                else{
                    html1+='<tr><td onclick="comment('+a+')">'+a+'</td><td>'+b+'</td><td>'+c+'</td><td>'+d+'</td><td>'+d1+'</td></tr>'
                }
                    }
                 $('#customers').append(html);
                  $('#ticket').append(html1);

                }

               $(document).ready(function() {
                    $('#table1').DataTable();
                    $('#table2').DataTable();
} );


            }

    });
});

function comment(id) {
        window.location.href='/ticket/rply/?id='+id;
//        document.getElementById('ticket_id2').textContent=id;
//        $('#create').modal('show');

}

function closed(id){
    alert('hello')
 document.getElementById('ticket_id2').textContent=id;
    $.ajax({
        url: '/ticket/close/',
        type: 'POST',
        data: {
            'ticket_id2':id,

        },
        dataType: 'json',

        success: function (contxt) {
                 alert('success');
                 console.log(contxt)
                if(contxt.success==true){
                location.reload()
                }
                else{
                alert("Ticket is already closed");
                }


            }
    });
}


