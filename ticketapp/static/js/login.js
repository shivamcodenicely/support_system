function login() {
    var pwd = document.getElementById('pwd').value;
    var email = document.getElementById('email').value;
    if(email==""){
    alert("Please enter the email")
    return false}
    if(pwd==""){
    alert("Please enter the password")
    return false}
    $.ajax({
        url: '/ticket/validate/',
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


                    window.location.href='/ticket/userhome/?Email='+Email;
                    }

                else{

                    alert("Email ID OR Password Incorrect")
                }
            }

        }
    });
}


function forget() {
    var email = document.getElementById('email').value;

    $.ajax({
        url: '/ticket/forget_function/',
        type: 'POST',
        data: {
            'email': email,
        },
        dataType: 'json',
        success: function (contxt) {
            {
                console.log(contxt)
                alert("Forget Successful");
                window.location.href = '/ticket/userlogin/';
            }
         }

    });
}


function login1() {
    var username = document.getElementById('username').value;
    if(username==""){
    alert("Please enter the username")
    return false
    }
    var password = document.getElementById('password').value;
    if(password==""){
    alert("please enter password")
    return false}
    $.ajax({
        url: '/ticket/myview/',
        type: 'POST',
        data: {
            'username': username, 'password': password,
        },
        dataType: 'json',
        success: function (contxt) {
            {
                console.log(contxt)
                console.log(contxt.success)
                Email=contxt.email
                if(contxt.success==true){


                    window.location.href='/ticket/adminhome/?Username='+username;
                    }

                else{
                    alert("Email ID OR Password Incorrect")
                }
            }

        }
    });
}
