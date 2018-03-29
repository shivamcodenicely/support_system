function chat1() {
//    alert('hi')
    var ticket_id1=document.getElementById('ticket_id3').textContent;
    var email=document.getElementById('email').textContent;
    var comment = document.getElementById('comment').value;

    $.ajax({
        url: '/ticket/rply/',
        type: 'POST',
        data: {
            'email':email,
            'ticket_id1':ticket_id1,
            'comment':comment,


        },
        dataType: 'json',

        success: function (contxt) {
                 console.log(contxt.email)
                if(contxt.success==true){
                location.reload()
                }
                else{
                alert("This User is already exist");
                }


            }
    });
}



                $(document).ready(function(){

                    $.ajax({
        url: '/ticket/rply/',
        type: 'GET',
        dataType: 'json',
//        data: {'email': email },

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
                var e="X";


                if(data==true)
                {
                html+='<tr><td onclick="comment('+a+',\''+f+'\')">'+a+'</td><td>'+b+'</td><td>'+c+'</td><td>'+d+'</td><td>'+d1+'</td><td onclick="closed('+a+')">'+e+'</td></tr>'
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



