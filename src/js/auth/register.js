import { guardian } from "module";
guardian()
// const link = 'https://sqv986dd-3000.use2.devtunnels.ms/'
const link = 'http://localhost:3000/'


const form= document.querySelector('form')
const nick = form.querySelector('#nickname')
const mail = form.querySelector('#email')
const pass= form.querySelector('#password')
const confPass= form.querySelector('#confirmPassword')


function validePass(pass,copypass) {
    if (pass.value==copypass.value) {
        return true
    }
    return false
    
}

async function validemail(email) {
    const response = await fetch(`${link}user?email=${email.value}`)
    const emails = await response.json()

    if (emails.length === 0) {
        return true
    } else {
        return false
    }

}
async function validatenick(nick) {
    const response = await fetch(`${link}user?nick=${nick.value}`)
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

// {
//     "id": "f3bb",
//     "nick": "sandaws",
//     "password": "aligator33",
//     "email": "dawsgamer88@gmail.com"
//   }
async function sendUser(user) {
    await fetch(`${link}user`,{
        method: 'POST',
        headers:{
            'content-type':"aplication/json"
        },
        body: JSON.stringify(user)
    })
    
}

form.addEventListener('submit',async (event)=>{
    event.preventDefault()
    const resulNick= await validatenick(nick)
    const resulMail= await validemail(mail)
    const resulPass= validePass(pass,confPass)
    console.log(resulNick,resulMail,resulPass)
    if (resulMail && resulNick && resulPass) {
        
        const user=newUser(nick,mail,pass)
        await sendUser(user)
        window.location.href='/'
    }
    
})