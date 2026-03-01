function login() {
  const password = document.getElementById('password').value;

  if (password === "BigBalls123") { // Updated password
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    showErrorModal();
  }
}

function showErrorModal() {
  document.getElementById('errorModal').style.display = 'flex';
}

function closeErrorModal() {
  document.getElementById('errorModal').style.display = 'none';
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

// Particles Configuration for Dashboard
if (document.getElementById('tsparticles')) {
  tsParticles.load("tsparticles", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#f4b400" },
      shape: { type: "circle" },
      opacity: {
        value: 0.3,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#f4b400",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 0.5 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
}
