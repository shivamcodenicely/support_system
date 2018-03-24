
                $(document).ready(function(){

                    $.ajax({
        url: '/ticket/userhome/',
        type: 'GET',
        dataType: 'json',
        data: {'email': email },

        success: function (contxt) {
        var html="";
        var html1="";
            {
                console.log(contxt.ticket_list1)
                for(var i=0;i<contxt.ticket_list1.length;i++)
                {
                var data=contxt.ticket_list1[i].status;
                var a=contxt.ticket_list1[i].ticket_id;
                var b=contxt.ticket_list1[i].catagory;
                var c=contxt.ticket_list1[i].subject;
                var d=contxt.ticket_list1[i].description;
                var e="CLOSE";

                if(data==true)
                {
                html+='<tr><td onclick="comment('+a+')">'+a+'</td><td>'+b+'</td><td>'+c+'</td><td>'+d+'</td><td onclick="close()">'+e+'</td></tr>'
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

function close() {
    alert('heeee')
    document.getElementById('ticket_id1').textContent=id;
     $.ajax({
        url: '/ticket/close/',
        type: 'POST',
        data: {
            'email': email, 'pwd': pwd,
        },
        dataType: 'json',
        success: function (contxt) {
            {
                console.log(contxt)
                console.log(contxt.success)

                var Email=contxt.email
                if(contxt.success==true){


                    window.reload()
                    }

                else{
                    alert("Email ID OR Password Incorrect")
                }
            }

        }
    });

}