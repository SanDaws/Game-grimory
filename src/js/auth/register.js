const form= document.querySelector('form')
const nick = form.querySelector('#nickname')
const mail = form.querySelector('#email')
const pass= form.querySelector('#password')
const confPass= form.querySelector('#confirmPassword')


const URL= 'http://localhost:3000/'

function validePass(pass,copypass) {
    if (pass.value==copypass.value) {
        return true
        
    }
    return false
    
}
async function validemail(email) {
    const response = await fetch(`${URL}/user?email=${email.value}`)
    const emails = await response.json()

    if (emails.length === 0) {
        return true

    } else {
        return false
    }

}
async function validatenick(nick) {
    const response = await fetch(`${URL}/user?nick=${nick.value}`)
    const nicks= await response.json()
    if (nicks.length=== 0) {
        return true
    }else{
        return false
    }
    
}

function newUser(nick,email,pass) {
    const usersInfo={
        nick:nick.value,
        password:pass.value,
        email:email.value
    }
    return usersInfo
}

async function sendUser(user) {
    await fetch(`${URL}/user`,{
        method: 'POST',
        headers:{
            'content-type':"aplication/json"
        },
        body: JSON.stringify(user)
    })
    
}
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const resulNick= validatenick(nick.value)
    const resulMail= validemail(mail.value)
    const resulPass= validePass(pass.value)
    if (resulMail&& resulNick && resulPass) {

        const user=newUser(nick.value,mail.value,pass.value)
        sendUser(user)
    }
})