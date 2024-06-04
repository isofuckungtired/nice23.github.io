document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("login-modal");
    const loginLink = document.getElementById("login-link");
    const closeButton = document.querySelector(".close-button");
    
    const registerModal = document.getElementById("register-modal");
    const registerLink = document.getElementById("register-link");
    const closeRegisterButton = document.querySelector(".close-register-button");

    loginLink.onclick = function() {
        modal.style.display = "block";
    };

    closeButton.onclick = function() {
        modal.style.display = "none";
    };

    registerLink.onclick = function() {
        modal.style.display = "none";
        registerModal.style.display = "block";
    };

    closeRegisterButton.onclick = function() {
        registerModal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        if (event.target == registerModal) {
            registerModal.style.display = "none";
        }
    };
});
