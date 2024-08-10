const emailInput = document.getElementById("email-field");
const passwordInput = document.getElementById("password-field");

document.getElementById("login").addEventListener('click', function () {
    const email = emailInput.value;
    const password = passwordInput.value;
    if (email === "test@afsar.com" && password === "test") {
        window.location.href = "bank.html";
    } else {
       alert("Invalid email or password");
        // onclick="my_modal_1.showModal()";
    }
})

