const form = document.getElementById('signupForm');
const studentNumber = document.getElementById('studentNumber');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const studentNumberError = document.getElementById('studentNumberError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const successMessage = document.getElementById('successMessage');

// Real-time validation
studentNumber.addEventListener('input', () => {
  if (!/^\d+$/.test(studentNumber.value)) {
    studentNumber.classList.add('error');
    studentNumberError.textContent = "Student Number must be numeric";
  } else {
    studentNumber.classList.remove('error');
    studentNumberError.textContent = "";
  }
});

email.addEventListener('input', () => {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!emailPattern.test(email.value)) {
    email.classList.add('error');
    emailError.textContent = "Invalid email format";
  } else {
    email.classList.remove('error');
    emailError.textContent = "";
  }
});

password.addEventListener('input', () => {
  if (password.value.length < 8) {
    password.classList.add('error');
    passwordError.textContent = "Password must be at least 8 characters";
  } else {
    password.classList.remove('error');
    passwordError.textContent = "";
  }
});

confirmPassword.addEventListener('input', () => {
  if (confirmPassword.value !== password.value) {
    confirmPassword.classList.add('error');
    confirmPasswordError.textContent = "Passwords do not match";
  } else {
    confirmPassword.classList.remove('error');
    confirmPasswordError.textContent = "";
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (
    studentNumberError.textContent === "" &&
    emailError.textContent === "" &&
    passwordError.textContent === "" &&
    confirmPasswordError.textContent === "" &&
    studentNumber.value &&
    email.value &&
    password.value &&
    confirmPassword.value
  ) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
  } else {
    successMessage.textContent = "";
    alert("Please fix the errors before submitting.");
  }
});
