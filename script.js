document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let message = document.getElementById("formMessage");

        if (!/^[a-zA-Z\s]+$/.test(name)) {
            message.textContent = "Invalid name: Only letters and spaces allowed.";
            message.style.color = "red";
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            message.textContent = "Invalid email format.";
            message.style.color = "red";
            return;
        }

        if (password.length < 6) {
            message.textContent = "Password must be at least 6 characters.";
            message.style.color = "red";
            return;
        }

        message.textContent = "Registration successful!";
        message.style.color = "green";

        form.reset(); // Clear form fields after successful validation
    });
});
