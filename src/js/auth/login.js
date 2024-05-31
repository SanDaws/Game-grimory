//our server endpoint
const link = 'http://localhost:3000/'
//form sections 

const form = document.querySelector('form')
const userEmail = form.querySelector('#email')
const userPass = form.querySelector('#password')

async function validate(email, password) {
    const requestRespose = await fetch(`${link}user?email=${email}`)
    const datas = await requestRespose.json()

    if (datas[0]['password'] === password) {
        return datas[0]
    } else {
        return false
    }



}


form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const valdata = await validate(userEmail.value, userPass.value)


    if (valdata) {

        const jason = JSON.parse(JSON.stringify(valdata))

        localStorage.setItem('usertoken', jason.id)
        window.location.href='/'
    } else {
        alert('you shall no pass')
    }


})



