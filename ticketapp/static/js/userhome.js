
                $(document).ready(function(){
                    alert('hi there');

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

                if(data==true)
                {
                html+="<tr><td>"+a+"</td><td>"+b+"</td><td>"+c+"</td><td>"+d+"</td><td>"+data+"</td></tr>"
                }

                else{
                    html1+="<tr><td>"+a+"</td><td>"+b+"</td><td>"+c+"</td><td>"+d+"</td><td>"+data+"</td></tr>"
                }
                    }
                 $('#customers').append(html);
                  $('#ticket').append(html1);

                }

            }

    });
});