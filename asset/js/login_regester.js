
let loginBox = document.querySelector("#login");
let registerBox = document.querySelector("#register");
let forgotBox = document.getElementById("forgot"); 

let login_title = document.getElementById("title_heading-login");
let register_title = document.getElementById("title_heading-register");
let forget_password = document.querySelector(".forget_password"); 
// Chuyển hướng
login_title.addEventListener("click", () => {
    loginBox.style.visibility = "visible";
    forgotBox.style.visibility = "hidden";
    registerBox.style.visibility = "hidden";

    login_title.style.backgroundColor = "#bb2f0f";
    register_title.style.backgroundColor = "#f54f29";
})

register_title.addEventListener("click", () => {
    loginBox.style.visibility = "hidden";
    forgotBox.style.visibility = "hidden";
    registerBox.style.visibility = "visible";

    register_title.style.backgroundColor = "#bb2f0f";
    login_title.style.backgroundColor = "#f54f29";
})

forget_password.addEventListener("click", () => {
    forgotBox.style.visibility = "visible";
    loginBox.style.visibility = "hidden";
    registerBox.style.visibility = "hidden";

    login_title.style.backgroundColor = "#f54f29";
    register_title.style.backgroundColor = "#f54f29";
})
