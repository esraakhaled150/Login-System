var user =[];
user = JSON.parse(localStorage.getItem('user'));
var logInEmailInput= document.getElementById("loginEmail");
var logInPasswordInput = document.getElementById("loginPassword");
var loginBtn = document.getElementById('login');


loginBtn.addEventListener('click', function(){
    if (logInEmailInput.value == ''||logInPasswordInput.value =='') {
        document.getElementById("message").innerHTML = ` <p class='text-center'>All inputes is required!  </p>`
    }else{
        checkUser();
    }
})

function checkUser() {
    for (var i = 0; i < user.length; i++) {
        if (logInEmailInput.value == user[i].email && logInPasswordInput.value == user[i].password) {
            var y =user[i].name
            localStorage.setItem('userName', y)
            location.href= '../../home/index.html'
        

        }else{
             document.getElementById("message").innerHTML = ` <p class='text-center'>Email or password is wrong  </p>`
        }
        
    }
} 