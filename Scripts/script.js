const forms = document.getElementById("forms");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");


console.log(username)

forms.addEventListener("submit", (e) => {
    e.preventDefault();
  
    checkInput();
  });

function checkInput() {

    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(usernameValue === ""){
        setErrorFor(username, "nome de usuario é obrigatório");
    } else{
        setSuccessFor(username);
    }

    if(emailValue === ""){
        setErrorFor(email,'O email é obrigatório')
    } else if(!checkEmail(emailValue)){
        setErrorFor(email, "Por favor insira um email válido.");
    } else {
        setSuccessFor(email)
    }

    if(passwordValue === ""){
        setErrorFor(password,"A senha é obrigatória.");
    } else if(passwordValue.length < 7){
        setErrorFor(password, "A senha precisa ter mais de 7 caracteries.");
    } else{
        setSuccessFor(password)
    }

    if(passwordConfirmationValue ===""){
        setErrorFor(passwordConfirmation,"Esse campo é obrigatório.");

    } else if(passwordConfirmationValue != passwordValue){
        setErrorFor(passwordConfirmation,"As senhas não batem.");
    } else{
        setSuccessFor(passwordConfirmation)
    }

    const formsControl = forms.querySelectorAll('.form-control')
    
    const formsIsValid = [... formsControl].every(( formsControl) => {
        return (formsControl.className === "forms-control success");
    });
    if(formsIsValid){
        alert("O Formulário foi enviado");
    }

}

    function setSuccessFor(input){
        const formsControl = input.parentElement;

        // adc sucesso
        formsControl.className = "forms-control success"

    }
    function setErrorFor(input, message){
        const formsControl = input.parentElement;
        const small = formsControl.querySelector('small')

        // msg de erro
        small.innerText = message;
        //adc classe de erro
        formsControl.className = "forms-control error"

    }


    function checkEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        );
         }

