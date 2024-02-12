function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}
let val1;
function validatefname() {
    val1 = 0;
    const fname = document.getElementById("fname");
    const fnameError = document.getElementById("fnameError")
    if (fname.value.trim() === "") {
        fname.value = "";
        fnameError.innerHTML = "First Name cannot be empty";
        fname.className = "border-danger";
        fnameError.className = "errormessage text-danger"
    }
    else if (containsSpecialChars(fname.value.trim())) {
        fnameError.innerHTML = "First Name cannot contain special character";
        fname.className = "border-danger";
        fnameError.className = "errormessage text-danger"
    }
    else {
        fnameError.innerHTML = "Correct";
        fnameError.className = "errormessage text-success";
        fname.className = "border-success";
        val1 = 1;
    }
}
let val2;
function validatelname() {
    val2 = 0;
    const lname = document.getElementById("lname");
    const lnameError = document.getElementById("lnameError")
    if (lname.value.trim() === "") {
        lname.value = "";
        lnameError.innerHTML = "Last Name cannot be empty";
        lname.className = "border-danger";
        lnameError.className = "errormessage text-danger"
    }
    else if (containsSpecialChars(lname.value.trim())) {
        lnameError.innerHTML = "Last Name cannot contain special character";
        lname.className = "border-danger";
        lnameError.className = "errormessage text-danger"
    }
    else {
        lnameError.innerHTML = "Correct";
        lnameError.className = "errormessage text-success";
        lname.className = "border-success";
        val2 = 1;
    }
}

let val3;
let email = document.getElementById("email");
let emailError = document.getElementById("emailError");
function validateEmail() {
    val3 = 0;
    if (email.value.trim() === "") {
        email.value = "";
        emailError.innerHTML = "Email cannot be empty";
        email.className = "border-danger";
        emailError.className = "errormessage text-danger"
    }
    else if (!(/^([a-zA-Z0-9.])+@([a-zA-Z0-9]{4,})+.([a-z]{2,})?.([a-z]{2})$/.test(email.value.trim()))) {
        emailError.innerHTML = "Enter a valid Email";
        email.className = "border-danger";
        emailError.className = "errormessage text-danger"
    }
    else {
        emailError.innerHTML = "Correct";
        emailError.className = "errormessage text-success";
        email.className = "border-success";
        val3 = 1;
    }
}
let val4;
let password = document.getElementById("password");
let passwordError = document.getElementById("passwordError");
function validatepass() {
    val4 = 0;
    if (password.value.trim() === "") {
        password.value = "";
        passwordError.innerHTML = "Password cannot be empty";
        password.className = "border-danger";
        passwordError.className = "errormessage text-danger"
    }
    else if (!(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]){8,16}/.test(password.value.trim()))) {
        passwordError.innerHTML = "Enter a valid Password";
        password.className = "border-danger";
        passwordError.className = "errormessage text-danger"
    }
    else {
        passwordError.innerHTML = "Correct";
        passwordError.className = "errormessage text-success";
        password.className = "border-success";
        val4 = 1;
    }
}
let val5;
let cpassword = document.getElementById("confirmPassword");
let cpasswordError = document.getElementById("confirmPasswordError");
function validatecpass() {
    val5 = 0;
    if (cpassword.value.trim() === "") {
        cpassword.value = "";
        cpasswordError.innerHTML = "confirm Password cannot be empty";
        cpassword.className = "border-danger";
        cpasswordError.className = "errormessage text-danger"
    }
    else if (password.value.trim() === "") {
        cpasswordError.innerHTML = "First fill Password";
        cpassword.className = "border-danger";
        cpasswordError.className = "errormessage text-danger"
    }
    else if (password.value.trim() !== cpassword.value.trim()) {
        cpasswordError.innerHTML = "Enter a valid confirm Password";
        cpassword.className = "border-danger";
        cpasswordError.className = "errormessage text-danger"
    }
    else {
        cpasswordError.innerHTML = "Correct";
        cpasswordError.className = "errormessage text-success";
        cpassword.className = "border-success";
        val5 = 1;
    }
}
let val6;
let dob = document.getElementById("dob");
let dobError = document.getElementById("dobError");
function validateDOB() {
    val6 = 0;
    if (dob.value === "") {
        dobError.innerHTML = "Select DOB";
        dob.className = "border-danger";
        dobError.className = "errormessage text-danger"
    } else {
        dobError.innerHTML = "Correct";
        dobError.className = "errormessage text-success";
        dob.className = "border-success";
        val6 = 1;
    }
}
function validateform() {
    validatefname();
    validatelname();
    validateEmail();
    validatepass();
    validatecpass();
    validateDOB();
    if (val1 === 1 && val2 === 1 && val3 === 1 && val4 === 1 && val5 === 1 && val6 === 1) {
        return true;
    }
    else { return false; }
}




function changeTheme() {
    var selectedTheme = document.getElementById('themeSelector').value;
    var body = document.body;

    // Change background image based on the selected theme
    switch (selectedTheme) {
        case 'theme1':
            body.style.backgroundImage = 'url(./assets/background-5050213_1280.png)';
            break;
        case 'theme2':
            body.style.backgroundImage = 'url("./assets/background2.jpg")';
            break;
        default:
            body.style.backgroundImage = 'url("./assets/softbg.jpg")';
            break;
    }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
