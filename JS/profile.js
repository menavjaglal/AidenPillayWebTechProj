document.getElementById("editForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const newName = document.getElementById("name").value.trim();
  const newEmail = document.getElementById("email").value.trim();
  const newBio = document.getElementById("bio").value.trim();

  if (newName !== "") {
    document.getElementById("profile-name").textContent = newName;
  }

  if (newEmail !== "") {
    document.getElementById("profile-email").textContent = newEmail;
  }

  if (newBio !== "") {
    document.getElementById("profile-bio").textContent = newBio;
  }

  alert("Profile updated successfully!");
});


