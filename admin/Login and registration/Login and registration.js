

container = document.querySelector(".container"),
pwShowHide = document.querySelectorAll(".showhidepw"),
pwFields = document.querySelectorAll("password"),
signUp = document.querySelector(".signup-link"),
login = document.querySelector(".login-link");



signUp.addEventListener("click", function () {
    container.classList.add("active");
});

login.addEventListener("click", function () {
    container.classList.remove("active")
});



pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", ()=>{
        pwFields.forEach(pwField=> { 
        if (pwField.type === "password") {
            pwField.type ="text";
            pwShowHide.forEach(icon =>{
                Icon.classList.replace("bi bi-eye-slash", "bi bi-eye");
            })
        }else{
            pwFiled.type = "password";
            pwShowHide.forEach(icon =>{
                icon.classList.replace("bi bi-eye", "bi bi-eye-slash")
            })


        }
    })
})
});

function loginvalidation() {
    let email = document.forms.loginForm.email.value;
let password = document.forms.loginForm.password.value;
let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if (email == "" || !regEmail.test(email)) {
    alert("Please enter your Email");
    email.focus();
    return false;
} if (password == "") {
    alert("Please enter your Password");
    password.focus();
    return false;
} else {
    alert("Login successful.")
}
}

function signUpValidation(){
    let name = document.forms.signUp.name.value;
    let email = document.forms.signUpForm.email.value;
    let password = document.forms.signUpForm.password.value;
    let confirmpsw = document.forms.signUpForm.confirmpsw.value;

    let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let regName =  /\d+/g;

    if (name == "" || regName.test(name)){
        alert("please enter your name");
        name.focus();
        return false;
    }

    if (email == "" || regEmail.test(email)){
        alert("please enter your Email");
        email.focus();
        return false;
    }

    if (password == "" || regName.test(password)){
        alert("please enter your password");
        password.focus();
        return false;
    }

    if (confirmpsw == "" || regName.test(confirmpsw)){
        alert("please confirm your password");
        confirmpsw.focus();
        return false;
    }
};



function isUserExists(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === email);
  }
  
 
  function signUpValidation() {
    const name = document.forms['signUpform']['name'].value;
    const email = document.forms['signUpform']['email'].value;
    const password = document.forms['signUpform']['password'].value;
  

    if (isUserExists(email)) {
      alert('User with this email already exists. Please use a different email.');
      return false;
    }
  
  

   
    const user = { name, email, password };
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  
    alert('Registration successful. You can now log in.');
    return true;
  }
  

  function loginvalidation() {
    const email = document.forms['loginForm']['email'].value;
    const password = document.forms['loginForm']['psassword'].value;
  
 
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
  
    if (user) {
      alert(`Welcome back, ${user.name}!`);
    
    } else {
      alert('Invalid email or password. Please try again.');
    }
  
    return false;
  }
  