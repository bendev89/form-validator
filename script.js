const form = document.getElementById('form-container');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('submitted');
    isRequired([username, email, password, password2]);
    minMaxlength(username, 3, 15);
    minMaxlength(password, 6, 20);
    verifyEmail(email);
    passwordMatch(password, password2);
});


function isRequired(inputArray) {
    inputArray.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${input.id} requis`)
        } else showSuccess(input)
    });
}

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add('error');
    const small = formGroup.querySelector('small');
    small.innerText = message;
    
}
function showSuccess(input ) {
    const formGroup = input.parentElement;
    formGroup.classList.add('success');
}
function minMaxlength(input, min, max) {

    if (input.value.length < min) {
        showError(input, `minimum ${min} caracteres`)
        
    } else if (input.value.length > max) {
        showError(input, `maximum ${max} caracteres`)
    } else showSuccess(input)
    
}
function verifyEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email non valide');
    }
  }
 function passwordMatch(input1, input2) {
     if (input1.value !== input2.value) {
        showError(input2, 'Les mots de passe doivent etre identiques');
     }
 }