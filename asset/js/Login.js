const showErrorStyles = function (container, inputBox , spanBox) {
      container.classList.add("error");
      inputBox.classList.add("error");
      spanBox.classList.add("error") ; 
  }
  
  const removeErrorStyles = function (container, inputBox , spanBox) {
      container.classList.remove("error");
      inputBox.classList.remove("error");
      spanBox.classList.remove("error") ; 
      
  }

  const usernameValidate = () => {
      const usernameContainer = document.querySelector(".sign-in_user");
      const usernameInputBox = document.querySelector("#user_login");
      const usernameMessage = document.querySelector(".user_login_err");
      let username = usernameInputBox.value; 
  
      //Xóa khoảng trắng 
      username = username.replaceAll(" ", "");
  
      if (username === "") {
          showErrorStyles(usernameContainer, usernameInputBox , usernameMessage);
          usernameMessage.innerHTML = "Hãy điền tên tài khoản";
      }
      else {
          removeErrorStyles(usernameContainer, usernameInputBox , usernameMessage);
          usernameMessage.innerHTML = ""; 
      }
  }
  const passwordValidate = () => {
      const passwordContainer = document.querySelector(".sign-in_password");
      const passwordInputBox = document.querySelector("#password_login");
      const passwordMessage = document.querySelector(".pass_login_err");
      let regex = /(?=.*[^A-Z])(?=.*[@$!%*?&])/;
      const password = passwordInputBox.value;
      let regexUpper = /(?=.*[A-Z])/; 
  
      if (password === "") {
          showErrorStyles(passwordContainer, passwordInputBox , passwordMessage);
          passwordMessage.innerHTML = "Hãy điền password";
      }
      // else if (password.length <= 5) {
      //    showErrorStyles(passwordContainer, passwordInputBox , passwordMessage);
      //    passwordMessage.innerHTML = "Mật khẩu phải lớn hơn 5 ký tự ";
      // }
  
    //   else if (regex.test(password) == false) {
    //       console.log(password); 
    //       showErrorStyles(passwordContainer, passwordInputBox , passwordMessage);
    //       passwordMessage.innerHTML = "Mật khẩu phải có 1 ký tự đặc biệt và 1 chữ hoa ";
    //   }
  
      // else if (regexUpper.test(password) == false) { 
      //     for (let i = 0; i < password.length - 1; i++) {
      //         if (password[0] != regexUpper.test(password)) {
      //             console.log(password);
      //             showErrorStyles(passwordContainer, passwordInputBox, passwordMessage);
      //             passwordMessage.innerHTML = "Chữ cái đầu tiên phải viết Hoa";
      //         }
      //         }
      //     }      
      else {
          removeErrorStyles(passwordContainer, passwordInputBox , passwordMessage);
          passwordMessage.innerHTML = "";
      }
  }
  const addEvent = (() => {
      const inputBoxes = document.querySelectorAll("[class*='_login']");
      const submitButton = document.querySelector(".btn_login-submit");
  
      inputBoxes[0].addEventListener("blur", function () {
          usernameValidate();
      });
      inputBoxes[1].addEventListener("blur", function (){
          passwordValidate();
      });
  
      submitButton.addEventListener("click", e => {
          usernameValidate();
          // emailValidate();
          passwordValidate();
  
          const errorMessage = document.querySelector("input.error");
          if (errorMessage) {
              e.preventDefault();
          }
      });
  })();