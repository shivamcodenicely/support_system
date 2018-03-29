/**
 * Created by sony on 12/3/18.
 */
function signup() {
    var formdata = new FormData();
    var name = document.getElementById('name').value;
    if(name==""){
    alert("Please enter the name")
    return false}
    var username = document.getElementById('username').value;
    if(username==""){
    alert("Please enter the username")
    return false}
    var email = document.getElementById('email').value;
    if(email==""){
    alert("Please enter the email")
    return false}
    var pwd = document.getElementById('pwd').value;
    if(pwd==""){
    alert("Please enter the password")
    return false}
    var contact = document.getElementById('contact').value;
    if(contact==""){
    alert("Please enter the contact")
    return false}
    var contact = document.getElementById('address').value;
    if(contact==""){
    alert("Please enter the address")
    return false}
    var city = document.getElementById('city').value;
    if(city==""){
    alert("Please enter the city")
    return false}
    var zipcode = document.getElementById('zipcode').value;
    if(zipcode==""){
    alert("Please enter the zipcode")
    return false}
  var profile_picture=document.getElementById('profile_picture').files[0];
    alert(profile_picture)
              formdata.append("name",name);
              formdata.append("username",username);
              formdata.append("email",email);
              formdata.append("pwd",pwd);
              formdata.append("contact",contact);
              formdata.append("address",address);
              formdata.append("city",city);
              formdata.append("zipcode",zipcode);
              formdata.append("profile_picture", profile_picture);

    jQuery.ajax({
        url: '/ticket/validate_username/',
        type: 'POST',
        data: formdata,
        processData: false,
        contentType: false,
//        dataType: false,
//      {
////
//            'name':name,
//            'username':username,
//            'email': email,
//            'pwd': pwd,
//            'contact': contact,
//            'city':city,
//            'zipcode':zipcode,
//             },

//        dataType: 'json',

        success: function (contxt) {
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


function login2(){
        window.location.href='/ticket/userlogin/';
}