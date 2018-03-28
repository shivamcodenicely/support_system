
function create_ticket() {
    var ticket_id = document.getElementById('ticket_id').value;
    var category = document.getElementById('category').value;
    var subject = document.getElementById('subject').value;
    var description= document.getElementById('description').value;

//    var profile_picture=document.getElementById('profile_picture').files[0];

    $.ajax({
        url: '/ticket/create_ticket/',
        type: 'POST',
        data: {
            'email':email,
            'ticket_id':ticket_id,
            'category':category,
            'subject':subject,
            'description':description,
//            'profile_picture': profile_picture,

        },
        dataType: 'json',

        success: function (contxt) {
                 console.log(contxt)
                if(contxt.success==true){
//                    window.location.href = '/ticket/userhome/';
                        location.reload()
//
                    // document.getElementById("email").value=contxt.email;
                    // document.getElementById("otp").value=contxt.otp;
                }
                else{
                alert("This User is already exist");
                }


            }
    });
}