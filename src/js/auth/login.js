//our server endpoint
const URL= 'http://localhost:3000/'
//form sections 
const fomr= document.querySelector('form')
const userEmail = form.querySelector('#email')
const userPass=form.querySelector('#password')

async function validateMail(email) {
    const requestRespose= await fetch(`${URL}user?email=${email}`)
    const mails= requestRespose.json()
    if (mails.lenght !=0) {
        return mails[0]
        
    }else{
        return false
    }
}
async function validatePass(password) {
    const requestRespose= await fetch(`${URL}user?email=${password}`)
    const password= requestRespose.json()
    if (password =! 0) {
        return password[0]
        
    }else{
        return false
    }

    
}
form.addEventListener('submit',async (event)=>{
    event.preventDefault()
    const valmail= await validateMail(userEmail.value)
    const valPass= await validatePass(userPass.value)

    
    if (valPass != false && valmail != false) {
        const jason= JSON.stringify(valmail)
        console.log(jason);

        localStorage.setItem('usertoken',jason)
        
    }else{
        alert('you shall no pass')
    }


})



