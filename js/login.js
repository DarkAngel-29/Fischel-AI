const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const toggleForm = document.getElementById("toggleForm");
const toggleText = document.getElementById("toggleText");
const formSubtitle = document.getElementById("formSubtitle");

let isLogin = true;

toggleForm.addEventListener("click", (e) => {
    e.preventDefault();
    isLogin = !isLogin;

    loginForm.style.display = isLogin ? "block" : "none";
    registerForm.style.display = isLogin ? "none" : "block";

    toggleText.textContent = isLogin ? "New user?" : "Already have an account?";
    toggleForm.textContent = isLogin ? "Register" : "Login";
    formSubtitle.textContent = isLogin ? "Login to continue" : "Create a new account";
});

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("registerUsername").value.trim();
    const password = document.getElementById("registerPassword").value.trim();
    const error = document.getElementById("registerError");

    if (username.length < 3 || password.length < 4) {
        error.textContent = "Username or password too short!";
        return;
    }

    localStorage.setItem("user", JSON.stringify({ username, password }));
    alert("Registration successful! Please login.");
    toggleForm.click();
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const error = document.getElementById("loginError");

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        error.textContent = "No user found. Please register first.";
        return;
    }

    if (username === storedUser.username && password === storedUser.password) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "main.html";
    } else {
        error.textContent = "Invalid username or password!";
    }
});
