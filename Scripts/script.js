const forms = document.getElementsByClassName('forms');
const username = document.getElementsByClassName('username');
const email = document.getElementsByClassName('email');
const password = document.getElementsByClassName('password');
const passwordConfirmation = document.getElementsByClassName('password-confirmation');

forms.addEventListener('submit', (e) => {
    e.preventDefault();
})
function checkInput(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passworConfirmationdValue = passwordConfirmation.value;

    if(usernameValue === ""){
        setErrorFor(username, 'O nome de usuário é obrigatório.');
    }

}

    function setErrorFor(input, message){
        const formsControl = input.parentElement;
        const small = formsControl.querySelector('small')

        // Adicionar a menssagem de error
        small.innerText = message;

        //Adicionar a classe de error
        formsControl.className = "forms-control error";
    }

    function setSuccessFor(input){
        const formsControl = input.parentElement;

        // Adicionar a classe do sucesso
        formsControl.className = "forms-control success";
    }


