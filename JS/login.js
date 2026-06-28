document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // Clear previous errors
  emailError.textContent = "";
  passwordError.textContent = "";

  // Retrieve stored user data from localStorage
  const storedUser = JSON.parse(localStorage.getItem("userProfile"));

  if (!storedUser) {
    emailError.textContent = "No account found. Please sign up first.";
    return;
  }

  // Validate credentials
  if (email !== storedUser.email) {
    emailError.textContent = "Email does not match our records.";
    return;
  }

  if (password !== storedUser.password) {
    passwordError.textContent = "Incorrect password.";
    return;
  }

  // Successful login → redirect to profile or feed
  alert("Login successful!");
  window.location.href = "profile.html";
});
