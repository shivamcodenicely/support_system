function login() {
    alert("hellloooooooooo");
    var pwd = document.getElementById('pwd').value;
    var email = document.getElementById('email').value;

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
                alert("Successful");
                console.log(contxt.success)
                var Email=contxt.email
                alert(Email)
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
    alert("hellloooooooooo");
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
    alert("helllo");
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;

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
                alert("Successful");
                console.log(contxt.success)
                Email=contxt.email
                console.log(Email)
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
