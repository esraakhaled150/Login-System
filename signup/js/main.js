let signUpName = document.getElementById("signName");
let signUpEmail= document.getElementById("singEmail");
let signUpPassword = document.getElementById("signPassword");
let user =[];

if (localStorage.getItem('user')!= null) {
    user= JSON.parse(localStorage.getItem('user'))
}else{
    user =[];
}


function add() {
    if (signUpName.value == '' || signUpEmail.value  == '' || signUpPassword.value =='') {
        document.getElementById('message').innerHTML = ` <p class='text-center'>All inputes is required!  </p>`
        }
        else{
            let obj ={
              name: signUpName.value ,
              email: signUpEmail.value,
              password:signUpPassword.value
            }
            user.push(obj);
            location.href='../index.html';
            localStorage.setItem('user', JSON.stringify(user));
        }
    
}


