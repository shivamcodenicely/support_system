/**
 * Created by sony on 12/3/18.
 */


function signup() {
    alert("Welcome")
    var name = document.getElementById('name').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('pwd').value;
    var contact = document.getElementById('contact').value;
    var city = document.getElementById('city').value;
    var zipcode = document.getElementById('zipcode').value;
//    var profile_picture=document.getElementById('profile_picture').files[0];

    $.ajax({
        url: '/ticket/validate_username/',
        type: 'POST',
        data: {
            'name':name,
            'username':username,
            'email': email,
            'pwd': pwd,
            'contact': contact,
            'city':city,
            'zipcode':zipcode,
//            'profile_picture': profile_picture,

        },
        dataType: 'json',

        success: function (contxt) {
                 alert('success');
                 console.log(contxt)
                if(contxt.success==true){
                    window.location.href = '/ticket/userlogin/';

                    // document.getElementById("email").value=contxt.email;
                    // document.getElementById("otp").value=contxt.otp;
                }
                else{
                alert("This User is already exist");
                }


            }
    });
}


