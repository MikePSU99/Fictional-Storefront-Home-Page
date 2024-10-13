function validateForm(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const confirm_passwordError = document.getElementById("confirm_password-error");


    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirm_passwordError.textContent = "";


    let isValid = true;

    if (name === "") {
        nameError.textContent = "Please enter a username.";
        isValid = false;
    }


    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }


    if (password === "") {
        passwordError.textContent = "Please enter a password.";
        isValid = false;
    }


    if (confirm_password === "" || confirm_password !== password) {
        confirm_passwordError.textContent = "Passwords do not match. Please confirm your password.";
        isValid = false;
    }


    if (!isValid) {
        event.preventDefault();
    }
}
