// Switch between login and signup
    function switchForm() {
      const loginForm = document.getElementById("login-form");
      const signupForm = document.getElementById("signup-form");
      const switchText = document.querySelector(".switch");
      const title = document.getElementById("form-title");

      if (loginForm.style.display === "none") {
        loginForm.style.display = "flex";
        signupForm.style.display = "none";
        title.innerText = "Login";
        switchText.innerText = "Don’t have an account? Sign up";
      } else {
        loginForm.style.display = "none";
        signupForm.style.display = "flex";
        title.innerText = "Sign Up";
        switchText.innerText = "Already have an account? Login";
      }
    }
    // Show/Hide Password
    function togglePassword(id, element) {
      const input = document.getElementById(id);
      if (input.type === "password") {
        input.type = "text";
        element.innerText = "🙈";
      } else {
        input.type = "password";
        element.innerText = "👁️";
      }
    }

    // Validation Helpers
    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    function validatePassword(password) {
      return password.length >= 6;
    }

    // Login Validation
    document.getElementById("login-form").addEventListener("submit", function(e) {
      e.preventDefault();
      let valid = true;

      const emailInput = document.getElementById("login-email");
      const passwordInput = document.getElementById("login-password");

      const emailError = document.getElementById("login-email-error");
      const passwordError = document.getElementById("login-password-error");

      emailError.textContent = "";
      passwordError.textContent = "";
      emailInput.classList.remove("error-border");
      passwordInput.classList.remove("error-border");

      if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = "Enter a valid email address";
        emailInput.classList.add("error-border");
        valid = false;
      }
      if (!validatePassword(passwordInput.value.trim())) {
        passwordError.textContent = "Password must be at least 6 characters";
        passwordInput.classList.add("error-border");
        valid = false;
      }

      if (valid) {
        console.log("Login successful (frontend only)");
      }
    });

    // Signup Validation
    document.getElementById("signup-form").addEventListener("submit", function(e) {
      e.preventDefault();
      let valid = true;

      const nameInput = document.getElementById("signup-name");
      const emailInput = document.getElementById("signup-email");
      const passwordInput = document.getElementById("signup-password");

      const nameError = document.getElementById("signup-name-error");
      const emailError = document.getElementById("signup-email-error");
      const passwordError = document.getElementById("signup-password-error");

      nameError.textContent = "";
      emailError.textContent = "";
      passwordError.textContent = "";
      nameInput.classList.remove("error-border");
      emailInput.classList.remove("error-border");
      passwordInput.classList.remove("error-border");

      if (nameInput.value.trim().length < 3) {
        nameError.textContent = "Name must be at least 3 characters";
        nameInput.classList.add("error-border");
        valid = false;
      }
      if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = "Enter a valid email address";
        emailInput.classList.add("error-border");
        valid = false;
      }
      if (!validatePassword(passwordInput.value.trim())) {
        passwordError.textContent = "Password must be at least 6 characters";
        passwordInput.classList.add("error-border");
        valid = false;
      }

      if (valid) {
        console.log("Signup successful (frontend only)");
      }
    });