// var username = []
// var useremail = []
// var userpass = []
var username =[{
name :"pakitan"

}]

function gen() {
    let name1 = document.getElementById("name").value;
    let email2 = document.getElementById("email").value;
    let password3 = document.getElementById("password").value;

    //get data from localstorage
    var getName = localStorage.getItem('name')
    var getEmail = localStorage.getItem('email')
    var getPass = localStorage.getItem('password')

    if (getName == null && getEmail == null && getPass == null) {
        username = []
        useremail = []
        userpass = []
    }
    else {
        username = JSON.parse(getName)
        useremail = JSON.parse(getEmail)
        userpass = JSON.parse(getPass)

    }

    username.push(name1);
    useremail.push(email2);
    userpass.push(password3);

    localStorage.setItem("name", JSON.stringify(username));
    localStorage.setItem("email", JSON.stringify(useremail));
    localStorage.setItem("password", JSON.stringify(userpass));

    alert("signed Up succesfully");
    console.log(username);
    console.log(userpass);
    console.log(useremail);





    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    window.location.href = "login.html";
    return false;
}



let username2 = JSON.parse(localStorage.getItem("name"))
let useremail2 = JSON.parse(localStorage.getItem("email"))
let userpass2 = JSON.parse(localStorage.getItem("password"))

function login() {

    var uemail = document.getElementById('uemail').value;
    var upassword = document.getElementById('upassword').value;
    isfound = false;

    for (i = 0; i < useremail2.length; i++) {
        if (useremail2[i] === uemail) {
            isfound = i;
            localStorage.setItem("cIndex", isfound);
            break;
        }
    }
    if (isfound === false) {
        alert("Email not found")
    }
    else if (userpass2[isfound] === upassword) {
        // window.open("feed.html");
        alert("Login succesfully");

        window.location.href = "feed.html";
    }
    else {
        alert("password incorrect")
    }
    return false;

}

function showData() {
    var cIndex = localStorage.getItem('cIndex');
    document.getElementById("new").innerHTML = "Name : " + username2 [cIndex]
    document.getElementById("new1").innerHTML = "Email : " + useremail2[cIndex]
    document.getElementById("new2").innerHTML = "Password : " + userpass2[cIndex]
}



