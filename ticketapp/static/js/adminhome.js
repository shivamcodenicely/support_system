
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
                var e="CLOSE";

                if(data==true)
                {
                html+='<tr><td onclick="comment('+a+')">'+a+'</td><td>'+b+'</td><td>'+c+'</td><td>'+d+'</td><td on click="close()">'+e+'</td></tr>'
                }

                else{
                    html1+='<tr><td onclick="comment('+a+')">'+a+'</td><td>'+b+'</td><td>'+c+'</td><td>'+d+'</td></tr>'
                }
                    }
                 $('#customers').append(html);
                  $('#ticket').append(html1);

                }

            }

    });
});

function comment(id) {
        document.getElementById('ticket_id1').textContent=id;
        $('#create').modal('show');

    }

function close(){
    alert('heeee')
    $.ajax({
        url: '/ticket/close/',
        type: 'POST',
        data: {
            'status':True,

        },
        dataType: 'json',

        success: function (contxt) {
                 alert('success');
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


