let eye = document.querySelector("#togglePassword");
let password = document.querySelector("#password");

eye.addEventListener("click", function () {

    let type = password.getAttribute("type");
    if (type === 'password') {
        type = 'text';
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    }
    else {
        type = 'password';
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }

    password.setAttribute('type', type);


})

document.getElementById("submitButton").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the form from submitting 


    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let termsChecked = document.getElementById("terms").checked;



    // Redirect to the dashboard page if the form is valid
    if (fullName && email && password && termsChecked) {
        window.location.href = "dashboard.html";
    } else {
        // Validation failed
        alert("Please fill in all the required fields and agree to the terms & conditions.");
    }
});
