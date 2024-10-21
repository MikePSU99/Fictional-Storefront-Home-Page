function validateForm(event) {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;


    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const confirmPasswordError = document.getElementById("confirm_password-error");


    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm_password");


    // Clear error messages and reset input field styles
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    nameInput.classList.remove("invalid-input", "valid-input");
    emailInput.classList.remove("invalid-input", "valid-input");
    passwordInput.classList.remove("invalid-input", "valid-input");
    confirmPasswordInput.classList.remove("invalid-input", "valid-input");

    let isValid = true;

    // Validate name
    if (name === "") {
        nameError.textContent = "Please enter a valid username.";
        nameInput.classList.add("invalid-input");
        isValid = false;
    } else {
        nameInput.classList.add("valid-input");
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "" || !emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address. Example: joe@test.com";
        emailInput.classList.add("invalid-input");
        isValid = false;
    } else {
        emailInput.classList.add("valid-input");
    }

    // Validate password
    if (password === "") {
        passwordError.textContent = "Please enter a password.";
        passwordInput.classList.add("invalid-input");
        isValid = false;
    } else {
        passwordInput.classList.add("valid-input");
    }

    // Validate confirm password
    if (confirmPassword === "" || confirmPassword !== password) {
        confirmPasswordError.textContent = "Passwords do not match. Please confirm your password.";
        confirmPasswordInput.classList.add("invalid-input");
        isValid = false;
    } else {
        confirmPasswordInput.classList.add("valid-input");
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
}
