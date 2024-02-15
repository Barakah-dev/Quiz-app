//Sing-up Page
const nameMessage = document.getElementById("name-message");
const emailMessage = document.getElementById("email-message");
const passwordMessage = document.getElementById("password-message");
const password2Message = document.getElementById("password2-message");
const submitMessage = document.getElementById("submit-message");

let fullName = document.getElementById("fullname").value;
let email = document.getElementById("email").value;
let password = document.getElementById('password').value;
let password2 = document.getElementById('password-2').value;
const submit = document.getElementById('submit').value;

function validateName() {
  if (fullName.length === '') {
    nameMessage.innerHTML = 'Name is required';
    return false;
  } else if (!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameMessage.innerHTML = 'Write name in full';
    return false;
  } else {
    // nameMessage.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    nameMessage.innerHTML = 'valid';
    return true;
  }
}
function validateEmail() {
  if (email.length == 0) {
    emailMessage.innerHTML = 'Email is required';
    return false;
  } else if (!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailMessage.innerHTML = 'Invalid email';
    // emailMessage.innerHTML = '<i class="fa-solid fa-check-circle"></i>' + 'Invalid email';
    return false;
  } else{
    nameMessage.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;
  }
}

function validatePassword() {
  if (password.length == 0) {
    passwordMessage.innerHTML = 'Password is required';
     return false;
  } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
    passwordMessage.innerHTML = 'Invalid password';
    return false;
  } else{
    passwordMessage.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;
  }
}

function confirmPassword() {
  if (password !== password2 || password2.length === '') {
    password2Message.innerHTML = 'Invalid password';
    console.log('hh');
    return false;
  } else {
    password2Message.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;
  }
}
// function confirmPassword() {
//   if (password2 === password || password2.length === '') {
//     password2Message.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
//     return true;
//   } else {
//     password2Message.innerHTML = 'Invalid password';
//     return false;
//   }
// }

function validateForm(e) {
  if (!validateName() || !validateEmail() || !validatePassword || !confirmPassword()) {
    // e.preventDefault();
    submitMessage.style.display = 'block';
    submitMessage.innerHTML = "Please enter all fields";
    setTimeout(() => {
      submitMessage.style.display = 'none';
    }, 5000);
    return false;
  }
}