let btnPass = document.querySelector('.eye');
let inputPass = document.querySelector('#password');

function oop() {
    if (inputPass.getAttribute('type') === 'password') {
        inputPass.setAttribute('type', 'text');
    }
    else {
        inputPass.setAttribute('type', 'password')
    }
}

function signup(event) {



    var pass = document.getElementById('password').value;
    var username = document.getElementById('email').value;
    var Name = document.getElementById('name').value;
    var lastname = document.getElementById('lastName').value;
    var Birtday = document.getElementById('bd').value;
    var gender = document.getElementsByName('os');
    var a;

    var user = {
        username: username,
        password: pass,
        name: Name,
        lname: lastname,
        birtday: Birtday,
        gen: a,

    };
    let b;
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            b = gender[i].value;
            console.log(b)
        }
    }
    user.gen = b;
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);


}


function logIn(e) {
    event.preventDefault();


    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var result = document.getElementById('result');
    var inform = document.getElementById('inform');
    var main = document.getElementById('container');
    var un = document.getElementById('un');
    var Name = document.getElementById('name');
    var lastN = document.getElementById('lastname')
    var Bd = document.getElementById('birtday');
    var gender = document.getElementById('gender');
    

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);


    if (user == null) {
        result.innerHTML = '* Wrong Username';
        
    }
    else if (username == data.username && pass == data.password) {
        
        main.style.display = "none";
        inform.style.display = "flex";
        un.innerHTML = username;
        Name.innerHTML = data.name;
        lastN.innerHTML = data.lname;
        Bd.innerHTML = data.birtday;
        gender.innerHTML = data.gen;
    }
    else {
        result.innerHTML = 'wrong Password';
    }

}






class FormValidation {
    formValues = {
        username: "",
        email: "",
        password: ""
    }
    errorValues = {
        usernameErr: "",
        emailErr: "",
        passworderr: ""
    }
    showErrorMsg(index, msg) {
        const form_group = document.getElementsByClassName('form-group')
        [index]
        form_group.classList.add('error')
        form_group.getElementsByTagName('span')[0].textContent = msg
    }
    showSuccessMsg(index) {
        const form_group = document.getElementsByClassName('form-group')
        [index]
        form_group.classList.remove('error')
        form_group.classList.add('success')
    }
    getInputs() {
        this.formValues.username = document.getElementById('email').value.trim();
        this.formValues.password = document.getElementById('password').value.trim()

    }
    validateUsername() {
        if (this.formValues.username === "") {
            this.errorValues.usernameErr = "* Please Enter Your Name"
            this.showErrorMsg(0, this.errorValues.usernameErr)
        } else if (this.formValues.username.length <= 4) {
            this.errorValues.usernameErr = "*Username must  be atleast 5 characters"
            this.showErrorMsg(0, this.errorValues.usernameErr)
        } else if (this.formValues.username.length > 20) {
            this.errorValues.usernameErr = "* Username should not exceeds 14 characters"
            this.showErrorMsg(0, this.errorValues.usernameErr)
        } else {
            this.errorValues.usernameErr = ""
            this.showSuccessMsg(0)
        }
    }
    validateEmail() {

    }
    validatePassword() {
        if(this.formValues.password === ""){
            this.errorValues.passworderr = "*Please Provide a Password"
            this.showErrorMsg(1,this.errorValues.passworderr)
        }else if(this.formValues.password.length <= 4){
            this.errorValues.passworderr = "*Password must be atleast 5 Characters"
            this.showErrorMsg(1,this.errorValues.passworderr)
        }else if(this.formValues.password.length > 12){
            this.errorValues.passworderr = "Password should not exceeds 14 Characters"
            this.showErrorMsg(1,this.errorValues.passworderr)
        }else{
            this.errorValues.passworderr = ""
            this.showSuccessMsg(1)
        }
    }
  
}

const ValidateUserInputs = new FormValidation()

document.getElementsByClassName('form')[0]
    addEventListener('submit', event => {
        event.preventDefault()
        ValidateUserInputs.getInputs()
        ValidateUserInputs.validateUsername()
        ValidateUserInputs.validatePassword()
    })