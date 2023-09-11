let username = document.getElementById("username");
let email = document.getElementById("emailaddress");
let password = document.getElementById("password");
let confirmed = document.getElementById("confirmed");

function showpass(){
    password.type == "password"? password.type = "text" : password.type = "password"
}
function showpass(){
    password.type == "confirmed"? password.type = "text" : password.type = "password"
}

function deny(){
    if(username.value == "" || email.value == "" || password.value == ""){
        alert("field cannot be empty")
    }
    else if(password.value !== confirmed.value){
        alert("password does not match")
    }else if(password.value.lenght < 8){
        alert("password must not less than 8 characters")
    }
    else{
        alert("reg sucessful")
    }
}