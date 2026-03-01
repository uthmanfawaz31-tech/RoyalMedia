function login() {
  const password = document.getElementById('password').value;

  if (password === "1234567890") { // Default password updated
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Incorrect password!");
  }
}

// Prevent unauthorized access to dashboard
if (window.location.pathname.includes("dashboard.html") && localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "index.html";
}

// Logout function
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}


// Toggle password visibility on login page
function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const toggleButton = document.getElementById('togglePassword');
  const isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  // Update button icon and aria-label
  toggleButton.textContent = isHidden ? '🙈' : '👁️';
  toggleButton.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
}

// Download function for app files
function downloadApp(url) {
  // Create a temporary link element to trigger download
  const link = document.createElement('a');
  link.href = url;
  link.download = 'PlayRob_1.0.apk';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Download via Downloader App function
function downloadViaApp(url) {
  // Open the downloader app link in a new tab
  window.open(url, '_blank');
}

// Forgotten password functionality
function forgottenPassword() {
  const email = "uthmanfawaz10@gmail.com";
  const subject = "Password Reset Request - RoyalMedia";
  const body = "Hello, I would like to request a new password for my RoyalMedia account.";
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
