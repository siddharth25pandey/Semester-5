function validateEmail() {
    let email = document.getElementById("email").value;
    return isValidEmail(email)
}
function isValidEmail(email){
    let valid = email.includes('@');
    if(!valid){
        alert('invalid email')
        console.log('invalid email')
    }
    return valid;
}