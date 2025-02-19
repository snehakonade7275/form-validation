document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener("input", function() {
            this.classList.remove("invalid");
            this.nextElementSibling.textContent = "";
        });
    });
});

function validateForm() {
    let isValid = true;

    isValid &= validateName();
    isValid &= validateEmail();
    isValid &= validatePhone();
    isValid &= validatePassword();
    isValid &= validateConfirmPassword();

    return isValid;
}

// Name Validation
function validateName() {
    const fullName = document.getElementById("fullName");
    const error = document.getElementById("fullNameError");
    let valid = true;

    if (fullName.value.trim().length < 5) {
        error.textContent = "Full name must be at least 5 characters.";
        fullName.classList.add("invalid");
        valid = false;
    }

    return valid;
}

// Email Validation
function validateEmail() {
    const email = document.getElementById("email");
    const error = document.getElementById("emailError");
    let valid = true;

    if (!email.value.includes("@") || !email.value.includes(".")) {
        error.textContent = "Enter a valid email address (e.g., name@example.com).";
        email.classList.add("invalid");
        valid = false;
    }

    return valid;
}

// Phone Number Validation
function validatePhone() {
    const phone = document.getElementById("phone");
    const error = document.getElementById("phoneError");
    let valid = true;

    if (!/^[6-9]\d{9}$/.test(phone.value)) {
        error.textContent = "Enter a valid 10-digit phone number starting with 6-9.";
        phone.classList.add("invalid");
        valid = false;
    }

    return valid;
}

// Password Validation
function validatePassword() {
    const password = document.getElementById("password");
    const error = document.getElementById("passwordError");
    let valid = true;

    if (password.value.length < 8) {
        error.textContent = "Password must be at least 8 characters.";
        password.classList.add("invalid");
        valid = false;
    } else if (!/[A-Z]/.test(password.value) || !/[0-9]/.test(password.value)) {
        error.textContent = "Password must contain at least one uppercase letter and one number.";
        password.classList.add("invalid");
        valid = false;
    }

    return valid;
}

// Confirm Password Validation
function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword");
    const error = document.getElementById("confirmPasswordError");
    let valid = true;

    if (confirmPassword.value !== password) {
        error.textContent = "Passwords do not match!";
        confirmPassword.classList.add("invalid");
        valid = false;
    }

    return valid;
}
