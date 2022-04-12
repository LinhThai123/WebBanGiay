const showErrorStyle =  (container, inputBox , spanBox) => {
    container.classList.add("error");
    inputBox.classList.add("error");
    spanBox.classList.add("error");
    container.classList.remove("allow");
    inputBox.classList.remove("allow");
}

const removeErrorStyle =  (container, inputBox , spanBox) => {
    container.classList.remove("error");
    inputBox.classList.remove("error");
    spanBox.classList.remove("error");
    container.classList.add("allow");
    inputBox.classList.add("allow");
}

const usernameValidating = () => {
    const usernameContainer = document.querySelector(".sign-up_user");
    const usernameInputBox = document.querySelector("#user_register");
    const usernameMessage = document.querySelector(".user_register_err");

    let username = usernameInputBox.value;

    // Xóa khoảng trắng 
    // username = username.replaceAll(" ", "");

    if (username === "") {
        showErrorStyle(usernameContainer, usernameInputBox , usernameMessage);
        usernameMessage.innerHTML = "Hãy điền tên tài khoản";
    }
    else {
        removeErrorStyle(usernameContainer, usernameInputBox , usernameMessage);
        usernameMessage.innerHTML = "";
    }
}
const emailValidating = () => {
    const emailContainer = document.querySelector(".sign-up_email");
    const emailInputBox = document.querySelector("#email_register");
    const emailMessage = document.querySelector(".email_register_err");
    let regexEmail = /^\w+@[a-zA-Z]{3,}\.com$/i; 
    let email = emailInputBox.value;

    if (email === "") {
        showErrorStyle(emailContainer, emailInputBox , emailMessage);
        emailMessage.innerHTML = "Hãy điền email";
    }
    // else if (regexEmail.test(email) == false) {
    //     showErrorStyle(emailContainer, emailInputBox , emailMessage);
    //     emailMessage.innerHTML = "email không đúng định dạng"; 
    // }
    else {
        removeErrorStyle(emailContainer, emailInputBox , emailMessage);
        emailMessage.innerHTML = "";
    }
}
const phoneValidating = () => {
   const phoneContainer = document.querySelector(".sign-up_phone");
   const phoneInputBox = document.querySelector("#sdt_register");
   const phoneMessage = document.querySelector(".phone_register_err");

    const phone = phoneInputBox.value;
    let regexPhone = /(?=.*[0-9].*[0-9])/
   if (phone === "") {
       showErrorStyles(phoneContainer, phoneInputBox, phoneMessage);
       phoneMessage.innerHTML = "Hãy điền số điện thoại ";
   }
//    else if (regexPhone.test(phone) == false) {
//        showErrorStyle(phoneContainer, phoneInputBox, phoneMessage); 
//        phoneMessage.innerHTML = "Phải nhập số "; 
//    }
//    else if (phone.length < 10 || phone.length > 12) {
//     showErrorStyle(phoneContainer, phoneInputBox, phoneMessage); 
//     phoneMessage.innerHTML = "Phải nhập số lơn hơn 10 và bé hơn 12";
//        }
   else {
       removeErrorStyles(phoneContainer, phoneInputBox, phoneMessage);
       console.log(phone)
       phoneMessage.innerHTML = ""; 
   }
}
const passwordValidating = () => {
    const passwordContainer = document.querySelector(".sign-up_password");
    const passwordInputBox = document.querySelector("#password_register");
    const passwordMessage = document.querySelector(".pass_register_err");

    let password = passwordInputBox.value;

    if (password === "") {
        showErrorStyle(passwordContainer, passwordInputBox , passwordMessage);
        passwordMessage.innerHTML = "Hãy điền mật khẩu";
    }
    else {
        removeErrorStyle(passwordContainer, passwordInputBox , passwordMessage);
        passwordMessage.innerHTML = "";
    }
}

const repasswordValidating = () => {
    const repassContainer = document.querySelector(".sign-up_repass");
    const repassInputBox = document.querySelector("#re_password_register");
    const repassMessage = document.querySelector(".re_pass_register_err");
    const password = document.querySelector("#password_register").value;
    const repass = repassInputBox.value;

    if (repass === "") {
        showErrorStyle(repassContainer, repassInputBox , repassMessage);
        repassMessage.innerHTML = "Hãy xác nhận  mật khẩu";
    }
    else if (repass !== password) {
        showErrorStyle(repassContainer, repassInputBox, repassMessage);
        repassMessage.innerHTML = "Mật khẩu xác nhận không chính xác ";
    }
    else {
        removeErrorStyle(repassContainer, repassInputBox , repassMessage);
        repassMessage.innerHTML = "";
    }
}

const AddEventRegister = (() => {
    const inputBoxes = document.querySelectorAll("[class*='_register']");
    const submitButton = document.querySelector(".btn_register-submit");

    inputBoxes[0].addEventListener("blur", function () {
        usernameValidating();
    });
    inputBoxes[1].addEventListener("blur", function () {
        emailValidating();
    });
    inputBoxes[2].addEventListener("blur", function () {
       phoneValidating();
    });
    inputBoxes[3].addEventListener("blur", function () {
        passwordValidating();
    });
    inputBoxes[4].addEventListener("blur", function () {
        repasswordValidating();
    });

    submitButton.addEventListener("click", event => {
        usernameValidating();
        emailValidating();
        phoneValidating();
        passwordValidating();
        repasswordValidating();
        const errorMessage = document.querySelector("input.error");
        if (errorMessage) {
            event.preventDefault();
        }
    });
})();