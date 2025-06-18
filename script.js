// page loader
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Simulate loading time
    setTimeout(() => {
        loader.style.opacity = "0"; // Smooth transition
        setTimeout(() => {
            loader.style.display = "none";
            content.style.display = "block";
        }, 500); // Give time for opacity transition
    }, 3000); // Adjust loading time if needed
});

// Password
const passwordinput = document.getElementById("password");
const togglebtn = document.getElementById("togglebtn");
const icon = togglebtn.querySelector("i")

togglebtn.addEventListener("click", function() {
    if (passwordinput.type === "password") {
        passwordinput.type = "text";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
    } else {
        passwordinput.type = "password";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
    }
})

//animation
// JavaScript to detect scrolling and trigger the effect
window.addEventListener('scroll', function() {
    const floater = document.getElementById('floater');
    const scrollPosition = window.scrollY;

    // Trigger the effect after scrolling 100px
    if (scrollPosition > 100) {
        floater.classList.add('float-up');
    } else {
        floater.classList.remove('float-up');
    }
});

// Remember Me
// window.onload = function () {
//     const savedEmail = localStorage.getItem("savedEmail");
//     const savedPassword = localStorage.getItem("savedPassword");
//     const remember = localStorage.getItem("rememberMe");
  
//     if (remember === "true") {
//       document.getElementById("username").value = savedEmail || '';
//       document.getElementById("password").value = savedPassword || '';
//       document.getElementById("remember-Check").checked = true;
//     } else {
//       document.getElementById("remember-Check").checked = false;
//     }
// };

// document.getElementById("loginForm").addEventListener("submit", function (e) {
// e.preventDefault();

//     const email = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
//     const remember = document.getElementById("remember-Check").checked;

//     if (remember) {
//       localStorage.setItem("savedEmail", email);
//       localStorage.setItem("savedPassword", password);
//       localStorage.setItem("rememberMe", true);
//     } else {
//       localStorage.removeItem("savedEmail");
//       localStorage.removeItem("savedPassword");
//       localStorage.setItem("rememberMe", false);
//     }
// });


