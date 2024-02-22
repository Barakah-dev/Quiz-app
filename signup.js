//SIGN-UP PAGE

//Mobile nav
const body = document.querySelector('body');
const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');

menuOpen.addEventListener('click', () => {
  nav.classList.add('toggle');
  console.log('open');
})

body.addEventListener('click', (e) => {
  let clickedElement = e.target;
  console.log('close');

  if (clickedElement.classList.contains('menu-close') || !clickedElement.classList.contains('menu-open')) {
    nav.classList.remove('toggle'); 
  }
});


//Sign-up body
const nameMessage = document.getElementById("name-message");
const emailMessage = document.getElementById("email-message");
const passwordMessage = document.getElementById("password-message");
const password2Message = document.getElementById("password2-message");
const submitMessage = document.getElementById("submit-message");


function validateName() {
  let fullName = document.getElementById("fullname").value;
  if (fullName.length === 0) {
    nameMessage.innerHTML = 'Name is required';
    return false;
  } else if (!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameMessage.innerHTML = 'Write name in full'
    return false;
  } else {
    nameMessage.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;
  }
}
function validateEmail() {
  let email = document.getElementById("email").value;
  if (email.length === 0) {
    emailMessage.innerHTML = 'Email is required';
    return false;
  } else if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
    emailMessage.innerHTML = 'Invalid email';
    return false;
  } else{
    emailMessage.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;
  }
}

function validatePassword() {
  let password = document.getElementById('password').value;
  if (password.length === 0) {
    passwordMessage.innerHTML = 'Password is required';
     return false;
  } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)) {
    passwordMessage.innerHTML = 'Invalid password';
    return false;
  } else{
    passwordMessage.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;
  }
}

function confirmPassword() {
  let password = document.getElementById('password').value;
  let password2 = document.getElementById('password-2').value;

  if (password2.length === 0) {
    password2Message.innerHTML = 'Password is required';
  } else if (password !== password2 ) {
    password2Message.innerHTML = 'Invalid password';
    return false;
  } else {
    password2Message.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;
  }
}

const element = document.querySelector('form');
element.addEventListener('submit', event => {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const submit = document.getElementById('submit');
  if (!validateName()) {
   validate();
  }
  if (!validateEmail()) {
   validate();
  }
  if (!validatePassword()) {
   validate();
  }
  if (!confirmPassword()) {
   validate();
  }
}

function validate() {
  submitMessage.style.display = 'block';
    submitMessage.innerHTML = "Please enter all fields";
    setTimeout(() => {
      submitMessage.style.display = 'none';
    }, 5000);
    return false;
}
