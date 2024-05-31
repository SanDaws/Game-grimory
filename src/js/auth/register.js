const form= document.querySelector('form')
const name = form.querySelector('#nickname')
const mail = form.querySelector('#email')
const pass= form.querySelector('#password')
const confPass= form.querySelector('#confirmPassword')

function validePass(pass,copypass) {
    if (pass.value==copypass.value) {
        return true
        
    }
    return false
    
}