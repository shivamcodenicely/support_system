
                $(document).ready(function(){

                    $.ajax({
        url: '/ticket/userhome/',
        type: 'GET',
        dataType: 'json',
        data: {'email': email },

        success: function (contxt) {
        var html="";
        var html1="";
                var f=contxt.Email;
            {   console.log(contxt);
                console.log(contxt.ticket_list1);
                for(var i=0;i<contxt.ticket_list1.length;i++)
                {
                var data=contxt.ticket_list1[i].status;
                var a=contxt.ticket_list1[i].ticket_id;
                var b=contxt.ticket_list1[i].catagory;
                var c=contxt.ticket_list1[i].subject;
                var d=contxt.ticket_list1[i].description;
                var d1=contxt.ticket_list1[i].created;
                var e="<button type='button'style= 'background-color: #008CBA;'>Close</button>";


                if(data==true)
                {
                html+='<tr style="cursor:pointer;"><td onclick="comment('+a+',\''+f+'\')">'+a+'</td><td onclick="comment('+a+',\''+f+'\')">'+b+'</td><td onclick="comment('+a+',\''+f+'\')">'+c+'</td><td onclick="comment('+a+',\''+f+'\')">'+d+'</td><td onclick="comment('+a+',\''+f+'\')">'+d1+'</td><td onclick="closed('+a+')">'+e+'</td></tr>'
                }

                else{
                    html1+='<tr style="cursor:pointer;"><td onclick="comment('+a+')">'+a+'</td><td onclick="comment('+a+',\''+f+'\')">'+b+'</td><td onclick="comment('+a+',\''+f+'\')">'+c+'</td><td onclick="comment('+a+',\''+f+'\')">'+d+'</td><td onclick="comment('+a+',\''+f+'\')">'+d1+'</td></tr>'
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


function comment(id,email) {

          window.location.href='/ticket/rply/?id='+id + "&email=" + email ;

//        document.getElementById('ticket_id1').textContent=id;
//        $('#create').modal('show');
    }

function closed(id) {
    document.getElementById('ticket_id2').textContent=id;
     $.ajax({
        url: '/ticket/close/',
        type: 'POST',
        data: {
            'ticket_id2':id,
        },
        dataType: 'json',
        success: function (contxt) {
            {
                console.log(contxt.success)

                var Email=contxt.email
                if(contxt.success==true){
                    location.reload()
                    }

                else{
                    alert("Email ID OR Password Incorrect")
                }
            }

        }
    });

}